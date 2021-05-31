// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

function Animal(location, numberOfLegs) {
    let animalObj = Object.create(animalMethods);
    animalObj.location = location;
    animalObj.numberOfLegs = numberOfLegs;
    return animalObj;
}

let animalMethods = {
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

let animalOne = new Animal("Dharamshala", 6);

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`



function Dog(location, numberOfLegs, name, color) {
    let animalObj = Object.create(animalMethods);
    animalObj.location = location;
    animalObj.numberOfLegs = numberOfLegs;
    animalObj.name = name;
    animalObj.color = color;
    return animalObj;
}

let DogMethods = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newDogName) {
        this.name = newDogName;
        return this.name;
    },
    changeColor(newDogColor) {
        this.color = newDogColor;
        return this.color;
    },
    Dogsummary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}

Object.setPrototypeOf(animalMethods, DogMethods);

let dog = new Dog("Kangra", 4, "Dog", "Brown")

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow

// `

function Cat(location, numberOfLegs, name, color, colorOfEyes) {
    let animalObj = Object.create(DogMethods);
    animalObj.location = location;
    animalObj.numberOfLegs = numberOfLegs;
    animalObj.name = name;
    animalObj.color = color;
    animalObj.colorOfEyes = colorOfEyes;
    return animalObj;
}

let catMethods = {
    Meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeColorOfEyes(newCatColorEye) {
        this.color = newCatColorEye;
        return this.color;
    },
    catSummary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }

}

Object.setPrototypeOf (DogMethods, catMethods);

let cat = new Cat("Kangra", 4, "Cat", "white", "Brown")