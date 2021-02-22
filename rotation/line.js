class Line {
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

    draw(delta) {
        var vector = this.position(delta);
        var g = this.gamma(delta);
        var p1 = createVector(vector.x - Math.cos(g) * this.length * 0.5, vector.y - Math.sin(g) * this.length * 0.5);
        var p2 = createVector(vector.x + Math.cos(g) * this.length * 0.5, vector.y + Math.sin(g) * this.length * 0.5);
        var rad = 2.5;
        line(p1.x, p1.y, p2.x, p2.y);
        fill(100);
        ellipse(p1.x, p1.y, 2 * rad, 2 * rad);
        ellipse(p2.x, p2.y, 2 * rad, 2 * rad);
    }
}