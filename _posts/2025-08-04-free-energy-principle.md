---
layout: post
title: "The Free Energy Principle"
tags: 
  - ML
  - Neuroscience
comments: true
---

Imagine you see a grizzly bear in the woods and half of its face is hidden behind a tree.
You will recognize the bear as whole and dangerous animal?
Your brain will "fill in the gaps" even though there is no absolute certainty that the bear isn't split in half.
How and why does the brain do this?
Furthermore, why are we fooled by all sorts of graphical illusions?
In other words, why are we, in some instances, so stubborn to see what is not there---even if we are told that it is not there---and, on other occasions, we can immediately see what is hidden and probably there?

The so‑called *free energy principle* (FEP) {% cite friston:2006 %} is a neat mathematical principle that offers answers to these questions.
According to the FEP, brains or nervous systems make use of *variational inference* on hidden causes of sensory data.
In this view, the goal of an organism, including ours, is to **minimize surprise** within their respective environment.
Researchers working towards finding evidence to apply the FEP claim that perceptual processes are just one aspect of emergent behaviours of systems that conform to a *free energy principle*.
Thus, it is a principle on which the brain might operate.

> The free energy considered here measures the difference between the probability distribution of environmental quantities that act on the system and an arbitrary distribution encoded by its configuration.
>The system can minimise free energy by changing its configuration to affect the way it samples the environment or change the distribution it encodes. These changes correspond to action and perception respectively and lead to an adaptive exchange with the environment that is characteristic of biological systems.
>This treatment assumes that the system's state and structure encode an implicit and probabilistic model of the environment. -- {% cite friston:2006 %}

As a consequence, the FEP depatures from the classical reward-based explanations of behaviour and evolutional progress in general.
Instead of starting with an *a priori* *goal* or *reward* that the organism has to find, it starts with *what kinds of states the organism expects to be in*, and assumes the organism to act in a way that *confirms those expectations* and keeps it in familiar, low-surprise situations.

Friston and others also believe that the use of *hierarchical models*, such as layered neural networks, enable the brain to construct prior expectations in a dynamic and context-sensitive fashion.
Following this line, this scheme provides a principled way to understand many aspects of cortical organisation and responses while it is strongly connected to the *connectionist* strand of *artificial intelligence*.

It was Friston who populated the idea of the brain as a *prediction machine* trying to minimize surprise (or prediction error) by either updating beliefs (**perception**) or by acting on the world (**action**) to make it more predictable.
He provides a unifying framework for perception, action, attention, learning, and even consciousness which, in my opinion, combines enactivists and constructivists views (as we will discuss later).

However, the term *prediction machine* should not be confused with a depreciation of organisms or the human brain.
There is nothing magical or mystical that we will lose if we stick to the naturalization of ourselves as long as we do not mistaken an explanation as final answer.
Existential questions remain but stay outside the public sphare of science but those questions are necessarily informed by our (scientific) knowledge about ourselves and our environment.
In accordance to the FEP, we drift towards explanations of our being---we drift towards self-creation and our own evidence.
Therefore, what could be more magical, more fascinating than our contingent existence that emerged through a process of exactly such *self-creation* and *self-evidencing*.

While the FEP gained major attention in neuroscience and cognitive science through the work of Karl Friston in the 2000s, it is mathematically rooted in ideas that are much older---originating in statistical physics, Bayesian inference, and information theory.

## Metaphysical Assumptions

To start, we need some metaphysical assumptions, which I summarize as *physicalism* (ontology) and *indirect realism* (epistemology).

Physicalists assume that the world is made entirely of physical stuff (matter, energy, fields, etc.) and that all phenomena, including mental events (thoughts, feelings, consciousness), can, in principle, be explained by physical processes and physical laws.
There is no need to appeal to non‑physical substances (like souls or spirits) to explain reality.

While in practice, scientists rarely state their metaphysical position explicitly, but most of them are physicalists.
Still, physicalism remains a philosophical stance, not a requirement for doing science.

Second, indirect realism (also called *representationalism*) is a theory in the philosophy of perception about how we experience the world.
It states that we do not perceive the external world directly.
Instead, we are directly aware only of mental representations (sometimes called sense data or percepts), and these representations are caused by and (usually) resemble external physical objects or events.
There is a physical world "out there," and physical objects and processes emit or reflect light, sound, and other signals.
Our sense organs (eyes, ears, etc.) pick up these signals and send information to the brain.
The brain processes this information and creates an internal representation or image of the world.
Therefore, what we are immediately aware of is this internal image, not the external object itself.
From these internal representations, we indirectly know about the external world.

From a physicalist perspective, the "sense data" or perceptions that indirect realism talks about would be physical phenomena generated by the brain's interaction with the environment. 
The objects in the external world exist independently of our perception (as physicalism holds), but we never experience them directly---only through mediated sensory data.
But there is also a tension: If one believes that all experiences and perceptions are entirely physical processes, there might be questions about how non-physical qualities (like subjective experience or *qualia*) fit into the picture.
Physicalism typically aims to reduce all phenomena, including consciousness, to physical states.
So, there could be questions about whether "sense data" are truly representations in a way that indirect realism requires or whether they are just parts of the physical process.
Moreover, if a physicalist were to take an extreme reductionist view (such as *eliminative materialism*), they might reject any distinction between "sense data" and the brain's processing of physical stimuli, challenging the need for a separate representational layer of perception.
However, this is a minority view in physicalism.

Later I will problematize indirect realism and dwell on the question of whether the free energy principle really requires it.
The list of critics is long, ranging from *phenomenologists* (Husserl, Heidegger, Merleau‑Ponty), *naive realists* (McDowell, Brewer, Searle, Reid), *new realists* (Gabriel, Holt), *idealists* (Kant), *empiricists* (Hume), and other *biological constructivists* (Maturana, Varela).
To move on, I will first assume indirect realism for a moment because it makes the explanation intuitive (but if we think about it a little longer, we run into problems).

From an ontological standpoint Friston clearly assumes an external environment that pushes organisms into some direction when he writes:

>[I]nvoking selectionist arguments; those systems that match their internal structure to the external causal structure of the environment in which they are immersed will be able to minimise their free energy more effectively. -- {% cite friston:2006 %}

One might ask (later) if an environment of a system can be regarded in separation of that system.

## Contingent Complexity

