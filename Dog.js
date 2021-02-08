class Dog{
    constructor(x, y,width, height){
        var options = {
          'restitution':0.8,          
        }
       this.DogBody = Bodies.rectangle(x, y,width, height,options);
       this.width = width,
       this.height = height;
       World.add(world,this.DogBody);
       this.image = loadImage("dog.jpg")
    }

  display(){
    //console.log(this.DogBody.position);
    var pos =this.DogBody.position;
    var angle = this.DogBody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0, 0,this.width,this.height);
   // rectMode(CENTER);
   // rect(0,0,this.width, this.height);   
    pop();
  }
}