// 28 	What are modules

// module is chunk of external code that performs certain tasks . its a seperate entity with in the program.

// JavaScript modules are a way to organize and encapsulate code into separate files or pieces, making it easier to maintain and reuse. They allow you to export and import functions, objects, or primitive values from one module to another.

// Encapsulation is a way to restrict the direct access to some components of an object

// Native JavaScript Modules
//  import: use to read code exported from another module
// export - Used to provide code to other modules

// Named Exports
export function add(a, b) {
  console.log(a + b);
}
export function subtract(a, b) {
  console.log(a - b);
}

export default function log(message) {
  console.log(message);
}

// function log(message) {
//   console.log(message);
// }

// export default log;

// CommonJs  modules
// module.exports = function sum(a, b) {
//   return a + b;
// };

// // math.js
// function add1(a, b) {
//   return a + b;
// }

// function subtract1(a, b) {
//   return a - b;
// }

// module.exports = {
//   add1,
//   subtract1,
// };
