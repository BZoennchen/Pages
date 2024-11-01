class Triangle {

    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    /**
     * Assumption: the first two triangles p1->p2->p3 have the same order (ccw or cw)!
     */
    split() {
        let splitLine = this.getSplitLine();
        let splitPoint = this.getSplitPoint();
        let midPoint = splitLine.getMidPoint();

        let tri1 = new Triangle(splitLine.p1, splitPoint, midPoint);
        let tri2 = new Triangle(splitLine.p2, midPoint, splitPoint);

        return [tri1, tri2];
    }


    getIncenter() {
        if (this.incenter == undefined) {
            let a = this.p1.dist(this.p2);
            let b = this.p2.dist(this.p3);
            let c = this.p3.dist(this.p1);
            let perimeter = a + b + c;
            this.incenter = new p5.Vector((a * this.p3.x + b * this.p1.x + c * this.p2.x) / perimeter, (a * this.p3.y + b * this.p1.y + c * this.p2.y) / perimeter);
        }
        return this.incenter;
    }

    getSplitLine() {
        let mag12 = this.p1.copy().sub(this.p2.copy()).mag();
        let mag13 = this.p1.copy().sub(this.p3.copy()).mag();
        let mag23 = this.p2.copy().sub(this.p3.copy()).mag();

        if (mag12 > mag13 && mag12 > mag23) {
            return new Line(this.p1, this.p2);
        } else if (mag13 > mag12 && mag13 > mag23) {
            return new Line(this.p3, this.p1);
        } else if (mag23 > mag12 && mag23 > mag13) {
            return new Line(this.p2, this.p3);
        }
    }

    getSplitPoint() {
        let mag12 = this.p1.copy().sub(this.p2.copy()).mag();
        let mag13 = this.p1.copy().sub(this.p3.copy()).mag();
        let mag23 = this.p2.copy().sub(this.p3.copy()).mag();

        if (mag12 > mag13 && mag12 > mag23) {
            return this.p3;
        } else if (mag13 > mag12 && mag13 > mag23) {
            return this.p2;
        } else if (mag23 > mag12 && mag23 > mag13) {
            return this.p1;
        }
    }

    draw(sketch) {
        sketch.triangle(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y);
    }
}