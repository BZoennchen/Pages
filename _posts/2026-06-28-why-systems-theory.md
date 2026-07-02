---
layout: post
title:  "A Case for Systems Theory in CS Education"
tags: 
  - Opinion 
  - Education 
  - Systems Theory
  - Cybernetics
comments: true
---

Imagine we are given the task of building a recommendation system. The requirements are clear: the system should suggest content to users that they are highly likely to click on. We define a metric. Let's say, time spent on the platform. Then we optimize toward it. We test, iterate, deploy. The system works. The metric rises.

And then something happens that was in no specification document: people do not merely spend more time on the platform, but they change. Their worldview radicalizes gradually, because the system systematically favors polarizing content, since that generates stronger emotional reactions and therefore longer engagement. Social groups fracture. Adolescents develop anxiety disorders. Democratic discourse erodes, and in a distant country people are suddenly being hunted.

The story is real and well-documented. The system fulfilled its specification and still failed. One cannot even necessarily say it was misaligned, because it realized precisely the values its developers had put into it.
This discrepancy between technical success and systemic harm is therefore not an operational accident. It is not a case of "AI" acting autonomously or exerting influence on its own. The problem reveals itself as an epistemological one, that is, one that computer science as a discipline has so far addressed only inadequately. This text aims to explore why that is, and what a nearly forgotten intellectual program called *cybernetics* might have to contribute.

First we have to recognize that even though humans have always been technological, something has changed over the last few decades.
The products of computer science are no longer confined to data centers. They have grown deep into the structures of social life.
Algorithms, and increasingly, learning algorithms, co-determine which news people read, which candidates they see in job applications, what creditworthiness is assigned to them, what therapy options they are offered, and what ideas they develop. Software controls infrastructure that millions of people depend on every day.

This is no exaggeration and no dystopian narrative but the sober observation of a development that has taken place over the last three decades. Technical systems have become constitutive parts of social, psychological, and biological systems. They are part of a co-evolutionary *drift*, neither in control nor controllable in the strong sense.
Here {% cite luhmann:1998 %} points away from a critique of technology that sees it as a dominating force and instead insists that society becomes dependent on technology in an unplanned manner by engaging with it (die Gesellschaft lässt sich auf Technik ein).

Of course, in some sense this was always the case since even a simple automatic door opener influences social life but today's systems differ in kind, not merely in degree: they are recursive, adaptive, and operate at a scale and speed that outpaces human observation and reaction.
They irritate our thinking, suggest how we communicate, how we organize ourselves, how we sleep, how we eat, how and whom we love.
What has also changed is the classification of organisms and technical systems with respect to their coupling strategy.
At the time of his writing, Luhmann argued that technology can be identified as realizing *strict couplings* whereas organisms and ecosystems avoid this form of coupling and tend towards a *loose coupling*.
Technology takes a messy, unpredictable world and forces a tight, invariant relationship between cause and effect.
Thus, for Luhmann, technology's entire purpose is to exclude contingency (the possibility of things being otherwise) to guarantee a specific output.[^1]
We argued in {% cite zoennchen:2025 %} that, especially with the advances in the development of large language models, this might no longer be the case.
But even a recommender system can be seen as realizing a *loose coupling*: The technical system relies on social feedback to reduce its own algorithmic complexity, while the social system relies on the technical system to sort through the overwhelming noise of the digital world. And because the technical system is structurally coupled to the unpredictable, loose nature of social communication, the strictly coupled outputs change second-by-second.

[^1]: Norbert Wiener probably would have argued against this distinction because for him noise is a problem for any system be it a machine or an organism. The contradiction dissolves when one realizes that Luhmann and Wiener are analyzing technology at two different levels: operational behavior vs. structural programming.

And yet, when we design (and use) technical systems, we mostly treat them as if they were self-contained machines---simple tools that cannot really alter our *autonomy* and *agency*, even though we know that this is not the case.
We specify inputs and outputs. 
Confidently, we define clear causal chains such that A leads to B and B leads to C.
Rather implicitly, we use system boundaries that separate the technical from the rest of the world; 
We optimize within those boundaries.
And whatever happens beyond them does not belong to our responsibility.

Rather than describing this as an individual failure of developers and engineers, it might be healthier to think of it as a structural consequence of the way we have learned to think as a discipline.
It is an effective way to solve a certain problem since a certain amount of ignorance is necessary to transform uncertainty into something we can manage, such that we are not paralyzed and can move on.
As Luhmann puts it: **Technology constitutes an evolutionary achievement that operationalizes complexity reduction.**

