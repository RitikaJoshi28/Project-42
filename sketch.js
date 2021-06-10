var iss;
var spaceCraft
var hasDocked=false;
var image=[iss,spaceCraft,hasDocked];
function preload()
{
  images=loadImage("Docking-undocking.zip");

}

function setup() {
  createCanvas(800,400);
   iss=createSprite(400, 200, 50, 50);
   iss
   spaceCraft=createSprite(500,95,50,50);
   images.addImage("images",images);
}

function draw() {
  background(255,255,255); 
  if(!hasDocked)
  {
    //write code to set random x position for spaceCraft
    if(keyDown(LEFT_ARROW))
    {
      
       spaceCraft.velocityX=-3;
    }
    if(keyDown(RIGHT_ARROW))
    {
       spaceCraft.velocityX=-3;
    }
    if(keyDown(UP_ARROW))
    {
      spaceCraft.velocityY=-2;
       spaceCraft.collide(iss);
    }
    if(keyDown(DOWN_ARROW))
    {
      spaceCraft.velocityY=2;
    }
  } 
  drawSprites();
}