As we will see, the *free energy principle* suggests that our nervous system is actively generating predictions about what should be "out there," and then uses sensory input merely to check whether those predictions are correct.
In that sense, assuming the free energy principle makes our brains into prediction machines with the goal of **minimizing surprise**.

Our body's purpose is to stay alive---to continue with its self‑creation by constructing its own organization and structure (autopoiesis).
It is open to structure but organizationally or operationally closed (implying a causal loop in its opertions).
Its *qualitative identity* can change but its *individual identity* is maintained constant even if it could change, meaning there is some active prevention going on---we do not disintegrate:

>[A molecular autopoietic system (or living being)] is a homeostatic system of chemical production which has its own individual identity as the variable which it maintains constant -- {% cite barry:2012 %}

Some argue that autopoiesis is an intrinsic purpose of an organism from which all other goals derive {% cite virenque:2024 barandiaran:2017 %}.

>Importantly, sense-making is intentional because it implies an organismic perspective from which meaning is brought forth. Because of the organism's precariousness, certain interactions with the environment are either positive or negative from the perspective of the organism. Consider a bacterium swimming up a gradient of glucose. The glucose is meaningful for the bacterium because it provides nutrients that are necessary for maintaining its metabolic processes (i.e., its autopoiesis). The meaning of the glucose gradient only makes sense from the perspective of the bacterium. Take away the bacterium from the situation and the glucose stops having its meaning. What brings forth such meaning is the organism’s adaptive and autopoietic organisation. Such bringing forth of meaning is what enactivists call sense-making. -- {% cite bogota:2024 %} (expample taken from {% cite varela:1997 %})

Others suspect that we, as external observers, project purposiveness onto the organism {% cite cummins:2014 %} and anti-naturalists like Markus Gabriel see meaning as ontological primary {% cite gabriel:2018 %}.
For the FEP, it is not important if purposiveness is a projection or intrinsically given (if meaning is ontologically primary the whole story changes).

What is quite certainly true is that organisms have to deal with perturbations to stay alive in their respective environment (which is determined by the *couplings* between the organism and its environment).
Only surviving organisms can be observerd, which leads to the belief---backed by observation from an external observer---that organisms strive for survival (of the fittest) when, in fact, it might only look like this is the case.

The complexity of the environment and the complexity of the organism co‑evolve over time, and some organisms--like humans--evolved in a direction of higher complexity.
Again, this does not mean that an increase in complexity is a pre-subscribed *telos*.
It is all *contingent*.

As a consequence of an increase in complexity (for some organisms), their environments become noisy and ambiguous, which requires more sophisticated feedback mechanisms to be able to act and survive in such environments {% cite tomasello:2024 %}.
For example, we experience a sort of conscious self-control, for example, when we asked to tell the color (not the written text) of

<span style="color:red">BLUE!</span>

We wanna say "blue" but immediatly interrupt ourselves to say "red".
We can be angry with ourselves, talking to ourselves and judging ourselves as if there is an instance within us that is distinct from us.

Recognizing a predator in the forest already requires more than just pattern matching.
Simple template‑matching reflexes may not work.
In such complex environments, organisms have to temper their reflexes, plan, and evaluate different action sequences before actualizing one action plan.
But a much more complex situation arrives if we have to deal with social systems that are beyond our control but which also provides us with the needs for survival.

Tomasello points out that these abilities result from natures inability to build organisms that can cope with everything (reactively) that nature throws at them.
Instead, nature can build psychological actors:

>It brings forth organisms that function as feedback control systems persuing goals, selecting profound actions and monitoring the process of acting them out. -- {% cite tomasello:2024 %}

He also reminds us that the importance of acting is not defined of how many things an organism can do but *how* these actions are realized.
Maybe we can learn from his emphasis when discussing AI systems where the focus is often on the capabilities, i.e. on the "how many things" AI systems can do (better) neglecting the question of *(self-)control* and *agency*.
Again, for Tomasello the importance is not complexity or variety (of actions) but the levels of control an organism can exert on its environment and itself.

With respect to the free energy principle contingency and unpredicability explodes if the environment of organisms consists of other organisms---when one has to predict the predictions of others.
Social priors privided by caregivers or joint attention and communication become necessary and people might update their internal models by minimizing surprise via social feedback.
We have acted on the whole earth to make our environment more predictable which led to new unpredictablities and risks that we try to make predictable.

## Naturalizing Surprise and Entropy

Since the free energy principle (FEP) is all about minimizing surprise, let's start by pinning down what mathematicians and computer scientists actually mean by "surprise"---how can we naturalize it?
Sure, we all have a gut feeling about it---something surprising is just something we didn't see coming.
More formally, an event is surprising if it's unlikely based on what we already believe.
That is, we were pretty confident it wouldn't happen, and yet---bam---it did.

Take raining frogs, for instance.
That would definitely raise some eyebrows.
But even without biblical weather, everyday life has its surprises.
Imagine rolling a die 10 times and getting a 1 every single time. 
Highly unlikely, right? 
That's the kind of statistical oddity that makes us do a double-take.

Surprise, in this framework, can come from two main sources:

1. The event itself—specifically, how unpredictable (or high in entropy) the event is.
2. Our prior beliefs---how confident we were about what *should* happen.

Now, even if your beliefs are spot on---say, you assume the die is fair, and it actually is fair---you might still see 10 ones in a row.
That's not because your beliefs are wrong, it's just because randomness likes to keep things interesting.
In this case, the surprise comes not from flawed beliefs, but from sheer bad luck.

**Remark:** In the *Bayesian* world, probability isn't about how often something actually happens---it's about what we believe will happen, given what we know---our **degree of belief**.
More precisely, it's a measure of uncertainty or confidence in a particular outcome or parameter, based on the information we currently have.
This is quite different from the *frequentist* view, where probability is all about long-run frequencies.
A frequentist might say, "If we rolled this die an infinite number of times, the proportion of ones would settle at 1/6".
That's the idea: probabilities reflect what would happen over countless repetitions of the same experiment.
But often events cannot be repeated.
Here a Bayesian offers a more flexible, belief-based approach: "Before seeing any data, I assume all outcomes are equally likely (a uniform prior). But if I observe 200 ones in 1000 rolls, I'm updating my belief---maybe this die has a bias".
The more data we get, the more refined our beliefs become.
This belief-updating process is powered by Bayes' theorem, which lets us revise our *prior* beliefs $$p(z)$$ using new data (via the *likelihood* $$p(\text{data} \vert z)$$) to form a *posterior* belief $$p(z \vert \text{data})$$.

