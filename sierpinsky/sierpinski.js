var curve = [];
var counter = 0;
var maxDept = 10;
var backgroundColor = 0;

function setup() {
		
		var sideLen = min(windowWidth, windowHeight);
		createCanvas(sideLen, sideLen);
		background(backgroundColor);
	
		// two first Sierpinski Triangles
		var p1 = createVector(0, 0);
		var p2 = createVector(sideLen, 0);
		var p3 = createVector(0, sideLen);
		var p4 = createVector(sideLen, sideLen);
	
		// ccw order!
		var tri1 = new Triangle(p1, p2, p3);
		var tri2 = new Triangle(p2, p4, p3);
	
		curve = [tri1, tri2];
		colorMode(HSB, 255);
}

function next() {
		this.counter++;
		var newCurve = new Array(this.curve.length * 2);
		for(var i = 0; i < curve.length; i++) {
				var tri = this.curve[i];
				var newTris = tri.split();
				newCurve[i*2] = newTris[0];
				newCurve[i*2 + 1] = newTris[1];
		}
		curve = newCurve;
		colorMode(HSB, 255);
}

function mouseClicked() {
		if(this.counter <= this.maxDept){
				next();
		}
}

function draw() {	
		// 1. clear boackground
		fill(backgroundColor);
		background(backgroundColor);
		
		// 2. draw triangles
		noFill();
		strokeWeight(1);
		stroke(30);
		for(var i = 0; i < this.curve.length; i++) {
				curve[i].draw();
		}
		
		//3. draw curve
		strokeWeight(4);
		for(var i = 0; i < this.curve.length; i++) {
				if(i < curve.length-1) {
						var center1 = curve[i].getIncenter();
						var center2 = curve[i+1].getIncenter();
						//fill(i%255, 200, 200);
						if(curve.length < 255) {
								stroke(ceil(i*255/curve.length), 200, 150);
						}
						else {
								stroke(i%255, 200, 150);
						}
						line(center1.x, center1.y, center2.x, center2.y);
				}
		}
}