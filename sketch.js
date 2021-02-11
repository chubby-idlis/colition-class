var block
var block2

function setup() {
  createCanvas(800,400);
  block = createSprite(400, 200, 50, 50);
  block2 = createSprite(300, 100, 50, 50);
}

function draw() {
  background("green"); 
  block2.x = mouseX
  block2.y = mouseY 
  if(abs(block.x-block2.x)<=block.width/2+block2.width/2 && 
  abs(block.y-block2.y)<=block.height/2+block2.height/2){
   block.shapeColor  = "red"
   block2.shapeColor = "red" 
  } else {
    block.shapeColor  = "blue"
    block2.shapeColor = "blue"  
  }
  drawSprites();
}