class Rectangle{
    constructor(width, height, color){    //Creating a constructor (Like a blueprint)
        this.width = width;
        this.height = height;
        this.color = color;
    }

    static whoami(){
        return "I am a rectangle"   //Statics methods are called directly on the class
    }

    area() {                                        
        const area = this.width * this.height ;   //Non static methods that are called on object
        return area;
    }

    perimeter() {
        return 2 * (this.width + this.height)
    }
}

const rect = new Rectangle(10, 10, "Red");   //Creating a new object of a class , this value willl be taken by the constructor this.width....
const perimeter = rect.perimeter();
const area = rect.area() ;
console.log(perimeter);
console.log(area);
console.log(Rectangle.whoami());  

//console.log(rectangle.area)  doesnt mske sense because there is no such objects created
//let r = new rectangle(10, 10 "red")
//console.log(r.area) makes sense as we create an object

//Existing constructor

const d = new Date();
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
