---
layout: post
title:  "Musical Interrogation IV - Transformer"
tags: Music ML Transformer
comments: true
series: "Musical Interrogation"
---

>Recurrent models trained in practice are effectively feed-forward.
>This could happen either because truncated backpropagation through time cannot learn patterns significantly longer than k steps, or, more provocatively, because models trainable by gradient descent cannot have long-term memory. -- John Miller

This time in the series we use the most famous model architecture for generative purposes: the **transformer** {% cite vaswani:2017 %}.
Transformers were initially targeted at natural language processing (NLP) problems, where the network input is a series of high-dimensional embeddings representing words or word fragments.
It was introduced in 2017 by the authors of *Attention Is All You Need* {% cite vaswani:2017 %} to basically replace *recurrency* with *attention*.

One of the problems with RNNs is that they can forget information that is further back in the sequence.
While more sophisticated architecture such as LSTMs {% cite hochreiter:1997 %} and *gated recurrent units* (GRUs) {% cite chung2014 %} partially addressed this problem, but they still struggle with long term dependecies.
The idea that intermediate representations in the RNN should be exploited to produce the output led to the *attention mechanism* {% cite bahdanau:2014 %} and, in the end, to the transformer architecture {% cite vaswani:2017 %}.
The transformer avoids the problem of vanishing or exploding gradients by avoiding recurrency that is by utilizing the whole sequence in parallel.

Today, all successful large language model (LLMs) utilize the transformer architecture.
It brought us ChatGPT, LLama and BERT.
To this day, there is no clear explanation why transformers are so effective.
It is well-known how their components work and what mathematical operations are performed, but it is very hard to interpret the seemingly emerging power when all the small parts work together.
One source of their effectiveness is that they relate tokens to other tokens more directly (without a hidden state which washes away the information).

Their parallel computation make them especially suitable for the exploitation of multicore processors such as GPUs.
However, looking at the whole sequence at once comes at a cost: computation and memory complexity!
Therefore, to train transformers you require GPUs with a lot of memory which is concerning for artists who want to utilize transformers independently from proprietary cloud services.

Original transformers where introduced for natural language processing.
However, since language datasets share some of the characteristics of musical notations, transformers achieve good results in learning the structure of symbolic pieces.
In music as well as in language the number of input variables can be very large, and the statistics are similar at every position; it's not sensible to re-learn the meaning of the word *dog* at every possible position in a body of text.
Language datasets and music datasets have the complication that their sequences very in length.

However, we also have to remember that there are also differences between the two domains.
The alphabet of musical notations has more than 26 symbols and there is a strong relation between certain symbols.
For example, there is a strong relation between the C's of each octave or a whole and half note in the same pitch class.
Furthermore, shifting all the letters in the text changes the meaning of the text dramatically while in the case of music this is not the case.

## Attention in RNNs

What is the idea behind the attention mechanism?
Attention was introduced to bidirectional recurrent neural networks (RNNs) in 2014 {% cite bahdanau:2014 %} for language translation, that is, for an *encoder-decoder architecture*.
The idea is that the decoder emulates a search through a source sentence during decoding a translation.
The attention mechanism enables the model to learn the importance of (previous) $$n^{\text{th}}$$ tokens 

$$\mathbf{x}_{0}, \ldots \mathbf{x}_{n-1},$$ 

in relation to the $$(n+1)^\text{th}$$ token, i.e. $$\mathbf{x}_n$$.
We want to predict the output $$\mathbf{y}_{n}$$ and in our autoregessive case this is equal to the input $$\mathbf{x}_{n}$$
As before, the RNN also has access to the hidden state $$\mathbf{h}_{n}.$$

For example, to predict the word "banana" in the sentence: "I eat a lot of fruit, therefore, I like ____", the model should learn that "fruit" is somehow important for the prediction of the missing word.
For each output of the RNN a score (or energy) is computed.
This score measures how well each output is aligned with the RNNs previous hidden state $$\mathbf{h}_{n}$$.
Since the similarity between the outputs of the RNN and the hidden state is computed, the dot product was proposed shortly after, i.e.,

$$e_{n,i} = \mathbf{h}_{n}^\top \mathbf{y}_{i} \quad \text{ for } i = 0, \ldots, n-1$$

and it was suggested to use an additional linear transformation on the output:

$$e_{n,i} = \mathbf{h}_{n}^\top (\mathbf{W} \mathbf{y}_{i}) \quad \text{ for } i = 0, \ldots, n-1,$$

where $$\mathbf{W}$$ is learned.

The input for the RNN is not only $$\mathbf{x}_{n}$$ but also all the previous $$n-1$$ outputs and the last hidden state.
And for each of the $$n$$ inputs, other than the hidden state, a score is computed.
All these scores are normalized by the softmax function giving us $$n$$ weights:

$$\alpha_{n,i} = \frac{\exp\left( e_{n,i} \right)}{\sum\limits_{j=0}^{n-1} \exp\left( e_{n, j}\right)}.$$

Then the hidden state is computed by a weighted sum:

$$\hat{\mathbf{h}}_t = \sum_i \alpha_{t,i} \mathbf{y}_i.$$

The weights determine how "strong" the information of the input will be utilized, i.e., how much attention is spent on each previous output of the model.

<div><img style="display:block; margin-left:auto; margin-right:auto; width:90%;" src="{% link /assets/images/rnn-attention.png %}" alt="RNN with attention">
<div style="display: table;margin: 0 auto;">Figure 1: RNN with self-attention.</div>
</div>
<br>

In case of a decoder, this results in a quadratic complexity of $$\mathcal{O}(n^2)$$ because for each of the $$n$$ tokens we want to decode, we have $$n$$ weights.

## The Transformer Architecture

The original transformer was introduced for the task of machine translation thus it was an encoder-decoder architecture.
In Fig. 2 you see a slightly modified version where the addition (residual connections) and the layer norm are in front of the attention layer.

<div><img style="display:block; margin-left:auto; margin-right:auto; width:90%;" src="{% link /assets/images/transformer.png %}" alt="RNN with attention">
<div style="display: table;margin: 0 auto;">Figure 2: The slightly modified transformer.</div>
</div>
<br>

Let's consider a scenario in which we have an English sentence that we want to translate into French. 
In this process, the encoder plays a crucial role by transforming the English sentence into a highly compressed and information-rich representation.

Subsequently, the decoder comes into play, generating the French translation word by word. 
It relies on the previously computed French words to predict and produce the next one. 
It's important to note that the input provided to the decoder is a partial translation, essentially a shifted version of what it is currently working on. 
This is because the decoder should lack the ability to see into the future; it only has access to the portion of the translation it has computed up to that point---otherwise it would cheat while training which would hurt the learning process.

To address this limitation, the decoder employs a masked version of the multi-head attention layer. 
This mechanism ensures that the decoder focuses on the relevant information without peeking ahead.

Furthermore, the utilization of residual connections and layer normalization over a mini-batch (layer norm) serves as a valuable tool to combat the issue of vanishing gradients in deep neural networks, ensuring the efficient training and optimization of the translation model.

In our case we do not acutally want to translate a sentence but we want to generate musical notes from a sequence of given notes.
Therfore, we have no encoded information and there is no encoding envolved.
We only need the decoder part.
Furthermore, I only use one (masked) multi-head attention layer in each block.

<div><img style="display:block; margin-left:auto; margin-right:auto; width:40%;" src="{% link /assets/images/decoder.png %}" alt="Decoder-only transformer">
<div style="display: table;margin: 0 auto;">Figure 3: Our decoder-only transformer.</div>
</div>
<br>

Ok, but how does this really work?
What is going on here?
Well, the key to understand transformers is to understand the self-attention mechanism which I try to explain below.

## Self-Attention

The idea of the transformer is to just rely on (self-)attention thus remove recurrency.
This means that the model "sees" $$n$$ tokens to generate the $$(n+1)^\text{th}$$ token.
Simple RNNs for predicting the next tokens only see the previous token and the hidden state which represents all the tokens before.
But, as I discussed in previous articles, the information of the hidden state gets washed away over time and without attention there seem to be little control over the importance of certain tokens of the sequence.

The fundamental operation of the transformer, i.e. the attention mechanism, is implemented in its ``Head``.
Let $$\mathbf{x}_0, \ldots, \mathbf{x}_{n-1}$$ the $$n$$ tokens of a sequence.
A standard neural network layer $$f(\mathbf{x})$$, takes a $$D \times 1$$ input $$f(\mathbf{x})$$ and applies a linear transformation followed by an activation function like a $$\text{ReLU}$$:

$$f(\mathbf{x}) = \text{ReLU}\left( \mathbf{W}\mathbf{x} + \mathbf{b }\right),$$

where $$\mathbf{b}$$ contains the biases, and $$\mathbf{W}$$ contains the weights.

A self-attention $$\mathbf{sa}(\cdot)$$ block takes all the $$n$$ inputs, each of dimension $$D \times 1$$, and returns $$n$$ output vectors of the same size.
In our case each input represents a musical note or event.
First, a set of *values* are computed for each input:

$$\mathbf{v}_i = \mathbf{b}_v + \mathbf{W}_v \mathbf{x}_i,$$

where $$\mathbf{b}_v \in \mathbb{R}^D \text{ and } \mathbf{W}_v \in \mathbb{R}^{D \times D}$$ represent biases and weights, respectively (**for all inputs**). 
The the $$j^\text{th}$$ output $$\mathbf{sa}_j(\mathbf{x}_0, \ldots, \mathbf{x}_{n-1})$$ is a weighted sum of all the values $$\mathbf{v}_i, i = 0, \ldots n-1$$:

$$\mathbf{sa}_j(\mathbf{x}_0, \ldots, \mathbf{x}_{n-1}) = \sum_{i=0}^{n-1} \alpha(\mathbf{x}_i, \mathbf{x}_j) \mathbf{v}_i.$$

The scalar weight $$\alpha(\mathbf{x}_i, \mathbf{x}_j)$$ is the *attention* that the $$j^\text{th}$$ output pays to the input $$\mathbf{x}_i$$.
The $$n$$ weights $$\alpha(\cdot, \mathbf{x}_j)$$ are non-negative and sum to one.
Hence, self-attention can be thought of as *routing* the values in different proportions to create each output.

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:50%;" src="{% link /assets/images/routing.png %}" alt="Routing principle">
<div style="display: table;margin: 0 auto;">Figure 2: Routing principle.</div>
</div>
<br>

To compute the attention, we apply two more linear transformations to the inputs:

$$
\begin{aligned}
\mathbf{q}_j &= \mathbf{b}_q + \mathbf{W}_q \mathbf{x}_j \quad \text{ (query)}\\
\mathbf{k}_i &= \mathbf{b}_k + \mathbf{W}_k \mathbf{x}_i \quad \text{ (key).}
\end{aligned}
$$

The **dot product** of two vectors $$\mathbf{q}_j$$, $$\mathbf{k}_i$$ is a measurement of their similarity.
In the special case where both vectors are unit vectors, the dot product is the cosine of the angle between the two.
In general this relationship is expressed by the following equation:

$$\mathbf{q}_j \circ \mathbf{k}_i = \mathbf{q}_j^\top  \mathbf{k}_i = \Vert \mathbf{q}_j \Vert \cdot \Vert \mathbf{k}_i \Vert \cos(\beta),$$

where $$\beta$$ is the angle between the two verctors.
Computing the *dot product* between the queries and keys gives us the similarities we desire.
We pass the result through a *softmax* function:

$$\alpha(\mathbf{x}_i, \mathbf{x}_j) = \frac{\exp(\mathbf{q}_j^\top \mathbf{k}_i \sqrt{D_q})}{\sum\limits_{r=0}^{n-1} \exp(\mathbf{q}_j^\top \mathbf{k}_r \sqrt{D_q})},$$

where $$D_q$$ is the dimension of the queries and keys (i.e., the number of rows in $$\mathbf{W}_q$$ and $$\mathbf{W}_k$$, which must be the same).
If $$\mathbf{X}$$, $$\mathbf{K}$$, $$\mathbf{Q}$$, and $$\mathbf{V}$$ contain all the values, keys, queries and values then we can compute the self-attention by

$$\mathbf{Sa}(\mathbf{X}) = \mathbf{V} \cdot \text{Softmax}\left( \frac{\mathbf{K}^\top \mathbf{Q}}{\sqrt{D_q} }\right).$$

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:90%;" src="{% link /assets/images/self-attention.png %}" alt="Self-attention in matrix-form">
<div style="display: table;margin: 0 auto;">Figure 3: Self-attention in matrix-form.</div>
</div>
<br>

## Masking Attention Head