## A Repressed Inheritance

Things were once different. In the decades following the Second World War, there was an intellectual movement that refused to accept precisely these boundaries. *Cybernetics*, which was founded by Norbert Wiener, Gregory Bateson, Heinz von Foerster, and others asked what control, feedback, information, and self-regulation mean, regardless of whether the system in question is a machine, an organism, a brain, or a society.
The early cyberneticians sat together at the same table. This included mathematicians, neurologists, anthropologists, economists, and engineers. The famous Macy Conferences (1946--1953) brought these disciplines into a conversation.

What became of this program? It did not fail. Instead, it was absorbed institutionally. The successor disciplines, such as control engineering, computer science, cognitive science, organizational theory, and operations research, each inherited and developed a part of the cybernetic legacy. But in this process of specialization, what had held it together was abandoned. The shared conversation became a series of monologues.

This is no criticism of specialization as such. *Functional differentiation*, i.e. the division into independent disciplines with their own methods, concepts, and communities of communication, was historically extraordinarily productive. It allowed for complexity reduction, sharper questions, cumulative knowledge. The computer science we know today would be unthinkable without this differentiation.
But every reduction of complexity comes at a price. What disappears from view does not cease to exist.

So should we go back in time?
Anyone who argues today for a return of cybernetics into the syllabus of computer science education must face a question: Is cybernetics not fundamentally compromised, particularly by its military history, by a vocabulary that turns the human being into a machine, by a proximity to control and steering that seems irreconcilable with a liberal, humanist conception of society? (We should also ask if this conception of society is still fruitful e.g. for the [liberal project to reduce cruelty]({% post_url 2026-04-03-cruelty-and-solidarity-en %}).)

However we think of this conception, the discomfort is real and should not be dismissed lightly.
Cybernetics did not emerge in a vacuum. Norbert Wiener developed his ideas about feedback loops and control circuits initially in the context of military anti-aircraft defense. The word "cybernetics" itself (from the Greek *kybernetes*, the helmsman) means guidance, mastery, control. And the program of describing biological organisms and technical machines under the same concepts provoked, and continues to provoke, an unease rooted deep in humanist tradition: if human beings and thermostats operate according to the same principles, what remains of freedom, dignity, and meaning?

This critique left its mark on the humanities academy. Cybernetics is still regarded by many there as an intellectually dubious enterprise. It is seen as an attempt at a scientific annexation of the human being, a precursor to precisely those algorithmic regimes against which people argue so passionately today.

Yet here, I believe, lies a consequential misunderstanding or rather, a fatal confusion. In my interpretation of what I read, the cybernetics about which this discomfort exists is largely the *first-order cybernetics* of the 1940s and 50s, that is, the cybernetics of control, of feedback loops, of the behaviorist model that describes organisms through their input and output behavior without taking their inner life into account. And in fact, Wiener himself recognized early on what this program could bring about if placed in the wrong hands. In *The Human Use of Human Beings* {% cite wiener:1954 %}, he warned emphatically against the possibility of using cybernetic principles to manipulate and control people. Wiener is in this sense a tragic figure---not because he opened a Pandora's box without knowing it, but because he knew what he was doing, issued warnings, and was nonetheless remembered primarily as the inventor of an apparatus of control that he himself feared.

>[Regarding the topic of job destruction,] Wiener notes in the [Cybernetics] that he'd attempted to alert the labor unions of the threats posed by automation to their membership. [...] The potentially ruinous impact of communication technologies on democracy is another issue that Wiener anticipated with uncanny accuracy. [...] As the scale, scope, and speed of information technologies have increased, so has the potential for corruption. Certainly Mark Zuckerberg failed to appreciate that Facebook's "global community" of two billion users would inevitably produce countless messages that were antithetical to homeostasis, and thus to genuine community. [...] That the routine operation of computer technologies can lead to disaster was a point Wiener stressed repeatedly. "Thinking" machines are relentlessly literal-minded, he said. [...] Speed is another routine feature of automation that Wiener frequently warned could thwart our intentions. [...] He regularly railed against the "hucksters" in commerce and "gadget worshippers" in science whose cupidity leads irrevocably, he believed, to "no homeostasis whatever." Readers will find piquant examples of Wiener's disdain for the captains of capitalist industry in [Cybernetics]. [...] Wiener [in contrast to Shannon] set out to explain how information is the lingua franca of both animal and machine, a mission that consciously involved exploring, as he put it, "the boundary regions of science." Thus, cybernetics as Wiener conceived it is **physically embodied—understanding** [...]. -- From the Foreword of {% cite wiener:2019 %} by Doug Hill

