class Particle {
    constructor(position, velocity, mass) {
        this.position = position;
        this.velocity = velocity;
        this.oldVelocity = velocity;
        this.mass = mass;
        this.color = random();
        this.time = 0;
        this.positions = [];
        this.historySize = 30;
    }

    show() {
        //fill(360 * (1 - minMass/this.mass), 100, 100);
        /*var brightness = (this.time * this.velocity.length() / 10) % 160;
      	
      	if(brightness > 80) {
        	brightness = 80 - (brightness - 80);
        }*/
        var max = sqrt(maxVelocity * maxVelocity * 2)
        //fill(360 * this.color, 80, 20 + brightness);

        fill(360 * this.velocity.length() / max, 80, 80);
        noStroke();
        for (var i = 0; i < this.positions.length; i++) {
            var pos = this.positions[i];
            var rad = this.radius() * 2 * (1 - i / this.positions.length)
            ellipse(pos.x, pos.y, rad, rad);
        }

    }

    updateVelocity() {
        this.oldVelocity = this.velocity;
    }

    computeVelocity() {
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
        for (var i = 0; i < particles.length; i++) {
            var other = particles[i];
            if (this !== other && this.intersect(other)) {
                var nVec = other.position.sub(this.position);
                var p = nVec.project(this.oldVelocity);
                var o = this.oldVelocity.sub(p);

                var op = nVec.project(other.oldVelocity);
                var oo = other.oldVelocity.sub(op);

                var mul = 1;
                if ((p.x >= 0 && op.x >= 0) || (p.x <= 0 && op.x <= 0)) {
                    mul = 1;
                } else {
                    mul = -1;
                }

                var vel = (this.mass * p.length() + other.mass * (2 * op.length() * mul - p.length())) / (this.mass + other.mass);
                var ovel = (2 * this.mass * p.length() + (other.mass - this.mass) * op.length()) / (other.mass + this.mass);

                this.velocity = o.add(p.norm().mul(vel));


                //this.velocity = o;
                //other.velocity = oo.add(op.norm().mul(ovel));	

                var intDistance = this.intersectionDistance(other) / 2;
                //this.position = this.position.add(o.norm().mul(-intDistance));
                //other.position = other.position.add(oo.norm().mul(intDistance));
                //this.move(1)
                //var dis = this.intersectionDistance(other);
                //this.move(dis / this.velocity)
            }
        }
    }

    intersectionDistance(particle) {
        return (particle.radius() + this.radius()) - this.position.sub(particle.position).length();
    }

    intersect(particle) {
        return this.position.sub(particle.position).length() < (particle.radius() + this.radius())
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