Since our transformer should not look into the future, because when we use it in the prediction mode it also can not look ahead of the token it predicts, we have to mask entries in $$\text{Softmax}(\mathbf{K}^\top \mathbf{Q} / \sqrt{D}_q)$$:

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:60%;" src="{% link /assets/images/transformer-head.png %}" alt="Transformer head">
<div style="display: table;margin: 0 auto;">Figure 4: Transformer head for a sequence length equal to 5.</div>
</div>
<br>


```python
class Head(nn.Module):
    """ one head of self-attention """
    
    def __init__(self, n_embd, head_size, sequence_len, dropout):
        super().__init__()
        self.key = nn.Linear(n_embd, head_size, bias=False)   # key embedding
        self.query = nn.Linear(n_embd, head_size, bias=False) # query embedding
        self.value = nn.Linear(n_embd, head_size, bias=False) # value embedding
        self.register_buffer('tril', torch.tril(torch.ones(sequence_len, sequence_len)))
        self.dropout = nn.Dropout(dropout) # to avoid overfitting
        
    def forward(self, x):
        B,T,C = x.shape
        k = self.key(x) # B, T, head_size, compute all keys
        q = self.query(x) # B, T, head_size, compute all queries
        _, _, head_size = q.shape
        
         # B, T, head_size @ B, head_size, 
        wei = q @ k.transpose(-2, -1) * (head_size ** (-0.5)) # T => B, T, T

        # because we can not look into the future 
        wei = wei.masked_fill(self.tril[:T, :T]==0, float('-inf'))
        wei = F.softmax(wei, dim=-1)
        wei = self.dropout(wei)

        v = self.value(x) # B, T, head_size
        out = wei @ v # T, T @ B, T, head_size => B, T, head_size
        return out
...
```

The multi-head attention layer consists of multiple heads.
Note that apart from **masked** **self-attention**, the head also applys a **dropout** which helps with regularization.

## Stacked Multi-Head Attention

Instead of using only one ``Head`` it is usually a good idea to use multiple ones.
To do this we transform the input into a ``head_size``-dimensional space.
Suppose we use 4 heads than ``head_size * 4`` should be equal to the rows of $$\mathbf{W}_0$$ (compare Fig. 5) of the multi-head attention layer which is ``m``, i.e. the dimension of the encoded input $$\mathbf{x}$$.
$$\mathbf{W}_0$$ transforms the concatenated results of the heads back to the dimension equal to ``n_embd``. 
This is needed to stack ``Block``s (each consisting of a ``MultiHeadAttention``) on top of each other.
The output of ``Block`` $i$ has to fit into block $i+1$.

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:90%;" src="{% link /assets/images/multi-head.png %}" alt="Multi-head attention">
<div style="display: table;margin: 0 auto;">Figure 5: Multi-head attention.</div>
</div>
<br>

```python
class MultiHeadAttention(nn.Module):
    def __init__(self, n_embd, n_heads, head_size, sequence_len, dropout):
        super().__init__()
        self.heads = nn.ModuleList(
            [Head(n_embd, head_size, sequence_len, dropout) for _ in range(n_heads)]
        )

        # W_0 this could also be (m, n_embd)
        self.proj = nn.Linear(n_embd, n_embd) 

        self.dropout = nn.Dropout(dropout)

    def forward(self, x):
        # concatenation of the results of each head
        out = torch.cat([head(x) for head in self.heads], dim=-1) 

        out = self.proj(out)
        out = self.dropout(out)
        return out
...
```

The hope is that each ``Head`` concentrates on different parts of the structure we want to learn.

## Transformer Block

A ``Block`` consists of a ``MultiHeadAttention``-layer and a relatively simple FFN-layer followed by two ``LayerNorm`` which applies *layer normalization* over a mini-batch of inputs.
This helps the gradients to stay in a "good" range.

```python
class Block(nn.Module):
    
    def __init__(self, n_embd, n_heads, sequence_len, dropout):
        super().__init__()
        head_size = n_embd // n_heads
        self.sa = MultiHeadAttention(n_embd, n_heads, head_size, sequence_len, dropout)
        self.ffwd = FeedForward(n_embd, dropout)
        self.ln1 = nn.LayerNorm(n_embd)
        self.ln2 = nn.LayerNorm(n_embd)
        
    def forward(self, x):
        x = x + self.sa(self.ln1(x)) # residual connection
        x = x + self.ffwd(self.ln2(x)) # residual connection
        return x

class FeedForward(nn.Module):
    
    def __init__(self, n_embd, dropout):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(n_embd, 4 * n_embd), 
            nn.ReLU(),
            nn.Linear(4 * n_embd, n_embd),
            nn.Dropout(dropout),
        )
        
    def forward(self, x):
        return self.net(x)
...
```

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:40%;" src="{% link /assets/images/block.png %}" alt="Transformer block">
<div style="display: table;margin: 0 auto;">Figure 6: Our decoder transformer block with only one (masked) multi-head attention layer.</div>
</div>

