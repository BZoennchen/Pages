---
layout: p5js-collection
title: Discrete Voronoi Diagram
description: Illustration of a flooding algorithm that computes the discrete Voronoi diagram of some random points.
image: animations/voronoi.png
permalink: /works/voronoi/
---

# {{ page.title }}

Illustration of a flooding algorithm that computes the discrete Voronoi diagram of some random points.
The Voronoi diagram is the dual of the Delaunay triangulation.
The flooding algorithm starts a propagating wave at each of the random points.
The wavefront propagates through the Voronoi cell until it collides with another wavefront.

The advantage of this kind of computation is that parallelism can be exploited.
In fact, this algorithm is suited to be executed on GPUs.
A disadvantage is that the space is discretized, therefore, the result is an approximation and not equal to the actual Voronoi diagram defined by the points.

<div id = "p5-voronoi" style="background-color: #fdfdfd justify-content: center; display: flex;"></div>