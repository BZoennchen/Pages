class Particle {
    constructor(position, velocity, mass) {
        this.position = position;
        this.velocity = velocity;
        this.oldVelocity = velocity;
        this.mass = mass;
        this.color = Math.random();
        this.time = 0;
        this.positions = [];
        this.historySize = 5;
    }

    show(sketch) {
        //fill(360 * (1 - minMass/this.mass), 100, 100);
        /*var brightness = (this.time * this.velocity.length() / 10) % 160;
      	
      	if(brightness > 80) {
        	brightness = 80 - (brightness - 80);
        }*/
        let max = Math.sqrt(maxVelocity * maxVelocity * 2)
        //fill(360 * this.color, 80, 20 + brightness);

        sketch.fill(360 * this.velocity.length() / max, 80, 80);
        sketch.noStroke();
        for (let i = 0; i < this.positions.length; i++) {
            let pos = this.positions[i];
            let rad = this.radius() * 2 * (1 - i / this.positions.length)
            sketch.ellipse(pos.x, pos.y, rad, rad);
        }
    }

    updateVelocity() {
        this.oldVelocity = this.velocity;
    }

    computeVelocity(particles, width, height) {
        // check walls
        if ((this.position.x - this.radius() <= 0 && this.velocity.x < 0) ||
            (this.position.x + this.radius() >= width && this.velocity.x > 0)) {
            this.velocity.x = -this.velocity.x;
        }

        if ((this.position.y - this.radius() <= 0 && this.velocity.y < 0) ||
            (this.position.y + this.radius() >= height && this.velocity.y > 0)) {
            this.velocity.y = -this.velocity.y;
        }

        // check each other
        for (let i = 0; i < particles.length; i++) {
            let other = particles[i];
            if (this !== other && this.collide(other)) {
                let nVec = other.position.sub(this.position);
                let p = nVec.project(this.oldVelocity);
                let o = this.oldVelocity.sub(p);
                let op = nVec.project(other.oldVelocity);

                let mul = 1;
                /*if ((p.x >= 0 && op.x >= 0) || (p.x <= 0 && op.x <= 0)) {
                    mul = 1;
                } else {
                    mul = -1;
                }*/
                let velX = (this.mass * p.x + other.mass * (2 * op.x * mul - p.x)) / (this.mass + other.mass);
                let velY = (this.mass * p.y + other.mass * (2 * op.y * mul - p.y)) / (this.mass + other.mass);
                //let vel = (this.mass * p.length() + other.mass * (2 * op.length() * mul - p.length())) / (this.mass + other.mass);
                //this.velocity = o.add(p.norm().mul(vel));
                this.velocity = new Vector(velX, velY).add(o);
            }
        }
    }

    intersectionDistance(particle) {
        return (particle.radius() + this.radius()) - this.position.sub(particle.position).length();
    }

    intersect(particle) {
        return this.position.sub(particle.position).length() < (particle.radius() + this.radius())
    }

    collide(particle) {
        let epsilon = 0.001;
        let p = this.position;
        let q = this.velocity.mul(epsilon).add(p);
        let p1 = particle.position;
        let p2 = particle.velocity.mul(epsilon).add(p1);

        // intersection of bodies and particles do not move away from each other
        return this.intersect(particle) && p.sub(p1).length() > q.sub(p2).length();
    }

    radius() {
        return this.mass / 10;
    }

    move(delta) {
        this.time += delta;
        this.position = this.position.add(this.velocity.mul(delta));
        this.positions.unshift(this.position);
        if (this.positions.length > this.historySize) {
            this.positions.pop();
        }

    }
}