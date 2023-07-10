---
layout: p5js-collection
title: Forest Fire Simulation
description: A cellular automaton to simulate and visualize forest fires. The visualization is simple but effective.
image: animations/fire.png
permalink: /works/fire/
---

# {{ page.title }}

The following simulation is a running cellular automaton on a grid using the Von Neumann neighborhood.
A cell is either (1) empty (highlighted in brown), (2) occupied by a tree (highlighted in green) or burning (highlighted in red).
I implemented the model proposed by Drossl and Schwabl {% cite drossel:1992 %}:

1. A burning cell turns into an empty cell
2. A tree will burn if at least one neighbor is burning
3. A tree ignites with probability $\gamma$ even if no neighbor is burning
4. An empty space fills with a tree with probability $\alpha$

In this example I use $\gamma = 5.0 \cdot 10^{-6}$ and $\alpha = 0.01$ and $150 \times 150$ cells.

<div id = "p5-fire" style="display:block; margin-left:auto; margin-right:auto; width:740px; margin-bottom:1.5em;"></div>
<br>

## References

{% bibliography --cited_in_order %}