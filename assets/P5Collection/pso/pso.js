class PSO {
    constructor(f, circle, maxAngle, minAngle) {
        /* PSO-Parameters */
        //this.swarmSize = 10 + 2;
        //this.swarmSize = 300;
        this.swarmSize = 40;
        this.maxIteration = 100;
        this.problemDimension = 2;
        this.K = 3;
        this.c1 = 1.193; // 1/2 + ln(2)
        this.c2 = 1.193; // 1/2 + ln(2)

        //	this.c1 = 1.193; // 1/2 + ln(2)
        //	this.c2 = 0.5;  // 1/2 + ln(2)
        this.wUpperBound = 1.0;
        this.wLowerBound = 0.0;

        this.particles = [];
        this.circle = circle;
        this.errorTol = 0.0001;
        this.gBest = Number.MAX_VALUE;
        this.gBestLocation = undefined;
        this.f = f;
        this.t = 0;
        this.maxAngle = maxAngle;
        this.minAngle = minAngle;
    }

    getParticles() {
        return this.particles;
    }

    isCircle() {
        return angle >= 2 * PI;
    }

    update() {
        var w;
        var err = 9999;

        if (this.t < this.maxIteration) {
            this.updateLocalBest();
            this.updateGlobalBest();

            //w = W_UPPERBOUND - (((double) t) / attributesPSO.maxIteration) * (W_UPPERBOUND - W_LOWERBOUND);
            w = this.wUpperBound - (this.t / this.maxIteration) * (this.wUpperBound - this.wLowerBound);
            //w = 1.0 - (this.t / this.maxIteration);
            //w = 0.721;

            for (var j = 0; j < this.particles.length; j++) {
                var particle = this.particles[j];
                var r1 = random();
                var r2 = random();
                var dirLocalBest = particle.getLocalBestLocation().copy().sub(particle.getLocation());
                var dirGlobalBest = particle.getGlobalBestLocation().copy().sub(particle.getLocation());

                var newVel = particle.getVelocity().copy().mult(w)
                    .add(dirLocalBest.mult(r1 * this.c1))
                    .add(dirGlobalBest.mult(r2 * this.c2))
                    .limit(this.circle.getRadius() / 5.0);

                var oldLocation = particle.getLocation();
                particle.setVelocity(newVel);
                particle.setLocation(particle.getLocation().add(particle.getVelocity()));

                // confinement
                if (!this.circle.contains(particle.getLocation())) {
                    particle.setVelocity(particle.getVelocity().mult(-0.5));
                    particle.setLocation(this.circle.getClosestIntersection(oldLocation, particle.getLocation(), particle.getLocation()));
                }
                particle.setFitnessValue(this.f(particle.getLocation()));
            }
        }
        this.t++;
    }

    /**
     * Each particle informs k other particles about their global best solution.
     */
    informParticlesAdative() {
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            for (var j = 0; j < this.K; j++) {
                var index = floor(random() * this.particles.length);
                var otherParticle = this.particles[index];
                var globalBest = particle.getGlobalBestFitnessValue();
                var otherGlobalBest = otherParticle.getGlobalBestFitnessValue();

                if (globalBest < otherGlobalBest) {
                    otherParticle.setGlobalBestFitnessValue(globalBest);
                    otherParticle.setGlobalBestLocation(particle.getGlobalBestLocation());
                }
            }
        }
    }

    /**
     * Each particle informs each other particle about their global best solution.
     * Therefore, each particles knows the overall global best solution afterwards.
     */
    informParticlesAll() {
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            for (var j = 0; j < this.particles.length; j++) {
                var otherParticle = this.particles[j];
                var globalBest = particle.getGlobalBestFitnessValue();
                var otherGlobalBest = otherParticle.getGlobalBestFitnessValue();

                if (globalBest < otherGlobalBest) {
                    otherParticle.setGlobalBestFitnessValue(globalBest);
                    otherParticle.setGlobalBestLocation(particle.getGlobalBestLocation());
                }
            }
        }
    }

    /**
     * updates the best local value of each particle
     */
    updateLocalBest() {
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            if (particle.getFitnessValue() < particle.getLocalBestFitnessValue()) {
                particle.setLocalBestFitnessValue(particle.getFitnessValue());
                particle.setLocalBestLocation(particle.getLocation());
            }

            if (particle.getLocalBestFitnessValue() < particle.getGlobalBestFitnessValue()) {
                particle.setGlobalBestFitnessValue(particle.getLocalBestFitnessValue());
                particle.setGlobalBestLocation(particle.getLocalBestLocation());
            }
        }
    }

    /**
     * 1) updates the best overall value of the PSO.
     * 2) if the new best overall value is smaller than the old one,
     *    particles inform each other about their best values and locations.
     */
    updateGlobalBest() {
        var lastGBest = this.gBest;
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            var localBest = particle.getGlobalBestFitnessValue();
            if (localBest < this.gBest) {
                this.gBest = localBest;
                this.gBestLocation = particle.getGlobalBestLocation();
            }
        }

        if (this.gBest >= lastGBest) {
            this.informParticlesAdative();
        }
    }

    /**
     * Initializes the swarm on a circle.
     */
    initializeSwarm() {
        var k = 4;
        var parts = k * (k + 1) / 2;
        var swarmParts = (this.swarmSize - 1) / parts;
        var angleDiff = this.maxAngle - this.minAngle;

        for (var j = 0; j < k; j++) {
            var numberOfPoints = swarmParts * (j + 1);
            var randomStart = this.minAngle + random() * angleDiff / numberOfPoints;
            var deltaAngle = angleDiff / numberOfPoints;
            var angle = randomStart;
            var detaRadius = this.circle.getRadius() / k;

            for (var i = 0; i < numberOfPoints; i++) {
                var x = cos(angle) * detaRadius * (j + 1) + this.circle.getCenter().x;
                var y = sin(angle) * detaRadius * (j + 1) + this.circle.getCenter().y;
                angle += deltaAngle;
                var location = createVector(x, y);

                if (this.circle.contains(location)) {
                    var vDelta = random() * 2 * PI;
                    var vMag = sqrt(random()) * this.circle.getRadius();
                    var v = createVector(cos(vDelta), sin(vDelta)).setMag(vMag);
                    var velocity = v.sub(location).mult(0.5).limit(this.circle.getRadius() / 5.0);

                    var fitnessValue = this.f(location);
                    var particle = new Particle(location, velocity, fitnessValue);
                    this.particles.push(particle);
                }
            }
        }

        // add center pos
        var location = this.circle.getCenter();
        var vDelta = random() * 2 * PI;
        var vMag = sqrt(random()) * this.circle.getRadius();
        var v = createVector(cos(vDelta), sin(vDelta)).setMag(vMag);
        var velocity = v.sub(location).mult(0.5);
        var fitnessValue = this.f(location);
        var particle = new Particle(location, velocity, fitnessValue);
        this.particles.push(particle);
        this.updateGlobalBest();
        this.informParticlesAdative();
    }
}