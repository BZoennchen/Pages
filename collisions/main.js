var width;
var height;
var maxMass;
var minMass;
var particles = [];

function setup() {
	colorMode(HSB, 360, 100, 100);
	width = 1200;
	height = 600;
	createCanvas(width, height);
	background(100);

	maxMass = 150;
	minMass = 70;
	maxVelocity = 10;
	for (var i = 0; i < 30; i++) {
		var position = new Vector(random(0.0, width), random(0.0, height));
		var velocity = new Vector(random(-maxVelocity, maxVelocity), random(-maxVelocity, maxVelocity));
		//var velocity = new Vector(0,0);
		var mass = random(minMass, maxMass);
		var particle = new Particle(position, velocity, mass);
		var intersection = true;
		while (intersection) {
			intersection = false;
			for (var j = 0; j < i; j++) {
				if (particles[j].intersect(particle)) {
					intersection = true;
					position = new Vector(random(0.0, width), random(0.0, height));
					particle = new Particle(position, velocity, mass);
					break;
				}
			}
		}
		particles.push(particle);
	}
}

function draw() {
	background(0);
	var delta = 0.3;
	for (var i = 0; i < particles.length; i++) {
		particles[i].computeVelocity();
	}

	for (var i = 0; i < particles.length; i++) {
		particles[i].updateVelocity();
	}

	for (var i = 0; i < particles.length; i++) {
		particles[i].move(delta);
	}

	for (var i = 0; i < particles.length; i++) {
		particles[i].show();
	}
}