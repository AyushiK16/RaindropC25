const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var rain1;
var raindropArray = [];
var x = 1
function setup() {

  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
  rain1 = new Raindrop(200, 200, 10, 90);
  rain1.velocityX = 4;

  while (x<1){
    var rain = new Raindrop(random(1,400), 1, random(10,50), random(10,50));
    raindropArray.add(rain);
  }


}


function draw() {
  background("black");
  Engine.update(engine);
  rain1.display();
  rain.display();
 
  
}