// Q1:- 	What are the possible ways to create objects in JavaScript?

// 1) Object litral
const person = {
  firstName: 'random',
  lastName: 'guy',
  age: 30,
  greet: function () {
    return `Hello, ${this.firstName} ${this.lastName}!`;
  },
};
console.log(person);

// 2) class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greet() {
    return `Hello, ${this.firstName} ${this.lastName}!`;
  }
}

const person1 = new Person('test', 'two', 30);
const person2 = new Person('test', 'zero', 25);
console.log(person1, person2);

// 3)  constructor function
function Person1(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function () {
    return `Hello, ${this.firstName} ${this.lastName}!`;
  };
}
const person3 = new Person1('test', 'one', 22);
console.log(person3);

// Factory functions
function createPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    greet() {
      return `Hello, ${this.firstName} ${this.lastName}!`;
    },
  };
}

const person4 = createPerson('Nishant', 'Kumar', 23);
const person5 = createPerson('Jane', 'Smith', 25);
console.log([person4, person5]);

//  through Object.create()
const createObject = {
  greet: function () {
    return `Hello, ${this.firstName} ${this.lastName}!`;
  },
};

const obj = Object.create(createObject);
obj.firstName = 'Satmeet ';
obj.lastName = 'Singh';
obj.age = 24;
console.log(obj);
console.log(obj.greet());


// through new objects
const person10 = new Object();
person10.name = 'Nishant';
person10.age = 23;
person10.isEmployed = true;

console.log(person10);
