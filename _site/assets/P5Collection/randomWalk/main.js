var walks = [];
var cellSize = 3;
var width = 800;
var height = 300;
var n = 20;

function setup() {
		colorMode(HSB, 255);
	
		for(var i = 0; i < n; i++){
				var walk = new Walk(createVector(windowWidth/(2*cellSize),windowHeight/(2*cellSize)),new Rectangle(0,0,windowWidth/cellSize,windowHeight/cellSize));
				walks.push(walk);
		}
	
		createCanvas(windowWidth, windowHeight);
		background(255);
}

function draw() {
	for(var i = 0; i < walks.length; i++){
		var walk = walks[i];
		var index = walk.walk.length-1;
		fill(index%255, 200, 200);
		stroke(index%255, 200, 150);
		rect(walk.walk[index].x*cellSize, walk.walk[index].y*cellSize, cellSize, cellSize);
		walk.move();
	}
	
	
	//ellipse(mouseX, mouseY, 20, 20);
}