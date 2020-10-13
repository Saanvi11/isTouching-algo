var movingRect, fixedRect;
var object1, object2;
var trex, obstacle;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 50);

  trex = createSprite(600, 300, 50, 80);
  obstacle = createSprite(400, 300, 80, 50);

}

function draw() {
  background(255,255,255);  

  trex.x = mouseX;
  trex.y = mouseY;
// we need to call functions with specific objects we want it to work on
  if(isTouching(fixedRect, movingRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  if(isTouching(trex, obstacle)){
    trex.shapeColor = "purple";
    obstacle.shapeColor = "purple";
  }else{
    trex.shapeColor = "pink";
    obstacle.shapeColor = "pink";
  }
 
  drawSprites();
}
