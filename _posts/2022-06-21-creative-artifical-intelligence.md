---
layout: post
title:  "Creative Artificial Intelligence"
---

## Panel Discussion

On the 20th of Mai, I joined a penal to discuss the role of *artificial intelligence (AI)* in the *creative process*.
The panel was held in the context of the Munich Creative Business Week by the Wavelet (University for Music and Theater) and the [Munich Center for Digital Science and AI](https://sites.hm.edu/mucdai/news_mucdai/details_news_mucdai_26944.de.html).
Let me first summarize our discussion:

The penal consisted of two computer scientists and two artists.
After each of us gave his/her opening statement, we discussed different aspects of AI in the realm of art, science, and economics.
We came close to a convention regarding the question of how creative AI can be.
We agreed that, to this day, AI is yet another tool, similar to pen and paper, to support humans in their creative work.

In general, it wasn't easy to talk about *creativity* and *intelligence* because each of us had a slightly different definition.
One participant rightfully problematized the black box principle of many modern machine learning techniques, e.g., deep neural networks.
Despite their effectiveness, real-world decisions are still made on the basis of human understanding.
Since neural networks do not provide an "easy" explanation of how they draw their conclusion, it is often necessary to go back to simpler models such as statistics to explain the neural network.

One artist described her experience with the chatbot *Replika*, an AI that tries to mimic your behavior to become your friend or romantic partner.
She was pretty impressed. 
Some people fell in love with the machine -- they reported strong emotions.
However, it was always possible for her to spot a machine-like behavior behind the scenes.

The other artist argued that AI opens up possibilities for novel artistic expressions.
She assumes that working with AI will be her daily bread and butter.
She also criticized the *cult* around famous artists by arguing that most of the time, incredible art resulted from multiple people.

>There is no single genius.

I stated that AI could potentially increase the pressure on the artist because it will become more and more challenging to create something unique and even harder to create something non-reproducible.
*Commercial art* -- if we can call it that way -- will become more competitive and speculative.

## Defining Artificial Intelligence

In my opinion, without *artificial intelligence AI* there is no *artificial creatifity AC*.
So let us talk about AI.

In his paper *What is Artificial Intelligence?* {% cite mccarthy:1998 %} published in 2004, John McCarthy stated:

>It is the science and engineering of making intelligent machines, especially intelligent computer programs. It is related to the similar task of using computers to understand human intelligence, but AI does not have to confine itself to methods that are biologically observable.

In his definition, we do not find any explanation of what he actually means by *intelligence* which is unfortunate.
Alan Turing, the father of computer science, gave us at least some criteria at hand.
He asks in his article *Computing Machinery and Intelligence* {% cite turing:1950 %} more than 50 years before McCarthy

>Can machines think?

And from there, he offers us his famous and widely criticized *Turing test*.
The test consists of a human interrogator trying to distinguish between a computer and a human based on text responses.
If a human can not tell if he or she interacted with a machine or another human being, the machine passed the test and can be regarded as *intelligent*.

I call this *simulated intelligence* or *weak AI*.
It is a requirement, but it is not sufficient.
Compared to a baby, a machine can **appear** to be much more intelligent, but a baby **is** intelligent while a machine is not.
Therefore, the *Turing test* does not help spot *natural intelligence*.
It might even lead us on a path where we become experts in *fake/simulated intelligence* by wasting all our resources.

Stuart Russell and Peter Norvig published their book *Artificial Intelligence: A Modern Approach* {% cite russel:2010 %} which is one of the leading textbooks for the subject.
They differentiate four different goals or definitions of AI:

+ human approach
  + systems that think like humans (*strong AI*)
  + systems that act like humans (*weak AI*)
+ ideal approach
  + systems that think rationally
  + systems that act rationally

Alan Turing's definition of AI would have fallen under the category of *systems that act like humans*.
A comprehensive, thus useless definition would be the following:

>Artificial intelligence is intelligence demonstrated by machines.

Again we avoid the definition of *intelligence*.
Is an ant intelligent?
Does the universe implement some sort of intelligence?
Is consciousness or liveliness a precondition for intelligence?
Based on our definition of *intelligence*, everything from simple algorithms and machines (including the thermostat) to neural networks can be either called *intelligent* or not.

These definitions are somewhat fuzzy and vague because we do not know what intelligence is.
We have an intuitive understanding of it, but we can not express what it is linguistically.
In its simplest form, artificial intelligence is **a field** (not a machine) that combines computer science, data science, machine learning, deep learning, robotics, neurosciences, and more **to enable problem-solving**.

In his book *Birth of Intelligence* Daeyeol Lee writes:

>Intelligence can be defined as the ability to solve complex problems or make decisions with outcomes benefiting the actor and has evolved in lifeforms to adapt to diverse environments for their survival and reproduction. -- Daeyeol Lee

Daeyeol Lee argues that a few essential principles emerge from an evolutionary perspective.
For example, different lifeforms can have very different types of intelligence because they have other evolutionary roots and have adapted to different environments. 
It is misleading, unhelpful, and meaningless if we try to order different animal species on a scale of intelligence.

Following his advice, comparing human and artificial intelligence may be meaningless.
Machines can solve specific problems much more efficiently than humans.
At the same time, they are hopelessly overwhelmed in dealing with the most simple tasks.
Humans and many other animals can not only identify complex objects and produce agile behaviors, but they can do this in so many different ways in many different environments.
Concerning specialization, machines are still infants.
Therefore, I suggest that we use three different terms to distinguish three different kinds of intelligence:

+ **lively intelligence:** the intelligence of living beings
+ **human intelligence:** the intelligence of human beings (a subset of lively intelligence)
+ **artificial intelligence:** the intelligence of machines and programs

By using these categories, I call machines not *human-like intelligent* but *artificial intelligent* which is a distinct category for a special kind of intelligence.

>Artificial intelligence (AI) is an ability of a machine or program to solve specific problems.

## A Brief History of AI

The general public was first impressed by *artificial intelligence* when it became clear that computers would beat any chess grandmaster of the future.
Soon after the success, accompanied by big headlines, critiques argue that the program won via a sort of *brute-force approach* which can not be called *intelligent*.
Based on a database, it just searches the whole state space.
In contrast, a chess master finds good moves through pattern matching and intuition.
He or she is very limited in searching the state space.

The next step toward more sophisticated artificial intelligence was made by *AlphaZero*, a program that plays board games with superhuman skill.
It famously discovered several chess strategies and even invented one.
It certainly seems like a machine eclipsing human cognitive abilities.
But *AlphaZero* needs to play millions more games than a person during practice to learn a game.

What followed was the artificial intelligence called *AlphaGo* which was able to beat the world's best *Go* players.
It produced a lot of headlines and a public discussion fueled by the media.
The significant difference compared to former approaches was that *AlphaGo* not only partially searched the state space but also constructed a cost function autonomously.
*AlphaGo* is based on *reinforcement learning*, i.e., it uses rewards and punishments to train itself while playing millions of games.
The only prior defined goal was to win the game; thus, no evaluation strategy of a game state was given.

In 2019 the success was translated to another AI called *AlphaStar*.
*AlphaStar* was able to defeat one of the best players in a real-time strategy game (*Starcraft II*).
Again the machine required millions of games and could only play a single map.

*AlphaGo* as well as *AlphaStar* revealed novel strategies that human players could potentially adapt.
Furthermore, it developed a distinct game style.
For example, *AlphaGo* tends to avoid pressing the issue.
It sometimes makes seemingly suboptimal moves while staying slightly ahead.
*AlphaStar* lost a game because it moved into an unobserved game state and heavily overreacted.
The observers called it *weird gameplay*.

These examples show that *artificial intelligence* can already create something novel that we identify as creative.
Finding a new strategy in an RTS game is undoubtedly a creative process.
The AI is perfectly able to simulate* intelligence and creativity *but has a fundamentally different quality than the living beings.
As *Yuval Noah Harari* stresses: 

>Even though we do not really understand intelligence and consciousness, artificial intelligence is perfectly able to hack humanity.

## Shortcomings of AI

However, it also shows that *artificial intelligence* is still highly specialised in solving one specific task.
There is still no fundamental difference between modern AI and a thermostat.
Regardless how sophisticated an AI is, it can only solve a specific problem -- it can not transfer knowledge or any strategy to a new area.
While public figures, such as *Elon Musk*, make horrific claims about AI to push their story to please and attrackt financier, experts are aware of its shortcomings and the huge difference between human and artificial intelligence.
*Francois Chollet*, the creator of Keras, stated:

>What makes human intelligence special is its adaptability; its power to generalize to never-seen-before situations -- Francois Chollet

*Chollet* argues that it is misguided to measure machine intelligence solely according to its skills at specific tasks.
Unlike most animals humans do not start out with skills.
As a baby we are horribly helpless but we start out with a broad ability to acquire new skills.
A chess player can transfer his abilities to other areas.
For example, in World War II, chess players joined the allied forces to decrypt military messages from Nazi Germany.
Humans can solve tasks of similar difficulty which is a very different capability compared to what AI currently does.

*Elizabeth Spelke* describes in her articles that even 3-month-olds appear puzzeled when someone grabs something in an inefficient way.
Humans seem to be born with an innate ability to quickly learn certain things, such as what a smile means or what happens if you move some object.
Even the most sophisticated artificial intelligence of our age can not grasp such concepts.
A self-driving car can not predict from *common sense* what will happen if a tree falls down on the street; it can not translate knowledge to an unexperienced situation.

*Josh Tenenbaum*, a professor in MIT's Center for Brains, Minds & Machines thinks that AI programs will need a basic understanding of physics and psychology in order to acquire and use knowledge as efficiently as a baby.

>At some point you know, if you're intelligent; you realize maybe there's something else out there -- Josh Tenenbaum

But is this enough?
Does this even lead to the right track?
*Daeyeol Lee* argues that true intelligence (*lively intelligence*) should promote -- not interfere with -- the replication of the genes responsible for its creation.
The will to reproduce and to self-preserve ones own being and species injects the world with *meaning*.
Until then, machines will always only be surrogates of human intelligence, which unfortunately still leaves open the possibility of an abusive relation between people and artificial intelligence.
**Replication** and **self-preservation** seems to be the one and only predefined rule at which living beings operate.

Today, a lot of hype still surrounds AI development, which is expected of any new emerging technology in the market.
Surely we accomplished a lot in building more sophisticated thermostats but it may be the case that we did not come any closer towards creating *human intelligence*.
The overenthusiasm of the tech-industry is slowly crumbeling and a period of disillusionment is on the horizon.
Maybe this gives us the possibility to breathe and think about the technology we really wanna create and use.

## Creativity

The question we discussed at the penal that is exciting and frightening at the same time is: 

>To what extent can artificial intelligence challenge human creativity?

So far, we have established a clear difference between *human* and *artificial intelligence*.
If creativity requires intelligence, does the question under this assumption matter?

Before tackling this question, we have to define or at least get an intuitive idea of what we mean by *creativity*.
This is, of course, a complex and maybe even impossible task.

First, we can attribute creativity to a subject, object or process.
A creative product or idea has to be **novel** and **useful** (which might be highly subjective).
Novelty, as well as usefulness, can be either *psychological (P)*, i.e., it is novel/useful to the agent that produces it, or *historical (H)*, i.e., novel/useful to society.

Every human being is creative.
In other words, creativity is not reserved for a special elite; instead, it is a feature of human intelligence in general.
Creativity involves everyday capacities, e.g., perception, searching for a structure, reminding, and combining concepts.

Lastly, creativity involves motivation and emotion and is closely linked to cultural and personal/subjective factors.

## Artificial Creativity

In her article *Creativity and Artificial Intelligence* {% cite boden:1998 %} *M. A. Boden* lists three ways to create new ideas:

1. combination of familiar ideas
2. exploration of the conceptual space
3. transformation of previously impossible ideas

Since creative products have to be novel and useful, artificial creative systems are typically structured into two phases:

1. **generation** and
2. **evaluation**.

Artificial intelligence can help us with the generation.
Algorithms can realize all three ways of idea creation, but at some point in the process, subjective factors have to come into play.
Machines and algorithms are not motivated by anything; they are not emotional.

Let us look at a famous example: the proof of *the four-color problem*.
The four-color problem asks if it is possible to color a map in such a way that there are no two adjacent parts with the same color, using only four colors.
It was proven in 1976 by *Kenneth Appel* and *Wolfgang Haken* with the help of a computer.
An algorithm helped check different possibilities;
Clearly, the machine is part of the creative process of proving a mathematical statement, but at the same time, it is instructed by the programmers who injected their subjective motivation and cultural background.
They decided to take up the task of proving the statement.
They decided it was worth their time and developed a strategy that a machine could execute.

No artificial intelligence decided to prove *the four-color problem*, but humans did.
Proving a mathematical statement does not start with the proof itself.
This point is important!
Scientists choose what they want to prove and what they think is essential.
This choice can not be reduced to an *objective, rational*; it is a *subjective evaluation of values and meaning*.
But to this day, machines can not infuse symbols with meaning.
They work on a purely syntactical level.

This is no argument against *simulated creativity*.
Artificial intelligence is perfectly suitable to find, generate, combine or create what we humans value and attach meaning to.
Therefore, AI can bring forth what we perceive to be creative.

>In principle, artificial intelligence can create something novel that is meaningful to us.

For example, in August 2015, researchers from Tübingen created a convolutional neural network that uses neural representations to separate and recombine the content and style of arbitrary images.
The network can turn images into stylistic imitations of works of art by artists such as a *Picasso* or *Van Gogh* in about an hour.
In October 2018, the [Portrait of Edmond de Belamy](https://www.christies.com/features/A-collaboration-between-two-artists-one-human-one-a-machine-9332-1.aspx), an algorithm-generated print, was sold for $432 500.
In both cases, the AI (1) combined familiar ideas, (2) explored a conceptual space, and (3) transformed previously impossible ideas.

## The Speed of Disruption

Humans have created and enjoyed all art forms for viewing, aesthetic, and even therapeutic purposes.
We should not forget that technology has impacted how art is created and enjoyed for the last 100 years.
The invention of *portable paint tubes*, for example, enabled artists to paint outdoors and sparked a contingent of stunning landscape and horizon paintings.
Today cameras and software like *Photoshop* have redefined how art is created and enjoyed.
Even if we disagree on what art is, it is safe to say that these technological advances have not changed our antiquated meaning of it.

Regardless of the technology, there was always some human intervention required to create art.
Since machines can not make sense of our social, cultural, transcendental, and physical world, I highly doubt that this will change in the near future.
Until we fail in creating *human intelligence*, there is no reason to believe that *artificial intelligence* can replace the human artist.
But why do we even want to create *human intelligence*?
Why shall we copy ourselves?

Technologies got introduced long before the digital era.
However, what changed is *the speed of disruption*.
At the rate at which technology is being accepted in every industry, it is no longer difficult to imagine a future of fewer artists.
The increased usage of all kinds of AI in all kinds of art suggests that it is here to stay.
From AI-written books, such as [The Road](https://en.wikipedia.org/wiki/1_the_Road), to blooming tulip videos, creators have found value in utilizing artificial intelligence.

>We all hope for a world where our technologies help us and not replace us.

Our current technologically and competitively driven economic system neglects any profound confrontation with technology.
Competition leads to *the fear of missing out*; of losing some advantage over others.
We are so used to technology, comforted by it, and convinced that it is our new religion.
Similar to *capitalism*, we lost the distinction between *technological progress* and *evolution*.
Technology **is** evolution.
We no longer think about it. 
Instead, if it is properly marketed we buy and use it.

Every broadly accepted new technology leads to disruption.
The increasing speed of disruption makes it more and more difficult to attach meaning to anything.
Solid structures get replaced by a liquid stream of information.
We can no longer get too invested in something because it might be replaced the next day.
Artists might be in trouble if this superficiality becomes a reality in the art world.

The future artists might have to revolt against *the speed of disruption*.
Artwork may be the product of technology, but **also** offers a window into it.
Maybe in art lies the possibility of profoundly engaging with technology.
To ask: What is technology?
How does it change our social, economic, political, and transcendental systems?
Can we control it, and if so, how?

## References

{% bibliography --cited_in_order %}