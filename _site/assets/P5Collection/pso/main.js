var pso = undefined;
var circle = undefined;
var minAngle = undefined;
var maxAngle = undefined;
var positions = [];
var particlePositions = [];
var updateIt = 3;
var counter = 1;
var plotter = undefined;
var backgroundPlot = undefined;
var running = false;
var initialized = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    backgroundPlot = createGraphics(windowWidth, windowHeight);
    //circle = new Circle(createVector(windowWidth/2, windowHeight / 2), min(windowWidth, windowHeight) / 3);
    minAngle = 0;
    maxAngle = 2 * PI;
    circle = new CircleSector(createVector(windowWidth / 2, windowHeight / 2), min(windowWidth, windowHeight) / 3, minAngle, maxAngle);

    // unused objective functions
    var f1 = (pos) => {
        return circle.getCenter().sub(pos).mag();
    };
    var f2 = (pos) => {
        var dist = circle.getCenter().sub(pos).mag();
        if (dist > circle.getRadius()) {
            return dist;
        } else {
            return -dist;
        }
    };

    init();
}

function init() {
    var maxVal = min(windowWidth, windowHeight) / 2;
    maxVal = 0;
    var minVal = -4 * exp(0);

    positions = [];

    for (var i = 0; i < 30; i++) {
        var alpha = 2 * PI * random();
        var len = sqrt(random()) * circle.getRadius();
        var x = circle.getCenter().x + (cos(alpha) * len);
        var y = circle.getCenter().y + (sin(alpha) * len);
        positions.push(createVector(x, y));
    }

    var f3 = (pos) => {
        var dist = circle.getCenter().sub(pos).mag();
        if (dist > circle.getRadius()) {
            return 1000000;
        } else {
            var result = 0;
            for (var i = 0; i < positions.length; i++) {
                result -= exp(-pos.copy().sub(positions[i]).mag() / 60);
            }
            return result;
        }
    };

    pso = new PSO(f3, circle, minAngle, maxAngle);
    pso.initializeSwarm();
    plotter = new Plotter(f3, (vec) => circle.contains(vec), minVal, maxVal);
    plotter.draw(backgroundPlot);
    initialized = true;
    running = false;
}

function mouseClicked() {
    if (initialized) {
        if (!running) {
            running = true;
        } else {
            init();
        }
    } else if (!initialized) {
        init();
    }
}

function draw() {
    background(0);
    var particles = pso.getParticles();
    var radius = 5;
    //stroke(255);
    //ellipse(circle.getCenter().x, circle.getCenter().y, circle.getRadius()*2, circle.getRadius()*2);
    image(backgroundPlot, 0, 0);

    fill(100);
    noStroke();
    for (var i = 0; i < positions.length; i++) {
        var pos = positions[i];
        if (circle.contains(pos)) {
            ellipse(pos.x, pos.y, 3, 3);
        }
    }

    fill(0);
    noStroke();
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        ellipse(particle.getLocation().x, particle.getLocation().y, radius, radius);
    }

    particlePositions = pso.particles.map(particle => particle.getLocation());
    if (counter == 0 && running) {
        pso.update();
    }
    counter = (counter + 1) % updateIt;
}