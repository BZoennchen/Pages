var time = 0;
var length1 = 200;
var length2 = 100;
var rad1 = 300;
var freq1 = 9;
var freq2 = 5;
var rad2 = 140;
var outer = [];
var inner = [];
var inner2 = [];
var left = [];
var right = [];
var n1 = 160;
var n2 = 60;
var width;
var height;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	right = generateLines(rad1 / 2, length1 / 2, freq1 * 5, n1, 1.0);
	outer = generateLines(rad1, length1, freq1, n1, 1.0);
	inner = generateLines(rad2, length2, freq2, n2, -1.5);
	inner2 = generateLines(rad2 / 3, length2 / 2.5, freq2 * 5, n2 / 2, 2.8);
	left = generateLines(rad1 / 2, length1 / 2, freq1 * 5, n1, 1.0);

}

function draw() {
	background(255);
	stroke(0);
	//text("Click the left mouse button to change the outer rotators", windowWidth/2-150, 70);
	//scale(0.3,0.3)
	translate(windowWidth / 2, windowHeight / 2);

	for (var i = 0; i < outer.length; i++) {
		outer[i].draw(time);
	}

	for (var i = 0; i < inner.length; i++) {
		inner[i].draw(time);
	}

	for (var i = 0; i < inner2.length; i++) {
		inner2[i].draw(time);
	}

	translate(-(rad1 + rad1 / 2 + length1 / 2 + length1 / 2), 0);
	for (var i = 0; i < left.length; i++) {
		left[i].draw(time);
	}

	translate(2 * (rad1 + rad1 / 2 + length1 / 2 + length1 / 2), 0);
	for (var i = 0; i < right.length; i++) {
		right[i].draw(time);
	}
	time += 0.02;

}

function mousePressed() {
	var freq = Math.floor(random(20));
	outer = generateLines(rad1, length1, freq, n1, 1.0);
}

function generateLines(rad, len, freq, n, dir) {
	var lines = new Array(n);
	for (var i = 0; i < n; i++) {
		lines[i] = new Line(createVector(rad * cos(2 * PI * i / n), rad * sin(2 * PI * i / n)), freq * PI * i / n, rad, len, dir);
	}
	return lines;
}