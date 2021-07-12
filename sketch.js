var trex, trexImg;
var edges;


function preload()
{
    trexImg = loadAnimation("trex1.png","trex3.png", "trex4.png");
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(120, 130, 20, 50);
  trex.addAnimation("trex",trexImg);
  trex.scale = 0.6;

  edges = createEdgeSprites();
}

function draw() {
  background(220);

 // text(what i want display, x post, ypos);
  textSize(15);
  text(mouseX + "," + mouseY, mouseX, mouseY);

  //make trex jump
   if(keyDown("space"))
   {
       trex.velocityY = -3;
   }

   //gravity
    trex.velocityY = trex.velocityY + 1;

  //trex collides with bottom edge
    trex.collide(edges[3]);


  drawSprites();
}