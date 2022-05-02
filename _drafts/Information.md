---
layout: post
title:  "Information"
---

> Where is the life we have lost in living? Where is the wisdom we have lost in knowledge? Where is the knowledge we have lost in information? -- T.S. Eliot

We are riding on a train to our beautiful hometown.
Suddenly, the integrated monitor in our compartment displays the current weather and a forecast for the day.
The sun is shining and we do not have to worry about any nasty rain.
We put our jacket into our backpack. 

This simple example shows our general understanding of information.
The weather service (a *sender*) transmitted via a network (a *information channel*) the weather forecast (*information*) to us (*receiver*) and it *impacted* us in our behavior.
The delivered information eliminated or at least reduced the uncertainty of the upcoming weather situation -- we are ensured that it will most certainly not rain.
Consequently, we put our jacket into our backpack.

One might think that by studying computer science, students receive a deep understanding about what *information* is.
I mean, it is their fundamental resource they deal with all the time.
So shouldn't they learn what it acutally is?
Well, most computer scientists, and I include myself here, have a shallow encounter with the term.
Thinking back to my own study experience, I remember that we established Shannon's definition of information using his notion of entropie.
We spent like one or two sessions on the topic and moved on.

There are different reasons for this unsatifying encounter with the term.
Historically, a deep understanding of information was never important to get things done in practice.
In addition, depending on the discipline, the term has many different definitions.
And lastly, the term is oversaturated in our daily life.
We think we already know what information is because we use it and its intuitive definition all the time.

The digital is here to stay.
We will integrate more and more systems into our lifes that make decisions for us.
Therefore, it is necessary to think deeply about those systems.
And one major component is the material they are processing, that is, information!

## A Mathematical Theory of Information

In 1948 Claude E. Shannon established *A mathematical theory of information* {% cite shannon:1948 %}.
He contributed a measurement of information i.e. a measurement for the information content which he called *entropy*.
Because for him

> Information is the resolution of uncertainty. -- Claude E. Shannon

the *entropy* of a given information is high if it eliminates a lot of uncertainty.
As a side remark: It is said that he presented his ideas to John von Neumann who suggested the term because 

> no one really knows what entropie really is.

### Entropy in Phyisics

In physics the *entropy* of a closed system of an irreversable process always increases.
Imagine two identical buckets connected via a channel and let us imagine that the left bucket is filled with gas and the right one is not.
If we open the barrier between the two buckets, the gas will flow into the right bucket until there is approximately equally amount of gas in both buckets.
In this example, *entropy* is the number of possible distributions of **microscopic** particles (molekules) for one specfic **macroscopic** state of the system.
There are more possibilities to distribute the particles uniformly in both buckets than there are for using only one bucket.
Therefore, the *entropy* increased.

How does Shannon's concept of uncertainty fit into this picture?
Let us imagine we can identify each particle.
We look at a macroscopic state of the system and ask how many possibilities are there, i.e., how large is the entropy.
Because the entropy is high, the exact positions of particles is very uncertain.
If we than look at the microscopic state of the system, a lot of uncertainty is eliminated.

### Entropy in Informationtheory

Entropy in informationtheory is defined similarely.

#### Intuition

Let us image we receive a message (information) which is a 4 bit long number, e.g. $$0001$$.
If all possible 4 bit messages are equally likely to occur, then there are there are 

$$
2^4 = 16
$$

possibilities each occuring with a probability of

$$
\frac{1}{16}.
$$

Looking at our message eliminates a lot of uncertainty compared to a scenario where the only possibility messages are $$0001$$ and $$1001$$.

#### Definition

Let $$\Sigma = \{\sigma_1, \ldots, \sigma_m \}$$ be a **finite** Alphabet of $$m$$ symbols.
Let $$X$$ be a random variable of a **memoryless** sender (a producer of messages) over $$\Sigma$$.
We define 

$$p_i = P(X = \sigma_i)$$

to be the probability of $$X$$ being equals $$\sigma_i$$.
Then 

$$B(\sigma_i) = \log_2(1/p_i) = - \log_2(p_i)$$

is the *amount of bits required to represent a specific symbol* $$\sigma_i$$ and 

$$H_1 = \sum\limits_{i=1}^m p_i B(\sigma_i) = - \sum\limits_{i=1}^m p_i \log_2(p_i)$$

is the *entropy* (of the system) with respect to one symbol.
The *entropy* $$H_n$$ *of words* $$w \in \Sigma^n$$ is defined by

$$H_n = - \sum\limits_{w \in \Sigma^n} p_w \log_2(p_w)$$

where $$p_w = P(X = w)$$ is the probability of the appearance of $$w$$.
Finally the *entropy of the system* $$H$$ is the limit, i.e.,

