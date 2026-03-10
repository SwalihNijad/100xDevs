class shape{
    constructor(color, depth){
        this.color = color ;
        this.depth = depth ;
    }

    paint() {
        console.log("Painting with the color: " + this.color)
    }

    area() {            //This we are raising an error if this argument is not passed in below class.
        throw new Error('The area musut be implemented in subclass')
    }
}

//These are all seperate 3 classes but the common thing they have is color, so the above class is created
//extends shape is used to link the shape and these classes

class Rectangle extends shape  {                   
    constructor(width, height, color, depth){
        super(color, depth)                     //constructor of class shape
        this.width = width;
        this.height = height ;
    }

    area() {
        return this.width * this.height ;
    }

    volume() {
        return this.area() * this.depth
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}


class Circle extends shape{
    constructor(radius, color){
        super(color)
        this.radius = radius ;
    }

    area() {
        return 3.141 * this.radius * this.radius ;
    }

    perimeter(){
        return 2* 3.141 * this.radius ;
    }
}

class Square extends shape {
    constructor(side, color){
        super(color)
        this.side = side;
    }

    area() {
        return this.side * this.side ;
    }

    perimeter() {
        return 4 * this.side ;
    }
}

const r1 = new Rectangle(10, 10, "Orange")
const c1 = new Circle(10 , "Black")
const s1 = new Square(300, "Red")
console.log(c1.area())
console.log(s1.perimeter())
console.log(s1.paint())
console.log(r1.paint())

//Who has more volume
function whoHasMoreArea(s1, c1){
    if(s1.volume() > c1.volume())
    {
        console.log("First shape has more area")
    }
    else
    {
        console.log("Second shape has more area")
    }
}

whoHasMoreArea(new Rectangle(10, 10 ,10, "red"), new Circle(10, 10, "green")); 