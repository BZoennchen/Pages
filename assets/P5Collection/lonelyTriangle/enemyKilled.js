/**
 * A first enemy.
 */
class EnemyKilled {
	constructor(center, beta) {
		this.center = center;
		this.splits = 3;
		this.parts = 1;
		this.radius = 0;
		this.width = 20;
		this.time = 0;
		this.shapes = [];
		this.directions = [];
		this.alpha = 0;
		this.beta = beta;
		this.vanishTime = 80;
	}

	isAlive() {
		return false;
	}

	isGarbage() {
		return this.time >= this.vanishTime;
	}

	/**
	 * Returns the geometric center of the ememy.
	 */
	getCenter() {
		return this.center;
	}

	/**
	 * Updates the enemey. dt is the elapsed time.
	 */
	update(dt) {
		this.time += dt;
		this.radius += dt;
		this.alpha += dt;
	}

	/**
	 * Draws the enemy to the screen.
	 */
	draw() {
		if (!this.isGarbage()) {
			var c = 255 * (this.time / this.vanishTime);
			stroke(c);
			fill(c);

			var omega = 2 * PI / this.shapes.length;
			for (var i = 0; i < this.shapes.length; i++) {
				var rec = this.shapes[i];
				var dir = this.directions[i].copy();
				dir.setMag(this.radius);
				push();
				translate(this.center.x + dir.x + rec.getCenter().x, this.center.y + dir.y + rec.getCenter().y);
				rotate(this.beta);
				translate(dir.x + rec.getCenter().x, dir.y + rec.getCenter().y);
				rotate(this.alpha);
				rect(-rec.getWidth() / 2, -rec.getHeight() / 2, rec.getWidth(), rec.getHeight());
				pop();
			}
		}
	}


	toString() {
		return "EnemyKilled at " + this.getCenter();
	}

	init() {
		this.shapes = [new Rectangle(0, 0, this.width, this.width)];

		for (var i = 0; i < this.splits; i++) {
			var finalShapes = [];
			this.parts *= 4;
			for (var k = 0; k < this.shapes.length; k++) {
				var splits = this.shapes[k].split();

				for (var j = 0; j < splits.length; j++) {
					finalShapes.push(splits[j]);
				}
			}
			this.shapes = finalShapes;
		}

		for (var i = 0; i < this.shapes.length; i++) {
			this.directions.push(this.shapes[i].getCenter().sub(createVector(this.width / 2, this.width / 2)));
		}
	}
}