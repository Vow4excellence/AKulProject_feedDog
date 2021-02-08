const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, ground, ball, wall, dog1,dog2, person;
var score = 0, gameState = "play";

function preload(){
//background  = color(75,50,25)
}


function setup(){
  createCanvas(800,400)
  engine =  Engine.create();
  world = engine.world

  ground = new Ground(200,390,1890,20);
  dog1 = new Dog(530,10,150,60);
  dog2 = new Dog(300,200,160,80);
  
  wall = new Ground(1,365,100,300)
  ball1 = new Ball(500,20,11)
  //ball2 = new Ball(30,200,25)

  dogChain1 = new Persons(dog1.DogBody, ball1.ball);
  dogChain2 = new Persons(dog2.DogBody, ball1.ball);

 console.log(dog1.DogBody.position);
  }

function draw(){
    background(0);
 
    Engine.update(engine);
  
    ground.display();
    dog1.display();
    dog2.display();
    ball1.display()
    dogChain1.display();
    dogChain2.display();
    wall.display()
   
    text(mouseX+","+mouseY, mouseX,mouseY);

}
/*
function keyPressed(){

	if(keyCode === UP_ARROW){
		Body.applyForce(ball.ball, ball.ball.position, {x:40,y:80})
		
	}
}*/