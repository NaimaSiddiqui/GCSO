var car,wall;
var speed,weight;
var defor=0;
function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 wall= createSprite(1500,200,60,height/2);
speed= random(55,90);
weight=random(400,1500);
car.velocityX=speed;
car.shapeColor="black";

}

function draw() {
  background(255,255,255);  
  if(car.collide(wall)){
    defor=Math.round((0.5*weight*speed*speed)/22500);
  }
  if(defor<100){
  car.shapeColor= color(0,255,0);
}

  if(defor>100 && defor<180)
  {
    car.shapeColor= color(230,230,0);
  }
 

  if(defor>180){
    car.shapeColor=color(255,0,0);
  }
 


  text("Speed:  "+speed,1000,50);
text("Weight:  "+weight,1000,70);
  text("Deformation:  "+ defor,1000,90);
  drawSprites();
}