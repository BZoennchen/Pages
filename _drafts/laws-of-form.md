---
layout: post
title:  "Laws of Form"
tags: 
    - Logic 
    - Social Systems Theory
comments: true
---

In my last blog [post]({% post_url 2023-10-07-system-theory-and-ai %}), I discussed Niklas Luhmann’s Social Systems Theory and I emphasized that his theory is based on differentiation and seemingly paradox relations.
My general understanding of Luhmann’s radical constructivism in the most reductive sense is that there are no unified and independent objects---there is only differences.
What an observer can identify as an object is a differentiation of a system and its environment, a foreground and its background, an interior and the external.
However, any observer is itself a distinction between system and environment.
I want to further investigate this idea by looking into Luhmann’s inspiration---his muse so to say.
So let me examine the logic of Georg Spencer-Brown.

## The Principle of Differentiation

As mentioned, Luhmann’s theory is based on paradoxes such as 

>This statement is wrong.

The statement is logically problematic because it is self-referential. 
If the statement is false, it states that it is in fact true and if the statement is true, it states that it is false.
Another famous paradox is Russell’s antinomy of the naïve set theory:

\begin{equation}
R := \{ x \ | \ x \not\in x \}
\end{equation}

$R$ is the set of all sets that do not contain themselves which seems to be a well-defined mathematical object.
However, if we introduce the self-referential relation, we run into a paradox:

\begin{equation} 
R \in R \iff R \not\in R
\end{equation}

Another example involves the the proof of the [Halting Problem]({% post_url 2021-06-08-Informatics-a-love-letter %}).
To prove it, one can establish a self-referential relation between a machine that presumable solves the Halting Problem.
The machine does not halt if the machine it checks halts and it halts if the machine it checks does not halt.
Via the self-referential relation, that is, by letting the machine check itself, we get a contradiction.

The idea of Spencer-Brown is to resolve these paradoxes over time.
$R \in R$ holds at one moment in time and $R \not\in R$ holds at the next moment.
This is reminiscent of the Hegelian dialectic---a process of self-creation.
The self-referential relation is a paradox if we ignore time and it becomes a generator if consider time and place.

This principle of autopoiesis and the importance of differentiation is inspired by the logic of Spencer-Brown and his work *The Laws of Form* % cite brown:1969 %}.
He resolves the paradox by a similar idea that gave us imaginary numbers by using what he calls *Re-entry*, that is, the introduction of the system into itself.
Luhmann integrated this idea into his Social Systems Theory.
For example, the media can observe and reintroduce itself into itself. 
It can use its systemic operation on itself, i.e. it can report on itself.
Spencer-Brown begins his work by a quote from Lao-Tse (a stand-in for many different authors):

>Wu ming tain di zhi shi. -- Loa-Tse

The sentence has mainly two different meanings.
One is: 

>The beginning of heaven and earth is without a name.

The other one is: 

>'Nothing' is the name of the beginning of heaven and earth.

A paradox arises: How can Nothing be nothing if we can call it ‘Nothing’?
Furthermore, the quote points to a distinction between heaven and earth.
Can there be heaven without earth---a calling or indication without a distinction?
Spencer-Brown begins by the assumption that there is no such thing:

>We take the idea of distinction and the idea of indication and that we cannot make an indication without making a distinction as given.
>Therefore, we take the form of distinction as the form itself. – Georg Spencer-Brown

In other words, what we normally identify as object (the form / system) is for Spencer-Brown equal to the distinction (system-environment differentiation).
There is no clear separation between the object or the result of distinction and the process of distinguishing.
Therefore, the process must be integrated into Spencer-Brown’s logic.
Spencer-Brown thinks that differentiation is a proto-operation that is more fundamental than performing calculations or writing text because to do these activities we have to differentiate beforehand.
I cannot calculate 1 + 1 = 2 without distinguishing between the different symbols and a symbol and 'nothing'.

Spencer-Brown uses the mark or cross which at the same time marks.
The mark is, calls, and makes a difference.

#

There is an interior of the mark and not the interior---the system and its environment.
I can make a distinction again (repetition):

# #

But making a distinction again does not change the distinction.

