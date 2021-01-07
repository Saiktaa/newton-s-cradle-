class Chain {
  constructor(bodyA,pointB){
    var options = {
      bodyA:bodyA,
      pointB:pointB,
      length:300,
      stiffness:1.0
    }
    this.pointB = pointB
    this.body = Matter.Constraint.create(options)
    World.add(world,this.body)
  }
  
  fly(){
    this.body.bodyA = null;
  }
  
  display()
{  
  if(this.body.bodyA){
  line(this.body.bodyA.position.x,this.body.bodyA.position.y,
      this.body.pointB.x,this.body.pointB.y)
}
}
}