$$H = \lim\limits_{n \rightarrow \infty} \frac{H_n}{n}.$$

By *system* Shannon's had a *system of information transmission* in mind.
There is a *source* sending a message to a *sender* who sends signals through a, possibly disrupted *channel* to a *receiver*.
The *receiver* translates the signals into a message and hands it over to its *target/reader*.

#### Examples

Suppose a the *sender* sends an alternating infinite series of 0's and 1's, i.e., $$010101 \ldots$$.
In that case we have 

$$\Sigma = \{0,1\}, B(0) = B(1) = 1.$$

If we look at words of length one the probability that a $$0$$ or $$1$$ appears is equally likely thus 

$$H_1 = 0.5 \cdot 1 + 0.5 \cdot 1 = 1.$$

However, if we increase the length of words the *entropy* does not increase because the first symbol already defines the whole word!
Therefore,

$$\forall n \in \mathbb{N}: H_n = 1 \Rightarrow H = 0,$$

i.e., the *entropy of that system* is zero.

If instead the *sender* sends $$0$$ or $$1$$ probability $$0.5$$ then 

$$\forall n \in \mathbb{N}: H_n = \log(2^n) = n \Rightarrow H = 1.$$

In this case there is no way to send fewer bits to transmitt the same amount of information!

### Information and Complexity

Another way to look at information, that does not rely on a system of information transportation, is to relate the amount of information by *length of a program* that generates it.

Let $$U$$ be the *universal Turing machine*, then the Kolmogorow-complexity $$C_U(w)$$ of a word $$w$$ is defined by the length (bits) of shortest description $$\alpha_T$$ of a Turing machine $$T$$ which generates without any additional input the output $$w$$, that is,

$$C_U(w) = \min\limits_{\alpha_T}\left\{ |\alpha_T|: U(\alpha_T) = T() = w \right\},$$

Since programming languages are basically *universal Turing machines*, we can more or less replace think of the shortest program that generates $$w$$.

For example, for generating the sequence 

```python
'abababababababababab'
```

in following ``Python`` code suffice

```python
'ab'*10
```

We only need 7 symbols.

How about:

```python
'ababababaaababababab'
```

Well, the following program does the job 

```python
'ab'*4+'aa'+5*'ab'
```

i.e., we need 18 symbols.
We almost need as many symbols as the length of the message we wanna generate.
In fact, the length of the message is an upper bound for the Kolmogorow-complexity.
In other words

$$C_U(w) \in \mathcal{O}(|w|).$$

Looking at the definition of the Kolmogorow-complexity the devil lies in the interation over all possible programs!
It turns out that for an arbitrary word $$w$$ and some programming language $$U$$ the Kolmogorow-complexity $$C_U(w)$$ is **not computable**.


### The Meaningless Symbols

Information, in Shannon's theory of information, is viewed stochastically, or probabilistically.
It is carried discretely as symbols, which are selected from a set of possible symbols.
The meaning of these symbols is completely irrelevant, though a binary digit may represent the toss of a coin (heads or tails) or the fate of the universe (expand or collapse).

If two events are possible but one is very unlikely and I get informed about the occurence of the unlikely event, I would get *more* information than if I get informed about the likely event.
In that sense, written English or German has less information than a random set of letters!
This is counter-intuitive because we tend to confuse *information* with *meaning*.
Even though a random set of letters transmitts a lot of information, it is meaningless to us.

## Objective and Subjective Meaning

Let me ask you something: does a computer know the meaning of a number?


A computer or a program does not have any notion of meaning.
Hard- and Software work on a purely syntactical basis.
They merely manipulate bits and bytes, symbols and states.
A computer does not know what a number is, nonetheless we use computers to perform numerical calculations.
This is possible because of interpretations $$I$$, i.e. functions that map a *representative* $$r$$ to its *objective meaning* $$I(r)$$.
For example, a 4-bit-adder interprets a series of bits as whole number: $$I(0111) = 7$$.

By definition, artifical intelligence (AI) attach meaning to information.
Where traditional information processes interpret bits and byte syntactically, AI adds semantics to information.
For example, by analyzing the needs of customers and the state of the housing market, an AI might suggest that you by that one house within the next month.
This suggestion can be more or less subtle.
Maybe the best matches are listed on a webpage.

If we think about it, it becomes clear that whenever information gets exposed to us, meaning is already attached to it.
It lies in the choice of presentation.
This presentation always communicates with us.
This relationship between information and its presentation is similar to a movie that can not really be apolitical.



However, it is easy for us to inject a metric that categorises and values those series of symbols.

In general, it is difficult to find pure syntactical interpreters as soon as information is preceived by us.

{% bibliography --cited_in_order %}