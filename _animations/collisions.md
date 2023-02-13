---
layout: p5js-collection
description: 'A set of randomly initialized partiles that move inside a two-dimensional box. Each particle is initialized with some mass, position, and velocity. The color of the particle indicates its speed and its size indicates its mass.'
image: animations/collision.png
title: Elastic Collisions
permalink: /works/collisions/
---

# {{ page.title }}

A set of randomly initialized partiles move inside a two-dimensional box.
Each particle $$p_i$$ is initialized with some mass $$m_i$$, position $$\mathbf{x}_i$$, and velocity $$\mathbf{v}_i$$.
The color of the particle indicates its speed $$|\mathbf{v}|$$ and its size indicates its mass $$m$$.

<div id = "p5-collisions" style="background-color: #fdfdfd; justify-content: center; display: flex; margin:1.5em;"></div>

Collision detection is done by testing each of the $$n$$ particles, which requires $$\mathcal{O}(n^2)$$ time.
If we increase $$n$$, a more sophisticated collision detection algorithm would be advantageous.
I test for interception and movement direction because otherwise, one collision might lead to multiple collisions due to the numerical inaccuracy.

```javascript
intersect(particle) {
    return this.position.sub(particle.position).length() 
        < (particle.radius() + this.radius())
}

collide(particle) {
    let epsilon = 0.001;
    let p = this.position;
    let q = this.velocity.mul(epsilon).add(p);
    let p1 = particle.position;
    let p2 = particle.velocity.mul(epsilon).add(p1);

    // intersection of bodies and particles 
    // do not move away from each other
    return this.intersect(particle) && p.sub(p1).length() 
        > q.sub(p2).length();
}

```

For computing the new velocity after the collision, I use the projection to reduce the problem of the two-dimensional elastic collision to the one-dimensional case.

```javascript
// this is the first and other is 
// the second particle
let nVec = other.position.sub(this.position);
let p = nVec.project(this.oldVelocity);
let o = this.oldVelocity.sub(p);
let op = nVec.project(other.oldVelocity);
let mul = 1;
let velX = (this.mass * p.x + other.mass * (2 * op.x * mul - p.x)) 
    / (this.mass + other.mass);
let velY = (this.mass * p.y + other.mass * (2 * op.y * mul - p.y)) 
    / (this.mass + other.mass);
this.velocity = new Vector(velX, velY).add(o);
```

I move the particles forward by using Euler's method.

```javascript
move(delta) {
    this.time += delta;
    this.position = this.position.add(this.velocity.mul(delta));
    this.positions.unshift(this.position);
    if (this.positions.length > this.historySize) {
        this.positions.pop();
    }

}
```

There are numerical inaccuracies.
Therefore, the energy of the system is unstable.