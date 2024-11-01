const rotation = (sketch) => {
	let time = 0;
	let length1 = 200;
	let length2 = 100;
	let rad1 = 300;
	let freq1 = 9;
	let freq2 = 5;
	let rad2 = 140;
	let outer = [];
	let inner = [];
	let inner2 = [];
	let left = [];
	let right = [];
	let n1 = 160;
	let n2 = 60;
	let width = 740;
	let height = 600;

	/*const capturer = new CCapture({
		framerate: 25,
		format: "webm",
		workersPath: './assets/P5Collection/libraries/',
		name: "lines",
		quality: 100,
		verbose: true,
	});*/

	sketch.setup = () => {
		canvas = sketch.createCanvas(width, height);
		canvas.parent('p5-rotation');
		sketch.background(BACKGROUND_COLOR);
		right = sketch.generateLines(rad1 / 2, length1 / 2, freq1 * 5, n1, 1.0);
		outer = sketch.generateLines(rad1, length1, freq1, n1, 1.0);
		inner = sketch.generateLines(rad2, length2, freq2, n2, -1.5);
		inner2 = sketch.generateLines(rad2 / 3, length2 / 2.5, freq2 * 5, n2 / 2, 2.8);
		left = sketch.generateLines(rad1 / 2, length1 / 2, freq1 * 5, n1, 1.0);
	}

	sketch.draw = () => {
		/*if (sketch.frameCount === 1) {
			capturer.start();
		}*/

		sketch.background(BACKGROUND_COLOR);
		sketch.stroke(51, 51, 51);
		//text("Click the left mouse button to change the outer rotators", windowWidth/2-150, 70);
		//scale(0.3,0.3)
		sketch.translate(width / 2, height / 2);
		sketch.scale(0.7, 0.7)

		for (var i = 0; i < outer.length; i++) {
			outer[i].draw(sketch, time);
		}

		for (var i = 0; i < inner.length; i++) {
			inner[i].draw(sketch, time);
		}

		for (var i = 0; i < inner2.length; i++) {
			inner2[i].draw(sketch, time);
		}

		/*sketch.translate(-(rad1 + rad1 / 2 + length1 / 2 + length1 / 2), 0);
		for (var i = 0; i < left.length; i++) {
			left[i].draw(sketch, time);
		}

		sketch.translate(2 * (rad1 + rad1 / 2 + length1 / 2 + length1 / 2), 0);
		for (var i = 0; i < right.length; i++) {
			right[i].draw(sketch, time);
		}*/
		time += 0.05;

		/*capturer.capture(canvas.canvas);
		if (sketch.frameCount === 400) {
			sketch.noLoop();
			capturer.stop();
			capturer.save();
		}*/
	}

	sketch.generateLines = (rad, len, freq, n, dir) => {
		let lines = new Array(n);
		for (let i = 0; i < n; i++) {
			lines[i] = new RotationLine(sketch.createVector(rad * sketch.cos(2 * sketch.PI * i / n), rad * sketch.sin(2 * sketch.PI * i / n)), freq * sketch.PI * i / n, rad, len, dir);
		}
		return lines;
	}

	sketch.mousePressed = () => {
		let freq = Math.floor(sketch.random(20));
		outer = sketch.generateLines(rad1, length1, freq, n1, 1.0);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	let divRotation = document.getElementById('p5-rotation');
	if (divRotation != null) {
		let roationP5 = new p5(rotation, document.getElementById('p5-rotation'));
	}
});