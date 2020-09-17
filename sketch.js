
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground ,paper,dustbin,dustbin2,dustbin3;
function setup() {
  createCanvas(1500,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,380,1800,20)
  paper=new Paper(10,10)
  dustbin=new Dustbin(1050,360,150,20)
  dustbin2=new Dustbin(1125,320,20,100)
  dustbin3=new Dustbin(974,320,20,100)

  

  
}

function draw() {
  Engine.update(engine);
  background(0);  
 

 
  ground.display();
  paper.display();
 dustbin .display();
 dustbin2 .display();
 dustbin3 .display();
}
function keyPressed(){
if(keyCode===UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-69});

}

}