$$p(z \vert \text{data}) = \frac{p(\text{data} \vert z)p(z)}{p(\text{data})} = \text{Posterior} = \frac{\text{Likelihood} \times \text{Prior}}{\text{Evidence}}.$$

Bayesian inference is like scientific reasoning on autopilot: start with a hunch, collect some data, update your expectations.
It can be thought of as a natural extension of probabilistic logic---one that allows us to reason about hypotheses, not just outcomes.
In this framework, we can assign a probability to a hypothesis, even if we don't know yet whether it's true or false.
This is a big shift from the frequentist perspective, where hypotheses are usually treated more like yes-or-no questions to be tested, not graded on a sliding scale of belief.

Alright, back to surprise and entropy!

Let's revisit our die.
Suppose the die isn't fair---it actually rolls a 1 with probability 0.6, and the other numbers share the remaining 0.4 equally.
Now, if we think the die is fair, but it keeps landing on 1 suspiciously often, the surprise we feel doesn't come just from the event itself.
It also comes from the mismatch between our internal model (a fair die) and reality (a biased one).

In other words, surprise isn't just about what happened---it's also about what we expected to happen.
When our expectations are off, our surprise spikes.
This is why having a good model of the world---one that reflects actual probabilities---is so important.
The better our model, the better we can anticipate what's likely and stay one step ahead of surprise.

Let us assume a perfect world model.
If $$P(X=1) = p(1) = p_1 = 0.6$$ is the probability of rolling 1 with the die, then the **surprise** $$h$$ of rolling it is

$$h(p(1)) = \ln\left( \frac{1}{p(1)} \right) =  - \ln\left( p(1) \right).$$

It is high if the probability is small, in fact,

$$\lim\limits_{p_s \rightarrow 0}\ln\left( \frac{1}{p_s} \right) = \infty$$

and 

$$\lim\limits_{p_s \rightarrow 1}\ln\left( \frac{1}{p_s} \right) = 0.$$

While we multiply probabilities to figure out the probability of independent events happening together, surprise works differently---it adds up.
Meaning rolling 5 times 1 and then again 5 times 1 makes two times surprised comparing rolling 5 times in a row.
This is because 

$$\ln{\frac{1}{a \cdot b}} = \ln\frac{1}{a} + \ln\frac{1}{b}.$$

Now, to figure out how much we could be surprised by an event---assuming a perfect and known world model in form of a probability distribution of all possible events, e.g. of the outcome of rolling a die---we could compute the **average surprise** of that distribution which is called its **entropy** $$H$$:

$$H(P) = \sum_s p(s) \ln\left( \frac{1}{p(s)} \right) = - \sum_s p(s) \ln p(s).$$

We multiply the surprise of the event $$s$$ by its probability because more liekly events occur more often.
Therefore, they will contribute more to our overall surprise, if we would repeat rolling the die over and over again.
The corresponding **differential entropy** for a continuous random variable $$X$$ with the probability density function $$p(x)$$ can be written as:

$$H(p(x)) = -\mathbb{E}_{x \sim P}\left[ \ln p(x) \right] = - \int p(x) \ln\left( \frac{1}{p(x)} \right) dx.$$

Again, we are taking the average of the log probability over the distribution $$p(x)$$.
This tells you how surprising the outcomes are on average.
The higher the entropy, the more uncertain or unpredictable the variable.

So far so good.
But what happens if our world model is wrong?
Can we learn and adjust it?
And how can we first separate the surprise caused by our incorrect prior beliefs from the overall surprise to then minimize this second source of surprise?

Let us assume we belief in a fair coin, that is $$Q(X = \text{heads}) = Q(X = \text{tails}) = 0.5$$---a reasonable approximation.
I denote our belief as $$Q$$ and its surprise as $$h_q$$.
But now let's assume the coin is rigged: $$P(X = \text{heads}) = 0.99$$ and $$P(X = \text{tails}) = 0.01$$
We belief the probability of ten times heads in row is

$$Q(\text{10 heads}) = 0.5^{10} = 0.001$$

and the surprise is

$$h_q(\text{10 heads}) = \ln 0.5^{-10} \approx 7.$$

But in reality

$$P(\text{10 heads}) = 0.99^{10} = 0.9$$

and 

$$h(\text{10 heads}) = \ln 0.99^{-10} \approx 0.1.$$

Therefore, we are much more surprised as we should be and this surprise is mostly caused by believing in the wrong world model.
This leads us directly to **cross-entropy** $$H(P,Q)$$, which is the average surprise you will get by observing a random variable governed by distributions $$P$$, while believing in $$Q$$.

$$H(P,Q) = \sum\limits_s P(X=s) \ln\left( \frac{1}{Q(X=s)} \right) = \sum\limits_s p(s) \ln \left( \frac{1}{q(s)} \right).$$

We multiply our subjective surprise by the "real" probability which means that if an event is very likely but our surprise for it is high---meaning we do not expect it---the cross-entropy is high as well.
Furthermore, if our beliefs are prefect, i.e. $$P=Q$$ the cross-entropy is equal to the entropy since

$$H(P,P) = H(P)$$

holds.
Also note that the cross-entropy is **assymetric**, that is, $$H(P,Q)$$ is usually not equal to $$H(Q,P)$$.
For example, take the case from before.
In this situation we are less surprised believing in a fair coin while it is rigged  than believing in $$P$$ while it is fair, that is,

$$H(P,Q) = \ln\left( \frac{1}{0.5} \right) \approx 0.69 \leq 0.5 \cdot \left[ \ln\left( \frac{1}{0.99} \right) + \ln\left( \frac{1}{0.01} \right) \right] \approx 2.31 = H(Q,P)$$

Furthermore, and very importantly, for any model $$Q$$, **the cross-entropy can never be lower than the entropy of the underlying generating distribution**:

$$H(P,Q) \geq H(P).$$

Using cross-entropy and entropy, we can now compute the surprise caused by our wrong beliefs:

$$D_{\text{KL}}(P \Vert Q) = H(P,Q) - H(P) = \sum_s p(s) \ln\left( \frac{1}{q(s)} \right) - \sum_s p(s) \ln\left( \frac{1}{p(s)} \right).$$

This can be compressed to

