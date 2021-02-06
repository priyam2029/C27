class Chain {
constructor(body1 , body2)
{
    var Options = {
        bodyA:body1,bodyB:body2,
        stiffness : 0.1,
        length : 50,
    }
    this.chain = Matter.Constraint.create(Options)
World.add(world,this.chain)

}
display(){
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
    this.chain.bodyB.position.x,this.chain.bodyB.position.y)

}
}