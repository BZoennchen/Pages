---
layout: post
title:  "Informatics - A Love Letter"
---

>"The objection that computing is not a science because it studies man-made objects (technologies) is a red herring. Computer science studies information processes both artificial and natural."<br> - Peter J. Denning {% cite denning:2005 %}

For me personally, informatics is an empowering discipline - it is part of the emancipation of men. 
Its engineering quality can directly enable our fragile and limited body and mind. 
But its magic goes beyond practical use. Similar to mathematics, we discover its beauty in an abstract world. 
This Platonian world consists of fantastic, imaginative objects we can recognize, build and play with. 
In it, the problems of men are absent. 
There is no morality, no judgment, no conflict, no othering but harmony to enjoy, complex structures to discover, riddles to unravel, and logic-based creativity to get lost in.


## Informatics is an Art

In popular culture, coding is often portrayed as something conspicuously 'nerdy' and alienating.
A usually white 'creepy' man writes his code by typing seamlessly and rapidly into a black terminal.
He never stops, he never interacts with other beings, and he never leaves his desk.
Of course, everything works perfectly on the first try, and no one else seems to have any clue what's going on.
Intellectually, the programmer stands above everyone else; he is a genius, mad scientist, or introverted weirdo - only so important to do the necessary work and enable the 'real' hero.
This toxic depiction of software developers (and introverted people) is wrong, dated, and was never accurate in the first place.

From the outside, coding looks like the most boring thing on Earth.
This assessment is, of course, utterly wrong!
Writing programs is a beautiful, creative and interactive process.
To somebody who does it, it is the most exciting thing in the world.
It is a game of chess but much more involving because you can make up your own rules and build your own world.
Elementary entities accumulate to something bigger, something interconnected.
The degree of freedom and creativity this process of creation offers can hardly be explained or understood if one never experienced it first-hand.

In no way does programming start in isolation at the computer, and in no way can we do it seamlessly.
It is neither a pure analytical nor a purely experimental process.
Like writing an interesting story, it is a struggle, always!
If it isn't, we or someone else already solved the puzzle - the exciting part has been gone.
In that case, we do not create but translate.

One of the fascinating facts is that, in the end, everything comes down to simple symbol manipulations, which we call information processes.
Software developers scoop, transform, and use information.
They design data structures, and algorithms like architects draw construction plans.
Additionally, they have the power to build, combine, reuse and extend those objects of structured information.
They command machines of blind obedience.
The degree of control translates to a form of power and self-determination absent in the physical world.
As Linus Torvalds rightfully noted

>"[Phyisics and computer science] are about how the world works at a rather fundamental level. The difference, of course, is that while in physics you are supposed to figure out how the world is made up, in computer science you create the world. Within the confines of the computer, you are the creator. You get utimately control everything that happens. If you are good enough, you can be God on a small scale." - Linus Torvalds

In contrast to most other kinds of engineers, software developers can use a highly flexible and versatile resource.
Information can be easily exchanged among peers, reshaped, conceptually described, and analyzed.
In fact, it manipulates itself since any program is nothing more than well-structured information.
Like many other materialized ideas, structured information arises from human thoughts; they result from a mental exercise.
But the transformation of thoughts into objects of structured information is immediate.
It is like writing a poem.
Therefore, it can be an entirely personal and connecting experience to read the code, i.e., thoughts, of someone else.
Over time, one learns to appreciate good code - its structure, aesthetic, modularity, level of abstraction, simplicity, consistency, and elegance.

And if we look beyond the code, beyond ideas written down in text snippets, programs are written to be executed.
And those programs can serve almost any domain.
They control robots, harvest semantic information, control networks of devices, simulate the natural world and other virtual worlds.
They establish communication channels, send messages with the speed of light across the earth, compose and play music, and constantly search for structures in a rapidly increasing number of data points.

However, in the end, functionality is second to being exciting or pretty.
Even coding itself is secondary.
Figuring out how things work is the real deal.
Since everything is self-consistent and logical, you can go on and go on and never stop exploring.
It is an endless stream too immense for one lifetime.
You are not even bound to some external logic; you can make up your own as long as it is consistent.
This consistency is a bright contrast to the social and political world - it's like going home to a place where you can find some truth within the bounds of this world.

## Informatics is a Science

As a software engineer, I want to build large architectures that process information.
In the world of physical objects, we have to study the properties of certain materials and the laws of physics to guarantee that our buildings do not collapse and behave expectedly.
But how can we specify and verify structured information?
How can we even define what we can compute?
What is computable?
Is sorting cards equally *hard* as solving a Sudoku?
Here we enter yet another world, a formal one!

Of course, those two worlds are never entirely separated.
Formal methods and objects, like the Turing Machine, the Lambda Calculus, Logic, Grammars, and Automata are the mathematical backbones of informatics.
They are a particular kind of mathematically rigorous description of information manipulation (computation).
By analyzing those objects, we get to the very fundamental and interesting questions.
I was never hooked by the purpose of formal methods in software development (verification and specification).
Instead, I found them intrinsically fascinating!
It was just enough to discover these formal, therefore, clearly defined objects.
Again, it is tough to explain this attraction.

