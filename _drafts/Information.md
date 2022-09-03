---
layout: post
title:  "Information and Meaning"
---

> Where is the life we have lost in living? Where is the wisdom we have lost in knowledge? Where is the knowledge we have lost in information? -- T.S. Eliot

I am riding on a train to our beautiful hometown.
Suddenly, the integrated monitor in my compartment displays the current weather and a forecast for the day.
The sun is shining, and I do not have to worry about any nasty rain.
Consequently, I put my jacket back into my backpack. 

This simple example shows our general understanding of information.
The weather service (a *sender*) transmitted the weather forecast (*information*) via a network (a *information channel*) to me (*receiver*), and consequently *impacts* my behavior.
The delivered information eliminates or at least reduces the uncertainty of the upcoming weather situation -- I am assured that it will most certainly not rain.
Consequently, I put my jacket back into my backpack.

One might think that studying computer science gives students a deep understanding of what *information* is.
I mean, it is their fundamental resource they deal with all the time.
So shouldn't they learn what it is and what it does?
Well, most computer scientists, including myself, have a shallow encounter with the term.
Thinking back to my own study experience, I remember that we established Shannon's definition of information using his notion of *entropy*.
We spent like one or two sessions on the topic and moved on.

There are different reasons for this unsatisfying encounter with the term.
First of all, a deep understanding of information was never essential to get things done in practice.
Historically, the challenge was to transmit data between two or more communication participants.
Like a postman, the entity is not interested in the information it transmits.
Instead, it is only interested in transmitting it.
In addition, the term has many different definitions depending on the discipline.
There is no generally accepted definition; thus, we always have to add one.
And lastly, the term is oversaturated in our daily life.
We think we already know what information is because we believe that we use it and its intuitive definition all the time.
This intuitive usage is strongly linked to our intuitive unterstanding of *meaning* and we often mix or confuse both terms.

## Out of Control Societies

Why should we care about *information*?
I argue that, in the last century, we moved from a material-centered society to an information-centered society.

This process started with the industrial revolution when capitalism established a new kind of value distinct from the usability of a commodity: the exchange value.
With the emergence of brands such as *Apple* and *Nike* the sign value appeared in our daily lifes.
We buy certain things because they have a signifying quality, be it wealth, intelligence, health, a political viewpoint, or the rebellion against this process itself.
We are *oversaturated with meaning* since every commodity has to be meaningful beyond its use value.
This attachment relys on information.
Consequently, information shapes the value of material goods.

On top of that, meaning and information gets more and more entangled.
Today information transmission is only one minor task of information and communication systems.
Concerning scientific and economic developments, it becomes clear that nowadays, most modern systems are built to draw conclusions based on a vast amount of data.
In many areas, we moved from equation-based to data-driven modeling.
Of course, this is nothing new in general.
A simple thermostat fulfills all criteria to be called a *cybernetic artifical system*. 
It is an information system that draws conclusions based on the room temperature.
These systems exist since humans are able to construct tools.
What changed is the extent to which these systems guide or rather gently control our lives.
They decide on our behalf what is meaningful to us.
For example, a thermostat does not value anything but it realizes our wish for a warm and cozy home -- it realizes our values.

We will integrate and depend on more and more *systems of control*.
In and of itself, this seems neither good nor bad.
But it becomes problematic when these systems are obfuscated from the person they serve.
I can directly observe, understand, and control my thermostat but I can no longer observe, understand or control the recommendation algorithm of *Spotify*, *Google*, or *YouTube*.
The barrier between users and tools disappears and one gets integrated into a network of systems.
This has a *polarizing* as well as *homogenizing* effect on society because our desires get channeled into a digital thus finite and abstract set of bundles of values.
My personal fear is that if every decision we make gets dictated by an out-of-control interconnected system of control, humans will, depending on our perspective, evolve or dissolve into that very system.
Instead of being consciously controlled, we become something that is unaware of the controlling mechanisms which is the very definition of a machine.
We even might end up being happy, enjoying comfort and little pleasures but at the cost of losing our singularity.

One might argue that there was never a difference between humans, animals and machines in the first place.
Like Nietzsche declared the *Death of God*, one might want to declare the *Death of Humans* (as a concept).
For me personally, I believe in the intrinsic value and distinct quality of life itself, be it human or non-human and that this value can not be reduced to pure rationality.
To quote *The Matrix*:

>To deny our own impulses is to deny the very thing that makes us human.

Of course, this does not mean that we should follow our impulses uncritically or unreflectifely.
Rather that they shape our experience and are essential to be a singularity.

Because *systems of control* act against many of our impulses, I find it extremely necessary to think deeply about these systems such that, ultimately, we do not lose control over the thing that controls us.
Therefore, we should care about *information* because it is the material these systems process.

