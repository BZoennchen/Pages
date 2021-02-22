var faces = [];
var cells = [];
var width = 500;
var height = 500;

function setup() {
  	colorMode(HSB, 360, 100, 100);
 	createCanvas(500, 500);
 	background(100);
  	initFaces(100);
}

function draw() {
  	for(var i = 0; i < faces.length; i++) {
  		faces[i].draw();
    }
  	update();
}

function initFaces(faceCount) {
	cells = new Array(width);
  	for(var i = 0; i < width; i++){
  		cells[i] = new Array(height);
  	}
  	
  	for(var i = 0; i < faceCount; i++) {
    	var x = randomInt(0, width);
      	var y = randomInt(0, height);
      	var center = new Vector(x, y);
      	var color = randomColor();
      	var face = new Face(i, center, color);
      	cells[x][y] = face;
      	faces.push(face);
    } 	
}

function update() {
	for(var i = 0; i < faces.length; i++){
    	faces[i].update();
    }
}

function randomColor(){
	return random();
}

function randomInt(min, max){
	return min + floor(random() * (max-min))
}

function nextNeighbours(x, y, k){
	var xValues = [];
  	var yValues = [];
  	
  	if(x >= 0 && x < width) {
    	xValues.push(x)
    }
  
  	if(x > k) {
    	xValues.push(x-k);
    }
  
  	if(x+k < width) {
    	xValues.push(x+k);
    }
  
  	if(y >= 0 && y < height) {
    	yValues.push(y)
    }
  
  	if(y > k) {
    	yValues.push(y-k);
    }
  
  	if(y+k < height) {
    	yValues.push(y+k);
    }
  
  	var coords = new Array(xValues.length * yValues.length);
	var index = 0;
  
  	for(var i = 0; i < xValues.length; i++) {
    	for(var j = 0; j < yValues.length; j++) {
        	coords[index] = new Vector(xValues[i], yValues[j]);
          	index++;
        }
    }
  	return coords;
}


class Face{
	constructor(id, center, color) {
		this.color = color;
		this.center = center;
		this.positions = [center];
		this.id = id;
		this.lastSize = 0;
	}
	
  	distance(vector) {
    	return max(abs(this.center.x - vector.x), abs(this.center.y - vector.y));
    }
  	
    update() {
    	var borderIndex = this.border;
      	var maxIndex = this.positions.length-1;
      	for(var i = borderIndex; i <= maxIndex; i++) {
          	var pos = this.positions[i];
        	var neighbours = nextNeighbours(pos.x, pos.y, 1);
            //print(neighbours)
          	for(var j = 0; j < neighbours.length; j++) {
            	var nextPos = neighbours[j];
              	//print(cells[nextPos.x][nextPos.y]);
              	if(typeof cells[nextPos.x][nextPos.y] === 'undefined' || cells[nextPos.x][nextPos.y].center.sub(nextPos).length() > this.center.sub(nextPos).length()) {
                	cells[nextPos.x][nextPos.y] = this;
                  	this.positions.push(nextPos);
                }
            }
        }
   	}
    
  	get border() {
      	var distance = -1;
    	for(var i = this.positions.length-1; i >= 0; i--){
            var vector = this.positions[i];
          	if(distance == -1) {
            	distance = this.distance(vector)
            }
            
          	if(this.distance(vector) < distance) {
            	return i;
            }
        }
      	return 0;
    }
  
  	draw() {
      	stroke(360 * this.color, 80, 80);
    	fill(360 * this.color, 80, 80);
      
      	for(var i = this.lastSize; i < this.positions.length; i++){
          	var vector = this.positions[i];
        	point(vector.x, vector.y);
        }    
      	
      	//fill(255,255,255);
      	stroke(360 * 1, 80, 80);
    	fill(360 * 1, 80, 80);
      	point(this.center.x, this.center.y);
      
      	this.lastSize = this.positions.length;
    }
    
    toString() {
    	return "["+this.center+","+this.id+"]"
    }
}

/**
 * An immutable Vector. The p5js.Vector is not immutable!
 */
class Vector {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

  
  	mul(scalar) {
    	return new Vector(this.x * scalar, this.y * scalar);
    }
  
  	add(vec) {
    	return new Vector(this.x + vec.x, this.y + vec.y);
    }
    
    sub(vec) {
    	return new Vector(this.x - vec.x, this.y - vec.y);
    }
    
    dot(vec) {
    	return (this.x * vec.x + this.y * vec.y);
    }
    
    project(vec) {
    	var dot = this.dot(this);
      	var x = this.mul(this.x).dot(vec) / dot;
        var y = this.mul(this.y).dot(vec) / dot;
      	return new Vector(x, y);
    }
    
    length() {
    	return sqrt(this.x * this.x + this.y * this.y);
    }
    
    rotate(angle) {
    	return new Vector(this.x * cos(angle) - this.y * sin(angle), this.x * sin(angle) + this.y * cos(angle));
    }
    
    norm() {
      	if(this.x == 0 && this.y == 1) {
        	return new Vector(1.0, 1.0);
        }
      	else {
        	var len = this.length();
    		return new Vector(this.x / len, this.y / len);
        }
    }
    
    toString() {
    	return "("+this.x+","+this.y+")";
    }
}