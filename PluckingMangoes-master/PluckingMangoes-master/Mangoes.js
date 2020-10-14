class Mango {
    constructor(x, y, radius) {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Matter.Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        ellipse(this.x, this.y, this.radius);
        pop();
      }
}