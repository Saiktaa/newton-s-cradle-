const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var b1,b2;
var b3,b4;

var engine,world;
function setup(){
  createCanvas(500,500)
  engine = Engine.create();
  world = engine.world;
  
  b1 = new Box(100,200,70,70)
  b2 = new Box(150,200,70,70)
  b3 = new Box(200,200,70,70)
  b4 = new Box(250,200,70,70)
  b5 = new Box(300,200,70,70)
  
  rope1 = new Chain(b1.body,{x:100,y:50})
  rope2 = new Chain(b2.body,{x:150,y:50})
  rope3 = new Chain(b3.body,{x:200,y:50})
  rope4 = new Chain(b4.body,{x:250,y:50})
 rope5 = new Chain (b5.body,{x:300,y:50})
}

function draw(){
  background("lavender")
  Engine.update(engine)
  rect(10,30,400,20)

  b1.show()
   b2.show()
   b3.show()
   b4.show()
   b5.show()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  

//   line(b1.body.position.x,b1.body.position.y,b2.body.position.x,b2.body.position.y)
//    line(b2.body.position.x,b2.body.position.y,b3.body.position.x,b3.body.position.y)
  
//   line(b3.body.position.x,b3.body.position.y,b4.body.position.x,b4.body.position.y)
}

function mouseDragged(){
 Matter.Body.setPosition(b1.body, {x:mouseX,y:mouseY})
}




