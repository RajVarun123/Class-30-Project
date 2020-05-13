const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, bullet, rubberBand;

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24;

var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,395,800,20);
  ground2 = new Ground(600,200,160,20);
  bullet = new Bullet(200,230);
  rubberBand = new RubberBand(bullet.body, {x: 200, y: 230});
  b1 = new Block(520,370);
  b2 = new Block(560,370);
  b3 = new Block(600,370);
  b4 = new Block(640,370);
  b5 = new Block(680,370);
  b6 = new Block(540,350);
  b7 = new Block(580,350);
  b8 = new Block(620,350);
  b9 = new Block(660,350);
  b10 = new Block(560,330);
  b11 = new Block(600,330);
  b12 = new Block(640,330);
  b13 = new Block(580,310);
  b14 = new Block(620,310);
  b15 = new Block(600,290);
  b16 = new Block(600,270);
  b17 = new Block(600,250);
  b18 = new Block(560,170);
  b19 = new Block(600,170);
  b20 = new Block(640,170);
  b21 = new Block(580,150);
  b22 = new Block(620,150);
  b23 = new Block(600,130);
  b24 = new Block(600,120);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  stroke(0);
  text('Score: ' + score, 10, 10);
  
  if(b1.visibility < 255 && b1.visibility >= 250) {
    score += 1;
  }

  if(b2.visibility < 255 && b2.visibility >= 250) {
    score += 1;
  }

  if(b3.visibility < 255 && b3.visibility >= 250) {
    score += 1;
  }

  if(b4.visibility < 255 && b4.visibility >= 250) {
    score += 1;
  }

  if(b5.visibility < 255 && b5.visibility >= 250) {
    score += 1;
  }

  if(b6.visibility < 255 && b6.visibility >= 250) {
    score += 1;
  }

  if(b7.visibility < 255 && b7.visibility >= 250) {
    score += 1;
  }

  if(b8.visibility < 255 && b8.visibility >= 250) {
    score += 1;
  }

  if(b9.visibility < 255 && b9.visibility >= 250) {
    score += 1;
  }

  if(b10.visibility < 255 && b10.visibility >= 250) {
    score += 1;
  }

  if(b11.visibility < 255 && b11.visibility >= 250) {
    score += 1;
  }

  if(b12.visibility < 255 && b12.visibility >= 250) {
    score += 1;
  }

  if(b13.visibility < 255 && b13.visibility >= 250) {
    score += 1;
  }

  if(b14.visibility < 255 && b14.visibility >= 250) {
    score += 1;
  }

  if(b15.visibility < 255 && b15.visibility >= 250) {
    score += 1;
  }

  if(b16.visibility < 255 && b16.visibility >= 250) {
    score += 1;
  }

  if(b17.visibility < 255 && b17.visibility >= 250) {
    score += 1;
  }

  if(b18.visibility < 255 && b18.visibility >= 250) {
    score += 1;
  }

  if(b19.visibility < 255 && b19.visibility >= 250) {
    score += 1;
  }

  if(b20.visibility < 255 && b20.visibility >= 250) {
    score += 1;
  }

  if(b21.visibility < 255 && b21.visibility >= 250) {
    score += 1;
  }

  if(b22.visibility < 255 && b22.visibility >= 250) {
    score += 1;
  }

  if(b23.visibility < 255 && b23.visibility >= 250) {
    score += 1;
  }

  if(b24.visibility < 255 && b24.visibility >= 250) {
    score += 1;
  }
  
  ground1.display();
  ground2.display();
  bullet.display();
  rubberBand.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();

  fill("white");
  stroke("black");
  text(mouseX + ',' + mouseY, 760,10);
}

function mouseDragged() {
  Matter.Body.setPosition(bullet.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  rubberBand.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    rubberBand.attach(bullet.body);
  }
}