# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// Using function

```js
function createProject(name, id, noOfProjects = 1) {
  let project = {}
  project.name = name;
  project.id = id;
  project.noOfProjects = noOfProjects;

  project.getProjects = function() {
    return project.noOfProjects;
  }

  project.changeName = function(newName) {
    let prevName = project.name;
    project.name = newName;
    return prevName
  }

  project.incrementProject = function() {
    project.noOfProjects += 1;
    return project.noOfProjects
  }

   project.decrementProject = function() {
    project.noOfProjects -= 1;
    return project.noOfProjects
  }

  return project;
  
}

let project1 = createProject("Sohail", 1, 9);
let project2 = createProject("Arya", 2, 6);

console.group("User1");
console.log(`name : ${project1.name}`);
console.log(`id : ${project1.id}`);
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project1.incrementProject());
console.log(project1.decrementProject());
console.log(project1.changeName("John"));
console.log(project1.name);
console.groupEnd();

console.group("User2");
console.log(`name : ${project1.name}`);
console.log(`id` : ${project1.id});
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project2.incrementProject());
console.log(project2.decrementProject());
console.log(project2.changeName("Stark"));
console.log(project2.name);
console.groupEnd();

```
//Using Prototypical Pattern

```js
let projectMethods = {

   getProjects : function() {
    return this.noOfProjects;
  },

  changeName : function(newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },

  incrementProject : function() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },

  decrementProject : function() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }

}

function createProject(name, id, noOfProjects) {
  let project = Object.create(projectMethods);
  project.name = name;
  project.id = id;
  project.noOfProjects = noOfProjects;

  return project;
}

let project1 = createProject("Sohail", 1, 9);
let project2 = createProject("Arya", 2, 6);

console.group("User1");
console.log(`name : ${project1.name}`);
console.log(`id : ${project1.id}`);
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project1.incrementProject());
console.log(project1.decrementProject());
console.log(project1.changeName("John"));
console.log(project1.name);
console.groupEnd();

console.group("User2");
console.log(`name : ${project1.name}`);
console.log(`id : ${project1.id}`);
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project2.incrementProject());
console.log(project2.decrementProject());
console.log(project2.changeName("Stark"));
console.log(project2.name);
console.groupEnd();

```

// Using PseudoCalssical Way

```js
function createProject(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

createProject.prototype = {

  getProjects : function() {
    return this.noOfProjects;
  },

  changeName : function(newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },

  incrementProject : function() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },

  decrementProject : function() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}

let project1 = new createProject("Sohail", 1, 9);
let project2 = new createProject("Arya", 2, 6);

console.group("User1");
console.log(`name : ${project1.name}`);
console.log(`id : ${project1.id}`);
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project1.incrementProject());
console.log(project1.decrementProject());
console.log(project1.changeName("John"));
console.log(project1.name);
console.groupEnd();

console.group("User2");
console.log(`name : ${project1.name}`);
console.log(`id : ${project1.id}`);
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project2.incrementProject());
console.log(project2.decrementProject());
console.log(project2.changeName("Stark"));
console.log(project2.name);
console.groupEnd();
```

// Using class Pattern

```js
class project {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects() {
    return this.noOfProjects;
  }

  changeName(newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  }

  incrementProject() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  }

  decrementProject() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}


let project1 = new project("Sohail", 1, 9);
let project2 = new project("Arya", 2, 6);

console.group("User1");
console.log(`name : ${project1.name}`);
console.log(`id : ${project1.id}`);
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project1.incrementProject());
console.log(project1.decrementProject());
console.log(project1.changeName("John"));
console.log(project1.name);
console.groupEnd();

console.group("User2");
console.log(`name : ${project1.name}`);
console.log(`id : ${project1.id}`);
console.log(`noOfProjects : ${project1.noOfProjects}`);
console.log(project2.incrementProject());
console.log(project2.decrementProject());
console.log(project2.changeName("Stark"));
console.log(project2.name);
console.groupEnd();
```