## A Mathematical Theory of Information

In 1948 Claude E. Shannon established *A mathematical theory of information* {% cite shannon:1948 %}.
He contributed a measurement of information, i.e., a measurement for the information content, which he called *entropy*.
Because for him

> information is the resolution of uncertainty. -- Claude E. Shannon

the *entropy* of a given piece of information is high if it eliminates a lot of uncertainty.
In other words, the *entropy* of a given piece of information is high if it *surprises* us.

As a side remark, it is said that he presented his ideas to John von Neumann, who suggested the term because 

> no one really knows what entropy is.

### Entropy

In physics, the *entropy* of a closed system of an irreversible process always increases.
Imagine two identical buckets connected via a channel, and let us imagine that the left bucket is filled with gas and the right one is not.
If we open the barrier between the two buckets, the gas will flow into the right bucket until there is approximately an equal amount of gas in both buckets.

In this example, *entropy* is the number of possible distributions of **microscopic** particles (molecules) for one specific **macroscopic** state of the system.
There are more possibilities to distribute the particles uniformly in both buckets than using only one bucket.
Therefore, the *entropy* increased.

How does Shannon's concept of uncertainty fit into this picture?
Let us imagine we can identify each particle.
We look at a macroscopic state of the system and ask how many possibilities are there, i.e., how large is the entropy.
Because the entropy is high, the exact positions of particles is very uncertain.
If we switch to the actual microscopic state of the system (information), a lot of uncertainty is eliminated.
Entropy in information theory is defined similarly.

#### Intuition

The entropy tells us something about our uncertainty.
Let us imagine we receive a message (information) which is a 4-bit long number, e.g., $$0001$$.
If all possible 4-bit messages equally likely occur, then there are 

$$
2^4 = 16
$$

possibilities each occurring with a probability of

$$
\frac{1}{16}.
$$

Our message eliminates a lot of uncertainty compared to a scenario where the only possible messages are $$0001$$ and $$1001$$.
In other words, we were very uncertain before we received the message.

#### Definition

Let $$\Sigma = \{\sigma_1, \ldots, \sigma_m \}$$ be a **finite** Alphabet of $$m$$ symbols.
Let $$X$$ be a random variable of a **memoryless** sender (a producer of messages) over $$\Sigma$$.
We define 

$$p_i = P(X = \sigma_i),$$

to be the probability of $$X$$ being equals $$\sigma_i$$.
Then 

$$B(\sigma_i) = \log_m\left(\frac{1}{p_i}\right) = - \log_m(p_i)$$

is the *amount of elements required to represent a specific symbol* $$\sigma_i$$ and 

$$H_1 = \sum\limits_{i=1}^m p_i B(\sigma_i) = \sum\limits_{i=1}^m p_i \log_m\left(\frac{1}{p_i}\right)$$

is the *entropy* (of the system) with respect to one symbol.
The *entropy* $$H_n$$ *of words* $$w \in \Sigma^n$$ is defined by

$$H_n = \sum\limits_{w \in \Sigma^n} p_w \log_m\left(\frac{1}{p_w}\right)$$

where $$p_w = P(X = w)$$ is the probability of the appearance of $$w$$.
Finally the *entropy* $$H$$ *of the system*  is the limit, i.e.,

$$H = \lim\limits_{n \rightarrow \infty} \frac{H_n}{n}.$$

By *system*, Shannon refers to a *system of information transmission*.
There is a *source* sending a message $$\omega$$ to a *sender* who sends signals through a possibly disrupted *channel* to a *receiver*.
The *receiver* translates the signals into the message $$\omega$$ and hands it over to its *target/reader*.
This can be translated to a probability distribution from which we draw.

#### Examples

Suppose the *sender* sends an alternating infinite series of 0's and 1's, i.e., $$010101 \ldots$$.
In that case, we have 

$$\Sigma = \{0,1\}, B(0) = B(1) = 1.$$

If we look at words of length one, the probability that a $$0$$ or $$1$$ appears is equally likely, thus 

$$H_1 = 0.5 \cdot 1 + 0.5 \cdot 1 = 1.$$

However, if we increase the length of words, the *entropy* does not increase because the first symbol already defines the whole world!
Therefore,

$$\forall n \in \mathbb{N}: H_n = 1 \Rightarrow H = 0,$$

i.e., the *entropy of that system* is zero which makes sense because we are absolutely certain what messages we will receive.

If instead the *sender* sends either $$0$$ or $$1$$ probability $$0.5$$, then 

$$\forall n \in \mathbb{N}: H_n = \log(2^n) = n \Rightarrow H = 1.$$

In this case, there is no way to send fewer bits to transmit the same amount of information!

