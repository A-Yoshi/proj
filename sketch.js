
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftSide, rSG;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;
	let options1={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(200, 200, 20, options1);//Create the Bodies Here.
	World.add(world, ball);
	groundObj =new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
    rSG = new Ground(1300, 600, 20, 120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 20);
  groundObj.display();
  leftSide.display();
  rSG.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:100, y:-70})
	}
}

