---
layout: post
title:  "Musical Interrogation IV - Transformer"
tags: Music ML Transformer
comments: true
---

This article is the continuation of the *[Musical Interrogation I - Intro]({% post_url 2023-04-02-musical-interrogation-I %})*, *[Part II - FNN]({% post_url 2023-05-31-musical-interrogation-II %})*, and *[Part III - LSTM]({% post_url 2023-11-19-musical-interrogation-III %})*.
It is recommended that you read the these articles first.
This time we use the most famous model architecture for generative purposes: the **Transformer** {% cite vaswani:2017 %}.

## The Transformer

The Transformer was introduced in 2017 by the Paper *Attention Is All You Need* {% cite vaswani:2017 %} basically replacing *recurrency* with *attention*.

### Attention in RNNs

Attention was introduced to recurrent neural networks (RNNs) in 2014 {% cite bahdanau:2014 %} to let the model learn the importance of (past) tokens for the current token based on the the previous token 

$$\mathbf{y}_{t-n}, \ldots \mathbf{y}_{t}$$ 

and the hidden state $\mathbf{h}_t$.
For each output a score (or energy) is computed.
This score measures how well each output is aligned with the RNNs previous hidden state $\mathbf{h}_t$.
Since the similarity between the outputs of the RNN and the hidden state is computed the dot product was proposed shortly after, i.e.,

$$e_{t,i} = \mathbf{h}_t^\top \mathbf{y}_{t-i} \quad \text{ for } i = 1, \ldots, n$$

and it was suggested to use an additional linear transformation on the output:

$$e_{t,i} = \mathbf{h}_t^\top (\mathbf{W} \mathbf{y}_{t-i}) \quad \text{ for } i = 1, \ldots, n.$$

The input for the RNN is not only $\mathbf{x}_t$ but also all the previous $n-1$ outputs and the last hidden state.
And for each of the $n$ inputs other than the hidden state, a score is computed.
All these scores are normalized by the softmax function giving us $n$ weights:

$$\alpha_{t,i} = \frac{\exp\left( e_{t,i} \right)}{\sum_{i'} \exp\left( e_{t, i'}\right)}$$

and we get a new hidden state:

$$\hat{\mathbf{h}}_t = \sum_i \alpha_{t,i} \mathbf{y}_i.$$

The weights determine how "strong" the information of the input will be utilized.
In case of a decoder this results in a quadratic complexity of $\mathcal{O}(n^2)$ because for each of the $n$ tokens we want to decode we have $n$ weights.

### Attention in Transformers



## References

{% bibliography --cited_in_order %}