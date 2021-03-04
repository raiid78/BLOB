class Blob{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0.3,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r; 
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }
    display(){

    

        push();
        translate(this.body.position.x, this.body.position.y);
     
        rectMode(CENTER);
        fill("pink")
        ellipse( 0, 0, this.width, this.height);
        pop();
    }
}