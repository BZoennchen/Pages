class Line {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    getMidPoint() {
        return this.p1.copy().add(this.p2.copy()).mult(0.5);
    }
}