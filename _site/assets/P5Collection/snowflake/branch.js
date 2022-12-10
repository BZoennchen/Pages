class Branch {

    constructor(start, end, prob, strokeWidth, probDecay, magDecay){
      this.start = start;
      this.strokeWidth = strokeWidth
      this.end = end;
      this.prob = prob;
      this.dir = end.copy().sub(start);
      this.endMag = this.dir.mag();
      this.children = [];
     
      this.dir.normalize();
      this.current = start.copy();
      this.finished = false;
      this.probDecay = probDecay;
      this.magDecay = magDecay
      this.strokeDecay = 1.0;
	  //this.noiseSpeed = 0.01;
    }
    
    get mag() {
      return this.current.copy().sub(this.start).mag()
    }
    
    get x1() {
      return this.start.x;
    }
    
    get y1() {
      return this.start.y;
    }
    
    get x2() {
      return this.current.x;
    }
    
    get y2() {
      return this.current.y;
    }
    
    hasFinished() {
      if(!this.finished) {
        return false;
      }
      
      for(let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        if(!child.hasFinished()) {
          return false;
        }
      }
      
      return true;
    }
    
    update(dt, sketch){
      this.grow(dt);
      if(!this.finished && sketch.random(0,1) < this.prob*dt) {
        this.split(sketch);
      }
      
      for(let i = 0; i < this.children.length; i++) {
        this.children[i].update(dt, sketch);
      }
    }
    
    grow(dt){
      if (!this.finished){
        this.current.add(this.dir.copy().mult(dt));
      }
      
      if(this.mag >= this.endMag) {
        this.finished = true;
        this.current = this.end;
      }
      
      for(let i = 0; i < this.children.length; i++) {
        this.children[i].grow(dt);
      }
    }
    
    split(sketch){
      let vec = this.dir.copy();
      let start = this.current.copy();
      let rotation = this.dir.heading() + sketch.PI/2;
      let mag = 0;
      mag = sketch.randomGaussian(this.endMag/this.magDecay, this.endMag/(this.magDecay+2));
      mag = sketch.min(start.mag(), mag);
      vec.rotate(rotation);
      vec.setHeading(rotation);
      vec.setMag(mag);
      let child = new Branch(
        start, 
        start.copy().add(vec), 
        this.prob/this.probDecay, 
        this.strokeWidth / this.strokeDecay);
      this.children.push(child);
    }
    
    draw(sketch) {
        sketch.strokeWeight(this.strokeWidth);
        sketch.line(this.x1, this.y1, this.x2, this.y2);
      for(let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        child.draw(sketch);
      }
    }
  }