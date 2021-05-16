class RotationLine {
    constructor(startPos, startDelta, rad, length, dir) {
        this.startPos = startPos;
        this.startDelta = startDelta;
        this.length = length;
        this.dir = dir;
        this.rad = rad;
    }
    position(delta) {
        //return createVector(startPos.x+rad*cos(delta), startPos.y+rad*sin(delta))
        return this.startPos;
    }

    gamma(delta) {
        return this.startDelta + delta * this.dir;
    }

    draw(sketch, delta) {
        let vector = this.position(delta);
        let g = this.gamma(delta);
        let p1 = sketch.createVector(vector.x - sketch.cos(g) * this.length * 0.5, vector.y - sketch.sin(g) * this.length * 0.5);
        let p2 = sketch.createVector(vector.x + sketch.cos(g) * this.length * 0.5, vector.y + sketch.sin(g) * this.length * 0.5);
        let rad = 2.5;
        sketch.line(p1.x, p1.y, p2.x, p2.y);
        sketch.fill(100);
        sketch.ellipse(p1.x, p1.y, 2 * rad, 2 * rad);
        sketch.ellipse(p2.x, p2.y, 2 * rad, 2 * rad);
    }
}