### Information and Complexity

Another way of looking at a piece of information is to relate the amount of information to the *length of a program* that generates it.
This perspective does not rely on a *system of information transmission*. 

Let $$U$$ be the *Universal Turing Machine*, then the *Kolmogorov complexity* $$C_U(w)$$ of a word $$w$$ is defined by the length (bits) of the shortest description $$\alpha_T$$ of a Turing machine $$T$$ which generates $$w$$ without any additional input, that is,

$$C_U(w) = \min\limits_{\alpha_T \in \Sigma^*}\left\{ |\alpha_T|: U(\alpha_T) = T() = w \right\}.$$

Since programming languages are basically equivalent to the *Universal Turing Machines*, we can more or less replace $$T$$ with the shortest program that generates $$w$$.

For example, for generating the sequence

```python
'abababababababababab'
```

the following ``Python`` code suffices.

```python
'ab'*10
```

We only need seven symbols.

How about:

```python
'ababababaaababababab'
```

Well, the following program does the job 

```python
'ab'*4+'aa'+5*'ab'
```

i.e., we need 18 symbols.
We almost need as many symbols as the length of the message we want to generate.
In fact, the length of the message is an upper bound for the *Kolmogorov complexity*.
In other words

$$C_U(w) \in \mathcal{O}(|w|).$$

Looking at the definition of the *Kolmogorov complexity*, the devil lies in the iteration of all possible programs!
It turns out that for an arbitrary word $$w$$ the *Kolmogorov complexity* $$C_U(w)$$ is **not computable**.

The *Kolmogorov complexity* is an elegant way of looking at information without introducing a transmission system.
We can look at the series symbols in front of us and ask: what program can generate the series?

Interestingly, we do not look at the program's complexity but its length.
For example, for a string representing the first $$n$$ prime numbers

```python
'aabbbaaaaaaabbbbbbbbbbb...'
```

we would choose the shortest algorithm, e.g.,

```python
def is_prime(p):
    if p < 2:
        return False
    for i in range(2,p):
        if p % i == 0:
            return False
    return True
   
n = 5
last = 1
is_b = True
text = ''

p = 1
k = 0
while k < n:
    if p > last and is_prime(p):
        char = 'a' if is_b else 'b'
        text += char*p
        is_b = not is_b
        last = p
        k += 1
    p += 1
    
text
```

even if its complexity is higher than a more sophisticated and efficient algorithm.
Another example is the computation of a picture of the famous Mandelbrot set.
To store the image one might require a large amount of memory, but its computation relies on a a very **small program**.
To (re-)construct the image, the program needs a lot of steps, i.e., **execution time**.

Since the descriptions of complex systems can be relatively short, this perspective suggests that they might, in fact, offer or rely on a minimal amount of information.
We often have to 'execute' or 'evolve' this information to understand it, but its 'essence' is there beforehand.

One might want to ask: what is the *Kolmogorov complexity* of our universe?
If such a question makes sense in the first place, its answer may surprise us.

### Meaningless Symbols

In *Shannon's theory*, information is viewed stochastically or probabilistically.
It is carried discretely as symbols, which are selected from a set of possible symbols.
The meaning of these symbols is entirely irrelevant, though a binary digit may represent the toss of a coin (heads or tails) or the universe's fate (expand or collapse).

If two events are possible, but one is very unlikely, and I get informed about the occurrence of the unlikely event, I would get *more* information than if I get informed about the likely event.
In that sense, written English or German has less information than a random set of letters!
This is counter-intuitive because we tend to confuse *information* with *meaning* and even though a random set of letters transmits a lot of information, it is meaningless to us.

The same is true for the *Kolmogorov complexity*.
It also avoids combining information and meaning and relies solely on syntactical qualities. 

Case closed?
Is there no meaning we have to deal with when we process information?
If the content of information is defined formally by *entropy* or the *Kolmogorov complexity*, information and meaning are two completely different things.
However, information can, of course, be meaningful.
As I argued in the beginning, our *system of control* channel our desires.
In so far they realize implanted values by making unconsciously sense of information.

## What is Meaning

*Aristotle* talked about the meaningfulness of objects, which he held to be bound up with the essence of the object *in itself*.
For him, meaningfulness was similar to an attribute like weight and height.
He also had a notion of the *final cause*, a kind of destiny towards which things are heading and being drawn to.
For example, the final cause of a seed is the adult plant.
He thought that everything that nature makes is a means to an end (humanity).
Today we tend to interpret the example of the plant the other way around: the end of the adult plant is reproduction, i.e., the seed.
The *final cause* is circular.

