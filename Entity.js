class Entity
{
    constructor(sprite="lobster_idle.gif", x, y, xSpeed=0, ySpeed=0, xScale=1, yScale=1)
    {
        this.isPlayer;

        if(sprite == "lobster_idle.gif")
        {
            this.isPlayer = true;
        }

        this.sprite = loadImage("assets/"+sprite);
        this.claw = loadImage("assets/claw.png")
        this.pos = createVector(x, y);
        this.vel = createVector(xSpeed, ySpeed);
        this.size = createVector(xScale, yScale);
        this.speed = 5;
        this.direction = 1;
        this.isJumping = false;

        this.holdingLeft = false;
        this.holdingRight = false;

        this.floatAngle = 0;

        this.growDir = 0.25;

        this.clawAngle = 0;

    }

    show()
    {
        push();
        translate(this.pos.x, this.pos.y);
        scale(this.size.x/this.direction, this.size.y);
        imageMode(CENTER);
        rotate(0)
        image(this.sprite, 0, 0, 128, 128);
        if(this.isPlayer)
        {
            if(this.direction >= 0)
            {
                rotate(PI + this.clawAngle)
            }
            else
            {
                rotate(this.clawAngle - PI/2)
            }
            image(this.claw, -48, 0, 48, 48);
        }
        pop();
    }

    update()
    {

        if(this.direction < 0)
        {
            this.clawAngle = atan2(mouseX - this.pos.x, mouseY - this.pos.y);
        }
        else if(this.direction > 0)
        {
            this.clawAngle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
        }

        if(mouseX > this.pos.x)
        {
            this.direction = -1;
        }
        else
        {
            this.direction = 1;
        }

        if(this.pos.y < GroundLevel)
        {
            this.vel.y += Gravity;
        }
        else if(this.pos.y > GroundLevel && this.isJumping == false)
        {
            this.vel.y = 0;
        }
        else if(this.isJumping == true)
        {
            this.vel.y = -20;
        }
        else
        {
            this.isJumping = false;
        }

        this.pos.add(this.vel);
    }

    floating()
    {
        this.pos.y += sin(this.floatAngle);
        this.pos.y = constrain(this.pos.y, 0, height/1.5);
        this.floatAngle += 0.05;
        this.size.x = sin(this.floatAngle);
    }

    left(val=1)
    {
        //this.direction = 1;
        this.vel.x = -val * this.speed;
    }

    right(val=1)
    {
        //this.direction = -1;
        this.vel.x = val * this.speed;
    }

    jump(bool=true)
    {
        this.isJumping = bool;
    }

    collision(other)
    {
        return dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y) < 64;
    }

}