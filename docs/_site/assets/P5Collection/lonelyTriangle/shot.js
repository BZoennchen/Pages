class Shot {
	constructor(center, velocity, alpha, obj) {
		this.center = center;
		this.velocity = velocity;
		this.alpha = alpha;
		this.radius = 5;
		this.obj = obj;
		this.delta = 2 * PI / 3;

	}

	toGarbage() {}

	isGarbage() {
		return false;
	}

	isAlive() {
		return true;
	}

	/**
	 * Returns the geometric center of the shot.
	 */
	getCenter() {
		return this.center;
	}

	/**
	 * Returns the geometric bounding box of the shot. The bounding box fully contains the shape of the shot.
	 */
	getBBox() {
		return new Rectangle(this.center.x - this.radius, this.center.y - this.radius, this.radius * 2, this.radius * 2);
	}

	/**
	 * Moves the shot.
	 */
	move(dx, dy) {
		this.center.add(dx, dy);
	}

	/**
	 * Updates the enemey. dt is the elapsed time.
	 */
	update(dt) {
		this.alpha += dt;
		this.alpha %= 2 * PI;
		var ds = this.velocity.copy().mult(dt);
		this.move(ds.x, ds.y);
	}

	/**
	 * Draws the enemy to the screen.
	 */
	draw() {
		push();
		stroke(0);
		fill(0);
		translate(this.center.x, this.center.y);
		rotate(this.alpha);
		var v1 = createVector(this.radius, 0);
		var v2 = createVector(v1.x, v1.y).rotate(this.delta);
		var v3 = createVector(v2.x, v2.y).rotate(this.delta);
		triangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);
		pop();
	}
}