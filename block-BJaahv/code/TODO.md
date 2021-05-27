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
    return newName = project.name;
  }

  project.incrementProject = function(value) {
    return value += project.noOfProjects;
  }

   project.decrementProject = function(value) {
    return value -= project.noOfProjects;
  }

  return project;
  
}

let project1 = createProject("Sohail", 1, 9);
let project2 = createProject("Arya", 2, 6);

```
//Using Prototypical Pattern

```js
let projectMethods = {

  project.getProjects = function() {
    return project.noOfProjects;
  }

  project.changeName = function(newName) {
    return newName = project.name;
  }

  project.incrementProject = function(value) {
    return value += project.noOfProjects;
  }

   project.decrementProject = function(value) {
    return value -= project.noOfProjects;
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

```

// Using PseudoCalssical Way

```js
function createProject(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

createProject.prototype = {

  project.getProjects = function() {
    return this.noOfProjects;
  }

  project.changeName = function(newName) {
    return newName = this.name;
  }

  project.incrementProject = function(value) {
    return value += this.noOfProjects;
  }

   project.decrementProject = function(value) {
    return value -= this.noOfProjects;
  }
}

let project1 = new createProject("Sohail", 1, 9);
let project2 = new createProject("Arya", 2, 6);
```

// Using class Pattern

```js
class project {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

    project.getProjects = function() {
    return this.noOfProjects;
  }

  project.changeName = function(newName) {
    return newName = this.name;
  }

  project.incrementProject = function(value) {
    return value += this.noOfProjects;
  }

   project.decrementProject = function(value) {
    return value -= this.noOfProjects;
  }
}

let project1 = new createProject("Sohail", 1, 9);
let project2 = new createProject("Arya", 2, 6);
```

