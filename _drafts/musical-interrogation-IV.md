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

The transformer was introduced in 2017 by the authors of *Attention Is All You Need* {% cite vaswani:2017 %} to basically replace *recurrency* with *attention*.
One of the problems with RNNs is that they can forget information that is further back in the sequence.
While more sophisticated architecture such as LSTMs {% cite hochreiter:1997 %} and *gated recurrent units* (GRUs) {% cite chung2014 %} partially addressed this problem, the idea that intermediate representations in the RNN should be exploited to produce the output lead to the *attention mechanism* {% cite bahdanau:2014 %} and, in the end, to the transformer architecture {% cite vaswani:2017 %}.
The transformer avoids the problem of vanishing or exploding gradients by avoiding recurrency.

All successful large language model (LLMs) utilize the transformer architecture, an architecture that brought us ChatGPT, LLama and BERT.
To this day, there is no clear explanation why the transformer is so effective.
It is well-known how its components work and what mathematical operations are performed, but it is very hard to interpret the seemingly emerging power when all the small parts work together.
One possible reason why it is so effective is that it relates tokens to other tokens more directly (without a hidden state which washes away the information).

Since language datasets share some of the characteristics of musical notations, transformers achieve good results in learning the structure of symbolic pieces.
The number of input variables can be very large, and the statistics are similar at every position; it's not sensible to re-learn the meaning of the word *dog* at every possible position in a body of text.
Language datasets as well as music datasets have the complication that their sequences very in length.

However, we also have to remember that there are also differences between the two domains.
The alphabet of musical notations has more than 26 symbols and there is a strong relation between certain symbols.
For example, there is a strong relation between the C's of each octave or a whole and half note in the same pitch class.
Furthermore, shifting all the letters in the text changes the meaning of the text dramatically while in the case of music this is not the case.

## Attention in RNNs

What is the idea behind the attention mechanism?
Attention was introduced to bidirectional recurrent neural networks (RNNs) in 2014 {% cite bahdanau:2014 %} for language translation, that is, for an encoder-decoder architecture.
The idea is that the decoder emulates a search through a source sentence during decoding a translation.
The attention mechanism enables the model to learn the importance of (previous) tokens 

$$\mathbf{x}_{t-n}, \ldots \mathbf{x}_{t-1},$$ 

in relation to the current token we want to predict, that is, $\mathbf{y}_{t}$ and the hidden state 

$$\mathbf{h}_{t}.$$

For example, to predict the word "banana" in the sentence: "I eat a lot of fruit, therefore, I like ____", the model should learn that "fruit" is somehow important for the prediction of the missing word.
For each output of the RNN a score (or energy) is computed.
This score measures how well each output is aligned with the RNNs previous hidden state $\mathbf{h}_t$.
Since the similarity between the outputs of the RNN and the hidden state is computed, the dot product was proposed shortly after, i.e.,

$$e_{t,i} = \mathbf{h}_t^\top \mathbf{y}_{t-i} \quad \text{ for } i = 1, \ldots, n$$

and it was suggested to use an additional linear transformation on the output:

$$e_{t,i} = \mathbf{h}_t^\top (\mathbf{W} \mathbf{y}_{t-i}) \quad \text{ for } i = 1, \ldots, n,$$

where $\mathbf{W}$ is learned.

The input for the RNN is not only $\mathbf{x}_t$ but also all the previous $n-1$ outputs and the last hidden state.
And for each of the $n$ inputs, other than the hidden state, a score is computed.
All these scores are normalized by the softmax function giving us $n$ weights:

$$\alpha_{t,i} = \frac{\exp\left( e_{t,i} \right)}{\sum_{i'} \exp\left( e_{t, i'}\right)}.$$

Then the hidden state is computed by a weighted sum:

$$\hat{\mathbf{h}}_t = \sum_i \alpha_{t,i} \mathbf{y}_i.$$

The weights determine how "strong" the information of the input will be utilized, i.e., how much attention is spent on each previous output of the model.

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:90%;" src="{% link /assets/images/rnn-attention.png %}" alt="RNN with attention">
<div style="display: table;margin: 0 auto;">Figure 1: RNN with self-attention.</div>
</div>
<br>

In case of a decoder, this results in a quadratic complexity of $\mathcal{O}(n^2)$ because for each of the $n$ tokens we want to decode, we have $n$ weights.

## Self-Attention

The idea of the transformer is to just rely on (self-)attention thus remove recurrency.
This means that the model "sees" $n$ tokens to generate the $(n+1)^\text{th}$ token.
Simple RNNs for predicting the next tokens only see the previous token and the hidden state which represents all the tokens before.
But, as I discussed in previous articles, the information of the hidden state gets washed away over time and without attention there seem to be little control over the importance of certain tokens of the sequence.

