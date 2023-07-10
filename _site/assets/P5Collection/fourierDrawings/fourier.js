const foruier = (sketch) => {
    let time = 0;
    let path = [];

    let slider;
    let f;
    let functions = {};
    let reset = true;
    let width = 740;
    let height = 200;


    sketch.setup = () => {
        canvas = sketch.createCanvas(width, height);
        canvas.parent('p5-fourier');
        sketch.background(BACKGROUND_COLOR);
        slider = sketch.createSlider(1, 20, 2);
        slider.position(1, 200, sketch);
        sel = sketch.createSelect();
        //sel.position(sketch.position.x, sketch.position.y)
        sel.position(10, 10);
        sel.option('Line');
        sel.option('Ellipse');
        sel.option('Triangle');
        sel.option('Rectangle');
        sel.option('Flower');
        sel.option('Star');
        sel.option('Gear');
        sel.option('Chaos');
        sel.option('TriWave');
        sel.option('SquareWave');
        sel.option('SawWave');
        sel.changed(sketch.selectFunction);

        functions = {
            'Line': function (i) {
                return sketch.fTerm(i, [1, 1], [1, -1])
            },
            'Ellipse': function (i) {
                return sketch.fTerm(i, [1, 1 / 2], [1, -1])
            },
            'Triangle': function (i) {
                return sketch.fTerm(i, [1, 1 / 3], [1, -2])
            },
            'Rectangle': function (i) {
                return sketch.fTerm(i, [1, 1 / 7], [1, -3])
            },
            'Flower': function (i) {
                return sketch.fTerm(i, [1, 1 / 5], [1, 17 / 4])
            },
            'Star': function (i) {
                return sketch.fTerm(i, [1, 1 / 3], [1, -5 / 2])
            },
            'Gear': function (i) {
                return sketch.fTerm(i, [1, 1 / 7], [1, -33 / 4])
            },
            'Chaos': function (i) {
                return sketch.fTerm(i, [1, 1 / 7, 1 / 19, 1 / 21], [1, -33 / 4, -33 / 3, 54 / 4])
            },
            'TriWave': sketch.triWaveTerm,
            'SquareWave': sketch.rectWaveTerm,
            'SawWave': sketch.sawWaveTerm
        };

        f = functions['Line'];
    }

    sketch.selectFunction = () => {
        let item = sel.value();
        f = functions[item];
        reset = true;
    }

    sketch.drawCircle = (prevx, prevy, radius) => {
        //sketch.stroke(MY_READ);
        sketch.noFill();
        sketch.ellipse(prevx, prevy, radius * 2);
    }

    sketch.drawLine = (prevx, prevy, x, y) => {
        sketch.fill(0);
        //sketch.stroke(MY_READ);
        //ellipse(x, y, 8);
        sketch.line(prevx, prevy, x, y);
    }

    sketch.fTerm = (i, amps, freqs) => {
        let x = 0;
        let y = 0;
        let amp = 0;
        let phase = 0.5 * sketch.PI;

        if (i < amps.length && i < freqs.length) {
            amp = 75 * (2 / sketch.PI) * amps[i];
            x = amp * sketch.cos(phase + freqs[i] * time);
            y = amp * sketch.sin(phase + freqs[i] * time);
        }
        return {
            x,
            y,
            amp
        };
    }

    sketch.sawWaveTerm = (i) => {
        let sign = -1;
        if (i % 2 == 0) {
            sign = 1;
        }

        let n = i + 1;
        let amp = 75 * (2 / sketch.PI) / n;
        let x = amp * sketch.cos(n * time);
        let y = amp * sketch.sin(n * time);
        return {
            x,
            y,
            amp
        };
    }

    sketch.rectWaveTerm = (i) => {
        let n = i * 2 + 1;
        let amp = 75 * (2 / (n * sketch.PI));
        let x = amp * sketch.cos(n * time);
        let y = amp * sketch.sin(n * time);
        return {
            x,
            y,
            amp
        };
    }

    sketch.triWaveTerm = (i) => {
        let sign = -1;
        if (i % 2 == 0) {
            sign = 1;
        }

        let n = 2 * (i + 1) - 1
        let amp = 75 * (8 / (sketch.PI * sketch.PI)) * sign / (n * n);
        let x = amp * sketch.cos(n * time);
        let y = amp * sketch.sin(n * time);
        return {
            x,
            y,
            amp
        };
    }

    sketch.draw = () => {
        sketch.background(BACKGROUND_COLOR);
        if (reset) {
            reset = false;
            path = [];
        }

        sketch.translate(150, 100);
        sketch.stroke(MY_READ);
        sketch.noFill();

        let x = 0;
        let y = 0;

        for (let i = 0; i < slider.value(); i++) {
            let prevx = x;
            let prevy = y;

            fi = f(i);
            x += fi.x;
            y += fi.y;

            sketch.drawCircle(prevx, prevy, fi.amp);
            sketch.drawLine(prevx, prevy, x, y);
        }

        path.unshift(sketch.createVector(x, y));

        sketch.noFill();
        sketch.beginShape();
        for (let i = 0; i < path.length; i++) {
            sketch.vertex(path[i].x, path[i].y);
        }
        sketch.endShape();

        sketch.translate(150, 0);
        sketch.line(x - 150, y, 0, path[0].y);

        sketch.beginShape();
        for (let i = 0; i < path.length; i++) {
            sketch.vertex(i, path[i].y);
        }
        sketch.endShape();
        time -= 0.05;

        if (path.length > 500) {
            path.pop();
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let divFourier = document.getElementById('p5-fourier');
    if (divFourier != null) {
        let fourierP5 = new p5(foruier, document.getElementById('p5-fourier'));
    }
});