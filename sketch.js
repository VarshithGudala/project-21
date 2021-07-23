
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.96,
		frictionAir:0.01,
		density:0.5,
		isStatic:false
		}

	  ball = Bodies.circle(100,10,20,ball_options);
      World.add(world,ball);
     
	  ground = new Ground(width/2,height - 10,width,20)
	  left = new Ground(600,height - 60,20,100)
	  right = new Ground(800,height - 60,20,100)
	Engine.run(engine);
	var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:800, height:700, wireframes:false } }); Matter.Render.run(render);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  fill("red") 
  ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
 ground.display()
 left.display()
 right.display()
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:20,y:-20});
	}
}

