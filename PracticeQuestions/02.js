// Q2:- 	What is a prototype chain?

// In JavaScript, objects can have a prototype, which is another object from which they inherit properties and methods.

// The prototype chain is a series of linked objects where each object has a reference to its prototype.

// Define a prototype object
class Animal {
  constructor(type) {
    this.type = type;
  }
  eat() {
    return 'Eating...';
  }
}
const animal = new Animal('animal');
console.log(animal);
// Create an object that inherits from the prototype
const dog = Object.create(animal);
console.log(dog);
dog.breed = 'Golden Retriever';

// Access properties and methods
console.log(dog.breed);
console.log(dog.type);
// Output: 'Animal' (inherited from prototype)
console.log(dog.eat());
// Output: 'Eating...' (inherited method)

class Person {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  greet() {
    return `Hello, ${this.firstName} ${this.lastName}!`;
  }
}

const person = new Person('guy', 'one', 23);
console.log(person);

const Nishant = Object.create(person);
Nishant.firstName = 'Nishant';
Nishant.lastName = 'Kumar';
console.log(Nishant);

console.log(Nishant.greet());
