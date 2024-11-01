class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    contains(position) {
        return this.getCenter().sub(position).mag() <= this.radius;
    }

    getCenter() {
        return this.center.copy();
    }

    getRadius() {
        return this.radius;
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

    getIntersection(p, q) {
        var pC = p.copy().sub(this.getCenter());
        var qC = q.copy().sub(this.getCenter());
        var x1 = pC.x;
        var y1 = pC.y;
        var x2 = qC.x;
        var y2 = qC.y;

        var dx = x2 - x1;
        var dy = y2 - y1;
        var dr = sqrt(dx * dx + dy * dy);
        var disc = x1 * y2 - x2 * y1;
        var D = this.radius * this.radius * dr * dr - disc * disc;
        var sign = dy < 0 ? -1 : 1;

        if (D == 0) {
            var x1 = (disc * dy + sign * dx * sqrt(D)) / (dr * dr);
            var y1 = (-disc * dx + abs(dy) * sqrt(D)) / (dr * dr);
            return [createVector(x1 + this.getCenter().x, y1 + this.getCenter().y)];
        } else if (D < 0) {
            return [];
        } else {
            var x1 = (disc * dy + sign * dx * sqrt(D)) / (dr * dr);
            var y1 = (-disc * dx + abs(dy) * sqrt(D)) / (dr * dr);
            var x2 = (disc * dy - sign * dx * sqrt(D)) / (dr * dr);
            var y2 = (-disc * dx - abs(dy) * sqrt(D)) / (dr * dr);

            return [createVector(x1 + this.getCenter().x, y1 + this.getCenter().y), createVector(x2 + this.getCenter().x, y2 + this.getCenter().y)];
        }
    }
}