
let clovers = [];
let skrods = [];
let coins = [];
let bullets = [];
let sprayParticles = [];

let maxLuck;
let gathered = 0
let Luck;

let monkey;

let chance = 25;

function preload()
{
  skrod = loadImage("assets/labeskrod.png");
  clov = loadImage("assets/klover.png");
  coin = loadImage("assets/coin.png");
}

function setup() 
{
  createCanvas(1200, 800);

  noSmooth();
  Gravity = 0.98;
  GroundLevel = height/1.5;

  plr = new Entity("lobster_idle.gif", 200, 200);

  for(let i = 0; i < 7; i++)
  {
    clovers.push(new Entity("klover.png", random(0, width), height/1.5));
  }

  for(let i = 0; i < 15; i++)
  {
    coins.push(new Entity("coin.png", random(0, width), height/1.5, 0, 0, 1, 1));
  }

  skrods.push(new labeskrod("labeskrod.png", 400, 250));

  maxLuck = clovers.length;

  monkey = 1;

  inventory = ["", "", "", "", "", "", "", "", "", ""];

}

function draw() 
{
  background(220);
  for(let i = clovers.length - 1; i >= 0; i--)
  {
    clovers[i].show();
    clovers[i].floating();
    if(clovers[i].collision(plr))
    {
      clovers.splice(i, 1);
      gathered += 1;
    }

  }

  for(let i = coins.length - 1; i >= 0; i--)
  {
    coins[i].show();
    coins[i].floating();
    if(coins[i].collision(plr))
    {
      coins.splice(i, 1);
      monkey += 1;
    }

  }

  for(let i = skrods.length - 1; i >= 0; i--)
  {
    skrods[i].show();
    skrods[i].floating();
    if(skrods[i].collision(plr))
    {
      skrods[i].addToInv();
      //skrods[i].reward();
      skrods.splice(i, 1);
    }

  }

  for(let i = bullets.length -1; i >= 0; i--)
  {
    bullets[i].show();
    bullets[i].update();
    if(bullets[i].edging())
    {
      bullets.splice(i, 1);
    }
  }

  plr.show();
  plr.update();
  if(plr.holdingMouse)
  {

  }

  Luck = (gathered/maxLuck) * 100 || 0;
  imageMode(CENTER)
  image(clov, 25, 25)
  text(int(Luck)+"%", 45, 30);

  image(coin, 25, 55, 16, 16)
  text(int(monkey), 45, 60);

  showInventory();
}

function mousePressed()
{
  createBullet();
}

function keyPressed()
{
  if(keyCode == LEFT_ARROW || key == "a")
  {
    plr.left();
    plr.holdingLeft = true;
  }
  if(keyCode == RIGHT_ARROW || key == "d")
  {
    plr.right();
    plr.holdingRight = true;
  }
  if(key == " " || keyCode == UP_ARROW || key == "w")
  {
    plr.jump();
  }

  if(key == "1" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "2" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "3" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "4" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "5" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "6" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "7" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "8" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "9" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else if(key == "0" && inventory[0] == "labeskrod")
  {
    inventory[0] = "";
    monkey -= 1;
    monkey += reward();
  }
  else
  {
    console.log("nothing to use")
  }

}

function keyReleased()
{
  if(keyCode == LEFT_ARROW || key == "a")
  {
    plr.left(0);
    if(plr.holdingRight == true)
    {
      plr.right();
    }
    plr.holdingLeft = false;
  }
  if(keyCode == RIGHT_ARROW|| key == "d")
  {
    plr.right(0);
    if(plr.holdingLeft == true)
    {
      plr.left();
    }
    plr.holdingRight = false;
  }
  if(key == " " || keyCode == UP_ARROW || key == "w")
  {
    plr.jump(false);
  }
}

function showInventory()
{
  push();
  for(let i = 0; i < 10; i++)
  {
    fill(255,255,255,200);
    stroke(0);
    rect(100+i*100, height/1.2, 100, 100);
    if(inventory[i] == "")
    {
      fill(0);
      textAlign(CENTER);
      textSize(25);
      text("None", 150+i*100, (height/1.115))
    }
    if(inventory[i] == "labeskrod")
    {
      imageMode(CENTER);
      image(skrod, 150+i*100, height/1.115, 64, 64);
    }
  }
  pop();
}

function reward()
{
    let reward = findReward();
    console.log("CONGRATS! YOU WON "+int(reward)+" COINS!");
    gathered = 0;
    return reward;
}

function findReward()
{
    let reward;
    let gg = random(1, 10)

    if(Luck <= 0)
    {
      if(gg <= 1)
      {
        reward = random(100, 500);
      }
      else
      {
        reward = random(0, 25);
      }
    }
    else if(Luck >= 20 && Luck <= 50)
    {
      if(gg <= 1)
      {
        reward = random(200, 600);
      }
      else
      {
        reward = random(20, 50);
      }
    }
    else if(Luck >= 50 && Luck <= 75)
    {
      if(gg <= 1)
      {
        reward = random(300, 800);
      }
      else
      {
        reward = random(50, 75);
      }
    }
    else if(Luck >= 75 && Luck <= 100)
    {
      if(gg <= 1)
      {
        reward = random(500, 100);
      }
      else
      {
        reward = random(75, 100);
      }
    }

    return reward;
}

function createBullet(xScale, yScale) {
  
  bullets.push(new Projectile("bullet.png", plr.pos.x, plr.pos.y, xScale, yScale, random(5, 10), random(5, 10), createVector(mouseX, mouseY)));
}