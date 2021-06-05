/**
 * A first enemy.
 */
class Enemy {
	constructor(center, strategy) {
		this.center = center;
		this.width = 20;
		this.alpha = 0;
		this.delta = 2 * PI / 3;
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		this.maxVel = 35;
		this.maxAcc = 10;
		this.shotVel = this.maxVel * 3;
		this.shootRate = 2;
		this.lastShootTime = 0;
		this.time = 0;
		this.strategy = strategy;
		this.alive = true;
		this.garbage = false;
	}

	toGarbage() {
		this.garbage = true;
		this.alove = false;
	}

	isGarbage() {
		return this.garbage;
	}

	isAlive() {
		return this.alive;
	}

	kill() {
		this.alive = false;
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
		return new Rectangle(this.center.x - this.width / 2, this.center.y - this.width / 2, this.width, this.width);
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
	 * Returns a Shot object.
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
		this.alpha += dt;
		this.alpha %= 2 * PI;

		this.strategy.update(dt, this);
		var dv = this.acceleration.copy().mult(dt);
		this.velocity.add(dv).limit(this.maxVel);
		var ds = this.velocity.copy().mult(dt);
		this.move(ds.x, ds.y);
	}

	/**
	 * Draws the enemy to the screen.
	 */
	draw() {
		if (this.isAlive()) {
			this.drawAlive();
		} else {
			this.drawKilled();
		}
	}

	drawKilled() {

	}

	drawAlive() {
		stroke(0);
		fill(0);
		push();
		translate(this.center.x, this.center.y);
		rotate(this.alpha);
		rect(-this.width / 2, -this.width / 2, this.width, this.width);
		pop();
	}

	toString() {
		return "Enemy at " + this.getCenter();
	}
}