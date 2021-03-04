
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine; 
var world; 

var roof;
var rope1, rope2, rope3, rope4, rope5;
var blob1, blob2, blob3, blob4, blob5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof = new Roof(width/2,height/4,width/7,20);

	blobDiameter = 40; 

	startBlobPosX = width/2; 
	startBlobPosY = height/4 + 450; 

	blob1 = new Blob(startBlobPosX - blobDiameter*2, startBlobPosY, blobDiameter);
	blob2 = new Blob(startBlobPosX - blobDiameter, startBlobPosY, blobDiameter);
	blob3 = new Blob(startBlobPosX, startBlobPosY, blobDiameter);
	blob4 = new Blob(startBlobPosX + blobDiameter, startBlobPosY, blobDiameter);
	blob5 = new Blob(startBlobPosX + blobDiameter*2, startBlobPosY, blobDiameter);

	rope1=new Rope(blob1.body,roof.body,-blobDiameter*2, 0);
	rope2=new Rope(blob2.body,roof.body,-blobDiameter*1, 0);
	rope3=new Rope(blob3.body,roof.body,0, 0);
	rope4=new Rope(blob4.body,roof.body,blobDiameter*1, 0);
	rope5=new Rope(blob5.body,roof.body,blobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(blob1.body,blob1.body.position,{x:-50,y:-45});

	}
}



