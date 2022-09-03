---
layout: post
title: "Live Performance with Sonic Pi"
tags: Music Sonic-Pi
comments: true
---

In the past I did a 15 minute introduction for [Sonic Pi](https://sonic-pi.net/) for students at my University.
In the following text I want to give the same short introduction either for students to look the information up or for people interested in algorithmic composition.
The aim here is to show how easy it is to make a beat in Sonic Pi.
The implementation is inspired by [the beat grid](https://learningmusic.ableton.com/make-beats/make-beats.html).

## Building a Beat

First we define an array containing different drum-like samples.
These samples come with Sonic Pi but you can extend the sample library by your own samples.

```ruby
instruments = [
  :bd_haus, #1
  :sn_zome, #2
  :drum_cymbal_closed, #3
  :drum_cymbal_pedal,
  :drum_bass_soft,
  :drum_bass_hard
]
```

We build a four by four beat, i.e., one unit is ``0.25`` beat.
The beat is modelled by an array of length ``16``.

```ruby
beats1 = [
  1,0,1,0,
  2,0,0,0,
  1,0,0,0,
  2,1,0,0
]
```

The idea is to address a specific sample by a number between ``1`` and ``6``.
Zero means silence!
Therefore, ``beat1`` starts with the sample ``:bd_haus`` followed by silence followed by ``:bd_haus`` and so on.

To run the beat we define a ``live_loop`` which is a special thread of Sonic Pi.
The content of the thread can be updated dynamically, that is, the user can 

1. change the content, 
2. re-evaluate, 

and the ``live_loop`` will change accordingly.
In the loop/thread we iterate from ``i = 0 ... 15``.
For each iteration we play the beat according to ``beat1`` and sleep for ``0.25`` beat, since we want to have a 4 times 4 beat.

```ruby
live_loop :drummer1 do
  16.times do |i|
    sample instruments[beats1[i]-1] if beats1[i] != 0
    sleep 0.25
  end
end
```

## Building a Melody

To bring a little more dynamic into the piece, we introduce a randomly generated melody.
In algorithmic composition we have to find a balance between complete chaos and structure.
To much chaos will sound unpleasant while too much structure is boring.
Therefore, I shuffle a specific scale which gives us notes that fit together:

```ruby
melody = shuffle(scale(:e4, :minor))
```

To play the melody we need another ``live_loop``.
Furthermore, I use a simple sine wave for the melody.
Also note that we play the first and second harmonic as well such that the sound is a little more complex.
It is still very simple!

```ruby
use_synth :sine

live_loop :pianist do
  play melody.tick, amp: 0.4
  play melody.look-12, amp: 0.3
  play melody.look-24, amp: 0.2
  sleep 0.5
end
```

## Building another Beat

Finally, we add another beat and therefore another ``live_loop``:

```ruby
beats2 = [
  6,0,6,0,
  6,0,6,0,
  6,0,6,5,
  5,3,3,5
]

live_loop :drummer2 do
  16.times do |i|
    sample instruments[beats2[i]-1] if beats2[i] != 0
    sleep 0.25
  end
end
```

And we change the beat per minute to 98 which speeds up the whole piece:

```ruby
use_bpm 98
```

## Putting everything together

The complete code is given by the following listing:

```ruby
use_bpm 98

use_synth :sine

instruments = [
  :bd_haus, #1
  :sn_zome, #2
  :drum_cymbal_closed, #3
  :drum_cymbal_pedal,
  :drum_bass_soft,
  :drum_bass_hard
]

beats1 = [
  1,0,1,0,
  2,0,0,0,
  1,0,0,0,
  2,1,0,0
]

beats2 = [
  6,0,6,0,
  6,0,6,0,
  6,0,6,5,
  5,3,3,5
]

melody = shuffle(scale(:e4, :minor))

live_loop :pianist do
  play melody.tick, amp: 0.4
  play melody.look-12, amp: 0.3
  play melody.look-24, amp: 0.2
  sleep 0.5
end

live_loop :drummer1 do
  16.times do |i|
    sample instruments[beats1[i]-1] if beats1[i] != 0
    sleep 0.25
  end
end

live_loop :drummer2 do
  16.times do |i|
    sample instruments[beats2[i]-1] if beats2[i] != 0
    sleep 0.25
  end
end
```

## Performing Live

Of course this gets boring pretty fast but now we can start our live programming to change the sound over time.
For example we can start by one beat, after a while start the second and the melody.
Then we might want to change the melody, for example, the scale.
We can change the beats as well and introduce complete new elements.
Time to play ;)!