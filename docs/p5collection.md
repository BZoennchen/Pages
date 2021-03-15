---
layout: p5js-collection
title: P5Collection
permalink: /p5collection/
---
# Algorithm Visualization

This is a collection of some simple P5JS examples I created at some point in time without having any purpose but a playful enjoyment.

<br>

## Space-filling Curve

Illustration of Sierpiński's Space-filling Curve in two dimensions. It is a mapping 

$$SFC : \mathbb{R}^+ \rightarrow [0;1] \times [0;1],$$

completely fill the unit square. 
More precisely this is true in the limit $$k \rightarrow \infty$$, where $$k$$ is the order of the curve.
The animation shows the curve for $$k = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10$$.
The length of the curve grows expenentially.

<div id = "p5-sierpinksi" style="background-color: #fdfdfd; justify-content: center; display: flex;"></div>

<br><br><br>

## Discrete Voronoi Diagram

Illustration of a Flooding Algorithm that computes the discrete Voronoi diagram of 100 random points.
The Voronoi diagram is the dual of the Delaunay triangulation.
The Flooding Algorithm starts a propagating wave at each of the random points.
The wavefront propagates through the Voronoi cell until it collides with another wavefront.

The advantage of this kind of computation is that parallelism can be exploited.
In fact, this algorithm is suited to be executed on GPUs.
A disadvantage is that the space is discretized, therefore, the result is an approximation and not equal to the actual Voronoi diagram defined by the points.

<div id = "p5-voronoi" style="background-color: #fdfdfd justify-content: center; display: flex;"></div>
