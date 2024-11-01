class Plotter {
    constructor(func, predicate, min, max) {
        this.func = func;
        this.predicate = predicate;
        this.max = max;
        this.min = min;
    }

    draw(backgroundPlot) {
        backgroundPlot.colorMode(HSB, 360, 100, 100);
        backgroundPlot.noStroke();

        for (var x = 0; x < windowWidth; x++) {
            for (var y = 0; y < windowHeight; y++) {
                var vec = createVector(x, y);
                if (this.predicate(vec)) {
                    var val = this.func(vec);
                    var val = this.func(vec);
                    var c = ((val - this.min) * 360) / (this.max - this.min);
                    backgroundPlot.stroke(c, 80, 80);
                    backgroundPlot.point(x, y);
                }
            }
        }
    }
}