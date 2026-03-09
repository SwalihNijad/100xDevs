class shape{
    constructor(color){
        this.color = color ;
    }

    paint() {
        console.log("Painting with the color" + this.color)
    }
}

//These are all seperate 3 classes but the common thing they have is color, so the above class is created
//extends shape is used to link the shape and these classes

class Rectangle extends shape  {                   
    constructor(width, height, color){
        super(color)                     //constructor of class shape
        this.width = width;
        this.height = height ;
    }

    area() {
        return this.width * this.height ;
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

const r1 = new Rectangle(10, 10, "red")
const c1 = new Circle(10 , "Black")
const s1 = new Square(300, "red")
console.log(c1.paint())
console.log(s1.paint())