// Define and provide an example of encapsulation in JavaScript.

// Encapsulation is achieved by using private properties and providing controlled access via getters and setters.

class Student{
    #name
    constructor(name,age){
        this.#name = name
        this.age = age
    }

    getName(){
        return this.#name
    }
    setName(name){
         this.#name = name
    }
}

const student = new Student('ehsan',23)
student.setName("kamran")
console.log(student.getName()); //kamran



// Write a class Car with properties brand, model, and a method displayInfo().

class Car{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }

    displayInfo(){
        return `${this.brand} car has ${this.model} model`
    }
}

const car = new Car('Toyota',2001)

console.log(car.displayInfo());   //Toyota car has 2001 model


// What is method overriding, and how can it be implemented in JavaScript?

// Method overriding allows a subclass to provide a specific implementation of a method already defined in its parent class.

class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    getInfo(){
        return `${this.name} is ${this.age} years old`
    }
}

class Bachelor extends Human {
    constructor(name,age,condition){
        super(name,age)
        this.condition = condition
    }
    getInfo(){
       return `${super.getInfo()} and is ${this.condition}`
    }
}

const me = new Bachelor('Ehsan',23,'single')
console.log(me.getInfo());   //Ehsan is 23 years old and is single


// Write an example demonstrating polymorphism in JavaScript.

class Shape{
    area(){
        return 'this is a function showing the area'
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }

    area(){
        return Math.PI * this.radius * this.radius
    }
}

class Square extends Shape{
    constructor(side){
        super()
        this.side = side
    }
    area(){
        return this.side * this.side
    }
}

const shapes = [new Circle(3), new Square(4)]
for (const shape of shapes) {
    console.log("Area:", shape.area())
}

//Area: 28.274333882308138
// Area: 16


