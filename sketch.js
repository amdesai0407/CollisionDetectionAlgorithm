var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "orange";

  movingRect = createSprite(100,100,50,80);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
     movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    ){
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  }else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "orange";
  }
  drawSprites();
}