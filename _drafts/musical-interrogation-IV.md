---
layout: post
title:  "Musical Interrogation IV - Transformer"
tags: Music ML Transformer
comments: true
series: "Musical Interrogation"
---

This time in the series we use the most famous model architecture for generative purposes: the **Transformer** {% cite vaswani:2017 %}.

The Transformer was introduced in 2017 by the authors of *Attention Is All You Need* {% cite vaswani:2017 %} to basically replace *recurrency* with *attention*.
Its architecture and principle is simpler than that of an LSTM.
The Transformer avoids the problem of vanishing or exploding gradients by avoiding recurrency.

All successful large language model (LLMs) utilize the Transformer architecture, an architecture that brought us ChatGPT, LLama and BERT.
To this day, there is no clear explanation why the Transformer is so effective.
It is well-known how its components work and what mathematical operations are performed, but it is very hard to interpret the seemingly emerging power when all the small parts work together.
One possible reason why it is so effective is that it relates tokens to other tokens more directly (without a hidden state which washes away the information).

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

The fundamental operation of the Transformer, i.e. the attention mechanism, is implemented in its ``Head``.
Let 

$$\mathbf{x}_0, \ldots, \mathbf{x}_{n-1}$$

the $n$ tokens of a sequence.
So we assume, we want to predict the $\mathbf{x}_{n-1}$ token given the $n$-th previous tokens.
Note that $\mathbf{x}_i = \mathbf{y}_i$, i.e. similar to our LSTM, the output of the model will be feed back as input.

For each input we compute three different *embeddings*:

$$\mathbf{k}_i = \mathbf{x}_i^{\top} \mathbf{K} \text{ (key)}$$

$$\mathbf{q}_i = \mathbf{x}_i^{\top} \mathbf{Q} \text{ (query)}$$

$$\mathbf{v}_i = \mathbf{x}_i^{\top} \mathbf{V} \text{ (value)}$$

<br>
<div><img style="display:block; margin-left:auto; margin-right:auto; width:60%;" src="{% link /assets/images/transformer-head.png %}" alt="Transformer head">
<div style="display: table;margin: 0 auto;">Figure 2: Transformer head for a sequence length equal to 5.</div>
</div>
<br>

Basically, the query is what a token is searching for and the key is what it is offering.
Crucially, we allow the value to be a linear transformation of the input.
We compute all these transformations for all $i = 0, \ldots, n-1$.
This can be done by a matrix-matrix multiplication, e.g. $\mathbf{X}\mathbf{K}$ putting all $\mathbf{x}_{i}, \quad i=0, \ldots n-1$ into a matrix $\mathbf{X}$.
The attention token 

$$\mathbf{x}_{n-1}$$

"spents" to 

$$\mathbf{x}_{i}$$

is computed by comparing the similarity of the key 

$$\mathbf{k}_{i}$$ 

and the query $\mathbf{q}_{n-1}$, i.e.,

$$\alpha_{n-1,i} = \begin{cases} \mathbf{q}_{n-1}^{\top} \mathbf{k}_{i} \sqrt{d} & \text{ for } i \leq n-1\\ 0, & \text{ else,}\end{cases}$$

where $d$ is the size of the dimension of the embedding, that is, 

$$\mathbf{q}_{n-1} \in \mathbb{R}^d.$$

The values $\mathbf{v}_{i}$ are then weighted by the attention:

$$\alpha_{n-1,i} \mathbf{v}_{i} \quad i=0, \ldots, n-1.$$

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
Suppose we use 4 heads than ``head_size * 4`` should be equal to ``n_embd``, i.e. the dimension of the encoded input $\mathbf{x}$.
This is needed to stack ``Block``s (each consisting of a ``MultiHeadAttention``) on top of each other.

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

## Positional Encoding

The Transformer has no more hidden state.
Therefore, instead of processing token by token trying to memorize important information via the hidden state, it processes all $n$ tokens at in parallel which is good for parallel computation but increases the time and space complexity from $\mathcal{O}(n)$ (LSTM) to $\mathcal{O}(n^2)$.

Furthermore, we have to encode the position of the tokens into $\mathbf{x}$ because we lost the implicit order of computation.
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

By increasing the dimension of the embedding, the sequence length, the number of heads within a block and the number of blocks we can drastically increase the size and power of our (Decoder-)Transformer.
However, this will rapidly increase the memory requirements and training time.

## References

{% bibliography --cited_in_order %}