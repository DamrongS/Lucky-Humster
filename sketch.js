

function setup() 
{
  createCanvas(1200, 800);
  noSmooth();
  Gravity = 0.98;
  GroundLevel = height/1.5;

  plr = new Entity("lobster_idle.gif", 200, 200)

}

function draw() 
{
  background(220);

  plr.show();
  plr.update();

}

function keyPressed()
{
  if(keyCode == LEFT_ARROW)
  {
    plr.left();
  }
  if(keyCode == RIGHT_ARROW)
  {
    plr.right();
  }
  if(key == " ")
  {
    plr.jump();
  }
}

function keyReleased()
{
  if(keyCode == LEFT_ARROW)
  {
    plr.left(0);
  }
  if(keyCode == RIGHT_ARROW)
  {
    plr.right(0);
  }
}