$$D_{\text{KL}}(P \Vert Q) = \sum_s p(s) \ln\left( \frac{p(s)}{q(s)} \right).$$

This is called the *Kullback–Leibler divergence* $$D_{\text{KL}}(P \Vert Q)$$.
It is the divergence of $$P$$ from $$Q$$ (also known as the *relative entropy* of $$P$$ with respect to $$Q$$).
To improve our beliefs we could minimize the Kullback–Leibler divergence, that is, we could

$$\min D_{\text{KL}}(P \Vert Q).$$

However, in machine learning you will usually hear about only minimizing the cross-entropy $$H(P,Q)$$.
This is because we can not change the entropy of "reality", that is, we can not change $$H(P)$$---we can not change reality (without acting) but our beliefs about it.
Thus, mimimizing $$H(P,Q)$$ achives the same goal as minimizing $$D_{\text{KL}}(P \Vert Q)$$.

Of course, the big problem is that we don't know $$P$$!

## The Circularity of Perception

Because of a *drift* towards complexity, many assume that brains began to build models $$Q$$ of the world so that they can explain sensory inputs by **inferring** their **hidden causes**.
For example, your brain might have an internal model of snakes and bears---what they are, how they look, and what they can and cannot do.
Brains can generate missing information, e.g., they can deal with obfuscated objects.
They have an intuitive understanding of the physical world---of movement, speed, and heaviness.
They are biased toward what is usually helpful.

A brain, in that view, is like a judge.
There is the raw sensory data obtained by *observations*, which leads to the generation of predictions.
It is the incoming observation, or what you see.
Furthermore, there are *prior beliefs* learned through experience and evolution.
It is what you usually expect, and if these expectations do not fit your sensory data, you are surprised.
The brain can check how well your explanation matches your observation.

Following this principle, the first component called *accuracy* is defined as a measure of how well the data fit an explanation.
The second component is *complexity*.
It refers to how abstruse this explanation is.
We want to prefer simple models of the world, i.e., simple explanations.

From this we get an obvious tension between the two components.
We probably get the highest accuracy by using a very complex model, but such a model cannot generalize and will produce inaccurate predictions for new situations.
This tension is the **free energy** $$F$$, that is,

$$F = \text{complexity - accuracy}.$$

We (or our brains) want maximal accuracy with minimal complexity.
Thus, following the definition of $$F$$, the brain minimizes free energy $$F$$.
To survive, it requires *high accuracy* **and** *low complexity*.
If this is achieved, then there is only low free energy $$F$$---there is nothing to be gained.

It is assumed that the brain compresses the high‑dimensional sensory data into a somewhat manageable form by finding commonalities and hidden structures in the data.
Furthermore, there might be a lot of information in the data that is not important for the organism's self‑creation and survival.
Especially at a deep, low‑dimensional layer, hidden neurons---also called *latent variables* or *latents*---represent causes.
Importantly, **for such latent neurons there is no ground truth of what their activity should be or mean because they do not interface with the outside world.**
The brain is free to "choose" whichever latents it wants.
This opens up a question: how can the brain test if its world model is a good one if it has no direct access to the world?

We cannot verify the latents, but we can verify their consequences, meaning the brain should be able to reconstruct the source sensory data $$x$$ from its compressed representation, that is, from its latents $$z$$.

**Remarks:** In the original paper $$z$$ is denoted as $$\vartheta$$ and called "parameterise environmental forces or fields that act upon the system".
$$x$$ is denoted as $$\hat{y}$$ and is a function of actions $$\alpha$$ (the effects of the system on the environment).
Furthermore, I will use $$\theta$$ as the parameters of the involved neural networks which, in the paper, is denoted as $$\lambda$$ and called "quantities that describe the system's physical state".
It can also mean the parameters of the Gaussian distribution that are computed by the network.
Friston also differentiate between parameters that can change quickly, slowly and very slowly.

>Factorization of the ensemble density to cover quantities that change with different timescales provides an ontology of processes thatm map nicely onto perceptual inference, attention and learning. -- {% cite friston:2006 %}

Using a probabilistic modeling framework, we can say that, given our beliefs $$z$$ (about how the world works), we should be able to predict the sensory data $$x$$ using our internal model that approximates the true probability distribution $$p$$, meaning that

$$p(x \vert z)$$

should be high where $$z$$ is given, and $$G_{\theta}(z) \approx x$$ is computed by a neural network $$G_{\theta}$$---$$z$$ is given while the brain **generates** $$x$$.

Note that $$z$$ is assumed to be of low dimensionality while $$x$$ is of high dimensionality.
$$G_{\theta}$$ is a *generative model*.
We call $$p(z)$$ *priors* and $$z$$ *causes*.
If $$z$$ is not the cause for $$x$$, we have to change our model to learn different latents $$z$$.

The brain learns these latents or causes by compressing the sensory data.
Given sensory data $$x$$ the nervous system tries to figure out what *causes* $$z$$ produced $$x$$; that is, the system wants to model

$$p(z \vert x)$$

accurately.
This is called *inference* because the system *infers* causes from *observations*---$$x$$ is given while the brain **searches** for $$z$$.

However, this is a hard problem because, unlike generation, there is no function that directly computes $$z$$ given $$x$$---the generative model is not invertable.
One could generate a lot of candidates of sensory data $$x'$$ using the generative model and compare these candidates to the true observation $$x$$.
However, this is not feasible because, even though $$z$$ is of lower dimensionality than $$x$$, there are still too many possibilities.
We say that the problem is *intractable*.

In reality, our brain solves this problem almost **instantaneously**.
If there is a grizzly bear in front of us, we have to figure it out fast!
So how does the brain solve this seemingly impossible task?

Instead of finding the exact latents $$z$$, our brain tries to find an approximation $$q(z \vert x)$$ using a so-called *recognition model* $$R_{\theta}$$, which is distinct from but interdependent on the *generative model* $$G_{\theta}$$.
It works in the opposite direction compared to the generative model by mapping a sensory observation $$x$$ to a distribution of causes:

$$R_{\theta}(x) \approx z.$$

The result is only an approximation---a rough guess $$z$$ of what causes the observations $$x$$.
To improve the guess the brain might do multiple rounds of *recognition* and *generation* in tandem to arrive at an optimal approximation.
This process we can call **perception** and it can only work if *recognition* and *generation* are aligned with each other.
It presupposes such an alignment, thus learning through experience!

In perception, free energy is minimized, meaning that an optimization happens until *recognition* roughly fits *generation*:

