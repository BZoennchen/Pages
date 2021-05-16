const voronoi = (sketch) => {
	let faces = [];
	let cells = [];
	let width = 600;
	let height = 600;

	sketch.setup = () => {
		sketch.colorMode(sketch.HSB, 255);
		canvas = sketch.createCanvas(width, height);
		canvas.parent('p5-voronoi');
		sketch.background(100);
		sketch.initFaces(100);
	}

	sketch.draw = () => {
		for (var i = 0; i < faces.length; i++) {
			faces[i].draw(sketch);
		}
		sketch.update();
	}

	sketch.initFaces = (faceCount) => {
		cells = new Array(width);
		for (var i = 0; i < width; i++) {
			cells[i] = new Array(height);
		}

		for (var i = 0; i < faceCount; i++) {
			var x = sketch.randomInt(0, width);
			var y = sketch.randomInt(0, height);
			var center = new Vector(x, y);
			var color = Math.random();
			var face = new Face(i, center, color);
			cells[x][y] = face;
			faces.push(face);
		}
	}

	sketch.update = () => {
		for (var i = 0; i < faces.length; i++) {
			faces[i].update(sketch, cells);
		}
	}

	sketch.randomInt = (min, max) => {
		return min + Math.floor(Math.random() * (max - min))
	}

	sketch.nextNeighbours = (x, y, k) => {
		var xValues = [];
		var yValues = [];

		if (x >= 0 && x < width) {
			xValues.push(x)
		}

		if (x > k) {
			xValues.push(x - k);
		}

		if (x + k < width) {
			xValues.push(x + k);
		}

		if (y >= 0 && y < height) {
			yValues.push(y)
		}

		if (y > k) {
			yValues.push(y - k);
		}

		if (y + k < height) {
			yValues.push(y + k);
		}

		var coords = new Array(xValues.length * yValues.length);
		var index = 0;

		for (var i = 0; i < xValues.length; i++) {
			for (var j = 0; j < yValues.length; j++) {
				coords[index] = new Vector(xValues[i], yValues[j]);
				index++;
			}
		}
		return coords;
	}
}

document.addEventListener("DOMContentLoaded", function () {
	let divVoronoi = document.getElementById('p5-voronoi');
	if (divVoronoi != null) {
		let vornoinP5 = new p5(voronoi, document.getElementById('p5-voronoi'));
	}
});