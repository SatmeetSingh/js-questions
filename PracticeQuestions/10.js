// Q10:- 	What are lambda expression or arrow functions?

// concise way to write anonymous functions,

const add = (a, b) => a + b;

const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('Satmeet'));

// doesn't have  this context
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: () => `${this.firstName} ${this.lastName}`,
};

console.log(person.fullName());