$$x \approx G_{\theta}(R_{\theta}(x)).$$

If this is the case, our brain has found an explanation or causes $$z$$ that minimize *free energy*---one that explains the sensory input $$x$$ and aligns well with one's prior beliefs.
Perception basically solves for

$$\text{minimize } \left[ \text{complexity - accuracy} \right] = \min F.$$

It rapidly adjust the activity of latent neurons.

Long‑term learning via experience is required to gradually refine both models---i.e. neural networks---to align them better with each other and to construct better world models.
Both *learning* and *perception* serve the same goal: reducing uncertainty in the environment the organism at least partly constructs by building optimal models of it and finding useful explanations for sensory data within those models.

Now there is a third way to minimize free energy, that is, *acting* which equates to a change in the organisms environment caused by the organism.
Acting can be as simple as turning your head.
It changes the sensory data the organism is *receiving*.
Therefore, one can model the sensory data $$x$$ as a function of action $$\alpha$$, that is, $$x(\alpha)$$.
Consequently, one can interpret perception as an active process, therefore, variational inference becomes *active inference*.
The organism does not receive but selects its sensory data and it can anticipate to minimize "future" free energy actively.
A feedback loop is constructed thus non-linearity is introduced: acting -> perceiving/learning -> believing -> acting.
Each step influences the next one.

## Variational Inference

Up to this point I did not explain how generation and perception can be established, that is, how to find good models $$G_{\theta}$$ and $$R_{\theta}$$.
In the following section, we look at how such models can be build in the field of *machine learning* using the framework of *variational inference*.

First, we assume an unknown latent distribution $$p(z)$$ (causes) and a distribution of our observations $$p(x)$$ (for those causes).
From the rules of probability theory we know that

$$p(x,z) = p(z) \cdot p(x \vert z)$$

holds.
That is, to compute the probability that $$x$$ and $$z$$ occur together, we can first compute the probability of $$z$$ and then multiply the conditional probability of $$x$$ given $$z$$.

### Minimizing Divergence

Our *generative neural network* $$G_{\theta}$$ computes $$p(x \vert z)$$ given $$z$$.
But on a computer we usually do not compute the probability distribution directly.
Because there is only a finite amount of memory, we cannot represent such a distribution exactly.
What one usually does is compute the parameters---means and standard deviations---of a Gaussian distribution.
One might ask: Why is this feasible? Why the Gaussian?
I will explain this later.
For now, assume that it is a good, computable choice.

An artificial neural network does not output probabilities directly but instead the parameters, i.e. *means* $$\mu$$ and the covariance matrix $$\Sigma$$ of the Gaussian.
The actual probability can then be computed using the Gaussian formula:

$$p(x \vert z) = \frac{1}{(2\pi)^\frac{d}{2} \vert \Sigma \vert^{\frac{1}{2}}} \exp\left( -\frac{1}{2} (x - \mu )^{\top} \Sigma^{-1} (x - \mu) \right)$$

where $$d$$ is the dimension of $$x$$. 
This simplifies to 

$$p(x \vert z) = \frac{1}{(2\pi)^\frac{d}{2}} \exp\left( -\frac{1}{2} \Vert x - \mu \Vert^2 \right)$$

if $$\Sigma$$ is the identity matrix.

The objective is now to minimize the mismatch between the "real" data distribution $$p(x)$$ and the distribution $$p_{\theta}(x)$$ that our model approximates.
As I said before, we do not know $$P$$, so we approximate it by sampling from our environment.

As mentioned before, we can measure the difference between two distributions by using the Kullback–Leibler divergence:

$$D_\text{KL}(p(x) \Vert p_{\theta}(x)) = \sum_x p(x) \ln\frac{p(x)}{p_{\theta}(x)}.$$

We want to minimize the $$D_\text{KL}$$.
Any mismatch between the two distributions will result in $$D_\text{KL} > 0$$.

By using log rules we can convert the equation to:

$$D_\text{KL}(p(x) \Vert p_{\theta}(x)) = \sum_x p(x) \ln p(x) - \sum_x p(x) \ln p_{\theta}(x).$$

The first term is the entropy of the data (a measure of uncertainty inherent in the observations).
This entropy only depends on the true data.
Therefore, we cannot optimize it away---we cannot influence it---thus we can regard it as a constant.
Consequently, we can focus solely on the second term and minimize

$$-\sum_x p(x) \ln p_{\theta}(x)$$

or

$$\arg\max\limits_{\theta} \sum_x p(x) \ln p_{\theta}(x).$$

Again, we do not know $$p(x)$$.
We only have access to $$N$$ samples from it.
Therefore, we approximate:

$$\sum_x p(x) \ln p_{\theta}(x) \approx \frac{1}{N} \sum\limits_{i=1}^N \ln p_{\theta}(x_i).$$

The averaging works because high-probability samples should appear more often in our data; their contribution remains consistent after averaging.

Up to this point, our *generative model* maps $$z$$ to $$p_{\theta}(x \vert z)$$.
It outputs means and standard deviations for Gaussians.
What is left is the expression $$p_{\theta}(x)$$.

To compute the total probability of an observed value $$x$$, we must take into account that different values of the latent $$z$$ could have generated it.
Mathematically we sum the probability that each latent value could explain our observation, weighted by how *likely* that latent value is according to the prior distribution:

$$p_{\theta}(x) = \sum p_{\theta}(z) p_{\theta}(x \vert z).$$

Both the parameters of the prior and the weights that transform the latent into the conditional distribution are what our model needs to learn.

### How Generative Models Learn

How do we find or optimize good parameters $$\theta$$ for our generative model $$p_\theta(x \vert z)$$ and our prior beliefs $$p_{\theta}(z)$$?
We basically follow five steps:

**(1)** Take a data point from the training dataset.

**(2)** Randomly sample many candidates $$z_k$$ from our current prior $$p_{\theta}(z)$$.

**(3)** Map each $$z_k$$ through the generative model $$G_{\theta}(z)$$ to get means $$\mu_k$$ and our covariance matrix $$\Sigma_k$$. Remember that the generative model is used to model $$p(x \vert z)$$, i.e. to generate sensory data $$x$$ given the causes $$z$$.

**(4)** Given $$\mu_k, \Sigma_k$$ we compute, for each $$z_k$$, the value of $$p_{\theta}(x \vert z_k)$$ (likelihood) where 

