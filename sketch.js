
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 var ball
 var Radius
 var line1
 var line2
 var line3

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2

	}

	Engine.run(engine);
  ball = Bodies.circle(50,100,15,ball_options)
  line1 = Bodies.rectangle(450,450,900,20,{isStatic:true})
  line2 = Bodies.rectangle(650,400,50,4,{isStatic:true})
  line3 = Bodies.rectangle(450,400,50,4,{isStatic:true})
  World.add(world,ball)
  World.add(world,line1)
  World.add(world,line2)
  World.add(world,line3)
}


function draw() {
  rectMode(CENTER);
 
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15)
  
 rect(line1.position.x,line1.position.y,900,20)
 rect(line2.position.x,line2.position.y,20,70)
 rect(line3.position.x,line3.position.y,20,70)
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
	}
}