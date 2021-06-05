/**
 * An immutable Vector. The p5js.Vector is not immutable!
 */
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    mul(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    add(vec) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    sub(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    dot(vec) {
        return (this.x * vec.x + this.y * vec.y);
    }

    project(vec) {
        var dot = this.dot(this);
        var x = this.mul(this.x).dot(vec) / dot;
        var y = this.mul(this.y).dot(vec) / dot;
        return new Vector(x, y);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    rotate(angle) {
        return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
    }

    norm() {
        if (this.x == 0 && this.y == 1) {
            return new Vector(1.0, 1.0);
        } else {
            var len = this.length();
            return new Vector(this.x / len, this.y / len);
        }
    }

    toString() {
        return "(" + this.x + "," + this.y + ")";
    }
}