$$p_{\theta}(x \vert z_k) \sim \exp\left(\frac{-\Vert x-\mu_k \Vert^2}{2} \right).$$

**(5)** Compute the average log-likelihood 

$$\ln\left[\sum_{z}^{\{z_k\}} p_{\theta}(z)  p_{\theta}(x \vert z) \right].$$

We iteratively update $$\theta$$ to maximize our log-likelihood across the dataset, usually using thetaopagation and gradient descent with stochastic sampling.

**Remark:** The brain does not use backpropagating or gradient decent, consequently, Friston relies on *predictive coding* which is neurally plausible: It mirrors cortical feedback and feedforward loops, with ascending prediction errors and descending predictions.

### Recognition as Guided Sampling

One problem we face is step **(2)**, especially if the latent space has high dimensionality.
I already mentioned that it is not feasible to generate a bunch of possible sensory data to compare them with $$x$$ to find good possible causes $$z$$.
There are usually too many possible causes, and because we approximate our unknown prior distribution by sampling, we would need to somehow cover the whole latent space.
This is computationally infeasible because the number of required samples increases exponentially with the number of dimensions of the latent space (*curse of dimensionality*).

However, usually only a tiny fraction of those causes lead to our observation---most latents do not explain the data!
Thus, we basically want to sample those causes $$z$$ that are likely to result in $$x$$.
Importantly, while we are okay with ignoring causes that do not matter, we do not want to miss rare causes.
The idea is to oversample rare cases instead of risking missing them, and then adjust for this oversampling mathematically.

To know which regions we want to sample from, we train a separate neural network $$R_{\theta}$$ to serve as our "guide".
It is our *recognition model* $$R_\theta$$ that tries to approximate the inversion of the *generative model*.
It learns a **variational distribution** $$q_{\theta}(z \vert x)$$ which predicts, for each data point $$x$$, the distribution over the latent space, focusing on regions that have likely generated $$x$$.

Consequently, our formula for $$p_{\theta}(x)$$ changes from

$$p_{\theta}(x) = \sum p_{\theta}(z) p_{\theta}(x \vert z) = \mathbb{E}_{z \sim p_{\theta}(z)} \left[ p_{\theta}(x \vert z) \right]$$

to

$$p_{\theta}(x) = \sum \frac{p_{\theta}(z)}{q_{\theta}(z \vert x)} q_{\theta}(z \vert x) p_{\theta}(x \vert z).$$

which can also written as the expected value of the likelihood scaled by the ratio of sampling frequencies over the distribution $$q$$:

$$\mathbb{E}_{z \sim q_{\theta}(z \vert x)} \left[ p_{\theta}(x \vert z) \frac{p_{\theta}(z)}{q_{\theta}(z \vert x)} \right].$$

Mathematically these two equations are equivalent.
However, note that we are using a finite number of samples and that $$q_{\theta}(z \vert x)$$ determines which $$z_k$$'s we continue training on.
Therefore, we are computing an estimation of the expected value.
$$\frac{p_{\theta}(z)}{q_{\theta}(z \vert x)}$$ is an adjustment for sampling bias: it adjusts the weight for events we sample more frequently than they occur (e.g., rare but important cases).

Now we take the logarithm to arrive at our term to maximize:

$$\ln p_{\theta}(x) = \ln \mathbb{E}_{z \sim q_{\theta}(z \vert x)} \left[ p_{\theta}(x \vert z) \frac{p_{\theta}(z)}{q_{\theta}(z \vert x)} \right].$$

However, the logarithm of an expectation is hard to optimize.
It is noisy and unstable.
Furthermore, computing the gradient would require that we first compute the average and only then propagate the error.
This means that after computing $$z$$ using our *recognition model*, we would need to first compute multiple probabilities for $$x$$ given $$z$$ using our *generative model* before starting backpropagation (i.e. $$\theta$$-optimization).
It is a computational bottleneck.

Instead, we would like to swap the order like this:

$$\mathbb{E}_{z \sim q_{\theta}(z \vert x)} \ln \left[ p_{\theta}(x \vert z) \frac{p_{\theta}(z)}{q_{\theta}(z \vert x)} \right]$$

But the log of an average and the average of a log are not equal.
However, since the logarithm is a concave function we get:

$$\ln \mathbb{E}[X] \geq \mathbb{E}[\ln X]$$

or in our case

$$\ln \mathbb{E}_{z \sim q_{\theta}(z \vert x)} \left[ p_{\theta}(x \vert z) \frac{p_{\theta}(z)}{q_{\theta}(z \vert x)} \right] \geq \mathbb{E}_{z \sim q_{\theta}(z \vert x)} \ln \left[ p_{\theta}(x \vert z) \frac{p_{\theta}(z)}{q_{\theta}(z \vert x)} \right].$$

The right-hand side is a lower bound, also called the *model evidence* or *evidence lower bound* (ELBO).
The negative ELBO is known as *variational free energy*.
Maximizing ELBO also maximizes our original objective, but maximizing ELBO is computationally much easier.

So we want to maximize the right-hand side:

$$\ln p_{\theta}(x) \geq \mathbb{E}_{z \sim q_{\theta}(z \vert x)} \ln \left[ p_{\theta}(x \vert z) \frac{p_{\theta}(z)}{q_{\theta}(z \vert x)} \right]$$

and, using log rules, we arrive at the following:

$$\ln p_{\theta}(x) \geq \underbrace{\mathbb{E}_{z \sim q_{\theta}(z \vert x)} \left[ \ln p_{\theta}(x \vert z) \right]}_{\text{accuracy}} - \underbrace{\mathbb{E}_{z \sim q_{\theta}(z \vert x)} \left[ \ln \frac{q_{\theta}(z \vert x)}{p_{\theta}(z)} \right]}_{\text{complexity}}.$$

We arrive at a beautiful interpretation.
The first term 

$$\mathbb{E}_{z \sim q_{\theta}(z \vert x)} \left[ \ln p_{\theta}(x \vert z) \right]$$ 

is the *accuracy* mentioned before, and the second term 

$$\mathbb{E}_{z \sim q_{\theta}(z \vert x)} \left[ \ln \frac{q_{\theta}(z \vert x)}{p_{\theta}(z)} \right]$$ 

