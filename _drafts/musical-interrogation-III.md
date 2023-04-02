---
layout: post
title:  "Musical Interrogation - Part III"
tags: Opinion Music ML 
comments: true
---

#### Generation of Performances

All the above models could only learn a rather simplstic note sheet.
These techniques neglect timing and dynamics (changing tempo, micro rests, softness or velocity key presses) within a performance.
The following models learn a performance directly, i.e., without first generating a score.

[DeepMind](https://www.deepmind.com/) with their paper *This Time with Feeling: Learning Expressive Musical Performance* {% cite oore:2018 %} tried to change this flaw.
The explanation in their paper is refreshinglgy extensive.
They give insights in the musical aspects of their choices.
It is a great read.
Their LSTM consists of three layers of 512 cells each.
At each time step, the input of the RNN is a single one-hot 413-dimensional vector (128 note-on, 128 note-off, 125 time-shift, 32 velocity).
Interestingly, time-shift events move the time step forward by increments of 8 ms up to 1 second, i.e., the authors uses representation that is temporally non-uniform!
They need such a representation to be able to have different temporal resolutions such that the model is able to learn micro variations without an explosion in the input and output length.
It is a kind of compression.
Holds or rests can be skipped with a single event.
The authors also experimented with a pedal-on/off event.
There are inspired implementation on [GitHub](https://github.com/igor4149/Sonia) but I do not know jet how accurate they are.
However, with their technique the authors were only able to achive good results for pieces no longer than approximately 15 seconds (500 tokens).

Another LSTM is the [Performance RNN](https://github.com/magenta/magenta/tree/main/magenta/models/performance_rnn) {% cite simon:2017 %}.
It is  also developed as part of the Magenta project with a focus on polyphonic music with expressive timing and dynamics.
They use a similar input compared to {% cite oore:2018 %} and with respect to the code it seems to be a three layer LSTM network with 512 units in each layer.
It seems to be almost the same model, after all, DeepMind belongs to Google.

Another performance generator is the [Music Transformer](https://github.com/magenta/magenta/blob/main/magenta/models/score2perf/README.md) {% cite huang:2018 %}, again part of the Magenta project.
You can listen to the transformer [here](https://magenta.github.io/listen-to-transformer/#a1_83641.mid) and there is also an [interactive Colab notebook](https://colab.research.google.com/notebooks/magenta/piano_transformer/piano_transformer.ipynb) where you can play with the model.
The code is concealed via abstraction but [Ki-Chang Yang](https://github.com/jason9693/MusicTransformer-tensorflow2.0) re-implemented it without all the Magenta dependecies.
The main author, [Cheng-Zhi Anna Huang](https://czhuang.github.io/), is also involved in other very interesting projects such as helping with the [AI song contest](https://www.aisongcontest.com/) but I digress.
*Music Transformer* isn't an LSTM!
Instead it is a transformer that uses a **relative local attention mechanism** introduced in {% cite luong:2015 %} and {% cite shaw:2018 %} respectively.

Transformers benefit from their ability to directly access all events happened in the past (without going step by step back in time).
RNNs and their extensions (LSTMs, GRUs) have a limited time span in practice while transformers do not suffer from this shortcomings (if you have enough computation power and memory).
Basically every symbol/token pays different amount of attention to all the other symbols within the sequence.
Different to an RNN, the transformer requires an explicit position information since it has no implicit representation of time -- it looks at the whole sequence at once.

In musical composition and performance, relative timing is critically important.
Therefore, using relative instead of absolut positional information seems a good idea.
By using *relative positions*, the authors try to capture relative timing and optionally also pitch within a piece.
However, for relative positional information one requires $$L$$ relative positions for each token of an input sequence of length $$L$$.
This yield $$\mathcal{O}(L^2)$$ many relations which is a problem if sequences get longer!
Let's say you want to generate a minute-long fine grained song with 2000 tokens.
This would yield 4 Million realations!
The *Music Transformer* uses *local attention*, meaning a sequence is split into blocks and each block can only pay attention to itself and direct neigbhours.
They also use a smart implementation trick to reduce the space complexity (while the time complexity remains the same).
This is important to bring the computation to the GPUs.
Consequently, the authors were able to generate thousands of steps, four times the length modeled achieved by {% cite oore:2018 %}.
According to the results in {% cite huang:2018 %}, *relative attention* achieves a better quality compared to *vanilla transformers* and other architectures.
A single GPU with 16 GB is able to handle a maximal training length of 3500 tokens.

# TODO:

{% cite huang:2020 %}

[MuseNet](https://openai.com/research/musenet) (from OpenAI) which uses the same technology as GPT-2, i.e. a large-scale transformer.
72-layer network with 24 attention heads—with full attention over a context of 4096 tokens.

## References

{% bibliography --cited_in_order %}