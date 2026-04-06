class Particle {
    constructor(location, velocity, fitnessValue) {
        this.velocity = velocity;

        /* fintness value of the current location */
        this.fitnessValue = fitnessValue;

        /* local best fitness value */
        this.localBestFitnessValue = fitnessValue;

        /* global best fitness value */
        this.globalBestFitnessValue = fitnessValue;

        /* current location */
        this.location = location;

        /* location of the best global fitness value */
        this.globalBestLocation = location;

        /* location of the best local fitness value */
        this.localBestLocation = location;
    }

    getFitnessValue() {
        return this.fitnessValue;
    }

    getVelocity() {
        return this.velocity.copy();
    }

    getLocation() {
        return this.location.copy();
    }

    getGlobalBestFitnessValue() {
        return this.globalBestFitnessValue;
    }

    getLocalBestFitnessValue() {
        return this.localBestFitnessValue;
    }

    getGlobalBestLocation() {
        return this.globalBestLocation.copy();
    }

    getLocalBestLocation() {
        return this.localBestLocation.copy();
    }

    setGlobalBestFitnessValue(value) {
        this.globalBestFitnessValue = value;
    }

    setLocalBestFitnessValue(bestFitnessValue) {
        this.localBestFitnessValue = bestFitnessValue;
    }

    setLocalBestLocation(bestLocation) {
        this.localBestLocation = bestLocation;
    }

    setFitnessValue(fitnessValue) {
        this.fitnessValue = fitnessValue;
    }

    setGlobalBestLocation(location) {
        this.globalBestLocation = location;
    }

    setLocation(location) {
        this.location = location;
    }

    setVelocity(velocity) {
        this.velocity = velocity;
    }
}