What has been almost entirely forgotten is *second-order cybernetics* {% cite foerster:2003 %}, which formed from the 1960s onward primarily around Heinz von Foerster and Humberto Maturana. This movement drew precisely the opposite conclusion from the cybernetic foundations. Its central argument was: **living systems are autonomous**. They are operationally closed. They cannot be steered from outside. They respond to perturbations from the environment according to their own inner logic. Maturana's concept of *autopoiesis* {% cite barry:2012 maturana:1987 %} describes living systems as those that produce and maintain themselves and are therefore, in principle, inaccessible to external control.

>I mention this matter because of the considerable, and I think false, hopes which some of my friends have built for the social efficacy of whatever new ways of thinking this book may contain. They are certain that our control over our material environment has far outgrown our control over our social environment and our understanding thereof. Therefore, they consider that the main task of the immediate future is to extend to the fields of anthropology, of sociology, of economics, the methods of the natural sciences, in the hope of achieving a like measure of success in the social fields. From believing this necessary, they come to believe it possible. In this, I maintain, they show an excessive optimism, and a misunderstanding of the nature of all scientific achievement -- {% cite wiener:2019 %}

This is not an apology for control but its critique in a Kantian sense, by nullifying the very conditions of possibility for purposive steering. The core ambition of second-order cybernetics was to show that control over nature and human beings is not only ethically problematic but epistemically impossible. It is a theory of the limits of steering. This insight was taken up by the ecology movement, i.e. by thinkers such as Gregory Bateson, who in *Steps to an Ecology of Mind* {% cite bateson:1972 %} described the fatal consequences of a mode of thinking that treats nature as a steerable system. One might say: second-order cybernetics is the intellectual resource we would need in order to understand the mistakes we make when we think in the terms of first-order cybernetics.

Why is this part of the legacy so little known?
It seems to me that the emerging artificial intelligence research of the 1960s and 70s turned away from cybernetics---partly for substantive reasons, partly because competition for third-party funding sharpens disciplinary boundaries.
AI and cybernetics became rivals for resources and interpretive authority, not partners. Computer science, which was constituting itself as an independent discipline at that time, oriented itself toward AI research, not toward cybernetics and the emerging *systems theory*. One might say, somewhat pointedly, that **computer science chose {% cite shannon:1948 %} over {% cite wiener:2019 %}**. The cybernetic legacy remained in control engineering, in parts of biology and sociology but not in the discipline that today builds the most consequential technical systems.

It is therefore no coincidence but the result of concrete institutional history that computer scientists and software engineers today are mostly unfamiliar with Wiener's warnings or von Foerster's critique of steerability. The burdened legacy of cybernetics is to a considerable degree a repressed legacy and the repressed, as we know, returns. Only often in a form we did not choose.

Of course, the gains of specialization are tangible. Computer science as an independent discipline was able to concentrate on its core questions: computability, algorithms, data structures, architectures, formal verification. This focus produced extraordinary depth. We understand today with remarkable precision how systems function within defined boundaries.

The loss is subtler and therefore harder to grasp. It does not lie in having forgotten certain facts, but in certain questions never being asked in the first place. When the system boundary ends at the technical artifact, everything beyond that boundary, that is, the social, the psychological, the biological lies by definition outside the domain of responsibility. One is not blind to these areas out of indifference, but because the disciplinary toolkit simply cannot grasp them.

A physicist who knows only mechanics will not overlook thermodynamic phenomena because he dislikes them, but because his conceptual apparatus has no place for them. The same applies to computer scientists and software engineers who have never encountered psychological and social systems as objects of their discipline.

These *blind spots* become costly in a hypercomplex and hyperconnected world. The recommendation algorithm is only one example among many. Automation systems that transform labor markets and reshuffle social strata; systems that learn statistically, that intervene in decision-making processes, that determine life chances; surveillance infrastructures that shift the conditions of psychological and social autonomy are further cases. In all of them, we have built systems that function correctly (most of the time) at the technical level and produce effects at the systemic level that we did not anticipate, precisely because we never learned to think in these categories.

