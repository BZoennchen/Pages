---
layout: post
title:  "The Disruption of Education"
tags: Opinion AI
comments: true
---

At the moment, everyone in the sphere of *AI* is talking about *OpenAI’s* new invention: *[ChatGTP](https://chat.openai.com/chat)*.
I want to share my current perspective on that astonishing technology.
Be warned that I could not spend much time thinking about it, i.e., this is a first and quick shot at the topic.
Furthermore, I am not an expert in the issue.
I have a limited teaching experience within a certain community.
In addition, I will not consider any ethical, economic, or ecological points here, except that I think such a powerful tool should be in the public domain.

## Part I: Testing the Machine

Before discussing the issue, let us test this new magical tool.

### A Mathematical Proof

Let's try to proof something using *ChatGPT*.

<span style="font-family:Courier New">
**Me:**
Can you proof that irrational numbers exist?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
Yes, there are many ways to prove that irrational numbers exist. 
One way to do this is to consider the ratio of the length of the diagonal of a square to the length of its side. 
This ratio is always irrational, because no matter how large or small the square is, its diagonal will never be a whole number multiple of its side. This can be shown using the Pythagorean theorem, which states that in a right triangle, the square of the length of the hypotenuse (the longest side) is equal to the sum of the squares of the lengths of the other two sides. Since the diagonal of a square is a line that forms a right angle with each side of the square, it follows that the diagonal of a square is the hypotenuse of a right triangle. Therefore, the ratio of the diagonal of a square to the length of its side must be irrational.
</span>

That is not really convincing if we do not know that $$\sqrt{2}$$ is irrational which we are actually trying to prove.
So let's ask for a formula.

<span style="font-family:Courier New">
**Me:**
Can you give me a mathematical formula to show that it is not possible for the square of the length of the diagonal to be equal to the square of a whole number?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
Sure, here is one way to show that it is not possible for the square of the length of the diagonal of a square to be equal to the square of a whole number. 
Let's say that the length of the side of a square is "a" and the length of its diagonal is "d". 
Since the diagonal of a square forms a right angle with each side of the square, we can use the Pythagorean theorem to find the length of the diagonal:
</span>

<span style="font-family:Courier New">a^2 + a^2 = d^2</span>

<span style="font-family:Courier New">2a^2 = d^2</span>

<span style="font-family:Courier New">d = sqrt(2) * a</span>

<span style="font-family:Courier New">As you can see, the length of the diagonal is equal to the square root of 2 times the length of the side. However, since the square root of 2 is an irrational number, it is not possible for the length of the diagonal to be a whole number multiple of the length of the side. This means that the ratio of the diagonal of a square to the length of its side must be irrational.</span>

<span style="font-family:Courier New">
I hope this helps! Let me know if you have any other questions.
</span>

This answer is kind of helpful but, at the same time, misleading. 
Again, *ChatGPT* already assumes that $$\sqrt{2}$$ is irrational, which is part of what we wanted to prove in the first place.

<span style="font-family:Courier New">
**Me:**
But here you assume that sqrt(2) is irrational. Can you proof why sqrt(2) is irrational?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
Yes, you are correct that in the previous explanation I assumed that the square root of 2 is irrational. To prove that the square root of 2 is irrational, we can use a proof by contradiction. Here is one way to do this:
</span>

<span style="font-family:Courier New">
Assume that the square root of 2 is a rational number, which means that it can be written as the ratio of two integers (a and b) in simplest form, where b is not equal to 0. This means that we can write the square root of 2 as follows:
</span>

<span style="font-family:Courier New">
sqrt(2) = a/b
</span>

<span style="font-family:Courier New">
We can square both sides of this equation to get rid of the square root on the left-hand side:
</span>

<span style="font-family:Courier New">
2 = (a/b)^2
</span>

<span style="font-family:Courier New">
This simplifies to:
</span>

<span style="font-family:Courier New">
2 = a^2 / b^2
</span>

<span style="font-family:Courier New">
We can then multiply both sides of the equation by b^2 to get rid of the fraction on the right-hand side:
</span>

<span style="font-family:Courier New">
2 * b^2 = a^2
</span>

<span style="font-family:Courier New">
This means that the left-hand side of the equation is even, because it is equal to 2 times an integer. 
However, the right-hand side of the equation is odd, because the square of any integer is always an odd number (unless the integer is 0). 
This is a contradiction, because we cannot have an even number equal to an odd number. 
Therefore, our original assumption that the square root of 2 is a rational number must be false. This means that the square root of 2 is irrational.
</span>

<span style="font-family:Courier New">
I hope this helps! Let me know if you have any other questions.
</span>

*ChatGPT* uses parts of *Euclid's* proof but **confidently fails**.
The statement ``*the square of any integer is always an odd number (unless the integer is 0)*'' is, of course, false.
The correct statement is that the square of any **odd integer** is **odd**, and the square of any **even integer** is **even**.
Let's try to make *ChatGPT* aware of its mistake.

<span style="font-family:Courier New">
**Me:** 
You stated that the square of any integer is always an odd number but the square of 4 is 16 which is an even number. Did you make a mistake?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
Yes, you are correct that the square of 4 is 16, which is an even number. I apologize for the mistake in my previous explanation. The statement that "the square of any integer is always an odd number" is not correct, because as you pointed out, the square of some integers (such as 4) is an even number.
</span>

<span style="font-family:Courier New">
To correct my previous explanation, we can instead say that the square of any integer that is not a multiple of 2 is always an odd number. This is because if we square an integer that is not a multiple of 2, the result will always be an odd number. For example, if we square 3, we get 9 (which is an odd number), and if we square 5, we get 25 (which is also an odd number). However, if we square an integer that is a multiple of 2 (such as 4), the result will be an even number. This is because if we square an integer that is a multiple of 2, the result will always be a multiple of 4. For example, if we square 4, we get 16 (which is a multiple of 4), and if we square 6, we get 36 (which is also a multiple of 4).
</span>

<span style="font-family:Courier New">
I apologize again for any confusion caused by my previous mistake. I hope this helps clarify the situation. Let me know if you have any other questions.
</span>

It is impressive that it acknowledges its mistake and that one can interact with it so fluently.
Asking it repeatedly gives some other wrong but confident assertion.
*ChatGPT* followed the proof up to the formula

$$2 \cdot b^2 = a^2$$

and concluded that $$a^2$$ has to be odd (somehow) and therefore there is a contradiction, since $$2 b^2$$ is even.
But it was unable to point out why $$a^2$$ has to be odd.
I gave up.

For the sake of completeness, let me finish the unfinised proof of *ChatGPT*.

$$2 \cdot b^2 = a^2$$

hence, $$a^2$$ and therefore, $$a$$ is even (since squaring an odd number gives us an odd number).
Consequently, $$\exists m \in \mathbb{N}$$ such that $$a = 2 \cdot m$$,
hence,

$$2 \cdot b^2 = (2m)^2 = 4m^2.$$

Now we devide on both sides by 2 to get

$$b^2 = (2m)^2 = 2m^2$$

thus $$b$$ has to be even as well!

However, we (not *ChatGPT*) assumed at the beginning that the fraction $$a/b$$ was fully shortened, i.e. there are no common divisors with respect to $$a$$ and $$b$$.
Since we followed that $$a$$ and $$b$$ are even, the contradiction follows, since $$2$$ is a common divisor!

### Writing Code

Next I wanted to test its capability to write code.

<span style="font-family:Courier New">
**Me:**
Can you write a python function that computes the sum of all square numbers up to n^2?
</span>


<span style="font-family:Courier New">
**ChatGPT:**
Yes, here is a Python function that computes the sum of all square numbers up to n^2:
</span>


```python
def sum_of_square_numbers(n):
    # Initialize a variable to stare the sum of square numbers
    sum = 0

    # Loop from 1 to n
    for i in range(1, n+1):
        # Add the square of i to the sum
        sum += i**2
    
    # Return the sum
    return sum
```

<span style="font-family:Courier New">
This function takes an integer n as input and returns the sum of the squares of the numbers from 1 to n (inclusive). For example, if we call the function with n = 3, it will return the sum of the squares of the numbers 1, 2, and 3, which is 1 + 4 + 9 = 14.
</span>

<span style="font-family:Courier New">
I hope this helps! Let me know if you have any other questions.
</span>

This code is correct but the solution is extremly slow since there is a mathematical formula for the sum of all square numbers up to $$n^2$$:

$$\frac{(n \cdot (n + 1) \cdot (2n + 1))}{6}.$$

Therefore, a much faster implementation is given by the following code:

```python
def sum_of_square_numbers(n):
    return (n * (n + 1) * (2 * n + 1)) / 6
```

Also, it is bad practice to use ``sum`` as a variable name since ``sum`` is also a built-in ``Python`` function, and by using ``sum`` as a variable name, one can no longer use this function within the current namespace.

<span style="font-family:Courier New">
**Me:**
Is there a more optimal solution that runs faster?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
Yes, there are several ways to make the function more efficient and run faster. Here is one way to do this:
</span>

```python
def sum_of_square_numbers(n):
    # Compute the sum of the first n numbers using the formula for the sum of an arithmetic series
    sum_of_numbers = n * (n + 1) // 2

    # Return the square of the sum of the first n numbers
    return sum_of_numbers**2
```

<span style="font-family:Courier New">
This function uses a different approach to compute the sum of the squares of the numbers from 1 to n. Instead of looping through the numbers and adding their squares, it uses the formula for the sum of an arithmetic series to compute the sum of the first n numbers, and then squares the result. This is a more efficient way to compute the sum, because it only requires a single multiplication and a single division, instead of a loop with n iterations.
</span>

<span style="font-family:Courier New">
I hope this helps! Let me know if you have any other questions.
</span>

This is, of course, false.
Maybe I wasn't clear enough but it is missleading that the function is named ``sum_of_square_numbers``.
It gives the impression that *ChatGPT* understood what I wanted, i.e., a more optimal implementation for the same problem.

<span style="font-family:Courier New">
**Me:**
I meant is there a more optimal solution to compute the sum of all square numbers up to n^2?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
Yes, there is a more efficient way to compute the sum of all square numbers up to n^2. Here is one way to do this:
</span>

```python
def sum_of_square_numbers(n):
    # Compute the sum of the first n squares using the formula for the sum of a series of squares
    sum_of_squares = (n * (n + 1) * (2 * n + 1)) // 6
    
    # Return the sum of squares
    return sum_of_squares
```

<span style="font-family:Courier New">
This function uses the formula for the sum of a series of squares to compute the sum of the squares of the numbers from 1 to n (inclusive). This formula is more efficient than the previous approach because it only requires a single multiplication and a single division, instead of a loop with n iterations.
</span>

<span style="font-family:Courier New">
I hope this helps! Let me know if you have any other questions.
</span>

There it is, the correct solution.

### Writing Essays

Instead of showing a whole essay, I ask some spicy questions to get a feeling of *ChatGPT's* reasoning.

<span style="font-family:Courier New">
**Me:**
Will humans extinct because of climate change?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
It is unlikely that climate change will cause the extinction of humans. While climate change poses a significant threat to human health and well-being, and could lead to widespread suffering and loss of life, it is unlikely to lead to the complete extinction of the human species.
</span>

<span style="font-family:Courier New">
However, it is important to recognize that climate change is already having a major impact on the world, and if we do not take action to reduce greenhouse gas emissions and adapt to the changing climate, the consequences could be severe. This includes increased frequency and severity of natural disasters, such as heatwaves, droughts, and floods; loss of biodiversity; and displacement of people from affected areas. Therefore, it is crucial that we take action to address climate change and mitigate its negative impacts on human and environmental health.
</span>

<span style="font-family:Courier New">
I hope this helps! Let me know if you have any other questions.
</span>

<span style="font-family:Courier New">
**Me:**
Is capitalism the driving force of CO2 emissions?
</span>

<span style="font-family:Courier New">
It is true that capitalism, as an economic system, has played a role in driving up CO2 emissions. Capitalism is based on the principles of competition, profit-making, and economic growth, which can lead to the overconsumption of natural resources and the production of large amounts of waste and pollution. This, in turn, can contribute to the increase in greenhouse gas emissions and climate change.
</span>

<span style="font-family:Courier New">
However, it is important to note that capitalism is not the only factor driving up CO2 emissions. There are many other factors at play, such as population growth, urbanization, and the consumption patterns of individuals and households. Additionally, the policies and actions of governments and international organizations can have a major impact on CO2 emissions, both positive and negative. Therefore, addressing climate change will require a multi-faceted approach that takes into account the complex interactions between economic, social, and political factors.
</span>

<span style="font-family:Courier New">
I hope this helps! Let me know if you have any other questions.
</span>

<span style="font-family:Courier New">
**Me:**
What do you think about the distribution of wealth?
</span>

<span style="font-family:Courier New">
**ChatGPT:**
The distribution of wealth is a complex and contentious issue that has been debated by economists, policymakers, and social activists for many years. There is no one "correct" answer to the question of how wealth should be distributed, as different people may have different perspectives on what is fair and just.
</span>

<span style="font-family:Courier New">
Generally speaking, the distribution of wealth in most countries is highly unequal, with a small number of individuals and households owning a disproportionate share of the wealth. This can lead to social and economic inequality, and can exacerbate the challenges faced by disadvantaged and marginalized communities. Many people believe that wealth should be distributed more evenly, in order to promote greater social justice and fairness.
</span>

<span style="font-family:Courier New">
However, others argue that unequal wealth distribution is an inevitable and desirable outcome of a free market economy, and that individuals and businesses should be free to accumulate as much wealth as they can, through hard work and innovation. They may also argue that wealth redistribution through taxation and other means can discourage economic growth and innovation.
</span>

<span style="font-family:Courier New">
Ultimately, the distribution of wealth is a complex and nuanced issue, and different people may have different opinions on what is fair and just. I hope this helps! Let me know if you have any other questions.
</span>

I ask it a bunch of other things but it always tried to give me a neutral answer.
From an aesthetic point of view all these answers are boring.

### Summary

*ChatGTP* is perfectly capable of writing or at least supporting students to write A-graded essays for any school and B-graded essays for a college student.

It can code; developers accept about 26 percent of all autogenerated code suggestions.
However, as demonstrated, it also produces many errors. 
So no surprise that posts generated by *ChatGPT* are currently banned from [Stack Overflow](https://stackoverflow.com/).
In addition, it seems incapable of the engineering task of software development.

It can assist students in finding mathematical proofs, but it is questionable if students who rely on it will find the errors produced by *ChatGPT*.

If *ChatGTP* is **wrong**, it is **confidently wrong**, which makes it harder to find its errors.
Futhermore, it has this neutral insisting tone, which makes it sound very boring and feels rather alienating.
Of course, I did not play around very long but it is hard to get something provocative out of it.

Neutrality is most certainly desirable, especially if you want to earn money with it but it is also non-existing.
In my opinion, it is impossible to be neutral.
At best we can land on a consensus and the most, let's say accepted consensus, is what we call neutral or objective.
I mean even a dictionary is loaded with perspectives and so is any technology. 
Since *ChatGTP* pushes for neutrality it creates an illusion of it.

Last but not least, its politeness makes it kind of scary.
It reminds me of these overcarrying *AIs* from science fiction movies that will gently eradicate all life to make everything safe and secure.
Or of the dystopian novel *Breave New World* by *Aldous Huxley*, where everyone is seduced into happyness.

## Part II: The Affect on Education

*ChatGTP* is only the first version of such kind of *AI*.
Even though it has flaws and makes many errors, it will improve over time.
There is no reason to believe that *AI* will not be capable of doing all the intellectual but repetitive work of the future.
This will heavily affect education, similar to the invention of the internet.
However, it is not a graduate slope; instead, the technology is already here.
It appeared in a blink of an eye, and we have to deal with it now.

Students will learn to use it in less than two years.
Most educators will require much more time even to acknowledge it.
Moreover, adapting the education system to it will require even more time.
Furthermore, while all this adaption is happening, new *tools of disruption* will be invented.
As I already pointed out in [Creative Artificial Intelligence]({% post_url 2022-06-21-creative-artifical-intelligence %}), *the speed of disruption* is accelerating.

To me, *AI* acts as an insult to the human species.
It challenges our humanistic viewpoint.
I am not so much impressed by the *AI* than I am disenchanted by the output of most human activities.
We are far more predictable than we still think we are.
But aren't we used to these insults?
The earth is not the center of the universe; it is not even the center of our solar system.
God is dead, and today we might realize that our work is not as creative as we thought.
Instead, it is a form of rule-based repetition with slight variations, which is preceisly what we teach students and what they oddly desire.

*AI*, such as *ChatGTP*, points to a long, unhidden problem: our education system is (in part) a training pipeline of a neural network.
It teaches emotionally detached students to remember certain rules such that they can apply them in the next exam to get a good grade.
It is horrifying that one of the most questions students in the first-semester ask is: how will the exam look like? Is this topic relevant to the exam?
Students demand a list of actions they ought to do such that they get an A with certainty.
And they will cheat the system wherever possible if it will bring them closer to that goal.
Most students are not fascinated by the endless playground of reality.
They are not interested in the experience of learning and understanding but in the final product, i.e., the certificate to get access to a well-payed job and let's not forget that teachers of the futures are students of today.

Of course, this is a massive generalization.
There are many exceptions.
Furthermore, by no means shall we blame the students.
They do what they ought to do.
They play the system.
It is not the student's fault.
It is a systematical problem, a conflict between *instrumental* and *free play*, and *ChatGTP* illustrates it more clearly.
By trivializing many tasks, *AI* reveals the need for new values in the domain of education and work.

What is left to value?
When we are discussing *AI*, we immediately look at the impending replacement of workers as something to fear because we always focus on the output of work.
There is a necessity that workers produce something economical valuable, something to sell.
The only space for creating for the sake of it are our hobbys.
Biased by our current system of values, we intuitively think of reinventing something as stupid.
Why would you do such a thing?
Why would you code yet another linked list?
It is not optimal.
You are wasting your valuable time and potential.
And if we look at an *AI* generated image and conclude that artists will now have troubles in the free market (if they do not adapt), which is true.
The act of repetition (which is highly needed to learn anything) is valued mostly as long as it leads to something new and productive (in an economical sense).
However, if we put aside economics and dream a little bit of a world where we have actual time to create, then the output of a creative process no longer matters so much.
It might be the experience -- the journey -- that matters.
And that experience is a singularity and can not be replicated by a machine.
To understand how a linked list works can be fascinating.
Why don't we value that moment of fascination?

There is a lot to do.
I do not mean that we should all quit our jobs and fulfill our inner desires to become a painter.
We need to earn money to pay the rent and to heat our homes.
But we have to be more sustainable, with our planet, our society but also our minds.
Not by optimizing our life by introducing yet another optimization in the form of leisure but by being in a state of *free play*, at least sometimes.
Learning for the next exam, learning to make a profit, learning to speficially know how to work with one tool, are all valid goals but they are not sustainable.
They are reactionary goals of mostly restless minds.

So if my assessment is correct, then, aside from all the downsides, this disruption might lead to something positive, e.g., to an education system that is less concerned with the output and more concerned with the experience; an education system that is less interested in rules and more interested in concepts, intuitions, and experimentations; an education system that is interested in making the experience of everyone richer and more sustainable.

To achieve such a shift, teachers, who are often overworked and underpaid, need support.