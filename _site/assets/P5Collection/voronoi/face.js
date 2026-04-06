class Face {
    constructor(id, center, color) {
        this.color = color;
        this.center = center;
        this.positions = [center];
        this.id = id;
        this.lastSize = 0;
    }

    distance(vector) {
        return Math.max(Math.abs(this.center.x - vector.x), Math.abs(this.center.y - vector.y));
    }

    update(sketch, cells) {
        var borderIndex = this.border;
        var maxIndex = this.positions.length - 1;
        for (var i = borderIndex; i <= maxIndex; i++) {
            var pos = this.positions[i];
            var neighbours = sketch.nextNeighbours(pos.x, pos.y, 1);
            //print(neighbours)
            for (var j = 0; j < neighbours.length; j++) {
                var nextPos = neighbours[j];
                //print(cells[nextPos.x][nextPos.y]);
                if (typeof cells[nextPos.x][nextPos.y] === 'undefined' || cells[nextPos.x][nextPos.y].center.sub(nextPos).length() > this.center.sub(nextPos).length()) {
                    cells[nextPos.x][nextPos.y] = this;
                    this.positions.push(nextPos);
                }
            }
        }
    }

    get border() {
        var distance = -1;
        for (var i = this.positions.length - 1; i >= 0; i--) {
            var vector = this.positions[i];
            if (distance == -1) {
                distance = this.distance(vector)
            }

            if (this.distance(vector) < distance) {
                return i;
            }
        }
        return 0;
    }

    draw(sketch) {
        sketch.stroke(255 * this.color, 200, 200);
        sketch.fill(255 * this.color, 200, 200);

        for (var i = this.lastSize; i < this.positions.length; i++) {
            var vector = this.positions[i];
            sketch.rect(vector.x - 1, vector.y - 1, 1, 1)
            //sketch.point(vector.x, vector.y);
        }

        //fill(255,255,255);
        sketch.stroke(0, 0, 0);
        sketch.fill(0, 0, 0);
        sketch.strokeWeight(7);
        sketch.point(this.center.x, this.center.y);
        sketch.strokeWeight(1);

        this.lastSize = this.positions.length;
    }

    toString() {
        return "[" + this.center + "," + this.id + "]"
    }
}