The fundamental operation of the transformer, i.e. the attention mechanism, is implemented in its ``Head``.
Let 

$$\mathbf{x}_0, \ldots, \mathbf{x}_{n-1}$$

the $n$ tokens of a sequence.
A standard neural network layer $f(\mathbf{x})$, takes a $D \times 1$ input $f(\mathbf{x})$ and applies a linear transformation followed by an activation function like a $\text{ReLU}$:

$$f(\mathbf{x}) = \text{ReLU}\left( \mathbf{W}\mathbf{x} + \mathbf{b }\right),$$

where $\mathbf{b}$ contains the biases, and $\mathbf{W}$ contains the weights.

A self-attention $\mathbf{sa}(\cdot)$ block takes all the $n$ inputs, each of dimension $D \times 1$, and returns $n$ output vectors of the same size.
In our case each input represents a musical note or event.
First, a set of *values* are computed for each input:

$$\mathbf{v}_i = \mathbf{b}_v + \mathbf{W}_v \mathbf{x}_i,$$

where 

$$\mathbf{b}_v \in \mathbb{R}^D \text{ and } \mathbf{W}_v \in \mathbb{R}^{D \times D}$$

represent biases and weights, respectively (**for all inputs**). The the $j^\text{th}$ output 

$$\mathbf{sa}_j(\mathbf{x}_0, \ldots, \mathbf{x}_{n-1})$$

is a weighted sum of all the values $\mathbf{v}_i, i = 0, \ldots n-1$:

$$\mathbf{sa}_j(\mathbf{x}_0, \ldots, \mathbf{x}_{n-1}) = \sum_{i=0}^{n-1} \alpha(\mathbf{x}_i, \mathbf{x}_j) \mathbf{v}_i.$$

The scalar weight $\alpha(\mathbf{x}_i, \mathbf{x}_j)$ is the *attention* that the $j^\text{th}$ output pays to the input $\mathbf{x}_i$.
The $n$ weights $\alpha(\cdot, \mathbf{x}_j)$ are non-negative and sum to one.
Hence, self-attention can be thought of as *routing* the values in different proportions to create each output.

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:50%;" src="{% link /assets/images/routing.png %}" alt="Routing principle">
<div style="display: table;margin: 0 auto;">Figure 2: Routing principle.</div>
</div>
<br>

To compute the attention, we apply two more linear transformations to the inputs:

$$\mathbf{q}_j = \mathbf{b}_q + \mathbf{W}_q \mathbf{x}_j \quad \text{ (query)}$$

$$\mathbf{k}_i = \mathbf{b}_k + \mathbf{W}_k \mathbf{x}_i \quad \text{ (key).}$$

Then we compute the *dot product* between the queries and keys and pass the result through a *softmax* $\sigma(\cdot)$ function:

$$\alpha(\mathbf{x}_i, \mathbf{x}_j) = \frac{\exp(\mathbf{q}_j^\top \mathbf{k}_i \sqrt{D_q})}{\sum\limits_{r=0}^{n-1} \exp(\mathbf{q}_j^\top \mathbf{k}_r \sqrt{D_q})},$$

where $D_q$ is the dimension of the queries and keys (i.e., the number of rows in $\mathbf{W}_q$ and $\mathbf{W}_k$, which must be the same).
If $\mathbf{X}$, $\mathbf{K}$, $\mathbf{Q}$, and $\mathbf{V}$ contain all the values, keys, queries and values then we can compute the self-attention by

$$\mathbf{Sa}(\mathbf{X}) = \mathbf{V} \cdot \text{Softmax}\left( \frac{\mathbf{K}^\top \mathbf{Q}}{\sqrt{D_q} }\right).$$

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:90%;" src="{% link /assets/images/self-attention.png %}" alt="Self-attention in matrix-form">
<div style="display: table;margin: 0 auto;">Figure 3: Self-attention in matrix-form.</div>
</div>
<br>

## Masking

Since our transformer should not look into the future, because when we use it in the prediction mode it also can not look ahead of the token it predicts, we have to mask entries in $\text{Softmax}(\mathbf{K}^\top \mathbf{Q} / \sqrt{D}_q)$:

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

## Stacked Multi-Head (Self-)Attention

Instead of using only one ``Head`` it is usually a good idea to use multiple ones.
To do this we transform the input into a ``head_size``-dimensional space.
Suppose we use 4 heads than ``head_size * 4`` should be equal to output dimension of the multi-head attention layer which is ``n_embd``, i.e. the dimension of the encoded input $\mathbf{x}$.
This is needed to stack ``Block``s (each consisting of a ``MultiHeadAttention``) on top of each other.

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:90%;" src="{% link /assets/images/multi-head.png %}" alt="Multi-head attention">
<div style="display: table;margin: 0 auto;">Figure 5: Multi-head attention.</div>
</div>
<br>

