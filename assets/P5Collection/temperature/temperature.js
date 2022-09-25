const temperature = (sketch) => {
    // these you might want to change
    const START_YEAR = 1880;
    const NUMBER_OF_DAYS = 50;
    const STEPS = 25;
    ////////////////////

    const LAST_MONTH = 7;
    const LAST_YEAR = 2022;
    const FIRST_MONTH = 1;
    const FIRST_YEAR = 1880;
    const FONT_SIZE = 40;
    const NUMBER_OF_MONTH = 12;
    const BACKGROUND_COLOR = 253;
    const FONT_COLOR = 50;

    let ANGLE_SPPED = 1.0;

    let coords = []
    let m = 2;

    let data = {};
    let year = START_YEAR;
    let month = FIRST_MONTH;
    let day = 1;
    let maxTemperature = -1000;
    let minTemperature = 1000;
    let temperatureDiff = 0;

    let preX = null;
    let preY = null;

    let colors = null;

    let myCanvas;

    sketch.preload = () => {
        data = sketch.loadTable(
            '../../assets/P5Collection/temperature/temp.csv',
                'csv',
                'header');
    }

    sketch.setup = () => {
        sketch.createCanvas(800, 800);
        sketch.background(BACKGROUND_COLOR);
        //frameRate(FRAME_RATE);
        
        for(let i = FIRST_YEAR; i < LAST_YEAR; i++) {
            for(let j = FIRST_MONTH; j < LAST_MONTH; j++) {
            maxTemperature = sketch.max(maxTemperature, sketch.getTemerature(i, j));
            minTemperature = sketch.min(minTemperature, sketch.getTemerature(i, j));
            }
        }
        
        colors = [
            sketch.color(0, 59, 255), 
            sketch.color(57, 97, 229), 
            sketch.color(145, 219, 255), 
            //sketch.color(255, 255, 213),
            sketch.color(255, 239, 0),
            sketch.color(255, 178, 102),
            sketch.color(255, 153, 153), 
            sketch.color(255, 102, 102), 
            sketch.color(255, 51, 51)];
        temperatureDiff = maxTemperature - minTemperature;
        sketch.translate(sketch.width/2, sketch.height/2);
        sketch.drawCircles();
    };

    sketch.toRadius = (temperature) => {
        let maxRadius = sketch.width/2-25;
        let radius =  (maxRadius / temperatureDiff) * (temperature-minTemperature);
        return radius;
    };

    sketch.toColor = (temperature) => {
        let n = colors.length;
        let i = sketch.floor(sketch.map(temperature, minTemperature, maxTemperature, 0, n));
        i = sketch.max(i, 0);
        i = sketch.min(i, n-1);
        return colors[i];
    };

    sketch.toAngle = (month, day) => {
        return (ANGLE_SPPED*2*sketch.PI) / (NUMBER_OF_MONTH*NUMBER_OF_DAYS) * ((month-1)*NUMBER_OF_DAYS+(day-1));
    };

    sketch.draw = () => {
        sketch.translate(sketch.width/2, sketch.height/2);
        for(let i = 0; i < STEPS; i++) {
            sketch.step(); 
        }
    };

    sketch.step = () => {
        let temperature = sketch.getInterpolatedTemerature(year, month, day); 
        let radius =  sketch.toRadius(temperature);
        let theta = sketch.toAngle(month, day);
        let x = sketch.cos(theta) * radius;
        let y = sketch.sin(theta) * radius;
        
        coords.push([x,y,temperature,year]);
        
        if(coords.length > m) {
          coords.shift();
        }
      
        sketch.drawText(year, month);
        sketch.drawLines(coords);
        day += 1;
        
        if(day > NUMBER_OF_DAYS) {
          month += 1;
          day = 1;
        }
        
        if(month > NUMBER_OF_MONTH) {
          month = 1;
          year += 1;
        }
        
        if(month >= LAST_MONTH && year >= LAST_YEAR) {
            sketch.noLoop();
        }
    };

    sketch.resetDrawing = () => {
        sketch.background(BACKGROUND_COLOR);
        year = START_YEAR;
        month = FIRST_MONTH;
        day = 1;
        sketch.drawCircles();
        sketch.loop();
    };

    sketch.mousePressed = () => {
        if(sketch.mouseButton === sketch.LEFT) {
            sketch.resetDrawing();
        }
    };

    sketch.drawLines = (coords) => {
        let alpha = 50;
        sketch.strokeWeight(5);
        sketch.noFill();
        if(coords.length > 1) {
          //beginShape();
          for(let i = 1; i < coords.length; i++) {
            let c = sketch.toColor(coords[i][2]);
            sketch.stroke(c.levels[0], c.levels[1], c.levels[2], alpha);
            sketch.line(coords[i-1][0], coords[i-1][1], coords[i][0], coords[i][1]);
          }
          //endShape();
        }
    };
    
    sketch.drawText = (year, month) => {
        sketch.textSize(FONT_SIZE);
        sketch.fill(BACKGROUND_COLOR);
        sketch.noStroke();
        sketch.rect(-sketch.width/2, -sketch.height/2, 160, 50);
        sketch.fill(FONT_COLOR, FONT_COLOR, FONT_COLOR);
        sketch.text(year+'/'+month, -sketch.width/2+10, -sketch.height/2+FONT_SIZE);
    };

    sketch.drawCircles = () => {
        sketch.noFill();
        let temps = [-0.5, 0.0, 0.5, 1.0, 1.5]
        sketch.textSize(FONT_SIZE/2.6);
        let alpha = 140;
        
        for(const temp of temps) {
            sketch.stroke(FONT_COLOR, FONT_COLOR, FONT_COLOR, alpha);
            sketch.strokeWeight(0.5);
            sketch.noFill();
            let rad = sketch.toRadius(temp);
            sketch.ellipse(0, 0, rad*2, rad*2);
            
            sketch.noStroke();
            sketch.fill(FONT_COLOR, FONT_COLOR, FONT_COLOR, alpha);
            sketch.text(temp, -2, -rad-5);
        }
    };

    sketch.getTemerature = (year, month) => {
        let yearIndex = (year-FIRST_YEAR);
        //console.log(year, month, yearIndex)
        return sketch.float(data.getRow(yearIndex).arr[month]);
    };

    sketch.getInterpolatedTemerature = (year, month, day) => {
        let temp1 = sketch.getTemerature(year, month);
        if(month == 12) {
            month = 1;
            year += 1;
        } else {
            month += 1;
        }
        let temp2 = sketch.getTemerature(year, month);
        let nod = NUMBER_OF_DAYS-1;
        let t1 = temp1 * (nod-(day-1))/nod;
        let t2 = temp2 * (day-1) / nod;
        return (t1 + t2);
    };
}

document.addEventListener("DOMContentLoaded", function () {
    let divTemperature = document.getElementById('p5-temperature');
    if (divTemperature != null) {
        let temperatureP5 = new p5(temperature, document.getElementById('p5-temperature'));
    }
});