One might attribute a certain malice or greed to the builders of such systems. I prefer to speak of a certain *arrogance of ignorance*, of missing signals that would enable appropriate regulation, and of a system logic to which operators find themselves exposed. There are regulations against the contamination of drinking water, but we are only now beginning to think about how to limit the "contamination" of psychological systems. Part of the reason is certainly the distinction between physical and psychological injury, and the **problem of paternalism**. In the latter case, we are also dealing with effects that are difficult to observe. It would nonetheless be desirable if technical systems were kept under continuous observation and their operators were subject to a certain pressure of justification through systemic analysis. Operators should be answerable to the concerns of a systemic perspective. They should be confronted with the question of under what system logic the system operates, whether this leads to the wellbeing of citizens, and what plans exist to ensure it does. A systemic analysis could draw attention to *positive feedback loops* and call for the introduction of *negative* ones.

## Redrawing the Boundary

Here lies the core of the problem, and it is epistemological in nature: every systems analysis begins with a decision about what belongs to the **system** and what belongs to the **environment**. This decision is never neutral. It determines what counts as a relevant variable, what counts as noise, what counts as an effect of the system, and what counts as an external influence.

When we design a recommendation system and draw the system boundary to include only the algorithm, the database, and user interactions, we have by definition relegated psychological and social dynamics to the environment. They do not appear in the system model. Their feedback loops are invisible.

Importantly, this boundary-drawing occurs even when we do not consciously undertake it. It is built into our methods, how requirements analyses are conducted, how architectures are described, how tests are specified, and how success metrics are defined. **The system boundary is not the result of a decision but the result of a tradition.**

And that is perhaps the strongest argument for a renewal of *systems-theoretical thinking* in computer science: not that we drew the wrong system boundaries, but that we mostly did not draw them at all. They emerged from disciplinary habit. A conscious, reflective practice of system modeling would mean making these boundaries explicit, and thus making them open to negotiation.

The goal is not to restore the cybernetics of the 1950s. Knowledge develops, and that is as it should be. But the systems-theoretical traditions of second-order cybernetics---embodied in Heinz von Foerster {% cite foerster:2003 %}, Stafford Beer's Viable System Model {% cite beer:1995 %}, and the sociological systems theory of Niklas Luhmann {% cite luhmann:1984 luhmann:1998 %}---have, in the decades since the cybernetic breakthrough, developed a vocabulary that could be extraordinarily relevant for computer science today.

Some core concepts that would be worth introducing into *computational thinking*:

**Operational closure and structural coupling.** Luhmann describes social and psychological systems as operationally closed, meaning they operate according to their own inner logic and cannot be steered directly from outside. A social system does not respond to inputs the way a technical system does; it is perturbed by impulses from the environment and processes these according to its own criteria. This has immediate consequences for any technology that seeks to "shape" social behavior. It can disturb, provoke, make offers, nudge but it cannot directly control or command.

**Emergence.** Complex systems exhibit properties that do not exist at the level of individual components and cannot be predicted from them. This is no longer an unfamiliar concept in computer science but it is usually applied to technical systems. Systems-theoretical thinking would suggest expecting and analyzing emergence also at the interface between technical and social systems. What arises when an algorithm and a social community come into contact? This question cannot be answered with technical means alone but it can at least be posed precisely with systems-theoretical concepts.

**Recursive self-description.** Second-order cybernetics pointed out that every description of a system is part of the system it describes. Whoever models social systems alters the system through the model. The actors know the model, react to it, habituate themselves or are estranged from it, subvert or confirm it. This is a fundamental problem of all social technology: it does not operate on a neutral substrate but on self-interpreting systems. A creditworthiness algorithm, once known, changes the behavior of the people it evaluates. Those who know that language models analyze CVs will formulate their CV differently.

**Feedback and system dynamics.** This is the oldest cybernetic concept and simultaneously the one that has penetrated furthest into computer science, for instance in control engineering. But the systems-theoretical perspective would invite us to consider feedback loops not only within technical systems, but also between technical, social, and psychological systems. The changes that a technical system triggers in its social environment return to the technical system as altered usage and altered expectations. Modeling or at least anticipating these loops is difficult but ignoring them is dangerous.

