// 69 	What is the purpose of double exclamation

// The double exclamation mark (!!) in JavaScript is often used as a shorthand technique to convert a value into its corresponding boolean representation

// true or false based on its truthy or falsy nature.

let str = '';
let boolValue = !!str; // Converts `str` to its boolean representation
console.log(boolValue); // Output: false

let num = 42;
boolValue = !!num;
console.log(boolValue); // Output: true

let obj = {};
boolValue = !!obj;
console.log(boolValue); // Output: true

let nil = null;
boolValue = !!nil;
console.log(boolValue); // Output: false

// Alternative to !!
let num1 = 42;
boolValue = Boolean(num1);
console.log(boolValue);

// Falsy
// Empty string: ""
// 0
// null
// undefined
// NaN

//  truthys
// Object: {}
// Array: []
// Not empty string: "anything"
// Number other than zero: 3.14
// Date: new Date();
