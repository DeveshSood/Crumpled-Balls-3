const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj, paperObject,groundObject, launcherObject	
var world;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;
var i, edges, edge1, edge2, edge3, edge4;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	launcherObject=new launcher(paperObject.body,{x:300,y:300})
	

	

	Engine.run(engine);

	createEdges();
  
}


function draw() {
  background(230);
 
  Engine.update(engine)
  
    paperObject.display();
 
  
  groundObject.display();
  dustbinObj.display();
  launcherObject.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcherObject.fly();
 
}

function createEdges(){
	var options2 = 
	  {
		  isStatic:true,
		  'restitution':0.8,
		  'friction':0.3,
		  'density':1.2
	  }
	  
	edge1 = createSprite(0, height/2, 5, height);
	edge1.visible = false;
	edge1 = Bodies.rectangle(0, height/2, 5, height, options2);
	World.add(world, edge1);

	edge2 = createSprite(width, height/2, 5, height);
	edge2.visible = false;
	edge2 = Bodies.rectangle(width, height/2, 5, height, options2);
	World.add(world, edge2);

	edge3 = createSprite(width/2, 0, width, 5);
	edge3.visible = false;
	edge3 = Bodies.rectangle(width/2, 0, width, 5, options2);
	World.add(world, edge3);

	edge4 = createSprite(width/2, height, width, 5);
	edge4.visible = false;
	edge4 = Bodies.rectangle(width/2, height, width, 5, options2);
	World.add(world, edge4);
}