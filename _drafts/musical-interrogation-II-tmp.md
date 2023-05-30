---
layout: post
title:  "Musical Interrogation - Part II"
tags: Opinion Music ML 
comments: true
---

In this second part of the series, I present a first version of the system that enables a sort of *musical interrogation*.

## Setup

Inspired by the concept of live-programming, I wanted to build a system for which one can interrogate a machine learning model that generates melodies in real-time, i.e., to communicate with the model similar to the communication with a chatbot but in a musical language.
Keep in mind that this is a very first thus very simple attempt.

I tried to combine sound generation via ``SuperCollider``, playing the piano via a MIDI-keyboard, and using a machine learning model to generate melodies interactively.

A pianist plays some notes on the keyboard.
``SuperCollider`` records it and trys to capture the sound and dynamics communicated via the MIDI-input.
In the second step, the recording is sent (via open sound control messages (OSC)) to a machine learning model (a LSTM).
The trained model predicts some continuation and sends it back to ``SuperCollider`` which plays the result.
The pianists can then continue this process.
This back and forth *artificial communication* between human and machine can go on and on.

### The Model

I decided to use the [code](https://github.com/musikalkemist/generating-melodies-with-rnn-lstm/tree/master/9%20-%20Converting%20Generated%20Melodies%20to%20MIDI) provided by *Valerio Velardo* who has a great [YouTube-channel](https://www.youtube.com/@ValerioVelardoTheSoundofAI) where he offers excellent tutorials about music and AI.

Apart from the input layer the model consists of one ``LSTM``-layer, one ``Dropout``-layer to counteract overfitting and one (fully-connected) ``Dense``-layer to generate the "probabilities" of the next symbol with respect to a sequence of symbols.

```python
input = tf.keras.layers.Input(shape=(None, output_units))
x = tf.keras.layers.LSTM(256)(input)
x = tf.keras.layers.Dropout(0.2)(x)
output = tf.keras.layers.Dense(38, activation='softmax')(x)
model = tf.keras.Model(input, output)
```

In my case, there are 38 different symbols.
This number is equal to the number of different notes containted in the training data plus 3.
We have to add 3 because we need an additional symbol for the rest, hold and the end of a piece.
Furthermore, all pieces are transposed into C major in 4/4 where 1/4 is the smalles duration of any note.
If a piece does not fulfill theses conditions, it is not used during training.
The maximum sequence length used during training is 64 (quater notes).

The model is only capable of learning monophonic melodies.

### Dataset & Training

Similar to *Valerio Velardo*, I trained the model with songs from the [Folksong Database](esac-data.org), specifically I used the German folksongs in the ``deutschl/erk`` directory which amounts to round about 1700 short monophonic pieces.

I was able to train the model on the GPU of my laptop.
It took about 2 hours.

## Sound Desgin

I use additive synthesis combining seven harmonics with seven distinct envelopes.
The envelopes tend to lower the amplitude of high frequencies faster compared to harmonics with low frequencies.
This effect is natural since higher frequencies (faster oscialation) require more energy thus die out faster.

```supercollider
(
SynthDef(\sine_sum, {
    var sig, harmonics, amps, phases;

    harmonics = [1, 3, 5, 6, 7, 8, 9];
    phases = [0, 0, 0, 0.5, 0.25, 0, 0] * 2*pi;
    amps = [0.5, 0.3, 0.2, 0.2, 0.1, 0.1, 0.1].normalizeSum();

    sig = harmonics.collect({ arg k, index;
        var env = EnvGen.ar(Env.asr(
            attackTime: \attk.kr(0.01) * Rand(0.8,1.2),
            releaseTime: \rel.kr(3.0) * Rand(0.9,1.1) 
                * k.linexp(1, 9, 1.0, 0.7),
            curve: \curve.kr(-4)), gate: \gate.kr(1)
        );

        var vibrato = LFNoise1.ar(\detuneFreq.kr(5)!2)
            .bipolar(\detune.kr(0.1)).midiratio;
        var harmonicFreq = \freq.kr(220) * vibrato * k;
        amps[index] * SinOsc.ar(harmonicFreq, phases[index])
             / k * env.pow(1+((k-1)/3));
    }).sum;

    sig = LPF.ar(sig, 4*\freq.kr(220));
    sig = sig * \amp.kr(0.5);
    DetectSilence.ar(sig, doneAction: Done.freeSelf);
    Out.ar(0, sig);
}).add;
)
```

I introduce a vibrato effect by slightly modulating the frequencies randomly using a low frequency control (5 Hz).
I use independent random vibratos for each distinct frequency and each of the two stereo channels.
The amount of diviation from the center frequency can be controled via the ``\detune`` argument (measured in semitones).
In the end, a lowpass filter, reduces the harshness of the sound.

Let us play a simple pattern to get a feel of the sound of this synth.
Nothing special but it is decent.

```supercollider
(
Pbind(
    \instrument, \sine_sum,
    \scale, Scale.minor,
    \root, 2,
    \degree, Pwrand(
        [Pseq([1,3,5,3,6,1]), Pseq([1,4,3,2,7,1])], 
        [0.8, 0.2], 
        inf),
    \octave, 6,
    \rel, Pwhite(2, 4, inf),
    \detune, Pwhite(0.1, 0.3),
    \sustain, 0.2,
    \dur, Pn(Pgeom(2.0, 0.5, 5), inf),
).play
)
```

<audio controls>
  <source src="{% link /assets/audio/synth-sine-sum.mp3 %}" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

## Recording

For the recording I wrote a new ``SuperCollider`` class called [MIDIRecorder](https://github.com/BZoennchen/algorithmic-compositions/blob/main/sc/extensions/classes/MIDIRecorder.sc).

```supercollider
recorder = MIDIRecorder(
    name: \rec, 
    instrument: synth, 
    mono: true, 
    amp: 1.0);
```

It initializes two ``MIDIdef`` (MIDI response reference definition) to change its state whenever a ``noteOn`` or ``noteOff`` MIDI-event occurs.
The duration ``\sustain`` of a played note is the time period between consecutive ``noteOn`` and ``noteOff`` events of a specific MIDI-note.

Given an event ``e``, the time at which the next event starts is equal to ``e[\dur]``, i.e. ``e.dur``. 
While recording, the ``synth`` plays and if ``mono`` is ``true`` the recording as well as the playing is monophonic (no more than one note played at a time).
The recording can be played back, paused, resumed, and cleared.

The following [example]() uses the a button on my keyboard.
When I hit it, the val equal to ``127`` is sent to the callback function and the recording starts.
Hitting it again plays the recoding back and clears everything.

```supercollider
(
var synth, recorder;
synth = \default;
recorder = MIDIRecorder(\rec, synth, amp: 1.0);

MIDIdef.cc('record', {
    arg val;
    if(val == 127, {
        if(recorder.isRecording, {
            recorder.pause;
            "start playing: " ++ recorder.postln;
            recorder.play;
            "clear recording".postln;
            recorder.flush;
        }, {
            recorder.record;
            "recording ...".postln;
        });
    });
});
)
```

## OSC Communication

I wrote two ``SuperCollider`` functions to transform musical events into a sequence the machine learning model undestands and vice verca.
``eventToEncoding`` convert musical events into the input of my LSTM and
``encodingToEvents`` does the inverse operation.
Since the output of my LSTM looks like the input, I am able to glue both systems together.
The code is surly suboptimal but it gets the job done.

To estimate rests, I use a minimal threshold of 0.5 seconds, i.e. if the pause between two consecutive events is shorter, it will not be interpreted as a rest.

Instead of playing the recording like before, I send an OSC message containing the recoding to the model:

```supercollider
sendMelody.(eventToEncoding.(recorder.events));
```

``sendMelody`` looks like this:

```supercollider
melodyGenerator = NetAddr("localhost", 6449);
...
sendMelody = {
    arg seed;
    melodyGenerator.sendMsg('/rnn/input', seed);
};
```

When the model sends the answer back, I convert it into musical events and play them back.

However, there is one problem: I have to estimate the tempo at which the user plays the keyboard.
The model was trained assuming that the shortest duration (in beats) is a quater note, i.e. 0.25 beats.
Therefore, I assume the pianist also plays no note shorter than a quater note (and only multiple of a quater note).
While recording I look for the event with the shortest ``\sustain`` and assume that this is the actual length of a quater note in seconds.
``minDur`` is the value of the shortest sustain (maybe I should change its name).

```supercollider
OSCdef(
    \getMelody,
    {
        arg val; val.postln;
        tempo = TempoClock(0.25/minDur);
        Routine({
            events = encodingToEvents.(val);
            events.do({ |event, i|
                event.play;
                event.dur.wait;
            });
        }).play(tempo);
    },
    '/sc/input',
    recvPort: 6448
);
```

On the ``Python`` side of things, I just wait for OSC messages using the [pythonosc](https://pypi.org/project/python-osc/) package.
If a message comes in, I generate a melody (based on the given seed contained in the message) and send it back to ``SuperCollider``.

```python
def generate_melody(address: str, *args: List[Any]) -> None:
    # args[0] is the melody played by the pianist
    print(f"Adress {address} values: {args}")
    seed = ''.join(args[0])
    print(seed)
    melody = mg.generate_melody(
        seed, 
        OUTPUT_LEN, 
        SEQUENCE_LENGTH, 
        TEMPERATURE)
    print(melody)
    client.send_message("/sc/input", melody)
```

What is nice about this setup is that all parts can run on different machines in a network.
The model calculating the melody, the audio server that generates audio signals, and the device at which the pianist sits, can run on different machines in a network.
If we replace MIDI with OSC the sound source and the device connected with the keyboard can also be separated.

## Analysis by Example



## Code

+ [MIDIRecorder](https://github.com/BZoennchen/algorithmic-compositions/blob/main/sc/extensions/classes/MIDIRecorder.sc)
+ [MIDIRecorder example](https://github.com/BZoennchen/algorithmic-compositions/blob/main/sc/projects/recorder-demo.scd) 
+ [Communication script](https://github.com/BZoennchen/algorithmic-compositions/blob/main/sc/projects/musical-interrogation.scd)
+ [ML Model](https://github.com/BZoennchen/melody-rnn)

## References

{% bibliography --cited_in_order %}