class Player {
	constructor(center) {
		this.center = center;
		this.radius = 20;
		this.alpha = 0;
		this.delta = 2 * PI / 3;
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		this.maxVel = 30;
		this.maxAcc = 10;
		this.shotVel = this.maxVel * 3;
		this.shootRate = 2;
		this.lastShootTime = 0;
		this.time = 0;
	}


	toGarbage() {}

	isGarbage() {
		return false;
	}

	isAlive() {
		return true;
	}

	/**
	 * Returns the geometric center of the ememy.
	 */
	getCenter() {
		return this.center;
	}

	/**
	 * Returns a bounding box which fully contains the enemy shape.
	 */
	getBBox() {
		return new Rectangle(this.center.x - this.radius, this.center.y - this.radius, this.radius * 2, this.radius * 2);
	}

	/**
	 * Moves the enemy.
	 */
	move(dx, dy) {
		this.center.add(dx, dy);
	}

	/**
	 * Sets the acceleration in x-direction to 0.
	 */
	stopXAcc() {
		this.acceleration.x = 0;
	}

	/**
	 * Sets the accerleration in y-direction to 0.
	 */
	stopYAcc() {
		this.acceleration.y = 0;
	}

	/**
	 * Increases the acceleration by (dx, dy). However, the acceleration
	 * is bounded by maxAcc.
	 */
	accelerate(dx, dy) {
		this.acceleration.add(dx, dy).limit(this.maxAcc);
	}

	/**
	 * Returns true if the enemy can shoot again which is time dependent.
	 */
	canShoot() {
		return this.time - this.lastShootTime > this.shootRate;
	}

	/**
	 * Returns a shot.
	 */
	shoot() {
		this.lastShootTime = this.time;
		var radVec = createVector(this.radius, 0).rotate(this.alpha);
		var center = this.center.copy().add(radVec.x, radVec.y);
		var velocity = createVector(this.shotVel, 0).rotate(this.alpha);
		return new Shot(center, velocity, this.alpha, this);
	}

	/**
	 * Updates the enemey. dt is the elapsed time.
	 */
	update(dt) {
		this.time += dt;
		var p = createVector(getMouseX(), getMouseY()).sub(this.center.x, this.center.y);
		this.alpha = p.angleBetween(createVector(1, 0));
		if (getMouseY() < this.center.y) {
			this.alpha = 2 * PI - this.alpha;
		}
		var dv = this.acceleration.copy().mult(dt);
		this.velocity.add(dv.rotate(this.alpha)).limit(this.maxVel);
		var ds = this.velocity.copy().mult(dt);
		this.move(ds.x, ds.y);
	}

	/**
	 * Draws the enemy to the screen.
	 */
	draw() {
		stroke(0);
		fill(255);
		push();
		translate(this.center.x, this.center.y);
		var front = createVector(getMouseX(), getMouseY()).sub(this.center.x, this.center.y).setMag(40);
		line(0, 0, front.x, front.y);
		rotate(this.alpha);
		var v1 = createVector(this.radius, 0);
		var v2 = createVector(v1.x, v1.y).rotate(this.delta);
		var v3 = createVector(v2.x, v2.y).rotate(this.delta);
		ellipse(0, 0, this.radius * 2, this.radius * 2);
		triangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);
		pop();
	}

	toString() {
		return "Player at " + this.getCenter();
	}
}