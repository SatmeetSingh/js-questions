//   74 	What is the difference between null and

// undefined -  variable has been declared but not yet assigned a value.it represents the absence of a value or an uninitialized state.

let x;
console.log(x);

function doNothing() {}
console.log(doNothing());
typeof undefined; // "undefined"
//  used as the default return value of functions that do not explicitly return a value.

function greet(name) {
  console.log('Hello, ' + name);
}

greet();

// null -  represents the intentional absence of any object value.

let y = null;
console.log(y);

let person = { name: 'Alice', age: null };
console.log(person.age);
typeof null; // "object"(known bug in JavaScript)
// indicate that a variable should be empty or an object reference is missing.
// Used to reset or clear variables and object properties.

// ==
console.log(null == undefined); // Output: true
console.log(null == 0); // Output: false
console.log(undefined == 0); // Output: false

// ===
console.log(null === undefined); // Output: false
console.log(null === null); // Output: true
console.log(undefined === undefined); // Output: true

let car = {
  model: 'Tesla',
  owner: null, // Owner is not assigned yet
};

console.log(car.owner); //  null

console.log(car.color); // undefined(property does not exist)
