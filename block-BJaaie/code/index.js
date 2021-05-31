// Pseudotypical Pattern

function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

Animal.prototype = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }

}

function Dog(name, color, location, numberOfLegs) {
Animal.apply(this, [location, numberOfLegs])
    this.name = name;
    this.color = color;
}

Dog.prototype = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(newName) {
        this.name = newName;
        return this.name;
    },
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    },
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

let dog = new Dog("Dog", "black");

function Cat(name, colorOfEyes, location, numberOfLegs) {
    Animal.apply(this [location, numberOfLegs])
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    
    Cat.prototype = {
        meow() {
            alert(`I am ${this.name} and I can do mewo meow 😹`);
        },
        changeName(newName) {
            this.name = newName;
            return this.name;
        },
        changeColorOfEyes(newColorOfEyes) {
            this.color = newColorOfEyes;
            return this.color;
        },
        summary() {
            return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
        }
    }
    Object.setPrototypeOf(Cat.prototype, Animal.prototype);
    
    let cat = new Cat("Cat", "Grey");


    // Class Inheritance

    class Animal {
        constructor(location, numberOfLegs) {
            this.location = location;
            this.numberOfLegs = numberOfLegs;
        }

        eat() {
            console.log(`I live in ${this.location} and I can eat`)
        }
        changeLocation(newLocation) {
            this.location = newLocation;
            return this.location;
        }
        summary() {
            return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
        }
    }

    class Dog extends Animal{
        // Object.apply(Animal.prototype, [name, color])
        constructor(name, color, location, numberOfLegs) {
            super(location, numberOfLegs);
            this.name = name;
            this.color = color;
        }

        bark() {
            alert(`I am ${this.name} and I can bark 🐶`);
        }
        changeName(newName) {
            this.name = newName;
            return this.name;
        }
        changeColor(newColor) {
            this.color = newColor;
            return this.color;
        }
        summary() {
            return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
        }       
    }
        
        
    let dog = new Dog("Dog", "black", "Dharamshala", 4);

    class Cat extends Animal{
        // Object.apply(Animal.prototype, [name, color])
        constructor(name, colorOfEyes, location, numberOfLegs) {
            super(location, numberOfLegs);
            this.name = name;
            this.colorOfEyes = colorOfEyes;
        }

        meow() {
            alert(`I am ${this.name} and I can do mewo meow 😹`);
        }
        changeName(newName) {
            this.name = newName;
            return this.name;
        }
        changeColor(newColorOfEyes) {
            this.colorOfEyes = newColorOfEyes;
            return this.colorOfEyes;
        }
        summary() {
            return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
        }       
    }
        
        
    let cat = new Cat("Cat", "white", "Kangra", 6);
    


