class Block {
    constructor(x,y) {
        var options = {
            'restitution':0.5,
            'friction':0.8,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, 40, 20, options);
        this.width = 40;
        this.height = 20;
        World.add(world, this.body);

        this.visibility = 255
      }
      display() {
        if(this.body.speed <= 3) {
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill("yellow");
          stroke("brown");
          rect(0, 0, this.width, this.height);
          pop();
        } else {
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          //image(this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
      }
}