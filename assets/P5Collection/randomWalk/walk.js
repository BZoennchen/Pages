class Walk {
    constructor(start, bound) {
        this.bound = bound;
        this.walk = [];
        this.walk.push(start);
    }


    move() {
        var ran = random();
        var dx = 0;
        var dy = 0;

        if (ran < 0.25) {
            dx = 1;
        } else if (ran < 0.5) {
            dx = -1;
        } else if (ran < 0.75) {
            dy = 1;
        } else {
            dy = -1;
        }

        var dv = createVector(dx, dy);

        var pos = this.walk.pop();
        this.walk.push(pos);
        var nPos = createVector(pos.x + dx, pos.y + dy);
        if (this.bound.contains(nPos)) {
            this.walk.push(nPos);
        }
    }
}