You start with a set of unambiguous definitions: an alphabet, a word over an alphabet, a tuple of a set of states, a transition function, and so on.
And you begin to construct slightly more and more powerful objects while analyzing the properties of these objects.
You always try to keep their power controllable.
Their properties should stay computable - you enter the realm of constructivism.
You begin to recognize the equivalence of objects from completely different fields such as logic and automata theory.
And you form beautiful proofs about very abstract thus general statements of your formally constructed world.

At some point, you arrive at a formal model of any digital computer, that is, the *Turing Machine*.
Since you now have this gift, this formal model, you can analyze it in a highly abstract way.
You can define what a computer at least requires to be *Turing-complete*, i.e., to be a computer.
You can define what *computable* is, and you can even measure how many steps it takes to solve a class of problems.
You start analyzing the *complexity* of problems, such as sorting cards or Sudoku.

For example, sorting cards (on a *Turing-complete* model) requires $$\mathcal{O}(n\log(n))$$ steps, where $$n$$ is the number of cards.
And we know that we can not be better than that.
Consequently, in the worst case, sorting cards requires always at least $$c \cdot n\log(n)$$ steps where $$c$$ is some constant independent of $$n$$.
Isn't that captivating that we know this!

Then there is the still **unanswered** question if solving a Sudoku is as hard as checking a Sudoku of it?
We call this 

$$\mathcal{NP} \stackrel{?}{=} \mathcal{P}$$ 

*problem*. Of course, we ask again in the context of *Turing Machines*.
Therefore, one might argue that this is not a scientific question because we ask for some property of some human-made machine.
I strongly disagree!
This machine is a mathematical object, and mathematics is the language of nature.
To this day, *Turing Machines* are THE model for computation (Lambda Calculus is equivalent).
If nature does compute, we might even study its very, very basic principles!
Doesn't it feel so much harder to solve a Sudoku than checking its solution?
Isn't there a fundamental difference?
Or isn't finding a proof much harder than understanding it.
Finding a solution involves what we call creativity and intuition.
But checking it is a rather automatable process.
So if we reframe the question, we may ask for the complexity of creativity!
Since hundreds of publications falsely claimed to have solved the question, it seems to require a lot of creativity to grasp the complexity of creativity correctly.

What a fascinating question to tackle!
Clearly, this is science.
It is not natural science but similar mathematics, formal sciences.

Eventually, you encounter another significant problem: the *Halting problem*.
It states that there will never be a program (definable as a Turing Machine) that can test for an arbitrary program that it halts.
To understand the theorem and its proof in-dept feels groundbreaking and infinitely satisfying.
If you understand how computers, i.e., *Turing Machines*, work, the proof is simple and beautiful.
You can find it in the appendix of this article.

## The Evolution of Informatics

As you may noticed I call **computer science** by the European term **informatics** and not only because I am from Europe but also because the term leans more towards **information** instead of **computation**.
Information manipulation is computation but it emphasises a more abstract broader definition of computation.

### Roots of Informatics

It is kind of funny that historically, informatics first struggled for recognition on a global scale.
In academia, this struggle has been gone.
However, in the general public's eye, the objective and research subject of the discipline is blurred, which still leads to confusion:
yes, I am a computer scientist, but neither will I fix your computer nor your software bugs!

If we look into the history books, computer scientists had to fight to establish their field. The discipline emerged out of certain branches such as electrical engineering, physics, and mathematics.
In the 1960s, computer science comes into its own as a discipline. Georg Forsythe, a numerical analyst, coined the term.
The first computer science department was formed at Purdue University in 1962.
The first person to receive a PhD from a computer science department was Richard Wexelblat, at the University of Pennsylvania, in December 1965.

In Germany, informatics goes back to the Institute for Practical Mathematics (IPM) at the Technische Hochschule Darmstadt, founded around 1928.
But it required time to establish the first informatics course by the Faculty of Electrical Engineering in Darmstadt.
The first doctoral thesis was written in 1975, ten years later compared to the US.
In my hometown, the first informatics course at the Technical University of Munich was offered in 1967 at the Department of Mathematics.
In 1992, the Department of Informatics split up from the Department of Mathematics.

Informatics can still be regarded as relatively young compared to other well-established disciplines such as physics, chemistry, or psychology. Nonetheless, new fields split up from informatics, and they are all interlinked with one another. We have, for example

* scientific computing,
* computational science,
* information theory,
* and linguistic, 

and the list goes on.
The problem of artificial intelligence (AI) brings informatics more and more in touch with human sciences such as

* philosophy,
* psychology,
* and neurosciences.

### Do Classical Computer Scientists still exists?

Within the field of informatics, there are a lot of branches one can pursue, for example:

* formal methods and complexity theory
* programming languages and compilers
* design and analysis of algorithms and data structures
* parallel and distributed computation
* high-performance computation
* networks and communication
* intelligent systems
* operating systems
* cybersecurity
* databases
* data science
* computer graphics
* image processing
* modeling and simulation
* artificial intelligence
* software engineering
* architecture and organization

