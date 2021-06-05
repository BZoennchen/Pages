/**
 * A rectangle i.e. geometric object.
 */
class Rectangle {
	constructor(xMin, yMin, width, height) {
		this.xMin = xMin;
		this.yMin = yMin;
		this.width = width;
		this.height = height;
	}

	setCenter(x, y) {
		this.xMin = x - this.width / 2;
		this.yMin = y - this.height / 2;
	}

	getCenter() {
		return createVector(this.xMin + this.width / 2, this.yMin + this.height / 2);
	}

	getMinX() {
		return this.xMin;
	}

	getMinY() {
		return this.yMin;
	}

	getMaxX() {
		return this.xMin + this.width;
	}

	getMaxY() {
		return this.yMin + this.height;
	}

	getWidth() {
		return this.width;
	}

	getHeight() {
		return this.height;
	}

	split() {
		return [new Rectangle(this.xMin, this.yMin, this.width / 2, this.height / 2),
			new Rectangle(this.xMin + this.width / 2, this.yMin, this.width / 2, this.height / 2),
			new Rectangle(this.xMin + this.width / 2, this.yMin + this.height / 2, this.width / 2, this.height / 2),
			new Rectangle(this.xMin, this.yMin + this.height / 2, this.width / 2, this.height / 2)
		];
	}
}