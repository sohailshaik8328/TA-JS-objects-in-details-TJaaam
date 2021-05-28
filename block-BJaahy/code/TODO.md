# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square {
    constructor(side) {
        this.side = side;
    }

    set width(width) {
        return width;
    }

    set height(height) {
        return height;
    }
}
```

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square {
    constructor(side) {
        this.side = side;
    }

    set width(width) {
        return width;
    }

    set height(height) {
        return height;
    }

    description() {
        alert(`The square is ${width} * ${height}`)
    }
}
```

- Create a method inside the class named `calcArea` that will return the area of the square.

```js
class CalcArea {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    areaOfSquare() {
        return width * height;
    }
}

```
- Create a `area` getter method using which we can get the area of the square.
```js
class CalcArea {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get areaOfSquare() {
        return width * height;
    }
}
```

- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

```js
class CalcArea {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set area(area) {
        return area = this.width * this.height;
        if(this.width * this.height !== area) {
            alert(`Not a valid input`);
        }
    }

    get areaOfSquare() {
        return this.width * this.height;
    }
}
```

- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

```js
class CalcSquare {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    static isEqual() {
        if(square1 === square2) {
            return true;
        }
    }

    square() {
        return this.width * this.height;
    }
}
let square1 = new CalcSquare(200, 400)
let square2 = new CalcSquare(200, 400)
```

- Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`
```js
class CalcSquare {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    static isEqual() {
        if(square1 === square2) {
            return true;
        }
    }

    square() {
        return this.width * this.height;
    }

    numberOfTimes(times = 0) {
        if(times > 4) {
            alert(`Upper Limit Reached`)
        }
    }
}
let square1 = new CalcSquare(200, 400)
let square2 = new CalcSquare(200, 400)
```

- Create two instance of the `Square` class

```js
let squareOne = new Square(20, 30);
let squareTwo = new Square(40, 60);

```
- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
```js
let squareOne = new Square(20, 30);
let squareTwo = new Square(40, 60);
let squareThree = new Square(20, 30);
let squareFour = new Square(40, 60);

```


- Check the `isEqual` method and pass the two instance you created above.
```js
CalcSquare.isEqual()

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
        fullname = this.firstName + this.lastName;
        if(fullname.length < 5) {
            alert(`Full name should be more than 5 characters`);
        }
        return fullname;
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
        fullname = this.firstName + this.lastName;
        if(fullname.length < 5) {
            alert(`Full name should be more than 5 characters`);
        }
        return fullname;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    nameContains(str) {
        this.firstName + this.lastName = str
        str === "string"
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
