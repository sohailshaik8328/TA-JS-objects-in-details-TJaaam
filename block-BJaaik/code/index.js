class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        return `I am ${this.name} my age is ${this.age} my gender is ${this.gender} I ate everyday`;
    }
    sleep() {
        return `I am ${this.name} my age is ${this.age} my gender is ${this.gender} I sleep everyday`;
    }
    walk() {
        return `I am ${this.name} my age is ${this.age} my gender is ${this.gender} I walk everyday`;
    }
}

class Player extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play() {
        return `I am ${this.name} my age is ${this.age} my gender is ${this.gender} I play ${this.sportsName}`;
    }
}

class Teacher extends Person {
    constructor(name, age, gender, instituteName) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach() {
        return `I am ${this.name} my age is ${this.age} my gender is ${this.gender} Am a teacher in ${this.instituteName}`;
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }
    createArt() {
        return `I am ${this.name} my age is ${this.age} my gender is ${this.gender} I am an  ${this.kind}`;
    }
}

class Cricketer extends Player {
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender, sportsName);
        this.teamName = teamName;
    }

    playCricket() {
        return `I am ${this.name} my age is ${this.age} my gender is ${this.gender} and I'll play ${this.sportsName} my team name is ${this.teamName}`;
    }
}

let person = new Person("Arya", 22, "M");

let player = new Player("John", 25, "M", "Table Tennis");

let teacher = new Teacher("Ankit", 28, "M", "AltCampus");

let artist = new Artist("Sohail", 22, "M", "Artist");

let cricketer = new Cricketer("Suraj", 28, "M", "Cricket", "Vikings")