// What are the recommendations to create new object

// object literals -For most cases, especially when you need a single object or a small number of objects, use object literals.
const obj = {
  name: 'Alice',
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

obj.greet();

// new Keyword with Constructors
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Bob', 30);
console.log(person1.name); // Bob

// Object.create -  When you need to set up prototypal inheritance manually, Object.create is a good choice.
const proto = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const obj1 = Object.create(proto);
obj1.name = 'Charlie';
obj1.greet();

// class - When creating objects with methods and properties that need to be inherited, ES6 classes provide a clear and efficient way.
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person1('Dave', 40);
person2.greet(); // Hello, my name is Dave

// spread - ES6 spread and rest properties are handy for creating new objects based on existing one

const person4 = {
  name: 'Frank',
  age: 45,
};

const person5 = {
  ...person4,
  city: 'New York',
};

console.log(person5);
