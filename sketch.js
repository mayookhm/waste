
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundimg;
function preload()
{
	backgroundimg = loadImage("sprites/1.jpg")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
whitezonE = new whitezone1(310,520,10,70);
whitezoNe = new whitezone2(380,550,150,10);
whitezOne = new whitezone3(460,520,10,70);
ground = new Ground(200,height,1200,20);
ball1 = new ball(380,300,10,PI/2);
//slingshot = new Slingshot(bird.body,fixed.body);
fixed = new Ground(500,100,100,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);
  whitezonE.display();
  whitezoNe.display();
  whitezOne.display();
  ground.display();
//slingshot.display();
ball1.display();
fixed.display();
  drawSprites();
 
}
function mouseDragged(){


  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  
  }
  
function mouseReleased(){
  
      slingshot.fly();
}


