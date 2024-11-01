const sierpinksi = (sketch) => {
	let curve = [];
	let drawings = [];
	let counter = 0;
	const maxDept = 10;
	let backgroundColor = BACKGROUND_COLOR;
	let frameCount = 0;
	const width = 600;
	const height = 600;

	sketch.setup = () => {
		sketch.windowWidth = width;
		sketch.windowHeight = height;
		let sideLen = sketch.min(sketch.windowWidth, sketch.windowHeight);
		canvas = sketch.createCanvas(sideLen, sideLen);
		canvas.parent('p5-sierpinksi');
		sketch.background(backgroundColor);

		// two first Sierpinski Triangles
		let p1 = sketch.createVector(0, 0);
		let p2 = sketch.createVector(sideLen, 0);
		let p3 = sketch.createVector(0, sideLen);
		let p4 = sketch.createVector(sideLen, sideLen);

		// ccw order!
		let tri1 = new Triangle(p1, p2, p3);
		let tri2 = new Triangle(p2, p4, p3);

		curve = [tri1, tri2];
	};

	sketch.next = () => {
		if (counter <= maxDept) {
			if (drawings.length <= counter) {
				let newCurve = new Array(curve.length * 2);
				for (let i = 0; i < curve.length; i++) {
					let tri = curve[i];
					let newTris = tri.split();
					newCurve[i * 2] = newTris[0];
					newCurve[i * 2 + 1] = newTris[1];
				}
				curve = newCurve;
			}
		} else {
			counter = 0;
		}
		counter++;
	};

	/*sketch.mouseClicked = () => {
		if (counter <= maxDept) {
			sketch.next();
		}
	};*/

	sketch.draw = () => {
		let pg = null;
		if (counter == 0) {
			pg = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight);
		} else if (drawings.length <= counter - 1) {
			drawings.push(sketch.createGraphics(sketch.windowWidth, sketch.windowHeight))
			pg = drawings[counter - 1];

			// 1. clear boackground and define color mode
			pg.colorMode(pg.RGB, 255);
			pg.fill(backgroundColor);
			pg.background(backgroundColor);

			pg.colorMode(pg.HSB, 255);
			// 2. draw triangles
			pg.noFill();
			pg.strokeWeight(0.5);
			pg.stroke(200);
			for (let i = 0; i < curve.length; i++) {
				curve[i].draw(pg);
			}

			//3. draw curve
			pg.strokeWeight(2.5);
			for (let i = 0; i < curve.length; i++) {
				if (i < curve.length - 1) {
					let center1 = curve[i].getIncenter();
					let center2 = curve[i + 1].getIncenter();
					//fill(i%255, 200, 200);
					//if (curve.length < 255) {
					pg.stroke(sketch.ceil(i * 255 / curve.length), 200, 150);
					//pg.stroke(i, 200, 150);
					//} else {
					//	pg.stroke(i % 255, 200, 150);
					//}
					pg.line(center1.x, center1.y, center2.x, center2.y);
				}
			}
		} else {
			pg = drawings[counter - 1];
		}
		//console.log(sketch.windowHeight);
		sketch.image(pg, 0, 0);
		if (frameCount % 50 == 0) {
			sketch.next();
		}
		frameCount++;
	};
};

document.addEventListener("DOMContentLoaded", function () {
	let divSierpinski = document.getElementById('p5-sierpinksi');
	if (divSierpinski != null) {
		let sierpinksiP5 = new p5(sierpinksi, document.getElementById('p5-sierpinksi'));
	}
});