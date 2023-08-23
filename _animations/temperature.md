---
layout: p5js-collection
title: Monthly Global-Mean Temperatures
description: A plot of the monthly global-mean temperatures.
image: animations/temperature.png
permalink: /works/temperature/
---

# {{ page.title }}

The following is a plot of the monthly global-mean temperatures {% cite lenssen:2019 %}, {% cite hansen:2010 %}. One cycle represents one year. It shows how the mean temperature is getting out of control. By left-clicking, you can restart the animation. **Update**: NASA has posted a news release about the [July 2023 global temperature anomaly](https://www.nasa.gov/press-release/nasa-clocks-july-2023-as-hottest-month-on-record-ever-since-1880) which I included.

I work with the [GISS dataset](https://data.giss.nasa.gov/gistemp/).

<div id = "p5-temperature" style="display:block; margin-left:auto; margin-right:auto; width:740px; margin-bottom:1.5em;"></div>
<br>

The following plot shows the same data.

<div><img style="display:block; margin-left:auto; margin-right:auto; width:70%;" src="{% link /assets/images/nasa_global_temperature_2023.png %}" alt="Probabilities">
</div>
<br>

## References

{% bibliography --cited_in_order %}