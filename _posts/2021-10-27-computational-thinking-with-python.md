---
layout: post
title:  "An Interactive Textbook to Learn Computational Thinking"
tags: Education
---

Currently, I am working as a lecturer at the [Munich University of Applied Sciences (MUAS)](https://www.cs.hm.edu/en/home/index.en.html) for the course **Computational Thinking**.
We decided to use ``Python`` as our primary programming language.
To provide students with a textbook that covers our content and is stylistically sound, we decided to test out the Jupyter ecosystem, i.e., the [Jupyter book](https://jupyterbook.org/intro.html) technology.

Furthermore, we decided to publish the unfinished book publicly.
It is a work in progress, and I will work on it during the semesters.
The book is written in German.
We may translate it into English in the future.

+ The book is available here: [Computational Thinking](https://bzoennchen.github.io/ct-book/intro.html)
+ The source code of the book is available here: [Source of the book](https://github.com/BZoennchen/ct-book)

We will see how our students will receive the book.
In my opinion, the [Jupyter book](https://jupyterbook.org/intro.html) technology covers many features to write an excellent online book.
I will use the technology for other future projects.

If you like ``LaTeX`` as I do, [Jupyter book](https://jupyterbook.org/intro.html) might also be something worth your time.
It offers similar features, and the working flow is very similar.
One can reference external sources (you can even include a BibTex file), internal sections, figures, equations, and definitions.
On top of that, the reader can execute the code directly within the book (for Python) and on Binder or another Service providing Jupyter Notebooks if the correct kernel is available.
I only tried this with ``Python``, but this should also work for other languages such as ``Java``.

It is less flexible than ``LaTeX`` because one is bound to ``HTML``, ``CSS``, and ``JavaScript``.
For example, positioning tables and figures differently than intended is pretty tricky -- I have given up on it.
The intelligence of ``LaTeX`` is also missing, e.g., no automatic hyphenation.
Aside from executing code directly within the document, another advantage is the referencing.
As a reader, It is much easier to navigate a well-referenced web page than navigate a large PDF file.

Overall, I quite like it!