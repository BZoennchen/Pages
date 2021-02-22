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
                var splitLine = this.getSplitLine();
                var splitPoint = this.getSplitPoint();
                var midPoint = splitLine.getMidPoint();

                var tri1 = new Triangle(splitLine.p1, splitPoint, midPoint);
                var tri2 = new Triangle(splitLine.p2, midPoint, splitPoint);

                return [tri1, tri2];
        }


        getIncenter() {
                if (this.incenter == undefined) {
                        var a = this.p1.dist(this.p2);
                        var b = this.p2.dist(this.p3);
                        var c = this.p3.dist(this.p1);
                        var perimeter = a + b + c;
                        this.incenter = createVector((a * this.p3.x + b * this.p1.x + c * this.p2.x) / perimeter, (a * this.p3.y + b * this.p1.y + c * this.p2.y) / perimeter);
                }
                return this.incenter;
        }

        getSplitLine() {
                var mag12 = this.p1.copy().sub(this.p2.copy()).mag();
                var mag13 = this.p1.copy().sub(this.p3.copy()).mag();
                var mag23 = this.p2.copy().sub(this.p3.copy()).mag();

                if (mag12 > mag13 && mag12 > mag23) {
                        return new Line(this.p1, this.p2);
                } else if (mag13 > mag12 && mag13 > mag23) {
                        return new Line(this.p3, this.p1);
                } else if (mag23 > mag12 && mag23 > mag13) {
                        return new Line(this.p2, this.p3);
                }
        }

        getSplitPoint() {
                var mag12 = this.p1.copy().sub(this.p2.copy()).mag();
                var mag13 = this.p1.copy().sub(this.p3.copy()).mag();
                var mag23 = this.p2.copy().sub(this.p3.copy()).mag();

                if (mag12 > mag13 && mag12 > mag23) {
                        return this.p3;
                } else if (mag13 > mag12 && mag13 > mag23) {
                        return this.p2;
                } else if (mag23 > mag12 && mag23 > mag13) {
                        return this.p1;
                }
        }

        draw() {
                triangle(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y);
        }
}