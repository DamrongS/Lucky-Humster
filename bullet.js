class Projectile
{
    constructor(sprite, x, y, xScale, yScale)
    {
        this.sprite = loadImage("assets/"+sprite);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.size = createVector(xScale, yScale);
        this.angle = 0;
    }
    show()
    {
        push();
        translate(this.pos.x, this.pos.y)
        rotate(this.angle)
        scale(plr.direction, 1);
        image(this.sprite, 0, 0, 32, 32)
        pop();
    }

    update()
    {


        this.pos.add(this.vel);
    }

    setDirection(newVel)
    {
        this.vel = newVel;
    }

}