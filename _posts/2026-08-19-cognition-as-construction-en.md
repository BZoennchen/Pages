---
layout: post
title: "Cognition as Construction"
tags: 
  - Systems Theory
  - Philosophy
  - AI
comments: true
---

## 0. Toward a New Epistemology

The aim of the following text is to bring clarity to Niklas Luhmann's essay *Erkenntnis als Konstruktion* (*Cognition as Construction*) {% cite luhmann:1988 %}.
We try to untangle one of modern systems theory's most radical propositions: that cognition succeeds not despite being completely cut off from an external reality, but precisely **because** of it.
By doing so, I will do my best to translate Luhmann's dense terminology into an accessible roadmap, exploring how *operationally closed systems*---from minds to social communication---construct their own worlds through *distinctions*, *blind spots*, and *structural couplings* rather than mirroring a pre-given truth.
Since I am interested in applying his theory to questions concerning artificial intelligence, I will sprinkle in my own remarks from time to time.
Whether you are curious about the philosophy of science, artificial intelligence, or simply how systems manage to make sense of an otherwise unstructured environment, this step-by-step breakdown offers hopefully a fresh, humbling perspective on what it actually means to "know", to "*make sense* of the world", and to live in a *structural drift* in an *environment* of interdependet but also autonomous *systems*.

If you want to follow along, I am using the German Reclam edition from the *Great Papers Soziologie* series, working through the chapters step by step.
Each headline of this article corresponds to chapter in the book.

Naturally, the core intellectual achievement belongs entirely to Luhmann.
Apart from relating his theory to "artifical systems", my contribution, if any, lies simply in the attempt to follow his reasoning. 
As a computer scientist familiar with the P versus NP problem, I find that tracing a complex thought (P) is considerably easier than originating it (NP).
Of course, all interpretations are inevitably misinterpretations; they can never perfectly capture an author's actual thoughts, as even the author is constrained by the limits of communication.
Whether my interpretation will, in turn, succeed in stimulating coherent thoughts in the reader remains to be seen.

*Erkenntnis als Konstruktion* originated as a lecture Luhmann delivered at the Kunstmuseum Bern on October 23, 1988.
It was published later that same year as a standalone volume by Verlag Benteli, in a series edited by Gerhard J. Lischka.
It is often said that to understand Luhmann’s "supertheory" of social systems, there is no bypassing this foundational text. It serves as the starting point for a theory aiming to comprehend society *as* society *through* society. As the back cover of the small edition aptly puts it:

> Luhmann in a nutshell.

My own interest, however, lies less in his broader sociology and more in the novel epistemology he promises---a framework that connects to the idealist tradition (Kant, Fichte, Hegel) while simultaneously threatening to supersede it.
What I find most compelling is how Luhmann detaches cognition from the human subject.
This detachment fuels my interest in finding a theory and a "suitable vocabulary" (to borrow from Richard Rorty) for discussing not only what we currently call "artificial intelligence," but also our ongoing ecological crises and catastrophes.
As someone without formal training in this philosophical tradition, I leave the final judgment on the success of this undertaking to others.

## 1. From Retreat to Radical Closure

Luhmann voices doubts about the true radicality of the *radical constructivism* {% cite glasersfeld:1995 %} of his time, precisely because it feels the need to inflate itself as *radical*.
Such an emphatic attribute immediately raises the suspicion that certain theoretical inconsistencies are being concealed.
As an analogy, he points to Kant's critique of Descartes's "problematic idealism."
This Cartesian stance is not nearly as innocently "open" as it appears; according to Kant, the consciousness of my own existence in time (the very thing Descartes takes as immediately certain) already presupposes the perception of something persistent outside of me. Inner experiential consciousness, in other words, is only possible on the presupposition of an outer one.

Luhmann does not choose this reference by accident.
He sees the old Cartesian figure resurfacing in radical constructivism, which repeats the maneuver by declaring its own operations (whether cognitive or systemic) to be accessible and given, while treating the status of an independent reality as undecidable or epistemologically irrelevant.
Instead of starting from the *cogito*, it starts from self-observing, self-referentially closed systems.
Yet the underlying gesture remains identical: the inside is securely accessible, while the outside remains "problematic."

So, what is actually new about radical constructivism if it merely rehashes an issue Kant had already settled?
Luhmann's answer---which also serves as his own ambitious theoretical agenda---is that constructivism must do its homework.
It must demonstrate exactly how the **operative closure** of the system is possible.

In doing so, however, there can be no backtracking.
Cognition must remain exclusively constructive.
No direct relation to an external reality may be presupposed---which, of course, does not imply that no such reality exists. 
It is ultimately up to the reader, the audience, and perhaps society at large to "decide" whether Luhmann succeeded in this task.

Returning to Kant, Luhmann accuses him of making precisely the same kind of (much-discussed) theoretical retreat as many constructivists seem to make.
In the *Transcendental Aesthetic*, Kant put forward a thesis that, measured against philosophical tradition, was quite radical: space and time are not properties of *things-in-themselves*, but pure, subjective forms of intuition. 
This has a far-reaching consequence.
Everything that exists in space, including outer objects---the "outer world" in the common sense---possesses only empirical reality, but transcendental ideality. In other words, spatial things are merely appearances to a subject equipped with our specific sensory apparatus; they are not things-in-themselves.
Strictly speaking, this already constitutes a form of idealism regarding the outer world, albeit a different and subtler one than Berkeley's. (On Berkeley cf. {% cite downing:2004 %}.)

In the first edition of the *Critique of Pure Reason*, Kant treated this proximity to idealism relatively openly in the "Fourth Paralogism." 
There, the existence of outer objects appeared as something that---unlike the immediately certain inner consciousness---first had to be inferred, rendering it ultimately less certain.
Structurally, this stance aligned closely with Descartes's problematic idealism.
This formulation, however, earned Kant fierce criticism: the notorious Feder-Garve review of 1782 accused his transcendental idealism of being ultimately indistinguishable from the dogmatic idealism of Berkeley, who denied the existence of matter altogether.

It was precisely this dogmatism that Kant had sought to overcome.
He aimed to abandon transcendent speculations in favor of investigating the conditions of possibility---meaning, for instance, that rather than attempting to prove God's existence, he asked why we possess or articulate a representation of God in the first place.
This marks Kant's famous Copernican turn: the shift from the transcendent to the **transcendental**.

Reacting to this backlash in his second edition, Kant largely struck the Fourth Paralogism and inserted a new section, the "Refutation of Idealism."
In this precise passage, he explicitly distances himself from both Descartes's problematic idealism and Berkeley's dogmatic idealism, arguing instead that the consciousness of my own existence in time already presupposes the perception of something persistent outside of me.
Outer experience, therefore, is at least as immediately certain as inner experience.

With this maneuver, Kant attempted to defuse the tension inherent in the distinction between the *empirically real* and the *transcendentally ideal*[^1].
Whether he actually succeeded in resolving this consistently, or merely asserted a solution, remains a matter of dispute today.
Luhmann's judgment here is pointed: this revision was not a genuine solution, but rather an "unclearly" executed weakening of an originally sharper, more idealist position.
For Luhmann, it represents a capitulation to external pressure rather than a fully realized theoretical result.

[^1]: Transcendentally ideal means: space, time, and, mediated through them, all objects of experience (the appearances) are not properties of things as they exist in themselves, independently of any consciousness. Rather, they are forms that the cognizing subject itself contributes to experience, that is, conditions without which no experience would be possible for us at all. "Ideal" here means: dependent on the subject, not a property of a subject-independent reality. Empirically real, by contrast, means: within experience, that is, empirically considered, space, time, and the objects within them are entirely real. They are not an illusion, not a mere subjective fancy, but objective, intersubjectively verifiable, causally effective. A tree, a stone, a planet are real, objective objects within experience, not private phantasms. Because for Kant space and time are contributed by the subject itself (transcendentally ideal), we can know with certainty and a priori that every possible object of experience will conform to them. And because these forms are then consistently applied to all possible objects of experience, the resulting empirical world is thoroughly real and objective (empirically real), not merely private or illusory. The **thing in itself** thus falls entirely outside this whole scheme. It is neither empirically real (it is not located in space and time at all, is not an object of possible experience) nor transcendentally ideal (by definition it does not depend on the subject, but is supposed to exist independently of any cognitive achievement). Precisely for this reason it remains unknowable for Kant: it falls outside both categories that, for Kant, are what make knowability possible in the first place.

Kant's transcendental philosophy might still be regarded today as the final word in epistemology; 
perhaps we will simply get no closer to solving the riddle.
Faced with this limit, one might be tempted to capitulate, close the file, and conclude that epistemology cannot fully resolve its own problems, pivoting instead to empirical research (such as cognitive science or the psychology of perception).

Luhmann, however, signals that he does not consider this capitulation inevitable.
Instead, he prepares the ground for his own project: developing a systems-theoretical, constructivist epistemology that genuinely advances these perennial problems (inside/outside, subject/world, certainty/doubt).
Rather than retreating or resigning, Luhmann proposes a radical reformulation based on the concept of operationally closed, observing systems—one that avoids merely redrawing the old Cartesian battle lines between inner and outer.

Since Kant (and continuing through Fichte, Hegel, and others), the fundamental problem has been this: cognition and the real object it seeks to know are two distinct things (*difference*).
Yet, there must somehow be a relation and thus a *unity* between the two; otherwise, cognition would be mere illusion.
Within this tradition, epistemology investigates this *unity of the difference*.
How can these two domains be held together when the theoretical starting point is their absolute separation? How can a cognizing consciousness confirm or establish something that is not itself a part of that consciousness? 
This is the classic *subject-object problem* in its most acute form.

Whether one takes Kant's transcendental-philosophical route (where the conditions for the possibility of cognition lie within the subject itself, in its forms of intuition and categories) or Hegel's dialectical route (where subject and object mediate one another through an unfolding historical process)---in both cases, the lack of direct access to reality is treated as an obstacle to be overcome.
The operative word here is "**although**": the closedness of cognition is viewed as a problem, a structural deficiency that cognition must somehow transcend to achieve its aim.

The decisive turn of radical constructivism---one that Luhmann readily adopts--is a shift from "**although**" to "**because**."
What Kant and Hegel viewed as a deficit to be overcome becomes the very precondition of cognition.
The premise is no longer that cognition succeeds despite its closure from the world, but rather that it succeeds only **because** it is closed.

Luhmann calls this an "empirical finding," arguing that when we look at our environment, we observe operationally closed systems.
This is a surprising choice of words regarding the topic and our "naiv" starting point.
These "empirical findings" are heavily laden with presuppositions; they only be thought of as "real" through the very theory they are supposed to ground.
The logic is undeniably circular, and anyone who finds such circularity inadmissible might as well set the text aside here.
Furthermore, by claiming an empirical basis, Luhmann makes far less rigorous demands than Kant.
He offers no necessary, a priori validity.
Instead, his findings are explicitly fallible and revisable, making no claim to ultimate, independent certainty.
While this may disappoint anyone seeking the **Absolute**, it underscores that Luhmann's theoretical edifice is built not on pure philosophical speculation, but on the observation of real-world phenomena (like brains or communication).

