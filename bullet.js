class Projectile
{
    constructor(sprite, x, y, xScale, yScale, xvel=1, yvel=1, to=createVector(mouseX, mouseY), origin=createVector(plr.pos.x, plr.pos.y))
    {
        this.sprite = loadImage("assets/"+sprite);
        this.pos = createVector(x, y);
        this.vel = createVector(xvel, yvel);
        this.size = createVector(xScale, yScale);
        this.angle = 0;
        this.to = to;
        this.origin = origin;
    }
    show()
    {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        scale(plr.direction, 1);
        image(this.sprite, 0, 0, 32, 32)
        pop();
    }

    update()
    {
        this.pos.add(this.vel);

        this.pos.y = this.math(this.origin.x, this.origin.y, this.to.x, this.to.y);

    }

    setDirection(newVel)
    {
        this.vel = newVel;
    }

    math(x1, y1, x2, y2)
    {
        let a = (y2-y1)/(x2-x1);
        let b = y1 - a * x1;

        return (a*this.pos.x+b);
    }

    edging()
    {
        return this.pos.x + this.size.x < 0  || this.pos.x + this.size.x > width || this.pos.y + this.size.y < 0 || this.pos.y + this.size.y > height;
    }

}