var car,car2,wall;
var speed,weight,car3,car4;
var deformation1,deformation2,deformation3,deformation4;

function setup() {
  createCanvas(1600, 400);
  speed=random(1,8)
  weight=random(20,50)
  car=createSprite(100,100,50,50);
  wall=createSprite(1500,200,60,400);
  car2=createSprite(100,300,50,50);
  car3=createSprite(100,400,50,50);
  car4=createSprite(100,500,50,50);
  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
 deformation=0.5*weight*car.velocityX*car.velocityX/22500;
 deformation2=0.5*weight*car2.velocityX*car2.velocityX/22500;
 deformation3=0.5*weight*car3.velocityX*car3.velocityX/22500;
 deformation4=0.5*weight*car4.velocityX*car4.velocityX/22500;
}

function draw(){
background("black")



if(car.x-wall.x<car.width+wall.width/2){
car.velocityX=0
if(deformation>180){
  car.shapeColor="red";
}
if(deformation<100){
  car.shapeColor="green";
}
if(deformation>100 && deformation<180){
  car.shapeColor="yellow";
}
}

if(car2.x-wall.x<car2.width+wall.width/2){
  car.velocityX=0
  if(deformation2>180){
    car2.shapeColor="red";
  }
  if(deformation2<100){
    car2.shapeColor="green";
  }
  if(deformation2>100 && deformation2<180){
    car2.shapeColor="yellow";
  }
  }

  if(car3.x-wall.x<car3.width+wall.width/2){
    car.velocityX=0
    if(deformation3>180){
      car3.shapeColor="red";
    }
    if(deformation3<100){
      car3.shapeColor="green";
    }
    if(deformation3>100 && deformation3<180){
      car3.shapeColor="yellow";
    }
    }

    if(car4.x-wall.x<car4.width+wall.width/2){
      car4.velocityX=0
      if(deformation4>180){
        car4.shapeColor="red";
      }
      if(deformation4<100){
        car4.shapeColor="green";
      }
      if(deformation4>100 && deformation4<180){
        car4.shapeColor="yellow";
      }
      }



  drawSprites();
}