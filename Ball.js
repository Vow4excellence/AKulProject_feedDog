class Ball {
  constructor(x,y,radius){
      var options = {
          restitution : 0.2,
          friction : 0.5,
          density : 1.2

      }
      this.ball = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.color =random(100,250)
      this.color2=random(100,250)
      this.colo3= random(150,200)
      World.add(world,this.ball);
  }

  display(){
  //  console.log(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
      var pos = this.ball.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      fill(this.color, this.color2, this.color3);
      ellipseMode(RADIUS);
      ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius)
      pop();
    
  }


}