class Entity
{
    constructor(sprite="lobster_idle.gif", x, y, xSpeed=0, ySpeed=0, xScale=1, yScale=1)
    {
        this.sprite = loadImage("assets/"+sprite);
        this.pos = createVector(x, y);
        this.vel = createVector(xSpeed, ySpeed);
        this.size = createVector(xScale, yScale);
        this.speed = 5;
        this.direction = 1;
        this.isJumping = false;
    }

    show()
    {
        push();
        translate(this.pos.x, this.pos.y)
        scale(this.size.x*this.direction, this.size.y)
        imageMode(CENTER);
        image(this.sprite, 0, 0, 128, 128);
        pop();
    }

    update()
    {
        if(this.pos.y < GroundLevel)
        {
            this.vel.y += Gravity;
        }
        else if(this.pos.y > GroundLevel && this.isJumping == false)
        {
            this.vel.y = 0;
        }
        else
        {
            this.isJumping = true;
        }

        this.pos.add(this.vel);
    }

    left(val=1)
    {
        this.direction = 1;
        this.vel.x = -val * this.speed;
    }

    right(val=1)
    {
        this.direction = -1;
        this.vel.x = val * this.speed;
    }

    jump()
    {
        this.isJumping = true;
        this.vel.y = -15;
    }

}