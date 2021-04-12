
var fixedRect, movingRect;
var gameObject1, gameObject2;
var Run1,Run2,Run3,Run4;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  Run1 = createSprite(300, 400, 50, 50);
  Run1.shapeColor = "blue";
  
  Run2 = createSprite(200, 400,80,30);
  Run2.shapeColor = "yellow";

  Run3= createSprite(400, 400, 50, 50);
  Run3.shapeColor = "blue";

  Run4= createSprite(500, 400, 50, 50);
  Run4.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collisiontest(movingRect,Run1)){
    movingRect.shapeColor = "red";
    Run1.shapeColor = "red";
  }
  else if(collisiontest(movingRect,Run2)){
    movingRect.shapeColor = "red";
    Run2.shapeColor = "red";
  }
  else  if(collisiontest(movingRect,Run3)){
    movingRect.shapeColor = "red";
    Run3.shapeColor = "red";
  }
  else  if(collisiontest(movingRect,Run4)){
    movingRect.shapeColor = "red";
    Run4.shapeColor = "red";
  }

  else {
    movingRect.shapeColor = "green";
    Run1.shapeColor = "green";
    Run2.shapeColor = "green";
    Run3.shapeColor = "green";
    Run4.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function collisiontest(O1,O2){
  if (  O1.x - O2.x < O2.width/2 + O1.width/2
    && O2.x - O1.x < O2.width/2 + O1.width/2
    && O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y < O2.height/2 + O1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


