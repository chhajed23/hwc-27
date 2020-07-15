
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5, BobDiameter;
var roof
var rope1,rpoe2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	BobDiameter=70;

	roof= new Roof(380,100,1100,20);
	
	bobObject1= new Bob(200,500,70);
	bobObject2= new Bob(270,500,70);
	bobObject3= new Bob(340,500,70);
	bobObject4= new Bob(410,500,70);
	bobObject5= new Bob(480,500,70);
	rope1= new Rope(bobObject1.body,roof.body,-BobDiameter*4,0);
	rope2= new Rope(bobObject2.body,roof.body,-BobDiameter*2,0);
	rope3= new Rope(bobObject3.body,roof.body,0,0);
	rope4= new Rope(bobObject4.body,roof.body,BobDiameter*2,0);
	rope5= new Rope(bobObject5.body,roof.body,BobDiameter*4,0);

	Engine.run(engine);
  
}


function draw() {
	background("red");
	Engine.update(engine)
  rectMode(CENTER);
  
  roof.display();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
//   drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:180,y:-100});
	   
	 }
   }
   


