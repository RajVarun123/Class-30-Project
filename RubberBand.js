class RubberBand {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.band1 = loadImage("sprites/sling1.png");
        this.band2 = loadImage("sprites/sling2.png");
        this.band = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.band);
    }

    fly() {
        this.band.bodyA = null;
    }

    attach(body) {
        this.band.bodyA = body;
    }

    display(){
        image(this.band1,190,190);
        image(this.band2,160,190);

        if(this.band.bodyA){
            var pointA = this.band.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(8);
            stroke(48,22,8);
            line(pointA.x - 10, pointA.y, pointB.x - 27, pointB.y);
            line(pointA.x - 10, pointA.y, pointB.x + 18, pointB.y - 3);
            pop();
        }
    }
    
}