At this point an objection might arise: should computer science now pursue sociology and psychology? Do we not lose precisely the sharpness that makes us productive when we expand into such breadth?
The objection deserves to be taken seriously but it rests on a misunderstanding. The goal is not to replace computer science with systems theory or to retrain programmers as sociologists. The goal, in my mind, is something more modest: computer scientists should learn to consciously perceive the limits of their models.

An architect need not be a structural engineer in order to know that they need one and when they need one. A software engineer need not be a social scientist in order to know that their system intervenes in social systems with their own dynamics that they do not fully understand. Systems-theoretical thinking gives her the vocabulary to name these boundaries, and might provoke her to ask the right questions, to bring in the right expertise.
This would be, I think, no weakening of the discipline, but a consistent maturation that is long overdue given present circumstances.

Compare it with the development of software quality over recent decades. It was once not a self-evident part of *computational thinking* {% cite wing:2006 %} to reflect on security, accessibility, data protection, or energy efficiency. These aspects were introduced into the discipline through external demands, for example, through legal regulation, social debate, spectacular failures, and so on. Today they belong, if not yet always ideally, to the canon.

Systemic effects could be the next chapter of this development, especially because the practice of writing code---which is very different from understanding it---seems to be in decline.
It would be wiser to write this next chapter before the failures become even larger.

For practitioners, "more systems theory" can easily sound like an academic demand without operational consequence. It is therefore worth sketching where systems-theoretical thinking can actually be translated into practice:

**In requirements analysis:** The explicit question of which systems, i.e. technical, social, psychological, biological, are touched by the project. Not as a checklist, but as a genuine analytical practice. What feedback loops are to be expected? What properties of these systems are not modelable but nonetheless relevant?

**In system design:** The distinction between what the technical system can control and what it can only perturb or offer, that is, the difference between *loose* and *strict* *couplings*. Which systems must we treat as *black boxes*, and which are *white* to us? This distinction fundamentally changes design decisions. It suggests making systems more modular, more reversible, and more observable, because the effects on social systems cannot be fully anticipated.

**In metrics definition:** The question of whether the metrics being optimized for represent the systemic goals, or only the technically measurable slice of them. This is the most direct consequence of the recommendation algorithm example: time on platform is not the same as user wellbeing.[^2] 

[^2]: Of course, regulations or other incentives have to be installed to make sure that the desired systemic goals are in fact the goals of the organizations that set them. But this is itself a systemic problem because such an organization is a complex system that can not be steered or controlled directly but can only be irritated.

**In education:** Systems-theoretical foundations—not, of course, in their full Luhmannian complexity—but potentially as part of the computational canon. What are systems? What is environment? What is (structural) coupling? What is emergence? What does it mean that social systems are operationally closed? These questions could be integrated as a standalone module or as a cross-cutting theme in existing courses. The theory itself must, however, remain open to critique, and it is necessary to also engage with its critics.

**In interdisciplinary projects:** Systems theory as a shared language that enables precise communication across disciplinary boundaries. When a computer scientist and a sociologist can both speak about "structural coupling," they have a common vocabulary for something that is otherwise very difficult to articulate.

## When the Model Becomes an Actor

Let me come to an end by looking at a recent example of a system that should be looked at with a systems-theoretical perspective.

*Prediction markets* offer a particularly instructive illustration of dynamics. 
These are markets on which participants can bet on the outcome of future events, for example, from election results to whether a politician will use a particular word in a speech to whether a new drug will pass clinical trials. 
Each bet takes the form of a contract that pays out one dollar if the event occurs and nothing otherwise. 
The current market price therefore directly reflects the collective probability estimate: a price of $0.73 means the market assigns a 73% probability to the event occurring. 
The promise is that markets aggregate information efficiently, meaning those with superior knowledge can profit, which draws well-informed participants and, ideally, surfaces something close to the truth.

The most obvious problem is one we already know from sports betting: the possibility of corruption. If you can bet on an outcome, you have a financial incentive to influence it.
Prediction markets extend this temptation to virtually every domain---elections, policy decisions, scientific results, media events.
The set of potential actors willing to manipulate an outcome grows correspondingly large, and the markets themselves make it easier to identify which events are both consequential and controllable by a small group.
In Luhmann's terms, money is being used to **pierce the operational closure of functionally differentiated systems**.
This could essentially make the political system respond to economic logic, or the scientific system respond to financial incentives (directly, i.e. suddenly the operations of system A operate **in** system B). 
Functional differentiation emerged precisely to prevent this kind of interference; it makes each system efficient with respect to its own internal code. Aside from obvious moral issues, breaking it down has costs on a functional level.