is the *complexity*.
The second term is also the negative of the Kullback–Leibler divergence between the distribution $$q$$ and the prior distribution of latents, i.e. $$D_\text{KL}\left[ q_{\theta}(z \vert x) \Vert p_\theta(z) \right]$$.
It prevents the "guide" from becoming too specialized and inventing overly complex distributions of latents.
It ensures that the distribution of latent factors for any specific data point (observation) does not stray too far from our general prior belief about the latent space as a whole.
In other words, it ensures that the latent space remains smooth and numerically well-behaved.

## The Organism as Its Own Evidence

Friston et al. importantly consider the observer perspective and argue that, in actuality, the **system/agent/organism is not trying to maximize reward**.
It is the prior belief that guides *perception* and *action* to construct an environment that (partly) aligns with the organism's beliefs.
In that sense, organisms are (partly) their own self-fulfilling prophecy---they constantly try to "make true" what they "believe" while, at the same time, the filtered and selected "truth" changes their beliefs.

>The inherent circularity obliges the system to fulfil its own expectations. In other words, the system will expose itself selectively to causes in the environment that it expects to encounter. [...] Anthropomorphically, we may not interact with the world to maximise our reward but simply to ensure it behaves as we think it should. -- {% cite friston:2006 %}

If an insect that has evolved to expect its environment to be dark it will use its action, e.g. movement, to keep its environment dark.
It acts to keep its sensory data consistent with its belief---moving into shadows, avoiding light.
To an external observer, this looks like as if the insect has learned that darkness is good, and has been reinforced to prefer it but from the insect's own perspective, it's just acting to reduce surprise by finding sensory data that matches its expectations.

Consequently, **value** is not the interpretation of an external signal (*reward*) but is constructed by a prior belief about what states minimize surprise---what states are "normal" or "preferred" and since experience and prior belief influence each other in a feedback loop, we can hardly observe direct causal relation between the two.
Value is basically the inverse of surprise and instead of figuring out which states are good based on reward, the FEP says: Organisms are already biased to expect to be in certain types of states (like being alive, warm, safe, fed).
These are **low-surprise states**---what the organism is used to.
Therefore, organisms act not to find new rewards, but to stay within those expected (familiar) states {% cite friston:2011 %}.
One can still include costs or punishments in the model---but they are treated as part of the prior beliefs about what kinds of states should be avoided.
For example, if being in pain is costly, the organism has a prior belief that "I don't usually feel pain".

>The problem of finding sparse rewards [...] is nature's solution to minimizing entropy. -- {% cite friston:2011 %}

That is, rewards are rare and localized because organisms are repeatedly drawn to a small set of predictable, low-surprise states—such as food, shelter, and safety.

>These dynamics rest on complementary self-construction (autopoiesis) and destruction (autovitiation). -- {% cite friston:2011 %}

In other words, the organism builds up behaviors that help it stay viable, and eliminates those that lead to bad outcomes.
Behaviors emerge because the agent must stay in a balance with its environment---not too chaotic, not too static---to continue existing.

So why doesn’t the agent settle in one fixed state?
Because organisms or living systems---like animals or humans---are not static systems.
They have to continuously interact with their environment to survive.
We cannot just stay in a single "perfect" state and even "being alive" requires constant change (eating, breathing, sleeping, thermoregulating, moving around).
If we would stay in one place (one state), we would have violated our own prior beliefs about what kinds of sensory inputs and physiological states we expect to have over time.
We are in *itinerancy*: moving through a cycle of low-surprise states, not staying in one.
Thus, *itinerant policies* arise because staying in a single state forever would be more surprising (and thus less viable) than cycling through a set of familiar, predictable states over time {% cite friston:2011 %}.

>To minimize surprise, organisms must move through a predictable sequence of diverse but familiar states.

Learning, perception, and action then is about **adjusting expectations** and **updating generative models** on different time scales. 
To the best of my knowledege, it is unclear in which way one dominates over the others but it seems as if all three are highly depend on each other.
From this I conclude that it is important to dwell on problems, to think, to do the hard work to adjust long-term causes to be able to construct a reality/environment that makes sense consistently.
But it is also important to act in such a way that one is exposed to surprise, at least from time to time.

>Without surprise we are not adapting our belief system.

A realist will argue that the survival of an organism is bound to the accuracy of its model about reality---meaning its expectations align well with it, therefore, we can assume that we more or less experience reality as it is.

>Because the free energy is low, the inferred causes approximate the real environmental conditions. This means the systems physical state must be sustainable under these environmental forces, because each system is its own existence proof. -- {% cite friston:2006 %}

A construcitivst will point out that our beliefs (latents, causes) only tend to generate sensory data and that we can not jump from this to an objective reality or "the truth" which is "out there".
The causes we believe in may have little or nothing to do with the "real" causes---if such causes even exist.
This challenges my earlier assumption of *indirect realism*.
Causes are just effective in generating sensory data---data that is already constructed by the very same system which trys to reconstruct them.
While I don't see constructivism as an anti-realism, constructivist might doubt any sort of realism that rejects constructivist elements and that assume that we can reach an observer-independent "objective turth".
Constructions are contingent and constrained---they work in the context of a history of evolution but they are not "the truth" and, in my opinion, they can not be separated from the observing system that construct them. 

Because *recognition* and *perception* work in tandem, we can say that changing our expectations literally changes our perception---it changes our environment.
But at the same time, our perception changes our expectations if we are surprised.
Thus the FEP highlights the circularity of *perception* and *action* or *belief* and *reality* because organisms minimize free energy not only by adapting their beliefs to fit their environment but also by adapting their environment to fit their beliefs.
It assumes an environment that is acted upon effectively (which is a somewhat *optimistic* outlook and motivator to make use of our imagination to construct beliefs of a less cruel world).

Also, I want to emphasise, that surprise that leads to a loss of one's well-known environment, can be painful because one's prior beliefs about the world are violated---you enter a state of increased entropy.
This might lead to a temporary suspension of meaning because you no longer know what to expect, or how to act effectively.
Adaptation is painful because it involves breaking down a stable, low-free-energy model, and building a new one that's better at minimizing future surprise.
It is especially painful if the previous model had high precision priors (e.g. strong, confident beliefs), the environment changes faster than the model can update (e.g. economic instability, cultural shifts), or there is no clear path to a new, stable *attractor state*.

