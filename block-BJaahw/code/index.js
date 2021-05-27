// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name, age) {
    let obj = {}
    obj.name = name;
    obj.age = age;
    
    return obj;
};

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
createUser.sayHello = function () {
    alert(`Welcome ${obj.name}`)
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

// let personOne = createUser("Sohail", 22)
// let personTwo = createUser("Arya", 26)

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

let methods = {
    sayHello(){
        alert(`Welcome ${this.name}`)
    }
}
function createUser(name, age) {
    let obj = Object.create(methods);
    obj.name = name;
    obj.age = age;
    
    return obj;
};


// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function createUser(name, age) {
    this.name = name;
    this.age = age;
};
createUser.prototype = {
    sayHello(){
        alert(`Welcome ${this.name}`)
    }
}




// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
 personOne = new createUser("Sohail", 22)
 personTwo = new createUser("Arya", 26)

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello()

// 8. Convert the `createUser` function into `User` class.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello(){
        alert(`Welcome ${this.name}`)
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
personOne = new createUser("Sohail", 22)
personTwo = new createUser("Arya", 26)

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello()
personTwo.sayHello()