>Calling something back-to-back by its name does not change its name. – Spencer-Brown

The reverse is also true; therefore, Spencer-Brown introduces the Law of Calling:

##  #

The second transformation called Law of Crossing is less intuitive.
Crossing twice reverses the first crossing.

#(#)  

>If a boundary is crossed twice, the original state will be reestablished.
>The repetition of the crossing has a different value than the single crossing.
>The reason is that in-between the reversal happens.
>Crossing changes the side.
>Re-crossing reverses this operation. – Spencer-Brown

With only these two laws, Spencer-Brown established a logic calculus and we can start doing mathematics.
Interestingly, the Law of Crossing and the Law of Calling are implicitly established via the position of the marks.
There is no operator introduced because the result and process, indication and differentiation, the mark and the process of marking are not separated.

Let’s see what we can do with this calculus.
Let $a, b$ variables, then the following holds:
\begin{align}
#(#(a)) = a \\
aa = a \\
# a = # \\
#(ab)b = #(a)b \\
#(#(a) a) = .
\end{align}

Let’s have a look at the last transformation.
Let us assume a = #.
Then we get:

#(#(a) a) = #(#(#) #) = #(#) = 

Let a = instead, then we can follow:

#(#(a) a) = #(#) = .

## The Re-Entry

How can we re-introduce the system (here an equation) into itself?
Or in other words: How does the re-entry work?
We can start by a simple self-referential algebraic equation:

\begin{equation}
x^2 = ax + b, \quad a, b \in \mathbb{R}.
\end{equation}

This equation as well-known solutions. 
It is also known that solutions can be imaginary i.e. $x$ might be of the for $r + si$ with $r, s \in \mathbb{R}$ and $i^2 = -1$.
To see the re-entry, we can rewrite equation cite to

\begin{equation}
x = a + b/x,
\end{equation}

thus the self-reference is obvious and we solve the equation by the re-entry

\begin{equation}
x = a + b/(a +b/(a+b/(a+b/a+b/(a + \ldots)))).
\end{equation}

Using this infinite formalism it is literally the case that

\begin{equation}
x = a + b/x,
\end{equation}
holds.
Using the same formalism, we can define the imaginary number $i = -1/i$ as literally

\begin{equation}
i = -1 /(-1 /(-1 / (-1 / \ldots )))
\end{equation}

but what does this mean?
The system is not a number but a process, a generator that generates itself.
i alternates between 1 and -1.
Interestingly this is precisely how we use the equal sign in most programming languages.
Writing i = i / -1 in a programming language means

\begin{equation}
i \leftarrow i / -1.
\end{equation}

So how can we establish such a re-entry into logic?
Well, Spencer-Brown gives us the following fundamental paradox (The Re-Entry of the Mark):

J = #(J).

The solution is an alternation between a marked and an unmarked state---between true and false.
A state that might seem contradictory in space, makes sense if it is observed in time and space.
Again, time resolves the paradox.
And if we change all symbols within a system equally, there is no reason not to calculate with a self-generating process, i.e. with autopoiesis.
For example, we can state the following:

#(J)J = #(#(J))#(J).

However, it is forbidden to only change one appearance of J!
Using this simple rule, there is no paradox.
We can go on and evaluate the following transformation:

J #(J) = #,

which describes two alternating waves shifted by one cycle resulting in a mark.

Spencer-Brown goes on and defines his Echelon:

#(#(a) b)

which can be transformed into


#(#(#(#(a) b) a) b)

thus gives us the re-entry

f = #(#(fa)b).

In the act of programming there is no problem of using expressions such as

\begin{align}
i \leftarrow i + 1 \\
a \leftarrow f(a)
\end{align}

but in mathematics---at least since Plato---we assume some sort of eternity.
Of course, we can translate between the static world of “normal” mathematics and Spencer-Brown’s dynamic viewpoint, but it is a different viewpoint which might influence how we observe our environment.
It is like in physics where multiple theories are equivalent but start from very different viewpoints.
It is surprising that Spencer-Brown’s Laws of Form plays no role in computer science even though it fits quite neatly in the perspective of programs, processes and computation.
