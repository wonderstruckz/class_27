class Slingshot{
constructor(bodyA,bodyB){
var Constraint_options = {
    bodyA: bird.body,
    bodyB: log6.body,
    stiffness: 0.04,
    length: 10
}
this.chain = Constraint.create(Constraint_options)
World.add(world,this.chain)
}
display(){
var pointA = this.chain.bodyA.position
var pointB = this.chain.bodyB.position
strokeWeight(7)
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