```python
class MultiHeadAttention(nn.Module):
    def __init__(self, n_embd, n_heads, head_size, sequence_len, dropout):
        super().__init__()
        self.heads = nn.ModuleList([Head(n_embd, head_size, sequence_len, dropout) for _ in range(n_heads)])
        self.proj = nn.Linear(n_embd, n_embd)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x):
        out = torch.cat([head(x) for head in self.heads], dim=-1)
        out = self.proj(out)
        out = self.dropout(out)
        return out
...
```

The hope is that each ``Head`` concentrates on different parts of the structure we want to learn.

## Block

A ``Block`` consists of a ``MultiHeadAttention``-layer and a relatively simple FFN-layer followed by two ``LayerNarm`` which applies *layer normalization* over a mini-batch of inputs.
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
<div style="display: table;margin: 0 auto;">Figure 6: Transformer block.</div>
</div>

## Positional Encoding

The Transformer has no more hidden state.
Therefore, instead of processing token by token trying to memorize important information via the hidden state, it processes all $n$ tokens at in parallel which is good for parallel computation but increases the time and space complexity from $\mathcal{O}(n)$ (LSTM) to $\mathcal{O}(n^2)$.

Furthermore, we have to encode the position of the tokens into $\mathbf{x}$ because we lost the implicit order of computation.
Therefore, we transform our input ``idx`` to the concatenation of a **positional embedding** and **token embedding**.
Note that our input ``idx`` is an array of numbers each representing the id of the token.
Each number will be transformed into a specific vector (i.e. its embedding).
The embedding will be learned.

```python
class TransformerEncoder(nn.Module):
    
    def __init__(self, vocab_size, sequence_len, n_embd, n_heads, n_blocks, dropout):
        super().__init__()
        # vocab_size is the size of our alphabet
        self.token_embedding_table = nn.Embedding(vocab_size, n_embd)

        # sequence_len is equal to n
        self.position_embedding_table = nn.Embedding(sequence_len, n_embd)
        self.blocks = nn.Sequential(*[Block(n_embd, n_heads, sequence_len, dropout) for _ in range(n_blocks)])
        self.lm_head = nn.Linear(n_embd, vocab_size)

    def forward(self, idx):
        B, T = idx.shape
        
        # token embedding
        token_emb = self.token_embedding_table(idx) # B, T, n_embd

        # positional embedding
        pos_emb = self.position_embedding_table(torch.arange(T, device=device)) # T, n_embd 

        x = token_emb + pos_emb # B, T, n_embd + T, n_embd => B, T, n_embd
        x = self.blocks(x) # B, T, head_size
        logits = self.lm_head(x) # B, T, vocab_size
        return logits

...
```

By increasing the dimension of the embedding, the sequence length, the number of heads within a block and the number of blocks we can drastically increase the size and power of our (Encoder-)transformer.
However, this will rapidly increase the memory requirements and training time.

<div><img style="display:block; margin-left:auto; margin-right:auto; width:40%;" src="{% link /assets/images/encoder.png %}" alt="Encoder part of the transformer">
<div style="display: table;margin: 0 auto;">Figure 7: Encoder part of the transformer.</div>
</div>

## Attention-Free Transformer

In 2022 a further simplification was brought to the table.
Instead of computing attention *FNet* {% cite leethorp:2022 %} just mixes tokens according to the Fourier discrete transformation (DFT).
Amazingly even though there is no parameter to learn within the ``Fourier``-layer (which replaces the ``Head``) this strategy seems to work almost as good as the far more computational expensive task of learning all the required attention scores.

The Fourier transform decomposes a function (in our case a discrete signal) into its constituent frequencies.
Given a sequence $x_0, \ldots, x_{N-1}$, the discrete Fourier transform (DFT) is defined by

$$X_k = \sum\limits_{n=0}^{N-1} x_n \exp\left( - \frac{2\pi i}{N} nk \right), \quad 0 \leq k \leq N-1.$$

$X_k$ encodes the **phase** and **power** of frequency $k$ within the signal.
*FNet* consists of a Fourier **mixing sublayer** followed by a feed-forward sublayer.
Essentially, the self-attention sublayer of each Transformer encoder layer is replaced with a Fourier sublayer which applies a 2D DFT to its 

$$(\text{sequence length} \times \text{hidden dimension})$$

embedding input---one 1D DFT along the sequence dimension, $\mathcal{F}_\text{seq}$, and one 1D DFT along the hidden dimension, $\mathcal{F}_\text{h}$:

$$y = \text{Real}\left( \mathcal{F}_\text{seq} \left( \mathcal{F}_\text{h}(\mathbf{x}) \right) \right)$$

## References

{% bibliography --cited_in_order %}