## Positional Encoding

The Transformer has no more hidden state.
Therefore, instead of processing token by token trying to memorize important information via the hidden state, it processes all $n$ tokens at in parallel which is good for parallel computation but increases the time and space complexity from $$\mathcal{O}(n)$$ (LSTM) to $$\mathcal{O}(n^2)$$.

Furthermore, we have to encode the position of the tokens into $$\mathbf{x}$$ because we lost the implicit order of computation.
Therefore, we transform our input ``idx`` to the concatenation of a **positional embedding** and **token embedding**.
Note that our input ``idx`` is an array of numbers each representing the id of the token.
Each number will be transformed into a specific vector (i.e. its embedding).
The embedding will be learned.

```python
class TransformerDecoder(nn.Module):
    
    def __init__(self, vocab_size, sequence_len, n_embd, n_heads, n_blocks, dropout):
        super().__init__()
        # vocab_size is the size of our alphabet
        self.token_embedding_table = nn.Embedding(vocab_size, n_embd)

        # sequence_len is equal to n
        self.position_embedding_table = nn.Embedding(sequence_len, n_embd)
        self.blocks = nn.Sequential(
            *[Block(n_embd, n_heads, sequence_len, dropout) for _ in range(n_blocks)]
        )
        self.lm_head = nn.Linear(n_embd, vocab_size)

    def forward(self, idx):
        B, T = idx.shape
        
        # token embedding. B, T, n_embd
        token_emb = self.token_embedding_table(idx) 

        # positional embedding. T, n_embd 
        pos_emb = self.position_embedding_table(torch.arange(T, device=device)) 

        x = token_emb + pos_emb # B, T, n_embd + T, n_embd => B, T, n_embd
        x = self.blocks(x) # B, T, head_size
        logits = self.lm_head(x) # B, T, vocab_size
        return logits

...
```

By increasing the dimension of the embedding, the sequence length, the number of heads within a block and the number of blocks we can drastically increase the size and power of our decoder-only transformer.
However, this will rapidly increase the memory requirements and training time.

<div><img style="display:block; margin-left:auto; margin-right:auto; width:40%;" src="{% link /assets/images/decoder.png %}" alt="Decoder-only transformer">
<div style="display: table;margin: 0 auto;">Figure 7: Our simplified decoder-only transformer.</div>
</div>

## Attention-Free Transformer

In 2022 a further simplification was brought to the table.
Instead of computing attention *FNet* {% cite leethorp:2022 %} just mixes tokens according to the Fourier discrete transformation (DFT).
Amazingly even though there is no parameter to learn within the ``Fourier``-layer (which replaces the ``Head``) this strategy seems to work almost as good as the far more computational expensive task of learning all the required attention scores.

The Fourier transform decomposes a function (in our case a discrete signal) into its constituent frequencies.
Given a sequence $$x_0, \ldots, x_{N-1}$$, the discrete Fourier transform (DFT) is defined by

$$X_k = \sum\limits_{n=0}^{N-1} x_n \exp\left( - \frac{2\pi i}{N} nk \right), \quad 0 \leq k \leq N-1.$$

$$X_k$$ encodes the **phase** and **power** of frequency $$k$$ within the signal.
*FNet* consists of a Fourier **mixing sublayer** followed by a feed-forward sublayer.
Essentially, the self-attention sublayer of each transformer decoder layer is replaced with a **Fourier sublayer** which applies a 2D DFT to its 

$$(\text{sequence length} \times \text{hidden dimension})$$

embedding input---one 1D DFT along the sequence dimension, $$\mathcal{F}_\text{seq}$$, and one 1D DFT along the hidden dimension, $$\mathcal{F}_\text{h}$$:

$$y = \text{Real}\left( \mathcal{F}_\text{seq} \left( \mathcal{F}_\text{h}(\mathbf{x}) \right) \right)$$

## References

{% bibliography --cited_in_order %}