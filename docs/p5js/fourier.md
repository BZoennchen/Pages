---
layout: p5js-collection
title: Fourier Drawing
permalink: /p5collection/fourier/
---

# Fourier Drawing

This animation is inspired by the work of [Daniel Shiffman](https://shiffman.net/) and his tutorial [Drawing with Fourier Transform and Epicycles](https://www.youtube.com/watch?v=MY4luNgGfms), as well as the excellent explanation of the Fourier analysis done by [Grant Sanderson](https://www.3blue1brown.com/about) in the video [But what is a Fourier series?](https://www.youtube.com/watch?v=r6sGWTCMz2k).

You can change animation via the dropdown menu and by increasing the accuracy using the slider below.

I use circles moving around circles (epicycles) to draw different figures.
The greeks famously tried to explain the movement of the orbs by using epicycles.
They already knew that shapes very different from cycles could be expressed by epicycles.
In fact, it turns out that one can draw any sufficiently smooth (piecewise-smooth) curve by using circles (possible infinite amount).
This unbelievable result was discovered by Fourier (1768-1803).
In other words, he discovered that an arbitrary piecewise-smooth function could be represented by trigonometric series.

<div id = "p5-fourier" style="position: relative; background-color: #fdfdfd;"></div>

The first very simple but still interesting orbit we can achieve is a straight **Line**.
We have two orbits of the same size and frequency, but one is clockwise while the other is counter-clockwise.

With the same frequencies and directions, we get an ellipse **Ellipse** if the second orbit is smaller than the first one.
In fact, we can draw any ellipse by manipulating the radii of the orbits.

An approximation of a equilateral **Triangle** can be drawn by using frequencies $$\omega_1 = \omega, \omega_2 = -2\omega_1$$ and radii $$r_1 = r, r_2 = 1/(4 r_1)$$.
An approximation of a **Rectangle** (a square) can be drawn by using $$\omega_1 = \omega, \omega_2 = -3 \omega_1$$ and radii $$r_1 = r, r_2 = 1/(7 r_1)$$.
I think, this is pretty amazing.
If our planets would move in circles, it would be very likely that there is a moon moving in a squared-looking orbit.

To get a nice looking **Flower** by using two circles, one has to use frequencies in a special relation.
I use $$\omega_1 = \omega, \omega_2 = 17/4 \omega_1$$ and radii $$r_1 = r, r_2 = 1/5 r_1$$.
Since the greatest comman divisor of $$4$$ and $$17$$ is $$4 \cdot 17$$, the larger orbit has to go through $$4$$ cycles until the drawing is done.
Complex fractions lead to complex drawings.

For the **Star**, I use $$\omega_1 = \omega, \omega_2 = -5/2 \omega_1$$ and radii $$r_1 = r, r_2 = 1/3 r_1$$ and for the **Gear**
$$\omega_1 = \omega, \omega_2 = -33/4 \omega_1$$ and radii $$r_1 = r, r_2 = 1/7 r_1$$.
For **Chaos**, I add two additional circles with 
$$\omega_3 = -33 / 3 \omega_1, \omega_4 = 54 / 4 \omega_1$$
and
$$r_3 = 1 / 19 r_1, r_4 = 1 / 21 r_1$$.
Use the slider to see the effect!
We can still see a structure, but it appears more chaotic.

For the last three examples it might be more interesting to look at the function drawn on the right.
**TriWave** is the Fourier series of the triangle wave, **SquarWave** the Fourier series of the square wave and **SawWave** the series of the sawtooth wave.
By using the slider you can increase the number of terms, i.e., I do not compute the infinte series but use only up to $$20$$ terms.