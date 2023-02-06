const tree = (sketch) => {
    const backgroundColor = BACKGROUND_COLOR;

    const dept = 8;
    const branchLengthReduction = 0.88;
    const maxRotation = 0.072;
    const maxBranches = 5;
    const minBranches = 2;
    const initialHeight = 92;

    /*const dept = 7;
    const branchLengthReduction = 0.93;
    const maxRotation = 0.082;
    const maxBranches = 5;
    const minBranches = 2;*/

    sketch.setup = () => {
        width = 740;
		height = 600;
		sketch.createCanvas(width, height);
        //sketch.colorMode(sketch.HSB, 360, 100, 100, 1);
        sketch.noLoop();
    }

    sketch.mousePressed = () => {
        if(sketch.mouseButton === sketch.LEFT && sketch.mouseY > 0) {
            sketch.drawTree();
        }
    };

    sketch.draw = () => {
        sketch.translate(0, sketch.height);
        sketch.scale(1, -1); 
        sketch.drawTree();
    };

    sketch.drawTree = () => {
        sketch.background(backgroundColor);
        let branches = [];
        let parents = [];
        
        let start = sketch.createVector(sketch.width/2, 0);
        let end = sketch.createVector(sketch.width/2, initialHeight);
        let vec = end.copy().sub(start);
        let maxLen = vec.mag();
        
        let branch = [start, end, vec];
        branches.push(branch);
        parents.push(branch);
        
        // 1. generate all branches
        for(let j = 0; j < dept; j++) {
            let newParents = [];
                
            for(let i = 0; i < parents.length; i++){
            children = sketch.generateBranches(parents[i], sketch.int(sketch.random(minBranches, maxBranches+1)));
            branches.push(...children);
            newParents.push(...children);
            }
            parents = newParents;
        }
        
        // 2. draw all branches
        for(let i = 0; i < branches.length; i++){
            let bstart = branches[i][0];
            let bend = branches[i][1];
            let len = bstart.copy().sub(bend).mag();
            sketch.strokeWeight(sketch.max(0.1, 8 * sketch.pow(len/maxLen, 4)));
            sketch.noFill();
            sketch.stroke(222, 222, 222, sketch.map(len, 0, initialHeight, 10, 200));
            sketch.line(bstart.x, bstart.y, bend.x, bend.y);
        }
    };

    /**
     * Generates n branches on top of branch.
     * The start point of each new branch is the end point of branch.
     * Each branch will be rotated randomly relative to branch.
     * The length will be shorten also based on the length of branch.
     */
    sketch.generateBranches = (branch, n) => {
        let start = branch[0];
        let end = branch[1];
        let vec = branch[2];
        let branches = [];
        for(let i = 0; i < n; i++){
            newVec = vec.copy();
            newStart = end.copy();
            newVec.rotate(sketch.TWO_PI * sketch.random(0.3, 1.0) * maxRotation * sketch.random([-1,1]));
            newVec.mult(branchLengthReduction * sketch.random(0.90, 1.0));
            newEnd = newStart.copy().add(newVec);
            branches.push([newStart, newEnd, newVec])
        }
        
        return branches;
    }
}

document.addEventListener("DOMContentLoaded", function () {
	let divCollision = document.getElementById('p5-tree');
	if (divCollision != null) {
		let treeP5 = new p5(tree, document.getElementById('p5-tree'));
	}
});