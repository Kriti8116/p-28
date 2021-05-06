
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, slingShot;

function preload()
{
	boyImg= loadImage("boy.png")

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(950,300);
ground= new Ground(300,600,1300,20);
mango1 = new Mango(900,100,30);
mango2 = new Mango(970,130,30);
mango4 = new Mango(880,130,30);
mango5 = new Mango(830,200,30);
mango6 = new Mango(960,200,30);
mango7 = new Mango(800,230,30);
mango8 = new Mango(970,250,30);
mango3 = new Mango(1000,200,30);
stone= new Stone(235,420,30)
slingshotObject=new slingshot(stone.body,{x:235,y:420})
  


}


function draw() {
  rectMode(CENTER);
  background("white");
  
image(boyImg,200,340,200,300);
tree.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();

stone.display();
slingshot.display();



 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}
