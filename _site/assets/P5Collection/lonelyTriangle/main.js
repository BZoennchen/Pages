var player;
var strategy;
var container = null;
var dt = 0.2;
var generateEnemiesDt = 20;
var edt = 0;
var simTime = 0;
var acc = 2;
var gridSize = 100;
var collisionHandler;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	player = new Player(createVector(0, 0));
	container = new Container(player.center.x, player.center.y, windowWidth * 2, windowHeight * 2, gridSize);
	collisionHandler = new CollisionHandler(container);

	strategy = new EnemyStrategy(player);
	container.add(player);
}

function garbageCollect(objects) {
	container = new Container(player.center.x, player.center.y, windowWidth * 2, windowHeight * 2, gridSize);
	collisionHandler = new CollisionHandler(container);

	var minX = player.center.x - windowWidth;
	var minY = player.center.y - windowHeight;
	var maxX = player.center.x + windowWidth;
	var maxY = player.center.y + windowHeight;

	for (var i = 0; i < objects.length; i++) {
		if (!objects[i].isGarbage()) {
			var center = objects[i].getCenter();
			if (center.x >= minX && center.x <= maxX && center.y >= minY && center.y <= maxY) {
				container.add(objects[i]);
			}
		}
	}
}

function draw() {
	//push();
	var objects = container.getAllObjects();
	garbageCollect(objects);
	if (edt > generateEnemiesDt) {
		edt -= generateEnemiesDt;
		generateEnemies();
	}

	for (var i = 0; i < objects.length; i++) {
		objects[i].update(dt);
		collisionHandler.detectCollisions(objects[i]);
	}

	keyInput();
	translate(windowWidth / 2, windowHeight / 2);
	translate(-player.center.x, -player.center.y);
	//rotate(player.alpha);
	drawBackground();
	for (var i = 0; i < objects.length; i++) {
		objects[i].draw();
	}

	simTime += dt;
	edt += dt;
	//line(mouseX, mouseY, pmouseX, pmouseY);
	//pop();
}

function generateEnemies() {
	var enemyCount = 2;
	for (var i = 0; i < enemyCount; i++) {
		//player.center.x, player.center.y, windowWidth * 2, windowHeight * 2, gridSize);
		var x = random(player.center.x - (windowWidth / 2) * 0.7, player.center.x + (windowWidth / 2) * 0.7);
		var y = random(player.center.y - (windowHeight / 2) * 0.7, player.center.y + (windowHeight / 2) * 0.7);
		var enemy = new Enemy(createVector(x, y), strategy);
		container.add(enemy);
	}
}

function drawBackground() {
	background(255);
	stroke(200);
	var xDiff = (player.center.x - windowWidth / 2) / gridSize;
	var yDiff = (player.center.y - windowHeight / 2) / gridSize;

	var xMin = xDiff < 0 ? (floor(xDiff) - 1) * gridSize : (ceil(xDiff) - 1) * gridSize;
	var yMin = yDiff < 0 ? (floor(yDiff) - 1) * gridSize : (ceil(yDiff) - 1) * gridSize;

	for (var x = xMin; x < xMin + windowWidth + 2 * gridSize; x += gridSize) {
		line(x, yMin, x, yMin + windowHeight + 2 * gridSize);
	}

	for (var y = yMin; y < yMin + windowHeight + 2 * gridSize; y += gridSize) {
		line(xMin, y, xMin + windowWidth + 2 * gridSize, y);
	}
}

function getMouseX() {
	return mouseX - windowWidth / 2 + player.center.x;
}

function getMouseY() {
	return mouseY - windowHeight / 2 + player.center.y;
}

function keyInput() {
	if (keyIsDown(LEFT_ARROW)) {
		if (player.accelerate.y > 0) {
			player.stopYAcc();
		}
		player.accelerate(0, -acc);
	}

	if (keyIsDown(RIGHT_ARROW)) {
		if (player.accelerate.y < 0) {
			player.stopYAcc();
		}
		player.accelerate(0, acc);
	}

	if (keyIsDown(UP_ARROW)) {
		if (player.accelerate.x < 0) {
			player.stopXAcc();
		}
		player.accelerate(acc, 0);
	}

	if (keyIsDown(DOWN_ARROW)) {
		if (player.accelerate.x > 0) {
			player.stopXAcc();
		}
		player.accelerate(-acc, 0);
	}

	if (!keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW)) {
		player.stopYAcc();
	}

	if (!keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)) {
		player.stopXAcc();
	}

	if (mouseIsPressed && player.canShoot()) {
		container.add(player.shoot());
	}
}

function keyPressed() {
	if (keyCode === ENTER) {

	}
}