Drawing on Maturana and Varela (cf. {% cite maturana:1987 %}), Luhmann offers examples of *autopoiesis* and *operational closure*.
A brain, for instance, does not "see" light or "hear" sound directly.
Neurons respond only to the electrochemical impulses of other neurons, never directly to the outside world.
Figuratively speaking, the brain is blind and deaf to its environment, operating exclusively within its own network.
Strikingly, communication (**!**) operates the same way: it can only connect to further communication, never directly to physical or psychic events
The environment---whether a consciousness, a brain, or a natural event---cannot "join the conversation."
It can trigger communication, but it can never become part of it. (Luhmann famoulsy aruges that social systems are operationally closed and that humans belong to their environment.)

The same logic applies to consciousness {% cite luhmann:1985 %}, traditionally viewed as the "subject" of cognition.
Psychic systems are closed loops; thoughts connect only to other thoughts, never directly to the world or to another mind.
Consciousness can produce information (by drawing internal distinctions) only because it is wired to be *environment-indifferent*.
Again, this succeeds not despite its insulation, but because of it---this closure prevents the environment from constantly interfering.

Through this abstraction---and by admitting communication into the ranks of observing systems---Luhmann entirely recasts the classical metaphor of the subject as the "seat" of cognition.
He does not refute Kant (which would exceed the ambitions of systems theory) but rather revises him.
The core of this revision strips consciousness of its privileged status as the transcendental site of cognition, demoting it to just one of several (structural) equal autopoietic systems.
This shift has far-reaching consequences for what "cognizing" within a consciousness actually means.

However, Luhmann cautions that even with the shift from "although" to "because," radical constructivism has not been fully thought through. 
It remains a program rather than a finished solution. 
The truly compelling question is no longer whether systems are closed, but how this closure and decoupling occur in the first place. This poses a dynamic research question, not a static assertion.

