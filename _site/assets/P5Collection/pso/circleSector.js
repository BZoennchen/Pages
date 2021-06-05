class CircleSector {
    constructor(center, radius, minAngle, maxAngle) {
        this.center = center;
        this.radius = radius;
        this.minAngle = minAngle;
        this.maxAngle = maxAngle;
    }

    contains(position) {
        if (this.getCenter().sub(position).mag() <= this.radius) {
            var delta = this.angleTo(position);
            return delta >= this.minAngle && delta <= this.maxAngle;
        }
        return false;
    }

    /**
     * 
     * Computes the angle between the x-axis through the given Point "center" and this.
     * Result is in interval (0,2*PI) according to standard math usage.
     */
    angleTo(position) {
        var center = this.getCenter();
        var at2 = atan2(position.y - center.y, position.x - center.x);

        if (at2 < 0.0) {
            at2 = PI * 2 + at2;
        }

        return at2;
    }

    getIntersection(p, q) {
        var allIntersectionPoints = [];
        var p1 = this.getCenter();
        var p2 = createVector(cos(this.minAngle) * this.getRadius(), sin(this.minAngle) * this.getRadius());
        var q1 = this.getCenter();
        var q2 = createVector(cos(this.maxAngle) * this.getRadius(), sin(this.maxAngle) * this.getRadius());

        if (this.intersects(p1, p2, p, q)) {
            allIntersectionPoints.push(this.lineLineIntersection(p1, p2, p, q));
        }

        if (this.intersects(q1, q2, p, q)) {
            allIntersectionPoints.push(this.lineLineIntersection(q1, q2, p, q));
        }

        var circle = new Circle(this.getCenter(), this.getRadius());
        var intersectionPoints = circle.getIntersection(p, q);
        for (var i = 0; i < intersectionPoints.length; i++) {
            var point = intersectionPoints[i];
            var delta = this.angleTo(point);
            if (delta >= this.minAngle && delta <= this.maxAngle) {
                allIntersectionPoints.push(point);
            }
        }

        return allIntersectionPoints;
    }

    lineLineIntersection(p1, p2, q1, q2) {
        var d = (p1.x - p2.x) * (q1.y - q2.y) - (p1.y - p2.y) * (q1.x - q2.x);
        var x = ((p1.x * p2.y - p1.y - p2.x) * (q1.x - q2.x) - (p1.x - p2.x) * (q1.x * q2.y - q1.y * q2.x)) / d;
        var y = ((p1.x * p2.y - p1.y * p2.x) * (q1.y - q2.y) - (p1.y - p2.y) * (q1.y * q2.y - q1.y * q2.x)) / d;
        return createVector(x, y);
    }

    getClosestIntersection(p, q, r) {
        var intersectionPoints = this.getIntersection(p, q);

        if (intersectionPoints.length == 0) {
            return r;
        }

        var minDist = Number.MAX_VALUE;
        var iPoint = undefined;

        for (var i = 0; i < intersectionPoints.length; i++) {
            var ip = intersectionPoints[i];
            if (r.copy().sub(ip).mag() < minDist) {
                minDist = r.copy().sub(ip).mag();
                iPoint = ip;
            }
        }
        return iPoint;
    }

    intersects(p1, p2, q1, q2) {
        return (this.ccw(p1, q1, q2) != this.ccw(p2, q1, q2)) && (this.ccw(p1, p2, q1) != this.ccw(p1, p2, q2));
    }

    /**
     * Calculate the counter clockwise result for the three given points.
     */
    ccw(p1, p2, p3) {
        return ((p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x)) < 0;
    }

    getCenter() {
        return this.center.copy();
    }

    getRadius() {
        return this.radius;
    }
}