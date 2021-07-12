const fire = (sketch) => {
    let alpha = 0.01;
    let gamma = 0.000005;
    var grid = [];
    var prevGrid = [];
    var w = 150;
    var h = 150;
    var cellSize = 5;
    var colors = [];


    sketch.setup = () => {
        //sketch.frameRate(25);
        sketch.windowWidth = w * cellSize;
        sketch.windowHeight = h * cellSize;
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        //cellSize = sketch.min(sketch.floor(sketch.windowHeight / h), sketch.floor(sketch.windowWidth / w));
        colors = [sketch.color(180, 180, 180), // street => 0
            sketch.color(138, 98, 74), // ash => 1
            sketch.color(40, 93, 52), // tree => 2
            sketch.color(200, 20, 0)
        ]; // fire => 3
        grid = sketch.initGrid();
        sketch.background(colors[1]);
        //sketch.strokeWeight(0.3);
    }

    sketch.draw = () => {
        //background(220);
        prevGrid = grid;
        grid = sketch.updateGrid();
        sketch.drawGrid();
    }

    sketch.drawGrid = () => {
        /*sketch.loadPixels();
        let d = sketch.pixelDensity();
        for (var i = 0; i < h; i++) {
            for (var j = 0; j < w; j++) {
                index = 4 * i * sketch.width * d + (4 * j)
                c = colors[grid[i][j]];
                sketch.pixels[index] = sketch.red(c);
                sketch.pixels[index + 1] = sketch.green(c);
                sketch.pixels[index + 2] = sketch.blue(c);
                //pixels[index + 3] = alpha(c);
            }
        }
        sketch.updatePixels();*/
        sketch.noStroke();
        for (var i = 0; i < h; i++) {
            for (var j = 0; j < w; j++) {
                if (prevGrid[i][j] != grid[i][j]) {
                    c = colors[grid[i][j]];
                    y = i * cellSize;
                    x = j * cellSize;
                    sketch.fill(c)
                    sketch.rect(x, y, cellSize, cellSize);
                }
            }
        }
    }

    sketch.transition = (i, j, grid) => {
        // Street / Border
        if (grid[i][j] == 0) {
            return 0;
        }

        // Burning
        if (grid[i][j] == 3) {
            return 1;
        }

        // Ash / Empty
        if (grid[i][j] == 1) {
            if (sketch.random() < alpha) {
                return 2;
            } else {
                return 1;
            }
        }

        // 2 => Tree
        if (grid[i + 1][j] == 3 || grid[i - 1][j] == 3 || grid[i][j + 1] == 3 || grid[i][j - 1] == 3) {
            return 3;
        }

        if (sketch.random() < gamma) {
            return 3;
        }

        return 2;
    }

    sketch.initGrid = () => {
        let grid = new Array(h);

        for (var i = 0; i < h; i++) {
            grid[i] = new Array(w);
        }

        for (var i = 0; i < h; i++) {
            for (var j = 0; j < w; j++) {
                grid[i][j] = 0;
            }
        }

        for (var i = 1; i < h - 1; i++) {
            for (var j = 1; j < w - 1; j++) {
                grid[i][j] = 1;
            }
        }
        return grid;
    }

    sketch.updateGrid = () => {
        gridCopy = sketch.initGrid();
        for (var i = 1; i < h - 1; i++) {
            for (var j = 1; j < w - 1; j++) {
                gridCopy[i][j] = sketch.transition(i, j, grid);
            }
        }
        return gridCopy;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let divFire = document.getElementById('p5-fire');
    if (divFire != null) {
        let fireP5 = new p5(fire, document.getElementById('p5-fire'));
    }
});