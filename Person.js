class Persons{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.personBody = Constraint.create(options);
        //this.bodyA = bodyA;
        //this.pointB = pointB;
        World.add(world,this.personBody);
    }
    display(){
      //  console.log(this.sling.bodyA.position)
       // if(this.sling.bodyA){
            var pointA = this.personBody.bodyA.position;
            var pointB = this.personBody.bodyB.position;
           // push();
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            //pop();
      //  }
    }
    /*attach(body){
       
        this.sling.bodyA = body;
      
    }
    fly(){
        this.sling.bodyA = null;

    }
    */
}