---
layout: p5js-collection
title: Perpendicular Parallel Branching
description: An animation that can be categorized as pure generative art.
image: animations/flake.png
permalink: /works/snowflake/
youtubeId: s7KU13ZpbmU
video: snowflake.mp4
---

# {{ page.title }}

The following animation is pure *generative art*.
It starts with a single line that branches with a certain probability.
Each new line has a smaller final length and can branch again but with decreasing probability.
Every branch is perpendicular to its parent.
Everything is copied cyclically multiple times to achieve a high degree of symmetry.

<div id = "p5-snowflake" style="display:block; margin-left:auto; margin-right:auto; width:740px;margin-bottom:1.5em;"></div>
<br>

As usual, I used [P5js](https://p5js.org/) to generate the animation.
However, I ported the example to [Rust](https://www.rust-lang.org/) to get a feel for [Nannou](https://nannou.cc/) an open-source creative-coding framework for Rust.
You may ask: Why Rust?
First of all, I heard a lot of good things about it, and I always wanted to learn another language to do all the low-level programming.
I am not an expert in ``C`` or ``C++`` so it comes naturally to try ``Rust``.

For now, I must say it feels good to be back in a statically typed language after programming a lot of ``Python``. The ``Rust`` source code can be found [here](https://github.com/BZoennchen/algorithmic-design/blob/main/perplines/src/main.rs).

I also used [ffmpeg](https://ffmpeg.org/) to create a smooth video:

{% include video.html video=page.video %}