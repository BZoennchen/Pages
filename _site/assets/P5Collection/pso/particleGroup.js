class ParticleGroup {
    constructor(particles) {
        this.particles = particles;
        this.gBest = Number.MAX_VALUE;
        this.gBestLocation = undefined;
    }

    update() {
        this.updateLocalBest();
        //this.updateGlobalBest();
    }

    getGroupBest() {
        return this.gBest;
    }

    getGroupBestLocation() {
        return this.gBestLocation;
    }

    updateGlobalBest() {
        var bestIndex = this.getGloballyParticleIndex();
        if (this.particles[bestIndex].getBestFitnessValue() < this.gBest) {
            this.gBest = this.particles[bestIndex].getBestFitnessValue();
            this.gBestLocation = this.particles[bestIndex].getBestLocation();
        }
    }

    updateLocalBest() {
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            if (particle.getFitnessValue() < particle.getBestFitnessValue()) {
                particle.setBestFitnessValue(particle.getFitnessValue());
                particle.setBestLocation(particle.getLocation());
            }
        }
    }

    getGloballyParticleIndex() {
        var index = 0;
        var best = Number.MAX_VALUE;
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            if (particle.getBestFitnessValue() < best) {
                index = i;
                best = particle.getBestFitnessValue();
            }
        }
        return index;
    }
}