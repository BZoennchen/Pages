/**
 * This spatial container contains all objects of the game. It improves the search
 * of certain objects given their center coordinates.
 */
class Container {
	constructor(centerX, centerY, width, height, bucketSize) {
		// the height and width of a bucket / cell
		this.bucketSize = bucketSize;

		// world coordinate width
		this.width = width;

		// world coordinate height
		this.height = height;

		// equi-sized buckets / cells of the container
		this.container = [];

		// world coodinte minimal x
		this.minX = centerX - width / 2;

		// world coodinte minimal y
		this.minY = centerY - height / 2;
		this.init([]);
	}


	/**
	 * Initializes all empty buckets.
	 */
	init(objects) {
		var col = 0;
		var cols = floor(this.width / this.bucketSize) + 1;
		for (var x = 0; x <= this.width + this.bucketSize; x += this.bucketSize) {
			var row = 0;
			this.container[col] = new Array(cols);
			for (var y = 0; y <= this.height + this.bucketSize; y += this.bucketSize) {
				this.container[col][row] = [];
				row++;
			}
			col++;
		}

		for (var i = 0; i < objects.length; i++) {
			this.add(objects[i]);
		}
	}

	getAllObjects() {
		var result = [];
		var col = 0;
		//var cols = floor(this.width / this.bucketSize) + 1;
		for (var x = 0; x <= this.width + this.bucketSize; x += this.bucketSize) {
			var row = 0;
			for (var y = 0; y <= this.height + this.bucketSize; y += this.bucketSize) {
				for (var k = 0; k < this.container[col][row].length; k++) {
					result.push(this.container[col][row][k])
				}
				row++;
			}
			col++;
		}

		return result;
	}

	/**
	 * Returns all objects intersecting the disc defined by (x,y,radius).
	 */
	getObjects(x, y, radius) {
		var minCol = max(0, floor((x - this.minX - radius) / this.bucketSize));
		var minRow = max(0, floor((y - this.minY - radius) / this.bucketSize));
		var maxCol = min(this.container.length, ceil((x - this.minX + radius) / this.bucketSize));
		var maxRow = min(this.container[0].length, ceil((y - this.minY + radius) / this.bucketSize));
		var result = [];

		for (var col = minCol; col <= maxCol; col++) {
			for (var row = minRow; row <= maxRow; row++) {
				if (this.container[col] != undefined && this.container[col][row] != undefined) {
					for (var i = 0; i < this.container[col][row].length; i++) {
						var object = this.container[col][row][i];
						if (this.check(x, y, radius, object)) {
							result.push(object);
						}
					}
				}
			}
		}
		return result;
	}

	/**
	 * Returns true if the object intersects the disc defined by (x, y, radius).
	 */
	check(x, y, radius, object) {
		return true;
	}

	/**
	 * Adds an object to the container.
	 */
	add(object) {
		var center = object.getCenter();
		this.getContainer(center.x, center.y).push(object);
	}

	/**
	 * Adds an object to the container.
	 */
	remove(object) {
		var center = object.getCenter();
		var bucket = this.getContainer(center.x, center.y);

		for (var i = 0; i < bucket.length; i++) {
			if (bucket[i] === object) {
				object.toGarbage();
			}
		}
	}

	/**
	 * Returns the bucket containing the world coordinates (x, y)
	 * or null if the coordinates are not in range of the container.
	 */
	getContainer(x, y) {
		var rX = x - this.minX;
		var rY = y - this.minY;

		if (rX >= 0 && rX <= this.width && rY >= 0 && rY <= this.height) {
			var col = floor((x - this.minX) / this.bucketSize);
			var row = floor((y - this.minY) / this.bucketSize);
			return this.container[col][row];
		}
		return null;
	}

	/**
	 * Removes all objects from the container which fulfill the predicate.
	 */
	removeAll(predicate) {
		for (var col = 0; col <= this.height + this.bucketSize; col += this.bucketSize) {
			this.container[col] = new Array(width / this.bucketSize + 1);

			for (var row = 0; row <= this.width + this.bucketSize; row += this.bucketSize) {
				var subContainer = this.container[col][row];
				var newSubContainer = [];
				for (var i = 0; i < subContainer.length; i++) {
					if (!predicate(subContainer[i])) {
						newSubContainer.push(subContainer[i]);
					}
				}
				subContainer = null;
				this.container[col][row] = newSubContainer;
			}
		}
	}

	/**
	 * Removes all objects intersecting the disc defined by (x, y, radius) and
	 * fulfilling the predicate.
	 */
	removeAll(x, y, radius, predicate) {
		var minCol = floor((x - this.minX - radius) / this.bucketSize);
		var minRow = floor((y - this.minY - radius) / this.bucketSize);
		var maxCol = ceil((x - this.minX + radius) / this.bucketSize);
		var maxRow = ceil((y - this.minY + radius) / this.bucketSize);
		var result = [];

		for (var col = minCol; col <= maxCol; col++) {
			for (var row = minRow; row <= maxRow; row++) {
				var subContainer = this.container[col][row];
				var newSubContainer = [];
				for (var i = 0; i < subContainer.length; i++) {
					var object = subContainer[i];
					if (!this.check(x, y, radius, object) || !predicate(object)) {
						newSubContainer.push(object);
					}
				}
				subContainer = null;
				this.container[col][row] = newSubContainer;
			}
		}
	}
}