In today's society the individual is expected to be flexible, to constantly re-skill and adapt to environmental changes.
For example, we switch our jobs more and more frequently, which is often seen as desirable or necessary.
Flexibility---constantly updating beliefs, changing environments, shifting roles---might sound adaptive.
And in a way, it is.
But under FEP, excessive flexibility undermines model stability.
Chronic uncertainty leads to chronic prediction error, which is metabolically and psychologically exhausting and if we are constantly updating our generative model without forming stable priors, we fail to build any useful expectations.
This creates a sense of incoherence or alienation---a **loss of identity**; a lived experience of "nothing makes sense".
So in modern systems that demand rapid flexibility, we're often forced to dissolve stable models faster than we can reconstruct them.
The result? Anxiety, burnout, and a background hum of ontological instability.

The FEP suggest that there is a balance to be found: exposure to surprise and a certain "willingness" to adapt without loosing ones identity and purpose.
I find it desirable to recognize, or at least consider that emotional pain may not reflect maladaptation but the cost of updating one's expectations in the face of an unstable world.
Flexibility, when demanded too often or too rapidly, erodes the very models that minimize surprise over the long term.
Thus, while adaptability is vital, stability is sacred.

Let me finish with some speculations.
I have the gut feeling that a strange, perhaps paradoxical, alliance forms here between Kant, Heidegger, and (embodied) constructivists like Maturana, Varela, and Luhmann. 
Each offers a piece of the puzzle when viewed through the lens of the free energy principle.
Kant emphasized the structuring role of *a priori* reason---the internal scaffolding that makes experience possible.
Futhermore, FEP mirrors Kant's view that perception is constructed by the mind's active faculties.
The world "as it is" is unknowable directly---we only perceive it through mental filters and structure.
Heidegger, in contrast, stressed the *immediacy (i.e. pre-conceptual) and embeddedness of experience*: we are not detached observers but beings thrown into a meaningful world that is not build in the mind. 
Heidegger's philosophy fits tightly with theories that view perception as *embodied*, *skillful*, and *embedded in practical action*, not representational---just like *enactivism* and Gibson's *direct perception*.
Constructivists such as Maturana and Varela also went with Heidegger but moved the world into the system itself, arguing that *cognition arises through dynamic interaction with an environment* that is, in part, *selected* or *enacted* by the organism itself.

Yet, each position has its blind spots. 
Kant may have overestimated the sovereignty of internal reason;
Heidegger arguably romanticized lived immediacy; and constructivists often risk underestimating the constraints imposed by sensory data---or more precisely, by the need to stay within states that minimize surprise. 
Yes, action and cognition are deeply intertwined (Maturana, Varela), and yes, the world is our best model of itself (Heidegger) but we still model it and it pushes back (Kant).

If we want to go full Heideggerian, we probably need a different interpretation where free energy minimization becomes about maintaining practical grip on the world, not constructing a picture of it and where prediction errors don't refer to "incorrect beliefs" but breakdowns in coping (e.g., when the tool "refuses" to function).
We would have to move to a life-mind continuity thesis (LMCT) (see e.g. {% cite bogota:2024 %}).
It would be interesting and maybe refreshing to depature from the representation-driven approaches (it is unsurprising that one of the most famous AI conferences is called "International Conference on Learning Representations").
But this would be another topic for another time.

---------------

## Appendix

The generative neural network $$G_\theta$$ computes an approximation of $$p(x \vert z)$$ given $$z$$ but as a Gaussian distribution (its means and standard deviations).
So, why using the Gaussian is a good choice?

The central limit theorem (CLT) states that:

>If you take a large number of independent and identically distributed (i.i.d.) random variables with finite mean and variance, then their properly normalized sum tends toward a Gaussian (normal) distribution, regardless of the original distribution of the variables.

The Gaussian appears often in nature because of the aggregation of many small effects and it has the maximum entropy among all distributions with a given mean and variance.
It is the "most random" or "least biased" which makes it a natural default in many uncertain systems.

So first, it is mathematically convenient.
The Gaussion has a very simple functional form:

$$q(z) = \mathcal{N}(z \vert \mu, \Sigma)$$

It is fully escribed by just two parameters: mean $$\mu$$ and covariance $$\Sigma$$.
This makes optimization tractable because:

+ Expectations like $$\mathbb{E}_q[\ln p(x,z)]$$ can often be computed in closed form or with low-variance Monte Carlo estimates.
+ (Differential) entropy $$H(P)$$ is known analytically for a Gaussian. It is $$H(\mathcal{N}) = \frac{1}{2} \ln((2\pi e)^d \vert \Sigma \vert)$$, which simplifies the so-called evidence lower bound (ELBO):

$$\text{ELMBO} = \mathbb{E}_q[\ln p(x,z)] - \mathbb{E}_q[\ln q(z)].$$

Secondly, the Gaussian is reparameterizable.
Instead of sampling $$z \sim \mathcal{N}(\mu, \sigma^2)$$ directly, we can rewrite it as: 

$$z = \mu + \Sigma^{1/2} \epsilon, \quad \epsilon \sim \mathcal{N}(0, I).$$

Now, we are sampling from a fixed standard normal $$\epsilon$$, and transforming it using differentiable operations involving $$\mu$$ and $$\Sigma$$.
Because $$z$$ is now a function of $$\mu$$ and $$\Sigma$$ its gradients can flow.
It makes the entire process differentiable with respect to the parameters because $$\epsilon \sim \mathcal{N}(0, I)$$ is independent of these parameters, enabling optimization via gradient descent.
In other words, the randomness becomes independent of ones model's parameters, and the transformation from parameters to the sample becomes differentiable.

Thirdly, even if the true posterior is not Gaussian, many high‑dimensional distributions exhibit approximately Gaussian local behavior (via central limit theorem effects or Laplace approximations).
Furthermore, Gaussians are smooth and unimodal, making them a good first approximation for a wide variety of distributions.

Then there is the topic of computational efficiency.
Working with Gaussians keeps the variational family simple because (1) linear algebra operations are efficient, (2) sampling is cheap, and (3) we avoid expensive numerical integration or more complex families that would be harder to optimize.

Lastly, this framework is flexible.
Even though a single Gaussian is unimodal, we can extend it by using mixtures of Gaussians, normalizing flows, and Gaussian processes (an infinite‑dimensional generalization).

In summary: the Gaussian is used because it strikes the right balance between **expressiveness** (locally), **tractability** (closed‑form solutions and gradients), and **optimization‑friendliness**.

## References

{% bibliography --cited_in_order %}