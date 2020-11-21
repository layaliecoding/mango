
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,100,300,30);
	bob1=new Bob(280,700,20);
	rope1=new Rope(bob1.body,{x:280,y:100})
	bob2=new Bob(320,700,20);
	rope2=new Rope(bob2.body,{x:320,y:100})
	bob3=new Bob(360,700,20);
	rope3=new Rope(bob3.body,{x:360,y:100})
	bob4=new Bob(400,700,20);
	rope4=new Rope(bob4.body,{x:400,y:100})
	bob5=new Bob(440,700,20);
	rope5=new Rope(bob5.body,{x:440,y:100})
	bob6=new Bob(480,700,20);
	rope6=new Rope(bob6.body,{x:480,y:100})
	bob7=new Bob(520,700,20);
	rope7=new Rope(bob7.body,{x:520,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  


  roof.display();
  bob1.display();
 rope1.display();
 bob2.display();
 rope2.display();
 bob3.display();
 rope3.display();
 bob4.display();
 rope4.display();
 bob5.display();
rope5.display();
 bob6.display();
 rope6.display();
 bob7.display();
 rope7.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}