Existentialists, such as *Sartre* and *Kierkegaard*, focused solely on human beings and inverted the idea of an essential meaning to human existence.
Existence precedes meaning thus humans have to create or define their own subjective meaning, i.e., we are dangerously free.
They are in-line with the general Western thought presupposing that meaning is something we impose, either subjectively or intersubjectively on things, or meaning is what we generate by means of symbols and communicative activity.
In short: meaning is a *human construct* but more so it is *individualistic*.

*Heidegger* noted that when we come to understand entities in the world and their possibility, the entities *have meaning* but this *having* is not located in the entity itself but in the act of understanding.

>Meaning is that wherein the intelligibility of something maintains itself -- Heidegger

It seems that for *Heidegger*, the meanings of a thing emerges from the realtionships a thing has with all its sourroundings.

This notion reminds me of *Niklas Luhmann* who thought of social systems to be autopoiesis (self-maintaining and self-producing by creating its own parts), introduced by *Maturana* and *Varela*,
and operational closed like a biological cell.
According to *Luhmann*, (social) systems construct and maintain themselves by differentiating themselves from their environment.
Within a system there is communication that communicates and this communication leads to communication.
In terms of communication, *Luhmann* depatured from the *sender-receiver-models of communication* he famously claimed that

>Only communication can communicate.

which sounds trivial, but, as a consequence, he excludes people from social systems.
In that sense *Luhmann* is a posthumanist.
He argues that *social meaning* is not dependent on the meaning being generated and understood by people.
Psychic systems (conciousness) are identified to be systems based on the processing of meaning as well, but the meaning generated in psychic systems is never directly accessible for social systems.
Social systems can only observer meaning within themselves, on the basis of specific codes, programs, symbolically generalized media of communication, etc.

For example, while within the scientific system meaning is observerd on the basis the true/false-code, the legal system operates on the basis of the legal/illega-code.
Depending on the system something can have different meanings and there is no hiearchy of meanings.
In contrary to the existentialist point of view, meaning can be specific for social systems which consists not of humans but of communication.

*Shannon* defines information as a selection from signals that exist in the external world.
In his view information is the input into a *system* that selects it.
He is only concered with transmission thus do not make any statements on the semantic or pragmatic
aspects.
However, we can infer that he would say that messages selected by the recipient are the same for both, the transmitter and the recipient, and that they mean the same to both.
There is a clear seperation between the message and the system which receives / interprets it.
This assumption of a transmission of information has persistently been criticised from a humanities and social science angle, and today, especially against the background of a second-order cybernetics, it is no longer tenable in the natural science either.



###########

The types of meanings vary according to the types of the thing that is being represented. Namely:

+ There are the things in the world, which might have meaning;
+ There are things in the world that are also signs of other things in the world, and so, are always meaningful (i.e., natural signs of the physical world and ideas within the mind);
+ There are things that are necessarily meaningful such as words and nonverbal symbols.

First I want to emphasis that there seem to be differend types of meaning. 
The following probabily incomplete list was proposed by Andrew Basden{% cite basden:2019 %}:

**Signification-meaning**: the meaing carried by words, phrases, etc. 
This meaning is studied by the semiotics (science of symbols) and linguistics.
For example, the word *knife* (syntax) symbolizes a term in the cognitive world of the subject (sematics).
We might think of a knife that we saw earlier or we may think about other words or related terms / pictures.
Additional the *knife* refers to a thing in the real world and it affects us in a certain way (pragmatic).

**Interpretation-meaning**: the meaing we assign when we interpret something.
Take a hand-drawing of a bird.
The graphite particles are arranged in such a way that we, the subject, interpret the set of particles as the drawing of a bird.

**Attribution-meaning**: the meaning we attribute to things.
Attribution-meaning comes more from the subject.
For example, a coin my father gave me has an additional meaning besides being a coin.

**Life-meaing**: what is the meaning of my life?

**Meaningfulness**: the idea that things are maningful whether or not we signify, interpret, or attribute, and wheter or not human life is involved.
Is reality valuable in itself independent of humankind?

Apart from maybe the last one, these different types of meaning are rather individualistic thus humanistic.



In this litte paragraph I speek through the perspective of the Dutch philosopher Dooyeweerd.

>We can conceive of light because of darkness, and of death because of life. These things have their opposites, that give them meaning. But Meaning itself seems to have no opposite that we can conceive of. Even when we say something is 'meaningless', we are giving it some meaning. Meaning just seems to be different.

We understand *meaning* intuitively but not, it seems, theoretically -- even if we tried it for over 2000 years.

I would argue there is a huge difference between an abstract data type, such as a linked-list and a running program that computes suggestions for your next shopping trip.

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




Some argue (see Dooyeweerd) that *meaning* can not be understood *theoretically* but only *intuitively*. 