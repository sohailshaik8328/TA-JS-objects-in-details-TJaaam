# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
}
```

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }
}
```



- Create a method inside the class named `calcArea` that will return the area of the square.

```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return  this.width * this.height;
    }
}
```
- Create a `area` getter method using which we can get the area of the square.

```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return  this.width * this.height;
    }

    get area() {
        return  this.width * this.height;
    }
}
```

- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return  this.width * this.height;
    }

    get area() {
        return  this.width * this.height;
    }

    set area(areaSquare) {
        let side = Math.sqrt(areaSquare);
        this.width = side;
        this.height = side;
    }
}
```

- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return  this.width * this.height;
    }

    get area() {
        return  this.width * this.height;
    }

    set area(areaSquare) {
        let side = Math.sqrt(areaSquare);
        this.width = side;
        this.height = side;
    }

    static isEqual(a, b) {
        return (a.width * a.height) === (b.width * b.height);
    }
}
```

- Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
        this.noOfTimes = 0;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return  this.width * this.height;
    }

    get area() {
        this.noOfTimes++;
        if(this.noOfTimes > 4) {
            alert(`Upper Limit Reached`);
        } else {
            return this.width * this.height;
        }
    }

    set area(areaSquare) {
        let side = Math.sqrt(areaSquare);
        this.width = side;
        this.height = side;
    }

    static isEqual(a, b) {
        return a.area === b.area;
    }
}
```

- Create two instance of the `Square` class

```js
let squareOne = new Square(200);
let squareTwo = new Square(400);
```
- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
```js
let squareOne = new Square(20, 30);
let squareOne = new Square(20, 30);
let squareOne = new Square(20, 30);
let squareOne = new Square(20, 30);
let squareOne = new Square(20, 30);
```


- Check the `isEqual` method and pass the two instance you created above.
```js
Square.isEqual(squareOne, squareTwo);
```
## User Class

- Create a `User` class that accepts `firstName` and `lastName` property
```js
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

```
- Create a getter method named `fullName` that will return the full name of the person.
```js
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

```

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
```js
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullName(fullname) {
          if(fullname.length < 5) {
            alert(`Full name should be more than 5 characters`);
        } else {
            let firstName = fullname.split(" ")[0];
            let lastName = fullname.split(" ")[1];

            this.firstName = firstName;
            this.lastName = lastName;
        } 
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

```


- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
```js
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullName(fullname) {
          if(fullname.length < 5) {
            alert(`Full name should be more than 5 characters`);
        } else {
            let firstName = fullname.split(" ")[0];
            let lastName = fullname.split(" ")[1];

            this.firstName = firstName;
            this.lastName = lastName;
        } 
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    nameContains(str) {
        return `${this.firstName} ${this.lastName}`.includes(str);
    }
}

```
- Create two instance of the `User` class

```js
let user1 = new User("Ar", "St");
let user2 = new User("Sohail", "Shaik");

```
- Check by using the `fullName` setter method with name bigger than 5 characters.

```js
user1.fullName();
user2.fullName();
```

- Check by using the `fullName` setter method with name less than 5 characters.
```js
user1.fullName();
user2.fullName();

```

- Check the `fullName` using getter
```js
user1.fullName();
user2.fullName();

```

- Check the `nameContains` method
```js
user1.nameContains();
user2.nameContains();
```
