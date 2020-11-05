var movingrect,fixedrect;
var gameObject1,gameObject2;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 80);
  fixedrect=createSprite(300, 200, 80, 50);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  gameObject1=createSprite(100, 100, 50, 80);
  gameObject2=createSprite(200, 100, 50, 80);
  gameObject1.shapeColor="red";
  gameObject2.shapeColor="red";


}

function draw() {
  background(255,255,255);

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 


 if(isTouching(movingrect,gameObject1) ){
 gameObject1.shapeColor="green";
 movingrect.shapeColor="green"; 
 }
 else{
  movingrect.shapeColor="red";
  gameObject1.shapeColor="red";
 }


  drawSprites();
}







/*var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);

  drawSprites();
}*/


