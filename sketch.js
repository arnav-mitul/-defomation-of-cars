var car,car2,wall;
var speed,weight,car3,car4;

function setup() {
  createCanvas(1600, 400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.shapeColor="red"
  car2=createSprite(150,200,50,50);
  car3=createSprite(250,200,50,50);
  car4=createSprite(350,200,50,50);
}

function draw(){





  drawSprites();
}