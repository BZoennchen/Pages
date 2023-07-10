---
layout: p5js-collection
title: Monthly Global-Mean Temperatures
description: A plot of the monthly global-mean temperatures.
image: animations/temperature.png
permalink: /works/temperature/
---

# {{ page.title }}

The following is a plot of the monthly global-mean temperatures {% cite lenssen:2019 %}, {% cite hansen:2010 %}. One cycle represents one year. It shows how the mean temperature is getting out of control. By left-clicking, you can restart the animation.

I work with the [GISS dataset](https://data.giss.nasa.gov/gistemp/).

<div id = "p5-temperature" style="display:block; margin-left:auto; margin-right:auto; width:740px; margin-bottom:1.5em;"></div>
<br>

## References

{% bibliography --cited_in_order %}