var car, carImage, wall;
var speed, weight;


function preload(){
carImage=loadImage("car.png")
}


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  car=createSprite(50,200,50,50);
  car.addImage("moving",carImage);
  
 

  wall=createSprite(1600,200,60,height/2);
  wall.shapeColor=color(80,80,80)

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black"); 

  car.velocityX=speed;

  
  
  if(wall.x-car.x<(car.width+wall.width)/2 && 
  car.x-wall.x<(car.width+wall.width)/2&&
  wall.y-car.y<(car.height+wall.height)/2 &&
  car.y-wall.y<(car.height+wall.height)/2 ){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor="red";
      fill("red");
      text("LETHAL",800,200)
    }

    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
      fill("yellow");
      text("AVERAGE",800,200)
    }

    if(deformation<100){
      car.shapeColor="green";
      fill("green");
      text("GOOD",800,200)
    }
  }
  drawSprites();
}