---
layout: p5js-collection
title: Fractal Tree
description: The following sketch displays a randomly generated tree. It is generated recursively.
image: animations/tree.png
permalink: /works/tree/
---

# Fractal Tree

The following sketch displays a randomly generated tree. It is generated recursively using simple rules:

+ draw lines
+ rotate lines
  
At each step, the thickness and the length of lines are reduced. I add some noise for each geometric transformation to get a more natural result.
I generate a new (random) tree every time you refresh the page.

<div id = "p5-tree" style="background-color: #fdfdfd; justify-content: center; display: flex;"></div>
