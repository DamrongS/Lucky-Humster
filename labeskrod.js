class labeskrod extends Entity
{
    constructor(sprite, x, y, xSpeed=0, ySpeed=0, xScale=1, yScale=1)
    {
        super(sprite, x, y, xSpeed, ySpeed, xScale, yScale);
        this.active = true;
    }

    addToInv()
    {
        for(let i = 0; i < 10; i++)
        {
            if(inventory[i] == "" && this.active)
            {
                this.active = false;
                inventory[i] = "labeskrod";
            }
        }
    }

}