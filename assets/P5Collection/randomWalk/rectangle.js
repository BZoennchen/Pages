class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	contains(vector) {
		return vector.x >= this.getMinX() && vector.x <= this.getMaxX() && vector.y >= this.getMinY() && vector.y <= this.getMaxY();
	}

	getMinX() {
		return this.x;
	}

	getMinY() {
		return this.y;
	}

	getMaxX() {
		return this.x + this.width;
	}

	getMaxY() {
		return this.y + this.height;
	}

	getHeight() {
		return this.height;
	}

	getWidth() {
		return this.width;
	}
}