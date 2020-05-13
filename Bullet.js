class Bullet {
    constructor(x,y) {
        var options = {
            'restitution':0.5,
            'friction':2.0,
            'density':10000.0
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("turquoise");
        ellipse(0, 0, this.radius);
        pop();
      }
}