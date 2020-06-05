var mr,fr;
function setup() {
  createCanvas(800,400);
   mr = createSprite(400, 200, 80, 50);
   fr = createSprite(400, 200, 50, 80);

  mr.shapeColor = "blue";
  fr.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if((mr.x - fr.x <= mr.width/2 + fr.width/2)&&(fr.x - mr.x <= fr.width/2 + mr.width/2)&&(mr.y - fr.y <= mr.height/2 + fr.height/2)&&(fr.y - mr.y <= mr.height/2 + fr.height/2)){
      mr.shapeColor = "red";
      fr.shapeColor = "red";
  }
  else{
    mr.shapeColor = "blue";
    fr.shapeColor = "blue";
  }
  drawSprites();
}