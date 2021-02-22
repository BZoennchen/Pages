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
        return sqrt(this.x * this.x + this.y * this.y);
    }

    rotate(angle) {
        return new Vector(this.x * cos(angle) - this.y * sin(angle), this.x * sin(angle) + this.y * cos(angle));
    }

    norm() {
        if (this.x == 0 && this.y == 1) {
            return new Vector(1.0, 1.0);
        } else {
            var len = this.length();
            return new Vector(this.x / len, this.y / len);
        }
    }
}