This sprawling list of specialties indicates no longer such thing as a classical computer scientist, right? 
Nobody can be an expert in all of those areas - it is just impossible! Over the years, some branches lost, and others gained attraction, but most of them are active.
For example, we lost interest in operating systems but put more effort into investigating high-performance computation and data science.
Theoretical informatics cooled down, but there are still many critical questions unanswered.

Despite this abundant variety, being a computer scientist is more than being an expert in one specific field.
It is more than knowing how to build large software systems, manage networks, process data and establish a secure infrastructure.
**It is a way of thinking!** And no, we do not think like computers but embrace the curiosity naturally given to us human beings.
We renew the playing child within us and let it go wild to solve riddles for no particular reason. I think that is one of the most human things to do.

---------------

## Appendix

### The Halting Problem

Let me try to give you the intuition of the *Halting problem*.
For simplicity reasons, I will not explicitly distinguish between a *Turing Machine* $$\mathcal{T}$$ and its description (often noted by $$\alpha_\mathcal{T}$$).
So when a *Turing Machine* gets as input another *Turing Machine*, I mean its description (source code).

Let us assume there is a *Turing Machine* $$\mathcal{H}$$ that takes an arbitrary *Turing Machine* $$\mathcal{T}$$ as input.
$$\mathcal{H}(\mathcal{T})$$ outputs 1 if $$\mathcal{T}(\mathcal{T})$$ halts, otherwise it outputs 0.
So if such a program exists, $$\mathcal{H}$$ is the program that solves the *Halting problem*, and $$\mathcal{T}$$ is an arbitrary program.
We can pick $$\mathcal{T}$$ as its own input because the input can be arbitrary (but finite).
So we 'feed' the program $$\mathcal{T}$$ with itself, that is, its own description/source code $$\mathcal{T}$$.

So we have

$$
\begin{equation} \tag{1}\label{eq:halt:1}
\mathcal{H}(\mathcal{T}) = 
\begin{cases}
1, & \text{if } \mathcal{T}(\mathcal{T}) \text{ halts} \\
0, & \text{otherwise.}
\end{cases}
\end{equation}
$$

Now we construct a new *Turing Machine* $$\hat{\mathcal{H}}$$.
$$\hat{\mathcal{H}}$$ is a slight modification of $$\mathcal{H}$$.
It does almost the opposite.
$$\hat{\mathcal{H}}$$ halts and outputs 1 if and only if $$\mathcal{H}$$ outputs 0.
Furthermore, $$\hat{\mathcal{H}}$$ does not halt if $$\mathcal{H}$$ outputs 1.

$$
\begin{equation} \tag{2}\label{eq:halt:2}
\hat{\mathcal{H}}(\mathcal{T}) = 
\begin{cases}
1, & \text{if } \mathcal{H}(\mathcal{T}) = 0 \\
\text{undefined, i.e., loops endlessly} & \text{if } \mathcal{H}(\mathcal{T}) = 1
\end{cases}
\end{equation}
$$

Now we execute $$\hat{\mathcal{H}}$$ by feeding it to itself, that is, $$\hat{\mathcal{H}}(\hat{\mathcal{H}})$$ and the result:

Let us assume $$\hat{\mathcal{H}}(\hat{\mathcal{H}}) = 1$$.
Following Eq. \eqref{eq:halt:2} gives us $$\mathcal{H}(\hat{\mathcal{H}}) = 0$$.
But by following Eq. \eqref{eq:halt:1} this implies that $$\hat{\mathcal{H}}(\hat{\mathcal{H}})$$ does not halt.
After all, $$\mathcal{H}$$ outputs 0.
Thus, it recognizes that the analyzed program $$\hat{\mathcal{H}}$$ does not halt.
But if $$\hat{\mathcal{H}}(\hat{\mathcal{H}})$$ does not halt, it follows by Eq. \eqref{eq:halt:2} that $$\mathcal{H}(\hat{\mathcal{H}}) = 1$$ which leads to a contradiction.

Let us assume $$\hat{\mathcal{H}}(\hat{\mathcal{H}}) = \text{undefined}$$.
$$\mathcal{H}(\hat{\mathcal{H}}) = 1$$ follows from Eq. \eqref{eq:halt:2} which implies that $$\hat{\mathcal{H}}(\hat{\mathcal{H}})$$ does halts, compare Eq. \eqref{eq:halt:1}.
But if $$\hat{\mathcal{H}}(\hat{\mathcal{H}})$$ halts then by following Eq. \eqref{eq:halt:2}, $$\mathcal{H}(\hat{\mathcal{H}}) = 0$$ which leads to a contradiction.

Since $$\hat{\mathcal{H}}(\hat{\mathcal{H}})$$ does lead to a paradox, but the construction of $$\hat{\mathcal{H}}$$ is correct if  $$\mathcal{H}$$ exists, it follows that our assumption is wrong and $$\hat{\mathcal{H}}$$ can not exists!

### References

{% bibliography --cited_in_order %}