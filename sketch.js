var fixedRect, movingRect,car,car1,car2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(1100,345,80,30);
  car.shapeColor="yellow";
  car1=createSprite(300,345,80,30);
  car1.shapeColor="blue";
  car1.velocityX=5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,car)){
 movingRect.shapeColor="red";

car.shapeColor="red";
}else{
  car.shapeColor="yellow";

  movingRect.shapeColor="green";
}
if (isTouching(movingRect,car1)){
  movingRect.shapeColor="red";
 
 car1.shapeColor="blue";
 }else{
   car1.shapeColor="purple";
 
   movingRect.shapeColor="green";
 }
  BounceOff(car1,car);
  
  
  drawSprites();
}
