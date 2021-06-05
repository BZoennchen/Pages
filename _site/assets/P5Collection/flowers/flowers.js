
var radius = 15;
var flowerRadius = 0.1;
var k = 10;
var nCircles = 10;
var center;
var rSlider;
var count = 1;
var minVal = 0.00001;
var goldenRatio = 1.61803398875;
var inc = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rSlider = createSlider(0, 2 * PI, goldenRatio, minVal);
  rSlider.position(20, 40);
	center = createVector(windowWidth / 2, windowHeight / 2);
	button = createButton('start');
  button.position(180, 40);
  button.mousePressed(start);
}

function draw() {
	//ellipse(mouseX, mouseY, 20, 20);
	
	background(0);
	fill(0, 102, 153);
	var angle = 0;
	var rotateAngle = (rSlider.value() + minVal * 5 * count) * 2 * PI;
	
	for(var i = 1; i <= nCircles; i++) {		
		for(var j = 0; j < k; j++) {			
			angle += rotateAngle;
			
			var point = createVector(floor(angle / 2*PI) * flowerRadius, 0);
			point.rotate(angle);
			
			point.rotate(rotateAngle);
			var drawPoint = point.copy();
			drawPoint.add(center);
			ellipse(drawPoint.x, drawPoint.y, radius, radius);
		}
	}
	
	textSize(32);
	text(rotateAngle / (2 * PI), 10, 30);
	count += inc;
	
}

function start() {
	inc = inc === 0 ? 1 : 0;
}