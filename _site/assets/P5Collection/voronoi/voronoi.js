const voronoi = (sketch) => {
	let faces = [];
	let cells = [];
	let width = 600;
	let height = 600;
	let scale = 0.3;

	sketch.setup = () => {
		sketch.colorMode(sketch.HSB, 255);
		canvas = sketch.createCanvas(width, height);
		canvas.parent('p5-voronoi');
		sketch.background(BACKGROUND_COLOR);
		sketch.initFaces(sketch.random(40, 140));
		//sketch.scale(10, 10);
	}

	sketch.draw = () => {
		sketch.scale(scale, scale);
		for (var i = 0; i < faces.length; i++) {
			faces[i].draw(sketch);
		}
		sketch.update();
	}

	sketch.initFaces = (faceCount) => {
		cells = new Array(sketch.int(width/scale));
		for (var i = 0; i < sketch.int(width/scale); i++) {
			cells[i] = new Array(sketch.int(height/scale));
		}

		for (var i = 0; i < faceCount; i++) {
			var x = sketch.randomInt(0, sketch.int(width / scale));
			var y = sketch.randomInt(0, sketch.int(height / scale));
			var center = new Vector(x, y);
			var color = sketch.random();
			console.log(x, y, color, center);
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

		if (x >= 0 && x < width / scale) {
			xValues.push(x)
		}

		if (x > k) {
			xValues.push(x - k);
		}

		if (x + k < width / scale) {
			xValues.push(x + k);
		}

		if (y >= 0 && y < height / scale) {
			yValues.push(y)
		}

		if (y > k) {
			yValues.push(y - k);
		}

		if (y + k < height / scale) {
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