But the more fundamental problem persists even if we set aside corruption entirely and imagine a world of perfectly honest participants. It is the problem of recursive self-description. 
A prediction market does not merely observe the probability of an event but it also publishes that observation, and in doing so becomes a participant in the very system it was meant to describe from the outside. 
This makes *second-order observation* possible, meaning people can observe how others observe.

In many cases second-order observation effectively reduces complexity, for example, when you want to buy a house it is not necessary to go to the house and calculate by hand how much it should cost.
You observe how others observe the house via the housing market.

In the case of prediction markets, second-order observation is part of the signal an individual brings into the prediction and thereby undermines the whole concept of "drawing in individuals with superior knowledge".
And worse: a market price of 85% in favor of a particular election outcome influences how voters, campaigns, donors, and media organizations behave, which in turn influences the outcome. 
The observer has entered the system. 
The model is no longer a neutral representation; it is an **actor**.
That media organizations seem highly interested in coupling their operations with these markets could likely amplify these effects.

The possible consequence is that prediction markets are not simply truth-discovery mechanisms that occasionally malfunction. 
They are an interesting case for systems theorists because, as I hinted at, they make *observations* of the models of psychic systems, i.e. our beliefs, *observable*.
Consequently, at scale, they risk becoming machines that produce self-fulfilling prophecies---not reading the future from a god's-eye view, but actively shaping it through the feedback loops they generate. 
Whether this is a net gain depends on a question the markets themselves cannot answer: what value does a prediction that influences its own outcome actually produce? 
And for whom?
And, assuming the system works effectively---which is highly questionable---is it a net good to know what an aggregate believes about the future?

Going back to my [previous post]({% post_url 2026-04-03-cruelty-and-solidarity-en %}), I pose the question: do we need this kind of certainty?
Or probably more appropriate: Will society engage in this sort of complexity reduction or will prediction markets fizzle out?
Maybe prediction markets could lead to less polarization and act as a negative feedback loop of social media outrage.
However, because of the non-linear nature of their dynamics, it is hard to predict what influence such systems have long term but I would advise to closely observe what happens on a time scale that matches the systems operation speed (if this is even possible).

Listening to interviews with the CEOs of these markets could not eliminate my worries.

>Prediction markets are the future. I think they are the future not just for traders but also for news and information. -- CEO of Robinhood

>New York City was shut down [during COVID] and I asked myself: when is this going to end? When will the vaccine gonna be ready? When is shelter in place to be over? And prediction markets can take all these disparate opinions that people are pontificating about or that they have really good reasons to believe and distill it down into one probability. [...] When I get hit up by people in the Middle East who are saying that "You know we're looking at Polymarket to decide whether we sleep near the bomb shelter." And I am like "Oh, it is really that popular over there?" That is very powerful. That is like an undeniable value proposition that did not exist before. The global truth machine is here, powered by the people. -- CEO of Polymarket

>We are a financial market like a stock market but you trade on politics, weather, climate, economics, sports, and so on. This can rival the stock market. -- CEO of Kalshi

The possibility to bet on whether there will be a Russia-Ukraine ceasefire before a certain video game comes out, feels intuitively ethically wrong and deeply distasteful.
Fittingly the Kalshi ad read: **The world's gone mad, trade it.** 
It is, of course, also very dubious that the son of the President of the U.S. is an adviser to two of these markets.

## An Invitation

This text is an invitation to reflect. I am by no means an expert on the subject and my reading list is long and growing.
It is an attempt to articulate an intuition about my observation of the development of technical systems that are increasingly socially and psychologically disruptive.

The intuition is this: we build things we do not fully understand---not in the technical sense, but in the systemic one. We know how our algorithms function. We do not know well enough how they function in the world.

This is no reason for paralysis. No engineering endeavor waits until all effects are fully known before it begins. But it is a reason for humility and curiosity. The systems that concern us are larger than the boundaries we have drawn around them.

Perhaps it is time to renegotiate those boundaries. Not in order to leave computer science behind, but to extend it. Cybernetics and systems theory offer for this purpose a vocabulary that has matured over fifty years and remains largely unused and is largely unknown in the very discipline that emerged from it, and yet which might need it most urgently.

Perhaps it is worth attempting to take a look inside.

## References

{% bibliography --cited_in_order %}