Having delivered this liberating theoretical blow, Luhmann opens up his research program.
Previously, theories of the subject were hobbled by the problem of introspection: if my only access to consciousness is my own, how can I know how others experience the world?
This required inferring another's inner experience from one's own, without any direct access.
The classical, typically Kantian, way out was to assume that all minds function according to shared principles (e.g., Kant's universal categories and forms of intuition).
By introspecting, one could ostensibly generalize how every consciousness orders reality and I would argue that in everyday life we operate under a Kantian worldview.

While this secured an understanding of the "other," it came at a steep price: the required presupposition of a shared world (Kant's *thing-in-itself*) to which all subjects relate.
Without shared categories, perfectly private, internally consistent "worlds" would be possible, and objectivity would collapse.
But holding onto a shared world makes it impossible to seriously claim that every cognizing system constructs its own environment in radical isolation.
The presupposition of a shared reality fundamentally contradicts the idea of radical closure.

Here, Luhmann indirectly suggests that the radical constructivism of his era was still too idealist, too Kantian, and ultimately not radical enough.
He insists on following this path to its absolute end; otherwise, the theory will collapse under its own contradictions.

Luhmann then considers the obvious alternative: instead of starting with the subject, one could treat the cognizing being purely as an object of scientific description---as a physical system, a biological organism, a psychological mind, or a sociological unit.
While sufficient for many empirical projects, this approach fails an epistemology focused on the question of closure.
Simply describing a cognizing being as an object with internal processes tacitly presupposes its closure rather than explaining it.
It describes what happens inside the object, but not how or why the object decouples from its environment to begin with.
The core problem is simply bypassed.

This leads to the central theoretical move of Luhmann's systems theory: since neither subject-theory nor object-theory works, a new foundational distinction is required.
He replaces subject/object with **system/environment**.
This is far more than a mere swap of vocabulary, as the new terms carry entirely different implications
Drawing on George Spencer-Brown's calculus of forms and the concept of **re-entry**, Luhmann argues that the system/environment split, like subject/object, begins with a distinction.
But just as the classical subject held a representation of the object within itself, Luhmann posits that the system/environment distinction "re-enters" one of its own sides (the system).
The system observes both itself and its environment using a distinction it has drawn itself.
While this retains a structural similarity to the classical problem, it transcends it.
It is neither purely subject-oriented (the system is not simply consciousness) nor purely object-oriented (the environment is not just an objective reality passively depicted).
By proposing that system and environment are constructed through the very act of distinguishing between them, Luhmann simultaneously critiques and integrates both traditions.

Two concrete gains emerge from this new distinction. First, the question "How is closure possible?" can be reframed specifically as the **differentiation (Ausdifferenzierung) of systems from their environment**, opening the door for new systems-theoretical research programs.
Second, the old presupposition of a shared, objective world can be discarded in favor of a theory of *second-order observation*.
Following Heinz von Foerster's second-order cybernetics {% cite foerster:2003 %}, a system no longer observes "the world" directly; instead, it observes how other systems observe.
This allows us to conceptualize closed systems in a radically different way, free from the crutch of a shared reality.
These systems can mutually observe one another as observers, despite having no direct access to each other. 
Ultimately, this leaves us with the pressing question: How is observation via closure possible?

## 2. An Environment Without Distinctions

We must emphasize once again that Luhmann does not claim there is nothing outside of cognition.
That would amount to a *naive solipsism*, a position from which he strictly distances himself.
Instead, he posits as a starting point that cognizing systems (brains, consciousness, communication systems) genuinely exist within an equally real environment.

>We proceed on the assumption that all cognizing systems are real systems in a real environment, in other words: that they exist. -- {% cite luhmann:1988 %}

This is a **realist profession of faith**, a detail often overlooked when constructivism is crudely equated with the claim that "there is no reality."
One should note, however, that this assertion does not presuppose direct access to that "reality."
It must therefore be strictly distinguished from abandoning the concept of operational closure---we do not retreat!

Luhmann anticipates the predictable objection: asserting such a claim of existence (without access) simply as an ungrounded presupposition seems philosophically unsatisfying, or even "*naive*," since it is not secured by epistemology.
Yet Luhmann uses this to highlight the fundamental dilemma of all cognition: the beginning of any theory is necessarily ungrounded, because grounding it would require a theory that does not yet exist.
This is the well-known *problem of ultimate grounding* (cf. the "Münchhausen trilemma"): one cannot ask for justifications infinitely; one must start somewhere.
Naivety at the outset is thus not just unavoidable, but constitutive of any theorizing.

The justification for this starting point can only be delivered retroactively (though it must indeed be delivered eventually), using the very theory that was developed from it.
This represents a circular---but for Luhmann, legitimate—structure: a theory grounds its own premises retroactively, **once it has become complex enough to observe itself**.[^2]
This strategy, though often conveniently forgotten, is practiced in mathematics as well.
There, mathematicians feel compelled to escape circularity through axiomatic construction and hierarchical levels, inevitably resulting in *incompleteness* (cf. {% cite goedel:1931 turing:1937 bucker:2024 %}[^3]). 
Luhmann's remarks here offer a foretaste of the systems-theoretical principle of *self-reference*, as well as the frequently criticized difficulty of *falsifying* his---in this sense, Hegelian---supertheory.

[^2]: One can, I think, already draw a bridge here to modern theories in cognitive science (cf. {% cite friston:2010 %}), specifically in the sense that nervous systems, once they reach a sufficient level of complexity, observe and validate their own distinctions---proving themselves, as it were, self-consciously.

[^3]: Gödel proved that the formal systems of mathematicians are incapable of fully resolving mathematical decision problems beyond a certain level of complexity. Analogously, Wittgenstein argued in his *Tractatus Logico-Philosophicus* {% cite wittgenstein:1921 %} that it is impossible to speak about that which lies behind what is said.

Luhmann then reformulates the leading question from the previous section.
Instead of asking "How does cognition function?", one must now ask, "How does a system close itself off operationally from its environment?"
Von Foerster's play on words, "closure through enclosure," captures the point perfectly: a system becomes closed (relative to its environment) by "enclosing" itself—that is, by drawing its own boundary and recursively referring back into itself.

Merely formulating this question carries an implicit realization: a system cannot decouple arbitrarily or effortlessly, as this requires highly selective, rigorous conditions to be met.
To frame it in Kantian terms, we are asking about **the conditions of the possibility of decoupling**.
Decoupling, therefore, is no trivial matter; it is a highly presupposition-laden achievement!

Luhmann anticipates another central misunderstanding of constructivism: the assumption that if a system is "cut off" from its environment and operates solely upon itself, it can "do whatever it wants."
This often leads to the naive accusation of pure relativism---the idea that "anything goes."
Luhmann explicitly rejects this.
Citing operationally closed systems across various levels—biological (a cell), immunological (an immune system), neural (a nervous system), psychic (a consciousness), and social (a communication system)---he argues that decoupling does not produce arbitrariness.
On the contrary, it produces the exact opposite: strict order and constraint.
From the perspective of an outside observer, as soon as a system closes itself operationally, its subsequent operations become sharply restricted.
The closure itself dictates how the system can proceed, resulting in structural determination and path-dependency rooted in the system's own recursive history.

In the real world, arbitrariness or randomness in the strict sense simply does not exist.
Everything that happens is conditioned by preceding states and structures.
When someone attributes arbitrariness to a system, it is usually a symptom of insufficient observation; look closer, and the hidden regularities and constraints governing the seemingly erratic behavior will reveal themselves.
Arbitrariness, therefore, is never a property of the observed system itself.
Instead, it points to a deficit---or a specific standpoint---of the observer, who has not (yet) looked closely enough.
Consequently, the concept functions as an invitation to second-order observation: rather than observing the system, one must observe the (first-order) observer who is attributing the arbitrariness in the first place.

This leads directly to the answer to the original question: **closure occurs when a system generates its own operations**, which then relate to one another in a forward- and backward-referential recursive network.
This is the abstracted core of *autopoiesis*: operations generate further operations, referring back to past ones and anticipating future ones within a closed cycle.
Crucially, the distinction between system and environment is not given in advance; it is produced through the operating itself.
By operating recursively, the system actively creates its own boundary. The boundary is thus a result of the process, not a precondition for it.

Luhmann then highlights a surprising convergence between two vastly different theoretical traditions: Maturana's biological concept of autopoiesis[^4] (self-producing, self-reproducing systems) and Lyotard's philosophy-of-language concepts, such as "phrase" (the individual speech act or sentence), "enchaînement" (the linking of sentences to one another), and "différend" (Lyotard's term for a dispute that cannot be resolved because the parties lack a shared rule of judgment or idiom).
Both thinkers arrive independently at the same fundamental idea: systems and discourses constitute themselves through the recursive linking of their own elements, rather than through reference to something external.[^5]
Luhmann emphasizes, however, that systems theory expresses this shared core most clearly.
The principle of operational closure holds without exception, even for cognitive systems---they can never operate "outward," but only ever within their own boundaries.

[^4]: Maturana strongly objected to abstracting the concept of autopoiesis in this manner, insisting it should only be applied to *living systems*.

[^5]: Given the empirically measured performance of current language models, one might wonder whether this performance could serve as empirical evidence for the closure of language itself. That is, whether the so-called *grounding problem* {% cite harnad:1990 %} might be resolved through structural coupling, and whether this closure provides a clue as to why communication with essentially incomprehensible machines works at all. As we will see, however, Luhmann rejects the idea that language itself can be classified as a system.

This raises the question of whether every autopoietic operation (e.g., even the simple metabolism of a cell) should be termed "*cognition*," or whether cognition is a specific subclass of autopoietic operations requiring more precise delimitation.
This leads to a comparison between Maturana's position and Luhmann's own.
Maturana's solution was to postulate a unified ("congruent") concept of cognition---one acknowledging that autopoietic systems operate "blindly" (without any internal representation or depiction of the environment) while nevertheless existing within a domain of interactions.

To visualize this, picture a single cell, such as a bacterium.
It is operationally closed: it does not "see" its environment and has no inner representation of it.
Nevertheless, it reacts to specific environmental stimuli---moving along a sugar gradient (chemotaxis), adjusting its metabolism to temperature fluctuations, or responding to chemical signals from other cells.
The totality of these possible interactions---all the environmental perturbations to which the bacterium can react with a structure-preserving change that maintains its organization---is what Maturana calls the cell's *domain of interactions*.
What counts as a "recognizable," connectable perturbation for the bacterium (i.e., something it can react to without losing its autopoiesis) depends entirely on its own internal structure and its organization.
The exact same environment would produce a completely different domain of interactions for a differently structured cell.

Through ongoing *structural coupling* with its surroundings, the system's internal structure changes over time (a process Maturana terms "*structural drift*"), which in turn alters the future perturbations it is capable of processing.
In simple cells, this domain is small; with the evolutionary development of nervous systems, it becomes vastly larger and more highly differentiated. (It is precisely on this foundation that Maturana later builds his explanation of language and social coordination, framing them as "*consensual domains*" between structurally coupled nervous systems, cf. {% cite maturana:2000 %}.)

For Maturana, it is crucial that this domain of interactions is something an outside observer establishes by describing the correlation between environmental events and the system's reactions.
The system itself "knows" nothing of this and does not "represent" this domain to itself; it simply reacts blindly within the limits dictated by its structure.
Following these premises, if one asks where the categorical differences in cognition lie between highly complex and highly simple organisms, Maturana concludes that there are none.
One must concede that all life is cognition.
Thus, Maturana defines cognition exceedingly broadly: practically all living activity is "cognitive," leading to the equation **life = cognition**.

Maturana then carves out a narrower concept: the "*observer*," defined specifically by the possession of language.
While cognition (in Maturana's broad sense) applies to all living beings, the "observer" is tied exclusively to linguistic capacity---essentially restricting it to humans or linguistically coordinated social systems.

Luhmann explicitly distances himself from Maturana here, defining both terms differently.
First, he wants to construe "cognizing" more narrowly, so that not every autopoietic operation automatically qualifies as cognition.
Second, he defines the "observer" not through language, but through the fundamental operations of distinguishing and indicating[^6].
Drawing directly on George Spencer-Brown's calculus of forms in *Laws of Form* {% cite brown:1969 %}, Luhmann posits that observing means drawing a *distinction* and *indicating* one of its sides.
This is a deliberately more formal, language-independent definition---one potentially applicable to non-linguistic systems as well (such as cells, the immune system, or perhaps AI systems?[^7]).
Yet, as the next sentence suggests, this formalization serves to narrow, rather than widen, the concept of cognition.

[^6]: In German, many---including Luhmann—translate this as "Bezeichnen." However, according to {% cite kuntze:2009 %}, "Hinweisen" is likely more accurate to Spencer-Brown's original intent.

[^7]: This is precisely why this theory interests me: it offers a framework for searching for further cognition-performing systems. In particular, it allows us to ask whether technical systems, such as AI, can truly cognize, and what rigorous preconditions would have to be met.

This reformulation of *cognizing* and *observing* is what first makes it possible to conceive of *social systems* as *cognizing systems*.
For me, it also opens the door to reflecting on the conditions of the possibility of technical systems.
By freeing cognition from biology (life as the sole possible space of cognition) and allowing for non-linguistic observation, Luhmann specifies the act of observing much more precisely, even if the definition remains highly abstract and nearly devoid of content.
Are "cognizing" and "observing," then, just two terms for the exact same act?
This is not yet entirely clear at this point, though it certainly appears so.
Luhmann closes the section with an announcement, postponing the resolution of this conceptual fork in the road to later sections.
We are left in suspense as to what theoretical yield will come from choosing distinguishing/indicating over language as the definitional basis of the observer.

Building on this foundation (where the observer = a system that distinguishes and indicates), Luhmann now defines cognition operationally.
It consists of two interlinked operations: *observing* (distinguishing + indicating) and *describing* (understood as the recording or fixing of observations in some form).
Cognition is thus not a static state or a possession, but an ongoing activity.
Crucially, this definition explicitly includes the reflexive level.
A system can not only observe "the world," but it can also observe the act of observing itself (*second-order observation*; cf. {% cite foerster:2003 %}).
Likewise, it can describe already existing descriptions (meta-description).
From the outset, cognition is structured to be capable of recursion, never confined to a single, first-order level.
The mechanism is simple but absolute: one draws a distinction (e.g., hot/cold, true/false, system/environment) and marks one of the two sides to indicate the one being referred to.
Both steps are inseparable.
Without a distinction, there can be no indication, and any indication is entirely dependent on the underlying distinction (one can only indicate one side of a given boundary, not just point to anything at random).

This definition of observing is kept deliberately broad so that it applies equally to all three types of autopoietic systems in Luhmann's framework: living systems (operating via life, e.g., cells), psychic systems (operating via consciousness, e.g., thoughts and feelings), and social systems (operating via communication).
In this context, "indifferent" means that the concept of observing makes no distinction among these three levels.
It applies to all of them with equal, formal validity, because it demands only the logical structure of distinguishing and indicating, remaining completely indifferent to the specific material substrate.

At first glance, this inclusion of communication among observing systems makes Luhmann's theory look suspiciously like *functionalism*---the idea from cognitive science that cognitive processes are *substrate-indifferent* and can run on any "hardware," whether a biological brain, a computer, or a society.
But this is only true if one defines cognition in such an abstract way that it is no longer bound to minds.
The reverse is not the case, i.e., **we cannot follow that cognition is conscious or that all cognizing systems think**.
The mode of operation (thinking, communicating, biochemical reactions) differ and define a non-trasferable boundary.

**Remark:** In my opinion, this precise distinction is exactly what is missing in much of the contemporary discourse surrounding *artificial intelligence*, where both the humanities and computer science often lack theoretical precision.
The humanities frequently remain trapped in a rigidly humanistic paradigm, dismissing AI systems as mere tools or instruments simply because they lack a human psyche.
Computer scientists, conversely, regularly fall into the functionalist trap, anthropomorphizing their creations by confusing statistical computation with actual "thinking."
Luhmann's framework offers a way out of this deadlock.
It allows us to seriously investigate whether an AI system might cognize---in the formal sense of drawing distinctions and indicating them within an operationally closed network---without ever needing to assert that it thinks, feels, or possesses consciousness.
The operational medium of the machine (algorithmic computation) remains strictly separated from the psychic medium of thought, preventing both the reduction of the machine to a simple tool and the romantic illusion that it has a mind.

This concept of cognition remains entirely neutral regarding how observations are stored or recorded---that is, regarding the specific form of a system's "memory."
We can point to concrete examples of this variety: in living or immunological systems, memory takes the form of biochemical storage (e.g., immunological memory or neural imprinting); in social systems, it might consist of written texts (books, files, and documents serve as the "memory" of society or of specific organizational subsystems).
The function---the recording of observations---remains identical, while the medium is radically different.

Crucially, however, observing and describing are not abstract, "free-floating" processes.
They must be realized as concrete operations within the relevant type of system---as a literal act of living, an actual, currently occurring act of consciousness, or a genuine event of communication.
An observation only reproduces a system's closure and its system/environment boundary if it is an authentic operation of the system itself.
Only then does it truly "belong" to the network of that system's recursive operations.

>But the observing and describing must always themselves be a possible autopoietic operation, that is, an act of living, or an actual act of consciousness, or communication, for otherwise it would not reproduce the closedness and difference of the cognizing system, that is, it would not take place "within" the system. -- {% cite luhmann:1988 %}

If it were anything else, the observation would not take place "within" the system at all; it would lie outside it, effectively non-existent for that specific system.[^8]

From this premise, Luhmann introduces two important qualifications to forestall overinterpretation:
(1) Not every operation of a system is an observational operation.
A consciousness does not exclusively produce observing thoughts, nor does a communication system consist solely of observational communication.
Observing and describing form a subset of possible operations, not their totality.
(2) Even those operations that genuinely are observations need not be observable or describable exclusively as such.
Whether a given operation appears as an "observation" depends entirely on the perspective of a (further) observer.
Under different circumstances, the exact same operation could be described in entirely different terms (e.g., purely physiologically, purely energetically, purely computationally?, or purely in terms of social structure) without ever needing to be recognized as an "observation."
"Being an observation," therefore, is not an absolute, objectively visible property; it is inherently observer-relative.
If it were otherwise, the theory would collapse under its own contradictions.
Consequently, we must constantly keep the *principle of second-order observation* in view---a demanding task, since we cannot operate simultaneously in the first and second order.
Yet, this principle runs through the entire text.

[^8]: This condition is central to the question of whether AI systems can cognize. It is not enough that a distinction and an indication merely occur; rather, this act must take place "within" the system, belonging to the network of recursive operations that (re-)produce the system's boundary. Otherwise, one could just as easily classify a thermostat as a cognizing system.

How, then, should we define "the environment"? Luhmann draws a radical consequence from his preceding definition (cognizing = distinguishing + indicating): if cognition operates this way, and if we simultaneously insist on operational closure, a very specific understanding of a system's environment emerges automatically:

>A system's environment contains no distinctions. -- {% cite luhmann:1988 %}

The environment "as it is" does not inherently possess categories, oppositions, or divisions. It is simply unstructured facticity.
Distinctions---such as hot/cold, true/false, or this/that---are never properties of the environment itself; they are always something an observer *brings to* it.
Even concepts like "otherness" (the idea that one thing differs from another) and "possibility" (the idea that something could be otherwise) already presuppose a distinction: namely, between the actual and that from which it differs, or between the actual and the possible.
Without distinction, there are neither alternatives nor contrasts.
The environment is pure, incomparable, undifferentiated actuality; it does not "exist" in contrast to something else, it simply occurs.

Furthermore, even the seemingly objective statement that "there are other observers out there" is not a direct reading of the environment.
It, too, requires a distinction---namely, separating events one designates as "observing" from those one does not.
Recognizing other observers is thus an act of one's own distinguishing.
In sum: there is nothing "simply observable," because everything observable is always already a product of the system's own observational operations.
This holds self-referentially even when observing other observers.
Second-order observation is thus itself an achievement of the observing system, not a mere perception of something pre-given.

This amounts to a direct assault on the *correspondence theory of cognition* (the classical idea that cognition "depicts" reality).
Because every cognitive content relies on a distinction (marking something as "this" and not "that"), and because the environment itself contains no distinctions, there can structurally be nothing in the environment that "corresponds" to what cognition produces.
Correspondence in the classical sense is impossible---not because cognition is unreliable, but because "correspondence" presupposes a structure that simply does not exist on the side of the environment.
Even "things" and "events," as delimited, individuated units distinct from one another, do not exist in the environment itself.
Individuation (delimiting something as this specific thing) is always an achievement of the observer.

What follows is a reflection on the "naive beginning" of the theory's own starting point.
Even the concept of "the environment" does not exist independently.[^9]
It is a strictly relational concept, one that only makes sense when paired with a "system" (an environment is always the environment of something).
Therefore, there is no "environment in itself," only ever an "environment-for-a-particular-system."[^10]

[^9]: Here, a confrontation with the works of Markus Gabriel would be interesting, as he actively pushes back against constructivism. He arrives at the conclusion 'that the world does not exist' {% cite gabriel:2013 %}, though—motivated by Frege—he does so through a rather formal-logical argumentation, in the style of a set-theoretic paradox. Because 'the world' does not exist, there are instead countless fields of sense (Sinnfelder) that exist really, objectively, and mind-independently. In other words, for Gabriel, the rejection of the one big world clears the way for an overflowing multiplicity of actually existing things (numbers, fictional characters, social facts, physical objects—everything is real, just each within its own specific field). Luhmann, by contrast, draws the exact opposite, explicitly constructivist consequence from the very same structural observation. Gabriel postulates a realism of being, while Luhmann postulates a realism of doing.

[^10]: One hears an echo here of the tradition of *enactivism* founded by Varela.

Luhmann carries this consequence through to its logical end: **apart from cognition** (that is, apart from the observing operation of distinguishing), there are no "systems," because the concept of a "system" is itself only one side of a distinction (system/environment) drawn by an observer.
The parenthetical remark in his text serves as a deliberate callback to the beginning of the previous section, where Luhmann had "naively" asserted: "there are systems."
Now, he reflexively unmasks his own starting assertion: it is itself already an act of cognition, a drawn distinction, rather than a direct reading of reality.
This is not a contradiction, but the consistent application of the theory to itself (self-reference)---exactly what was promised in the first section.
The "naive" beginning can only be reflected upon retroactively, using the very theory built upon it.
Even Luhmann's primary instrument---the system/environment distinction---is not a description of a pre-given reality, but is itself an operation of cognition, a tool that enables and guides cognition in the first place.

From everything established so far, it follows neither that the environment is "not real" (*idealism*/*anti-realism*), nor that "nothing" exists outside the system (*solipsism*).
Luhmann deliberately distances his position from both extremes.
If we were to assert that "there is nothing outside," we would already be operating within cognition (since the statement relies on the distinction between nothing/something).
This treats "nothing" grammatically as a substantive, a nameable entity, even though "nothing" is precisely meant to designate the absence of all nameable things.
The result is a performative self-contradiction, and the inference fails for subtle logical reasons.
The solipsistic claim meets the same fate: precisely because it is an act of cognition, it is subject to the same limitations as any other cognition and can never claim to "correspond" directly to reality.
Neither the realist nor the solipsistic extreme escapes the *closedness of cognition*; both are merely further constructions, not privileged glimpses of reality "as it really is."

Furthermore, even the seemingly most all-encompassing, "objective" concepts---reality, matter, the world---remain bound to distinctions the moment they are utilized by cognition.
These total concepts attempt to name the unity that a distinction presupposes (the overarching "form" from which the distinction carves out its two sides).
In an ironic allusion to Hegel's concept of "*Spirit*" as the unity of differences, Luhmann refers to this as the "spirit" of the distinction: the ideal overarching context that spans both sides.
Even the concept of "*ultimate reality*" cannot escape this closedness.
It, too, can only be grasped using a specific distinction (in this case, system/environment), and therefore remains just as internal to the system as any other cognitive content.

Metaphorically speaking, the leading distinction a system currently employs acts as its "*blind spot*."
It makes seeing and observing possible, but cannot itself be seen in that very moment (just as the eye cannot see itself while looking).
If one were to try to observe the active distinction, one would need a new, supplementary distinction to do so, which would immediately become the new, invisible blind spot. 
The blind spot can therefore never be eliminated; it can only be shifted.
This results in an infinite regress that precludes any absolute, presuppositionless observing.
(This is structurally related to the self-contradiction of classical epistemology discussed earlier, but here it is accepted as the necessary structure of all observation rather than lamented as a problem.)

In the vocabulary of George Spencer-Brown's *Laws of Form* {% cite brown:1969 %}, this dynamic is articulated as follows: prior to any distinction, there is the *unmarked space*---a state of pure, undivided possibility, devoid of any marking.
Every observation acts as a "cut" through this undivided space, leaving one side marked (indicated) and the other unmarked.
The undivided wholeness is, so to speak, wounded or broken open by the act of distinguishing.
Observation demands this cut as a prerequisite (one cannot observe without distinguishing), yet every observation is precisely what executes this cut in the first place (the boundary does not pre-exist; it arises through the act of observing).
The cut is simultaneously a *precondition* and a *construction*---or, in short, a **presupposed constructing**.
The process itself produces the difference.

*Operational epistemology* turns away from the question of what cognition is (its essence or its classical conditions of possibility) and asks instead what kind of operation it is.
Cognition is treated as just one operation among others---one that can be distinguished from mere metabolism, an unconscious reflex, or arbitrary communication.
This is a deliberately sober, demystifying approach, even if the concept of an "operation" itself is admittedly maximally empty.

Crucially, the decisive criterion for whether cognition "happens" does not depend on whether it is correct. It depends solely on whether the system can continue its own self-reproduction (*autopoiesis*) by means of this operation.
At its most fundamental level, then, **cognition has absolutely nothing to do with truth**---nothing to do with "cognizing correctly"!
For the mere functioning of autopoiesis, it is entirely immaterial whether a cognitive operation is true, false, or produces truth.
Both true and false operations function equally well to keep the system running.
Cognition is thus defined functionally, not normatively.
**It is a purely operative capacity to keep going, not a seal of quality**.

This can be grounded empirically at the neurobiological level: there is no physiological difference between a brain state carrying a true belief and one carrying a false belief.
Neurons do not "know" whether what they are currently processing is correct.
Similarly, consciousness[^11] and communication possess no separate "channels" or distinct mechanisms for the true versus the false.
The exact same attentional achievements, grammar, and sentence structures carry true statements just as effectively as false ones. A false sentence is not "built" any differently—grammatically, communicatively, or psychically—than a true one.

[^11]: Like Kant, Luhmann strictly distinguishes between the brain and consciousness!

Precisely this indifference explains a common everyday phenomenon: the fact that errors can appear to us as truths at all (when they occur, they do not "feel" any different from truths).
This points to the actual epistemological challenge.
The primary question is not "How does one arrive at truth?" but rather "How does one, after the fact, recognize and eliminate errors?"
This is a marked shift from the classical framing.
Because the system's bare operations are inherently indifferent to true/untrue, a *binary code* (true/untrue) must be imposed on this indifferent activity subsequently and additionally.
The code is not a natural property of the operations; it is a secondary, artificially instituted supplementary structure. 
This leads to a decisive follow-up question: if the code is not there organically, who or what introduces it?

Luhmann's answer is direct: the observers themselves!
It is the observer who introduces the distinction true/untrue.
The code is not contained in the operations, but is **imposed** upon them from an observational vantage point.
However, observing is itself just another operation.
Therefore, in the exact instant it occurs, it cannot simultaneously grasp itself using the very distinction it is currently employing.
While I am judging something as true or false, I cannot, in the same simultaneous act, judge whether my judging itself is true or false. 
That would require a further, subsequent observational step in time.

Let us apply this to a classic logical-philosophical problem—familiar from debates over theories of truth in Frege or discussions of the "redundancy theory of truth"—namely, the difference between the simple assertion "A is the case" and the intensified assertion "It is true that A is the case."
The latter arises only through an additional observation: a *second-order observation* that observes the primary observation and marks it as "true."
The primary observation does not do this; it merely distinguishes "A" from "not-A," without simultaneously qualifying itself as true or false.
**Truth, then, is structurally always a second-order phenomenon**.

Here, Luhmann alludes to classical logical strategies for avoiding paradoxes of self-reference (such as Russell's *theory of types* or Tarski's *distinction between object language and metalanguage*, which attempt to "dissolve" the liar's paradox by strictly separating levels of statement).
This level-based solution, however, does not genuinely solve the problem; it merely displaces it.
The exact same question inevitably resurfaces regarding the distinction between the levels themselves: is this metalevel distinction itself true or false?
Does it belong to the object level or the metalevel?
The paradox is not dissolved; it is simply reproduced one level up.
It is hidden away, allowing the logician to (seemingly) carry on undisturbed.
This is a hallmark of Luhmann's critique of purely logical attempts to solve problems that are, at their core, empirical and operative.[^12]

[^12]: Within a formal calculus, classical logical strategies may yield mathematically correct solutions. However, they fail to explain how an actually operating system (e.g., a consciousness, a communication system, or a scientific discipline) navigates this problem during its ongoing operations. The theory of types is an artificial restriction on language introduced from the outside---a logician's retrospective stipulation---rather than a model of what a brain or a communication network actually does in the moment to keep operating despite the paradox. Furthermore, the level-distinction itself must be drawn, subjecting it to the same infinite regress: does the distinction between object language and metalanguage belong to the object level or the metalevel? The paradox is merely shifted higher, never truly resolved.

Luhmann offers an alternative proposal: instead of trying to logically "resolve away" the paradox, we should investigate empirically how real cognitive systems (brains, consciousness, science as a social system) concretely organize self-observation to continuously detect and neutralize the errors they produce.
The goal is not to logically forbid the paradox, but to temporalize it.
A system does not have to resolve *self-reference* in a single, timeless logical act (as a formal derivation would require).
Instead, it can handle it distributed over time, across successive operations.
The question thus becomes: how do systems keep going despite the fundamental impossibility of marking errors as errors in the exact instant they are produced?
The theorist, here and elsewhere, turns out to be surprisingly empirical!

The solution Luhmann offers---which lays the groundwork for his famous theory of the binary codes of societal function systems (science: true/untrue; law: lawful/unlawful; economy: payment/non-payment)---lies in the concept of binary coding.
This artificially instituted two-value code (e.g., true/untrue) allows the system to sort its own operations retroactively and systematically, without ever having to solve the fundamental paradox of self-observation. 
The code works with the paradox rather than dissolving it.
Luhmann calls this *de-paradoxification* (*Entparadoxierung*).[^13]
The paradox is no longer a paralyzing logical dead-end, but a productive structure kept in constant motion.

[^13]: Luhmann likely derives this from the *Laws of Form* {% cite brown:1969 %}, where Spencer-Brown demonstrates how a form that "re-enters" itself yields not a static logical contradiction, but a dynamic oscillation between two values across successive moments in time. Luhmann maps this exact temporal pattern onto psychic and social systems.

## 3. The Observer Within the System

Luhmann introduces a conceptual toolkit: if an epistemologist wishes to observe systems that in turn observe their own observing (i.e., engage in at least second-order observation), a highly refined set of distinctions is required to avoid theoretical confusion. He enumerates five:

1. "Operation" is the umbrella term (encompassing every autopoietic event: a thought, a communication, a metabolic process). "Observation" is a specific subtype: the operation of distinguishing and indicating. This produces a circularity: observation is at once a kind of operation **and** the very means by which one distinguishes what counts as an "operation" in the first place. One thus defines the part (observation) using the exact same tool that constitutes the whole (operation). Luhmann defuses this pragmatically: this circularity is only disturbing if one is already operating on the level of second-order observation; on a simple, first-order level, it carries no weight. An analogy illustrates this: the fact that we can only define language through language does not bother us while we are speaking. The circularity only becomes a problem when a linguist or philosopher of language tries to define "language" conceptually---that is, the moment they enter a metalevel of reflection.
2. Every observer draws their own system/environment distinction (their own "system reference"---the standpoint from which what counts as system and what counts as environment is decided). A first-order observer has one such reference; a second-order observer (observing the first) has a different, distinct system reference. Because these two references are not identical, establishing how they differ would require a third-order observer to compare both from the outside. This reveals the infinite regress of observational levels implied earlier: every level has its own blind spot, which only the next-higher level can make visible—though that higher level inevitably introduces a new blind spot of its own.
3. Whether an observation is an "observation of another" (observing something external) or "self-observation" (a system observing itself) can only be established if one already knows---has already distinguished---what belongs to the system (inside/self) and what belongs to the environment (outside/other). This distinction is therefore logically presupposed.
4. When I observe another observer, I can focus on two entirely different things: either the content of their observation (what they are looking at) or the form of their observation (precisely what they themselves cannot see: their leading distinction, their blind spot). This is the truly interesting core of second-order observation—not checking what the other sees, but discerning how they see it (and what necessarily escapes them in the process).
5. The truth code is only one possible form of a system's (self-)observation. There are other codes and forms of observation (e.g., reputation, lawful/unlawful, payment/non-payment) that must not be confused with the truth code.

Luhmann then establishes a strict, almost normative standard: the honorary title of "*constructivist*" is earned only by a theory that rigorously works through this entire web of distinctions (operation/observation, orders of observation, self-/other-observation, content/form, code/other codes) without repressing the inevitable paradoxes, but rather resolving them.
The decisive point is his concluding clause: cognition is not traced back to any ultimate "ground" (as in classical foundational philosophy, e.g., Descartes' cogito or an Archimedean point), but only to ever further distinctions---distinctions of distinctions. 
There is thus **no ground** on which the regress comes to an end, only a **web of differences** that mutually account for one another. 
This is an explicit **rejection of any form of foundationalism**.

As long as cognition is explained biologically (via the autopoiesis of living systems, such as neurobiology) or psychologically (via the autopoiesis of consciousness), the epistemologist can maintain the illusion of standing outside the object under investigation.
My own brain or consciousness is a distinct, individual specimen separate from the one currently being studied.
I can observe a foreign brain "from the outside," while my own continues to operate elsewhere, fundamentally uninvolved.
The only price of this external position is conceding a similarity of conditions: my brain, too, functions according to the same general biochemical laws.
Yet, as an individual specimen, I remain separate from the observed case.

If, however, cognition is construed *sociologically*---as a function of communication and an operation of social systems---the situation changes fundamentally.
Unlike brains or consciousnesses, of which there are many separate specimens, there is only one society, a single all-encompassing system of the autopoiesis of communication.
Every communication, including that of the epistemologist formulating the theory, belongs to this exact same system.[^14]

[^14]: It has to be shown that communication, unlike consciousnesses or organisms, knows no natural, principled boundary. In other words, that any communication is in principle connectable to any other communication (via translation, trade, diplomacy, media), and that there is thus no insurmountable structural separation.

Luhmann offers us an image: an experimenter observing rats in a maze typically stands safely outside it.
Kant, for instance, could write about the subject from an external vantage point (as a consciousness observing from the outside).
With a sociological concept of cognition, this external position vanishes.
The theorist becomes just another rat in the maze of society and communication they are attempting to describe. 
They can no longer retreat to an uninvolved observer's standpoint outside the system; they must reflect on the position within the system from which they are observing the other participants.
The problem is not simply that cognition is described by means of communication, but that this very communication takes place within the cognizing system it is attempting to describe. 
This description is therefore necessarily **incomplete**, yet the resulting paradox can unfold productively.
(This is also why Luhmann called magnus opus *The society of society* (*Die Gesellschaft der Gesellschaft*) {% cite luhmann:1998 %} because (1) it is a description or a theory about society, i.e., society as the gramatical object and (2) a theory produced by society as the gramatical subject.)

Luhmann offers us an image: an experimenter who observes rats in a maze normally stands outside the maze.
For instance, Kant may write about the subject (communication), which he can observe from outside (as a consciousness).
With the sociological concept of cognition, this is no longer possible.
Here the theorist himself becomes one of the rats in the maze (of society, of communication) that he is trying to describe.
He can no longer withdraw to an uninvolved observer's standpoint outside the system, but must reflect on the position, within the system, from which he observes the other participants.
The problem is not, in principle, that cognition is described by means of communication, but that this very communication takes place within the cognizing system that it (the communication) is describing.
This description is necessarily **incomplete**.
The paradox, however, can unfold productively.

Compared to the biological or psychological cases, it is no longer enough to concede a mere commonality of conditions.
We have now arrived at the *unity* of the system itself: the theorist (or perhaps better, the theory) and the object of investigation are parts of the exact same communication system.
Any attempt to present oneself as "standing outside" (e.g., treating science as a special domain floating above the rest of society) must instead be accounted for as an internal systemic differentiation---a division occurring within the one society, rather than a genuine externality.

This is why Luhmann insists that constructivism only becomes truly *radical* when epistemology is conducted sociologically, because it must finally include itself.
The theorist can no longer secure a privileged position on the outside (as they secretly still could in the biological or psychological variants).
They must acknowledge that their own theory is simply a further communication within the very system it describes. This is the ultimate, most consistent form of self-reference toward which the entire text has been driving.

If we turn this distinction back onto consciousness itself---which might particularly interest us, since "we," in this case, are the rat within the self-observing psychic system---the following applies: because Luhmann, unlike Kant, believes consciousness has no built-in, guaranteed commonality with other consciousnesses, the observable stability and coordination among millions of closed minds must come from somewhere.
For Luhmann, this **explanatory burden is carried exclusively by communication**.
In order for communication to achieve this---to produce stable, self-reproducing coordination across many different, insulated minds over long periods of time---it must itself be a self-producing, autopoietic system, not merely a loose collection of unconnected speech acts.
Only as an independent, closed system can communication take on the monumental role that, for Kant, was played by shared cognitive categories.

## 4. The Theological Precursor

Despite all its radicality, constructivism remains exactly what it set out to be from the outset: an empirical theory, not a metaphysical or transcendental one.
But if it is merely a sober, empirical framework, why does it strike us (in the West) as so shockingly novel---so "*radical*"?
To answer this, Luhmann argues, we must look at history.
We have to examine the conceptual space that such a theory has historically been strictly forbidden from occupying in the history of thought.

Luhmann's thesis is striking: no philosophical epistemology has ever ventured this far (with Hegel's Logic bracketed as a possible exception, given its intensive engagement with self-reference, contradiction, and absolute negativity).
The reason is that the conceptual "place" where one would have had to think about radical undifferentiatedness---about that which lies beyond all distinction---had historically been monopolized by theology, not philosophy.
In negative theology, God is not merely beyond ordinary distinctions (large/small, warm/cold);
He is beyond every possible meta-distinction, even the distinction between "being distinguished" and "not being distinguished."
In this sense, theology had long anticipated the *unmarked space*.

Within this theological framework, God cannot simply be designated as "the other" (relative to creation). 
Doing so would reduce Him to a distinguishable object among others, subjecting Him to the apparatus of distinction.
Instead, God is the "not-other"---the **very condition of the possibility of all distinguishing**, which cannot itself be positioned as an "other" without contradicting itself.
In God, all pairs of opposites used in comparative human thought (bigger/smaller, faster/slower) perfectly coincide.
Because God exists beyond every relative determination, the greatest and the smallest, the fastest and the slowest, are identical in Him.
There are simply no standards left by which "bigger" or "smaller" could even be distinguished.

As radical and mystical as this sounds, it had to remain compatible with official, dogmatically binding Christian doctrine.
Pure philosophical mysticism was insufficient; the theory had to remain tethered to the Church.
Consequently, God had to be definable simultaneously as a person and a Trinity (three persons in one God), **and** as the wholly undifferentiated, "secret" (hidden) essence of all things.

For Nicholas of Cusa (Cusanus), the theological solution to the problem of cognition ran as follows: the things of the world are a "contractio" of God.
They represent a "contraction," or finitization, of the infinite, undivided God into finite, distinguishable, created entities.
Through this process, God---though entirely unknowable in Himself---makes Himself indirectly knowable through His creation.
For human beings, truth consists in the correspondence between our own cognitive distinctions and the (God-created) distinctions inherent in things themselves.
At its core, this is a theologically grounded correspondence theory of truth.

However, this unleashes a genuine theological dilemma.
On one hand, Scripture promises the redeemed the "visio Dei"---the beatifying, immediate vision of God in heaven (beatitudo).
On the other hand, theology must stubbornly maintain that the divine essence remains strictly incomprehensible in itself ("divinam essentiam per se incomprehensibilem esse"); otherwise, God would be reduced to a finite, fully graspable object.
To salvage both claims, theologians had to attribute a capacity for self-observation to God (without which He would not be a personal, self-conscious being—a theological necessity for the Trinity, where the divine persons know and love one another). 
Yet, they could not push this capacity for observation so far that it mirrored the devil. In this tradition, the devil was considered the "boldest observer of God," whose ultimate sin was the presumptuous, overreaching attempt to fully grasp God and thereby become His equal.

To solve this dilemma, Luhmann argues, medieval theology effectively had to practice a highly advanced form of *second-order cybernetics*!
It required a carefully differentiated observing of observers: of the elect (electi, the blessed who are permitted to see God), of the devil (who illegitimately attempts to "observe" God), and of God Himself (who must observe Himself).
Structurally, this is the exact same problem Heinz von Foerster would reformulate cybernetically centuries later.

This theological solution, however, drifted into dangerous proximity to a heterodox, almost heretical consequence: it implied that God needs creation, and perhaps even the damnation of the devil, in order to observe Himself and achieve full self-consciousness.
God would no longer be the classically self-sufficient deity resting entirely within Himself;
He would depend on an "other" (creation, the fallen devil) to act as a mirror.
This implication was so delicate that Cusanus himself, according to Luhmann, warned against putting these writings into the hands of unprepared readers.
It was simply too dangerous and too easily misunderstood.

This is why Luhmann insists that *radical constructivism* finds its true intellectual precursor not in the history of philosophy (Descartes, Locke, Kant), but in the history of theology.
More precisely, it is rooted in that technically advanced, conceptually rigorous theology (like that of Cusanus) which pushed to the absolute limits of what the theological institution could bear (courting suspicion of heresy and incomprehensibility, as evidenced by the warnings to "unprepared minds").

One must distinguish, once again, the distinction of distinctions (observing the leading distinctions that other observers use) from the radically undifferentiated itself.
That undifferentiated horizon---which was once called "*God*"---is today, in Luhmann's conceptual vocabulary, called "*world*" (when distinguishing system and environment) or "*reality*" (when distinguishing object and cognition).
In Luhmann's theory, "world" and "reality" play the exact same structural role that God played in medieval theology: they serve as an unobservable, distinction-free horizon that every single distinction already presupposes, yet which can never be captured by a distinction itself.
The only difference is one of theoretical economy: where theology required a massive, highly complex dogmatic edifice to manage this undifferentiated horizon (the Trinity, the visio Dei, the problem of the devil), modern systems theory simply deploys the much leaner, depersonalized concepts of "world" and "reality." 
They perform the identical structural function, entirely free of the theological burden.

Combining this historical insight with the earlier claim that cognition is fundamentally indifferent to truth, we arrive dangerously close to a Rortian pragmatism.
If truth is not a mirror of nature, then the medieval theological solution is structurally no "less true" or "more wrong" than our current scientific paradigms.
Richard Rorty famously summarized this epistemological shift by arguing that as human thought evolves, we do not get closer to the absolute Truth; rather, we develop new vocabularies that simply allow us to do more things.
Luhmann translates this pragmatic insight into the language of systems theory: through evolution, a cognizing system does not become more accurately aligned with its environment, because the environment remains an unreachable, distinctionless horizon.
What the system achieves instead is greater internal complexity.
By building distinctions upon distinctions, the system vastly expands its own internal states and possible operations, thereby achieving a higher degree of decoupling, autonomy, and ultimately, operational freedom.

Ultimately, I would argue that adopting such a view fuels humility and doubt---which serve as potent antidotes to cruelty.
When we abandon the illusion that our cognitive distinctions grant us direct, privileged access to an absolute Truth, we lose the dogmatic certainty that has historically justified imposing our worldviews on others.
Recognizing that our highest truths are complex, contingent, and fundamentally internal constructions fosters a deep theoretical modesty.
In this sense, acknowledging the operational closure of cognition is not a sentence to an intellectual prison, but rather an invitation to an empathetic and intellectually humble solidarity.

<!-- TODO -->

## 5. Medium and Form

Now that we have clarified the formal definition of *observing* (distinguishing + indicating), a pressing empirical question arises: how can these two components fuse into one single, coherent process?
Luhmann emphasizes once again that **a system must meet very narrow, highly selective conditions to execute this complex double operation**.
Observing is no trivial achievement.
One conjecture is that for *sense-making* (Sinn-machende) systems (consciousness, communication), this succeeds because it is just barely possible to perceive two things simultaneously as a unified whole.
Think of figure-ground perception: one sees the figure and the ground simultaneously, as a single coherent image, rather than as two separate acts of perception.

It is also possible that only sufficiently complex systems can, over time, amplify minute differences---such as conspicuous fluctuations in their own oscillating movements---into massive effects.
Cybernetics calls this deviation amplification (*positive feedback*), while linguistics observes a related phenomenon in hypercorrection (when speakers overcorrect to match a perceived norm, thereby overshooting the mark).
Crucially, this temporal amplification process also presupposes operational closure.
It requires an "own time" or Eigen-time---an internal temporal rhythm specific to the system's own operations, running parallel to the environment, which undoubtedly continues to exist simultaneously, albeit not in the same rhythm.

It is also possible that only sufficiently complex systems can, over time, amplify minute differences---such as conspicuous fluctuations in their own oscillating movements---into massive effects.
Cybernetics calls this deviation amplification *(positive feedback*), while linguistics observes a related phenomenon in hypercorrection (when speakers overcorrect to match a perceived norm, thereby overshooting the mark).
For themselves, operations are timeless.
They happen and disappear in an instant.
So it is the recursive linking what turns a sequence of momentary, otherwise-unrelated events into something with duration, expectation, and memory.
Eigenvalues {% cite foerster:2003b %} can emerge through recursive operations, that is, small, unstable, momentary differences get built up, through recursive self-reference, into stable structures.
Crucially, this temporal amplification process also presupposes operational closure.
It requires an "own time"---an internal temporal rhythm specific to the system's own operations, running parallel to the environment, which undoubtedly continues to exist simultaneously, albeit not in the same rhythm.
A system has its own time (Luhmann sometimes calls this "Eigenzeit") precisely because, and only because, it's operationally closed. (The connection to {% cite husserl:1928 %} seems strong here.)


This internal rhythm, in turn, requires memory to perform two distinct functions.
First, it must conduct an ongoing **consistency check**, evaluating whether new impressions align with currently activated and relevant structures.
Second, it requires a schema that prevents emerging contradictions from registering as a paralyzing logical scandal.
Instead, memory "pulls apart" these contradictions into spatial or temporal differences (e.g., resolving a contradiction by concluding "it was like that earlier, but now it is different").
Here again, we see the exact same mechanism of **de-paradoxification-through-temporalization** discussed earlier.

At this point, however, Luhmann reins himself in.
All of this empirical detail merely provides an ever more precise description of how evolutionarily improbable, yet nonetheless possible, cognizing systems actually are.
But it does not yield any deeper philosophical clarification.
One could certainly differentiate this line of research further, asking: does it make a difference whether the capacity for distinction is grounded biochemically (life), psychically (consciousness), or communicatively (or perhaps even computationally?)---and if so, what exactly is that difference?

Yet, as fascinating as this research agenda would be, it cannot illuminate the core philosophical question: **the relation between cognition and object**.
Empirical disciplines like neurobiology can tell us much about the real, material constitution of cognitive operations.
But they can tell us absolutely nothing about the reality of the environment---that which these operations must presuppose outside themselves as unknown and fundamentally unknowable.

This boundary never shifts, no matter how refined empirical inquiry becomes.
Why? Because empirical research is itself always just another operation of a cognizing system; it is never a transparent window to the outside.
Picture the most advanced neurobiology imaginable: high-resolution imaging, single-cell recordings, sophisticated computational models.
All of this produces data.
This data, however, is the product of an entire chain of operations: measuring instruments, statistical evaluations, theoretical interpretive frameworks, and scientific conventions dictating what counts as a "significant signal."
Every single one of these operations is itself an act of distinguishing and indicating, and therefore itself already cognition.
Consequently, research only ever produces more cognition about the operations (more descriptions, more models, more data)---never a vantage point that steps completely outside cognition to check whether these descriptions actually correspond to something unconstructed.

This asymmetry therefore remains firmly in place, no matter how far empirical inquiry advances.
System operations (neurons firing, patterns of communication, psychic events) are concrete events that can be observed, measured, and described; they belong entirely to the system side and are therefore empirically researchable.
The environment, by contrast, is defined precisely as that which is not the system.
As soon as one attempts to **positively capture it**, the result automatically becomes part of the system's own internal construction---it is no longer "the environment in itself."
Better empirics, therefore, do not shift the boundary between the two.
They merely fill the domain of system operations with ever greater detail, without ever managing to cross the boundary itself.

Luhmann's systems-theoretical translation of this dynamic is that the environment---in contrast to the system's highly mobile operations---*appears* as something persistent, which in turn allows for recurrence and repetition. 
However, identifying something as "the same, recurring thing" is already an achievement of the cognizing system; it is not simply a given property of the environment.
Here, Luhmann accuses Kant of conflating two different claims.
Kant asserted that persistence in the environment is a condition for the actual **existence** of the subject in time (a strong metaphysical claim).
In reality, it is at most a condition for the subject being able to **cognize** or identify its own existence in time (a much weaker, purely epistemological claim).
Kant argues imprecisely here, sliding illegitimately from the weaker claim into the stronger one.

Luhmann reverses this relationship: it might be that the environment is not the persistent element at all. 
Rather, the cognizing system maintains a constancy (insisting on "the same thing") even after its actual relationship with the environment has fundamentally changed.
The object simply "has to put up with" being designated in the same way, despite having altered.
Language, for instance, allows us to use a constant, unchanging word (like "movement") to refer to something that is by its very nature inconstant (since movement is change itself). The constancy resides entirely in the linguistic sign, not in the signified.
The system, therefore, does not have to change to the same extent as the environment it references; it can deploy a stable linguistic tool to indicate change without changing alongside it.

A self-differentiating cognizing system enters a state that exists simultaneously with the environment, yet no longer runs in the same rhythm.
This decoupling, Luhmann suggests, is only possible if the environment itself exhibits temporal breaks or discontinuities against which the system can offset its own rhythm.
It requires deviation—and something can only deviate in relation to a baseline.
If the environment were temporally entirely smooth and continuous, lacking any interruptions or caesuras, there would be absolutely nothing against which the system could mark its own tempo as "different."

Luhmann then turns to the early work of the Austrian-American psychologist Fritz Heider (1896–1988)---specifically his 1926/27 essay "Ding und Medium" ("Thing and Medium"), a text that has received scant attention in academic epistemology.
In it, Heider describes the real (physical) conditions that make perception at a distance possible in the first place.
According to Heider, the physical outer world relies on a difference between *loosely coupled* elements (like air molecules, which move relatively independently) and *firmly coupled* structures (like a specific sound or tone, which holds a stable form).
What is decisive is the difference itself.
If the air itself constantly made noise, or if light itself were directly visible (rather than merely illuminating other things), noise-free perception would be impossible.
In other words, the medium itself must remain "silent" and inconspicuous so that distinct forms can become perceptible against its background.

Much like the dynamic of the *blind spot*, the *medium/form distinction* makes perception possible only if it remains unperceived in the act itself.
The difference is the very condition that must vanish for its result to become visible.
This *latent* structure is only revealed when a theory moves to the level of second-order cybernetics, observing the perceiving observer rather than merely perceiving alongside them.

Luhmann typically follows this with a generalization of the *medium/form distinction*.
The individual sounds or letters of a language (loosely coupled, "granular") serve as the medium from which sentences (firm forms) are constructed.
Similarly, money serves as the medium from which concrete prices (forms) are forged.
Under certain conditions, forms can themselves become the medium for a higher level.
Words, which are forms relative to letters, become the medium from which sentences are formed.
A rhythm or sequence of clicks (medium) becomes a unified rhythm (form), and an accelerated rhythm (medium) can become a sustained tone (form).
At each new level of complexity, the underlying difference is once again rendered invisible.

Here, however, Luhmann pulls us back again.
While generalizing this concept demonstrates its theoretical reach, it also risks leading us away from actual epistemology (much like the earlier biological/psychic detour).
Therefore, he does not pursue it further in this text.
The decisive takeaway remains the basic assumption: without a physically anchored medium/form difference, no cognizing system could develop in the first place.
It would remain forever confined to bare, immediate contact events at its own boundary, devoid of any spatiotemporal distance to the environment---and thus entirely lacking the capacity for distanced, mediated perception.

Crucially, one must add that the medium is never exhausted by the creation of forms.
It must regenerate (just as the air is not "used up" when a sound is made, or money remains available for circulation after a price is set).
Furthermore, the form is always stronger and more assertive than the medium—Luhmann hints that a not-yet-fully-understood "secret" rationality may hide within this dynamic, though he leaves it unexplored here.
Finally, what acts as a mere "medium" on one level (invisible and latent) can itself become visible as a form if a sufficiently refined medium of observation is introduced. Air molecules, for instance, are merely an invisible medium to the naked ear; but under an electron microscope or a particle detector, they become observable forms in their own right.

<!-- TODO -->

Taking this logic to its absolute conclusion leads directly to quantum physics!
Where classical physics tacitly assumed that the measuring instrument itself always remains a neutral, invisible medium---it does not 'disturb' what is measured, it simply shows what the object is 'truly' like, independently of the measurement.
But because quantum mechanics utilizes measuring instruments so refined that earlier "media" become observable forms themselves (cf. the measurement problem and the observer effect[^15]), it ultimately describes little more than physicists observing physicists.
Short-wavelength light inevitably carries a great deal of momentum per photon---short wavelength means high energy, which means a high momentum for the individual light quantum---and when this high-energy photon bounces off the electron to make its position visible, it inevitably imparts a substantial, no longer negligible kick to the electron's momentum.
The more one refines the measuring instrument to determine the position more precisely (shorter wavelength), the more strongly and inevitably you disturb the electron's momentum in the process.
Physics itself is forced to theorize the observation situation as part of its own subject matter; it can no longer return to a neutral, uninvolved standpoint.
It is a theory existing purely at the level of second-order cybernetics.
In a sense, *hard sciences* becomes really *hard* when it pushes to its most outer boundary to hit a problem that *soft sciences* have to deal with from beginning.[^15]
Correspondingly, it describes reality as fundamentally indeterminable (as seen in Heisenberg's uncertainty principle or the collapse of the wave function).
Luhmann immediately defuses this ontological panic, however: this does not necessarily mean that reality itself is indeterminable!
It simply means that the observing-of-observing—the measuring and the predicting of measurements—produces new forms that turn into new media.
This claim rests entirely on the recursive application of the medium/form logic; it is not a metaphysical proof of absolute, objective indeterminacy.

[^15]: "Soft here does not mean imprecise, unrigorous, or merely subjective opinion---on the contrary, quantum mechanics is perhaps the most precisely experimentally confirmed theory in the entire history of science.

Interestingly, this recursive *form-becomes-medium* structure is not just a theoretical abstraction.
We experiment with it elsewhere, such as in modern, self-reflexive poetry, which consciously plays with forms that turn themselves into media.
Yet, even though forms can recursively become media, this does not imply that the world's self-observation could ever manage entirely **without** a latent medium/form difference.
The blind spot wanders, but it never completely disappears.

Luhmann's conclusion is stark: while cognition absolutely requires a structurally suitable environment (one featuring medium/form differences, temporal discontinuities, and so on), we cannot infer that cognition therefore adapts itself to reality in the sense of increasing alignment or correspondence.
Even less tenable is the optimistic approach of older cybernetics, which attempted to explain improved performance (better cognition) and environmental adaptation (better correspondence with reality) using one and the same model.
For Luhmann, conflating internal systemic complexity with external alignment is an epistemological dead end.

>In any case, scientific research, seen in the context of ecology, rather gives the opposite impression. The deviation from what appears to be given keeps increasing, since cognition, in ever bolder leaps, corrects itself.[^16] -- {% cite luhmann:1988 %}

[^16]: The distinction "better cognition" versus "better adaptation" already points toward a consideration of ecological communication, and toward the problem of viewing anthropogenic climate change accordingly, of counteracting it, and of adapting to it.

Science does not converge gently upon a fixed truth; rather, it drifts ever further, and ever more boldly away from any assumed starting point. 
Cognition projects its own distinctions onto a reality that is itself entirely devoid of distinctions.
In doing so, it seizes a freedom that is nowhere "provided for" or guaranteed by reality itself---**a radically self-produced, rather than externally legitimated, freedom**.

Even the attempt to label this freedom as "causeless" (spontaneous or uncaused) would merely be another judgment regarding causation and attribution.
It would be just one more act of cognition, entirely unable to escape the inescapable loop of its own constructedness.

Therefore, if cognition does not aim at correspondence with a pre-given reality, but functions instead as an ongoing process of self-reinforcing deviation, a final, forward-looking question emerges: what kind of order (rather than what truth) can still be achieved at all within such a process?

## 6. World, Reality, Meaning

Reality, insofar as it remains unknowable, would permit no cognition at all if it were entirely *entropic* (in the thermodynamic sense of being completely disordered, structureless, and uniform).
The medium/form differences and temporal discontinuities discussed earlier presuppose precisely that the environment is not entirely structureless.

But this is exactly what cognition cannot directly formulate.
Even if we suspect that the environment requires a certain structure to make cognition possible, cognition cannot project this insight "outward" as a distinction of its own.
Any such formulation would simply be another internal achievement of the system, not a genuine capture of the environment itself.
The attempt to name one's own external conditions from the "outside" collapses immediately into just another internal construction.
Cognition is completely and exclusively distinction-based construction, and nothing more.
Structurally, it knows nothing outside itself that could ever correspond to it.

Nevertheless, we can suspect---though never truly know---that in this "outside" (which cognition marks via the distinction between self-reference and other-reference), there really are structural conditions for cognition: temporal and material discontinuities, differences in speed, and varied structural couplings.
In other words, exactly the phenomena we have just been discussing (medium/form, Eigen-time).
The operative word here is "suspect": it remains pure speculation, not secured knowledge.
To sharpen the point: precisely because these real conditions may exist, cognition cannot use them directly as its own distinctions.
Renouncing direct access to reality is the absolute precondition for operational closure. If cognition were to "use" these conditions directly—claiming to grasp them immediately---it would undercut its own closure entirely.

Does one, then, need special, "distinction-free" concepts—concepts not definable through the usual pairing of opposites, and therefore necessarily paradoxical (like "world")---in order to manage this unreachable boundary?
Historically, the concept of God took on exactly this role, "absorbing" the paradox, and for some, this may remain the most satisfying solution to this day.
Luhmann cautiously and non-committally offers a secular alternative.
With a playful sidelong glance at the Christian Trinity, he proposes three concepts that structurally fulfill this exact function: "*World*" names the unity behind the difference system/environment; "*reality*" names the unity behind the difference cognition/object; and "*meaning/sense*" (Sinn) names the unity behind the difference actuality/possibility.

None of these three are mere objects alongside other objects; rather, they are names for the presupposed wholeness from which a given distinction first carves out its two sides.
These concepts are characterized by the fact that they cannot be negated from the outside.
Any attempt to do so automatically falls back into them. Whoever asserts "there is no world" must perform this statement somewhere, and that somewhere is inevitably, once again, the world.
One cannot negate the world from outside the world.
Similarly, asserting "there is no reality" is itself a real statement, a real speech act.
The negation performatively confirms the very thing it seeks to deny.
Finally, the statement "meaning (Sinn) does not exist" must, in order to be understood at all, itself be meaningful (Sinn haben).
And even if it really "makes no sense" (in the colloquial sense of being nonsensical), it still makes sense precisely in the sense that it makes no sense!

Either way, the negation cannot escape the concept.
In sum, these totalizing concepts cannot be defined like ordinary concepts through contrast with an opposite.
"World vs. non-world" does not work, nor does "meaningful vs. meaningless" at this absolute level.
They can only be defined via the specific distinction whose underlying unity they designate.

But not just any distinction is suited to serve as the basis for such a totalizing boundary concept; only a very select few are. This once again underscores the evolutionary improbability of cognition.
Moreover, these concepts can only be derived from within cognition itself, never from an external standpoint.

All three primary distinctions (*system/environment*, *cognition/object*, *actuality/possibility*) are strictly asymmetrical.
The phenomenon of *re-entry* becomes starkly apparent here: a distinction "re-enters" one of its two sides when that side reproduces the original distinction within itself.
Luhmann's crucial point is that for all three distinctions, this re-entry works on only one side, never on both.
Only the system (not the environment) can use "world" as its orienting concept; only the system can hold both itself and its environment together "in view," thereby folding the original distinction back into itself.
The environment possesses no operations of its own to achieve this.
Similarly, only cognition (not the object) can use "reality" as an overarching concept; the idea that reality encompasses both sides arises solely within the performance of cognition, never independently of it. 
Finally, meaning (Sinn) functions exclusively on the side of actuality.
Only an operation that has actually been executed can point toward a horizon of further possibilities (whether real, conceptual, or purely fictional).
Bare possibility itself has no operations that could establish such a reference.

Structurally, all three concepts serve the exact same purpose: the resolution of the paradox that something must simultaneously be One (the unity) and Two (the difference).
However, this paradox does not exist "objectively"; it is only ever perceived as a paradox by an observer. 
If one evaluates a theory not by its specific content but by its function (in this case, paradox-resolution), one can begin to ask about functionally equivalent alternatives.
This functional equivalence is precisely what allows Luhmann to replace "God" with "world," "reality," and "meaning," without necessarily claiming that the secular concepts refute the theological one.
Both solve the exact same structural task, merely by different means.
If one construes the paradox of observation personally rather than abstractly---that is, if one posits the paradox itself as an observing subject---one lands directly back at the question of God, exactly as Cusanus did.
Luhmann leaves both paths open, refusing to dogmatically commit to either.

He reassures us, however, that all this highly abstract paradox-wringing does not interfere with the level of everyday operating.
This should be intuitively clear: a consciousness or a communication system simply distinguishes, indicates, observes, and describes without ever stumbling over these philosophical paradoxes in daily life.
If we did, our everyday existence would be exhausting to the point of paralysis!
At the level of pure operation, there is nothing deeper to say than: "it happens when it happens."
No metaphysical foundation is required to simply keep going.

It is only when one wishes to grasp, distinguish, and conceptually understand this occurrence that one must switch into the position of the (second-order) observer.
And that, Luhmann states in closing, is the actual, enduring task of epistemology: not merely to co-operate, but to observingly describe the nature of operating itself.

## 7. Language as Coupling

Whatever conditions must be met for cognition, the proof that they are fulfilled lies simply in the fact that cognition actually takes place.
It has nothing extra to prove.
It simply does what it does, and that alone suffices as proof of its own possibility.
The question of whether cognition is possible at all is thus settled trivially: it is, because it happens. 
The genuinely interesting question concerns the enhancement of cognition---how cognitive achievements can become more complex and extensive; and, increasingly today, **the ecological question of whether this continuous enhancement remains environmentally sustainable**.

Classical theories (such as Piaget's "assimilation," traditional representation theories, or adaptation models) inherently built environmental compatibility into the very concept of cognition.
They assumed that **cognition, by its very nature, inevitably tended toward a "fit" with the environment**. Even certain cybernetic theories retain this optimistic *notion of adaptation*---precisely the "evolutionary optimism" that Luhmann sharply criticized earlier.
Instead of asking about adaptation, Luhmann asks how a closed system builds up its own internal complexity.
Enhancement, therefore, occurs exclusively from within, not through a better fit with the outside world.

At this juncture, it is natural to think of language.
As discussed, Maturana ties his concept of the observer directly to linguistic capacity.
Ernst von Glasersfeld (another central figure of radical constructivism) similarly views linguistic research as the empirical proving ground for the entire theory.
This alliance seems fitting, given that linguistics, ever since Ferdinand de Saussure, has largely abandoned the idea that signs refer directly to external things (outer reference).
Saussure's structuralism demonstrates---and today's large language models empirically suggest much the same---that the value of a linguistic sign arises purely differentially.
A sign is defined exclusively by its relation to other signs within the closed system of language, not by direct reference to the external world.

This *structuralist* insight acts as a powerful linguistic anticipation of the core constructivist idea.
Yet this seemingly convenient alliance conceals a fundamental problem: cognitive operations are entirely different depending on the specific type of system carrying them out.
To remain theoretically precise, one must strictly distinguish between consciousness (which thinks), communication (which communicates)---and, we might add today, computing machines (which compute).

>Precisely this ([convenient alliance of the constructivist basic idea]), however, conceals a problem. For the operations of cognition are, depending on the kind of system that carries them out, entirely different. One must distinguish between psychic and social systems, between consciousness as it currently operates and communication. -- {% cite luhmann:1988 %}

All of these systems---consciousness, communication, and perhaps even algorithmic computation---can utilize language.
They use it for thinking, for communicating, and potentially for computing.
For all of them, the high degree of complexity we are familiar with only becomes possible through language in the first place.
Nevertheless, they remain operationally closed and entirely separate systems.
**The shared use of language by no means fuses them into a single system**.
There is absolutely no operative overlap.
A word occurring within a thought connects to other thoughts according to the internal connective rules of consciousness.
That exact same word, when deployed in a communication, connects to other communications following an entirely different set of rules.
A thought cannot directly connect to a communication, nor can a communication directly connect to a thought. 
Thus, the exact same linguistic material functions within each system according to its own strictly incompatible conditions of connection.

According to Luhmann, one must neither ignore nor underestimate language, but one must realize that language is not a system that carries out cognition as a real operation.
In fact, **it is not a system at all**.
Rather, **it provides the structural coupling between these separate systems**.
That is its function---no more, and no less.
Language possesses its own medium (sounds, optical signs), which is then formed into words and, subsequently, into sentences. Once again, we encounter a recursive medium/form logic.
This highly specific differentiation makes language available to the participating systems as a **jointly usable resource**.
Consciousness (in linguistic thinking), communication (in successive sentences), and perhaps computation (in linguistic processing) can each extract and forge their own separate forms from it.

This represents a central theoretical break.
As soon as one defines systems strictly through their own boundary-drawing operations---as Luhmann does---rather than through a vague sense of "belonging together," the convenient equation of linguistic theory with constructivism (as seen in Maturana and von Glasersfeld) can no longer be maintained.
Language is not a third system; it is merely a coupling mechanism between two (or, perhaps soon, three) operationally closed domains.

Nevertheless, this coupling function remains absolutely central.
Language fascinates consciousness, binding its attention to a conspicuous repertoire of acoustic or written forms.
It ensures that communication keeps going while simultaneously keeping enough consciousness activated to carry that communication forward.
It certainly constrains the degrees of freedom of consciousness during a communicative act, but never completely.
One can still perceive incidental things in the background, entertain unspoken side-thoughts, and, crucially, deliberately lie using language (or, in the case of computation, produce "hallucinations"?).
This proves that structural coupling never leads to complete fusion.[^17]
Consciousness remains strictly independent, even in the very midst of communication.

[^17]: At this point, I would like to point to our discussion---conducted elsewhere---of the loose and tight coupling of technical machines {% cite zoennchen:2025 %}. The core argument is this: large language models appear to enter into a loose coupling with psychic and social systems, whereas ordinary computing machines are strictly and tightly coupled! Here, then, lies a crucial, observable difference.

Before the invention of writing, communication was entirely dependent on the (often overestimated) memory of the participating consciousnesses just to be continued.
Conversely, without the capacity to imagine thoughts linguistically (whether in sound or script), consciousness would remain hopelessly bound to what is immediately and presently perceived.
It would be bound to such a degree, in fact, that Luhmann asks whether, in that case, one could still speak of "consciousness" in the full sense at all.

Luhmann's conclusion is clear: a coupling between consciousness and communication that allows for a continuous growth in complexity can only be explained via language.
Importantly, however, language itself does not "speak"; it is not an independently acting system.
It is always the concrete systems---consciousness, communication, and perhaps computing machines---that use it.
Language merely provides the medium/form difference.
The concrete realization of cognition is subject to many further constraints that cannot be explained linguistically, but only psychologically (for consciousness), sociologically (for communication), or perhaps information-theoretically (for computing machines).
These constraints concern, above all, the conditions of autopoietic closure itself and their internal consequences.
For these questions, one needs psychology, sociology, and computer science---not just linguistics.

If one replaces the traditional, object-like definition of systems (viewed as particularly densely interconnected clusters of things) with the fundamental difference between system and environment, an entirely new theoretical architecture emerges.
The central questions shift: Which operations close off a system? (rather than: what things hang together?). And: What form does the connection take (now newly conceived as structural coupling) once this closure has already been achieved?
The old, vague concept of "connection" is not discarded, but made precise.
It becomes a result of the system's boundary-drawing, no longer its defining precondition.
This paradigm shift has far-reaching, still barely foreseeable consequences; we are, truly, only at the beginning (bearing in mind that Luhmann wrote this in 1988).
Cognition is possible if and only because systems operatively close themselves off at the level of their distinguishing and indicating, thereby rendering themselves indifferent to the excluded environment.

Finally, Luhmann offers a few closing pointers to guard against ultimate misunderstandings.
First, the insight into operative closure does not mean that cognition is "unreal" (this is a firm rejection of any nihilistic or illusionist reading of constructivism).
Second, it does not imply that there can be absolutely no correspondences between a system's differentiating operations and the environment.
If that were the case, the system would lose all purchase on its environment and continually dissolve into it, rendering cognition impossible from the start.

Luhmann thus deliberately closes the text not with a radical, solipsistic declaration that "there is nothing but construction," but with a finely balanced position: there is no direct correspondence in the classical, mirroring sense, but there is also no complete arbitrariness or detachment from reality. 
There is only just enough **structural fit** for the system to assert and sustain itself as a system against its environment.
A system is closed with respect to its operations, but it remains structurally coupled, physically embedded, and constantly susceptible to irritation by its environment. 
This very coupling presupposes a certain 'fit'.

## 8. Reality an Inconsistency Solution

To summarize Luhmann's *operational constructivism*:
We assume that systems and their environments are real, meaning that they genuinely exist.
However, this assumption can never be definitively proven from the inside, because there is no direct access to the environment.
Anything entering cognition is entirely constructed by cognition---it is a self-generated performance (Eigenleistung) of the system.
Yet the fact that our knowledge---including our observation of living, psychic, and social systems---is constructed, mediated, and fallible does not imply that what we thereby gain knowledge of is unreal.

Asking then about the conditions of possibility for operational closure leads one to highly selective and improbable mechanisms, most notably *autopoiesis*.
All existing systems must continuously reproduce their own operations; otherwise, they would dissolve back into their environment.

Assuming (some) systems observe, it seems logical that (some) systems can observe observations.
For example, my mind can observe itself.
I can think about my thoughts; second-order observation, in this case, can thus be assumed.
I might also be able to observe the observations of a social system, that is, of something that lies on the unmarked side of my re-entry.

We can conclude that there is empirical evidence that psychic and social systems use second-order observation, but like any such evidence, it is a already cognition which does not say much about the environment or "the world."
If I indicate something that I observe as "observatio", I am applying my own distinction of what counts as an observation.
But if treating such an event as an "observation" allows my own system to successfully continue its autopoiesis, handle irritations, and remain connectable, then the categorization is functionally validated within my system.

We can ask why (some) systems develop the ability to observe observations.
But first: not all systems are observing systems.
While complex systems (like consciousness and communication) utilize second-order observation to manage their boundaries, simpler autopoietic systems---such as biological cells---maintain their closure through blind, structural couplings and biochemical reactions without ever observing observations.
And Here we departed from Maturana's claim that life is cognition.

>So first the system produces a difference of system and environment, and then it learns to control its own body and not the environment to make a difference in the system. So cognition then becomes a secondary achievement in a sense, tied to a specific operation which, I think, is that of making a distinction and indicating one side and not the other. It's an explosion of possibilities, if you always have the whole world present in your distinctions. -- Luhmann (in {% cite hayles:1995 %})
First the system produces its own difference.
That is autopiesis and operational closure but *not* an act performed by anyone or anything, but an effect.
It is only after closure that Luhmann wants to locate distinguishing-and-indicating in the Spencer-Brown sense: selecting one side (the body) as the reference point for continuing operations, orienting itself by it, using the distinction rather than merely being its effect.
Furthermore, we depart from the claim that observation is linguistic---according to Luhmann, it is pre-linguistic.[^18]

[^18]: Negation is not built into the act of distinguishing itself; it is a product of language specifically, and it is there for a functional reason: it keeps the system open. Negation, in a Luhmannian sense, is a social technology for preventing communication from being forced toward one predetermined result, and the identity of the reference has to be secured before the yes/no coding can do its work.

Over many years, psychic and social systems irritated each other in a *structural drift* (evolution).
In the case of minds, a biological organism reached a level of systemic complexity high enough that an internal, self-referential loop of consciousness emerged.
While the mind is operationally closed, it is structurally coupled with its biological substrate (the brain/body) and its environment.
The physical body and nervous system absorb environmental perturbations, which irritate the closed psychic system, prompting it to generate new thoughts.

Social systems and minds became highly dependent on each other, and a structural coupling co-evolved via language.
This prevented minds from remaining entirely trapped in immediate, momentary perceptions; language acts as a structural coupling mechanism between separate psychic systems and social communication.
In general, systems decouple from their environment not by stepping outside of it, but by building an internal, recursive network of operations (e.,g. thoughts, communication) so complex that it becomes indifferent to the environment---relying entirely on its own self-reproducing operations to make sense of whatever irritations leak through its boundaries.

No individual operation aims at this decoupling; it is an evolutionary, non-intentional byproduct of autopoiesis.
For any system this is a highly improbable event.

We can surmise that minds and social systems observe other systems (which themselves are able to observe) in their environment to cope with the unformatted, unstructured complexity of their surroundings.
Ultimately, advanced systems rely on these observational practices to reproduce their internal structures and prevent themselves from collapsing into their environment.
Because every leading distinction creates an inherent blind spot (just as an eye cannot see itself seeing), a system that could neither reflect on its own operations nor observe the observations of others would be entirely unable to navigate or compensate for its own blindness.
In that sense, observation leads to second-order observation.

Systems are able to cope so effectively with their environment precisely because they are closed off.
The system does not need to know what the environment "truly" is in order to react to it.
Environmental events act as physical or biological perturbations (irritations) that trigger internal operations within the system.
The system responds to these triggers using its own internal structures.
And while the system is operationally closed, it is structurally coupled with its environment.

Again, this means the system and its environment have co-evolved a history of mutual compatibility.
In that sense, **we as psychic system are deeply at home in our environment!**
Over time, only those systems whose internal structures remain compatible enough with their environment continue to reproduce; incompatible ones simply cease to exist.

For a system to function well, its operations do not need to "correspond" to objective reality.
They only need to be functionally successful enough to keep the system alive and reproducing.
As we discussed, true and false thoughts function equally well to keep a consciousness running---the operational network does not require truth to operate.
Instead of getting closer to an absolute truth, a successful system builds up massive internal complexity.
Through second-order observation, error-handling, and language as a coupling mechanism, systems build elaborate internal models that allow them to navigate, anticipate, and manage their environment efficiently---all entirely within their own closed loops.
There is no mirror of reality required, only a sufficient *structural fit* for the system to assert and sustain itself as a system against its environment---to keep autopoiesis going.

What systems then encounter as resistance, cannot be reality that resists because resistance is internal.
Luhmann notes:

>I think we should not abandon [Kant's] idea of resistance, but we should relocate it into the system. It is the result of resolving an internal conflict---the result of the system's operations resisting the operations of the same system. --  {% cite luhmann:1984 %} 

And in a discussion with Katherine Hayles he points out that

>[t]hen, if you use for a moment the idea that reality is tested by resistance---that's Kant---how can you have external resistance if you cannot cross the boundary of the system with your own operations? You cannot touch the environment with your brain, and even if you touch it you feel something here [points to his head] and not there, and you make an external reality just to explain that you feel something here [points again] and not in other places on your body. So, finally, it's always an internal calculation; otherwise, you should simply refuse the term 'operational closure'. But if we have operational closure, we have to construct every resistance to the operations of a system against the operations of the same system. And reality then is just a form---or, to say it in other terms, things or objects outside are simply a form in which you take into account the resolution of internal conflicts. -- Luhmann (in {% cite hayles:1995 %})

Reality---which, in the old tradition, was the invisible side of a thing (*res*)---now emerges if you have inconsistency in your *operations*.
It is just the acceptance of solutions for inconsistency problems---just what a system calls "reality" when a contradiction-handling operation succeeds.

## Literature

{% bibliography --cited_in_order %}