/**
 * The CollisionHandler tests and handles collision of objects like Player, Enemy, Shot.
 * Handle in this context means it triggers the action a collision might cause. 
 */
class CollisionHandler {
	constructor(container) {
		this.container = container;
	}

	/**
	 * Tests whether two geometric objects like Player, Enemy, Shot collide.
	 */
	collide(obj1, obj2) {
		if (obj1 === obj2 || !obj1.isAlive() || !obj2.isAlive()) {
			return false;
		}
		return this.collideBBox(obj1.getBBox(), obj2.getBBox());
	}

	detectCollisions(obj) {
		if (obj.isAlive()) {
			var center = obj.getCenter();
			var radius = sqrt(obj.getBBox().width / 2 * obj.getBBox().width / 2 + obj.getBBox().height / 2 * obj.getBBox().height / 2);
			var objects = this.container.getObjects(center.x, center.y, radius);

			for (var i = 0; i < objects.length; i++) {
				if (this.collide(objects[i], obj)) {
					if (objects[i] instanceof Enemy && obj instanceof Shot) {
						this.container.remove(objects[i]);
						var killedEnemy = new EnemyKilled(objects[i].getCenter().copy(), objects[i].alpha);
						killedEnemy.init();
						this.container.add(killedEnemy);
					}
				} else {

				}
			}
		}
	}

	/**
	 * (private) Tests whether the two bounding boxes of two objects collide.
	 * Note if two objects collide then their bounding boxes collide.
	 */
	collideBBox(rec1, rec2) {
		return this.collideX(rec1, rec2) && this.collideY(rec1, rec2);
	}

	collideX(rec1, rec2) {
		return (rec1.getMinX() < rec2.getMinX() && rec1.getMaxX() > rec2.getMinX()) || (rec2.getMinX() < rec1.getMinX() && rec2.getMaxX() > rec1.getMinX())
	}

	collideY(rec1, rec2) {
		return (rec1.getMinY() < rec2.getMinY() && rec1.getMaxY() > rec2.getMinY()) || (rec2.getMinY() < rec1.getMinY() && rec2.getMaxY() > rec1.getMinY())
	}
}