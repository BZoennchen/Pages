const snwoflake = (sketch) => {
	const BACKGROUND_COLOR = 253;
	let branch;
	const colors = ['#03001B', '#2F109D', '#000000', '#FC5555', '#3C3C5A', '#6200FF', 'C6C6C6']

	// default values that work well
	let prob = 0.1;
	let probDecay = 1.31;
	let magDecay = 3.0;
	let sw = 2.0;
	let alpha = 70;
	let parts = 6; // 6 for a snow flake

	sketch.reset = () => {
		parts = sketch.int(sketch.floor(sketch.random(3, 22)));
		prob = sketch.random(0.18, 0.07);
		probDecay = sketch.random(1.15, 2);
		magDecay = sketch.random(2, 4.0);
		branch = new Branch(sketch.createVector(0,0), sketch.createVector(sketch.width/3,sketch.height/3), prob, sw, probDecay, magDecay);
	}

	sketch.setup = () => {
		sketch.frameRate(60);
		sketch.createCanvas(800, 800);
		sketch.background(BACKGROUND_COLOR);
		sketch.reset();
	}

	sketch.draw = () => {
		sketch.translate(sketch.width/2,sketch.height/2);
		sketch.background(BACKGROUND_COLOR);
		let c = sketch.color(0);
		sketch.stroke(c._getRed(), c._getGreen(), c._getBlue(), alpha);
		for (let i=0;i<parts;i++){
			branch.draw(sketch);
			sketch.rotate(sketch.TWO_PI/parts);
		}
		
		sketch.rotate(sketch.TWO_PI/(parts*2));
		sketch.scale(1,-1);
		for (let i=0;i<parts;i++){
			branch.draw(sketch);
			sketch.rotate(sketch.TWO_PI/parts);
		}
		
		branch.update(1.0, sketch);
		
		if(branch.hasFinished()){
			sketch.noLoop();
		}
	}

	sketch.mousePressed = () => {
        if(sketch.mouseButton === sketch.LEFT) {
            sketch.reset();
			sketch.loop();
        }
    };
}

document.addEventListener("DOMContentLoaded", function () {
	let divSnowflake = document.getElementById('p5-snowflake');
	if (divSnowflake != null) {
		let snowflakeP5 = new p5(snwoflake, document.getElementById('p5-snowflake'));
	}
});