// Why do you need strict mode

// Strict mode in JavaScript is a way to opt in to a restricted variant of the language, which can help you write more secure, reliable, and error-free code.

// Eliminates Some Js Silent error
// some errors that do not produce runtime errors will produce errors in strict mode, making it easier to identify and fix issues.
'use strict';

undeclaredVar = 42;
// ReferenceError: undeclaredVar is not defined

// Prevents accidental globals
// ('use strict');
function example() {
  myVar = 10; // ReferenceError: myVar is not defined
}
example();

// Strict mode disallows duplicate parameter names in functions, which can help avoid potential confusion and errors.

function sum(a, a, c) {
  // SyntaxError
  return a + a + c;
}

// In strict mode, attempting to assign values to non-writable properties, getters-only properties, or non-existent properties of an object throws an error.

const obj = {};
Object.defineProperty(obj, 'x', { value: 42, writable: false });
obj.x = 9;

// The with statement is not allowed in strict mode, as it can make code harder to understand and maintain.

// In strict mode, this is undefined in functions that are called without an object context, instead of being the global object, which can prevent some common mistakes.

function logThis() {
  console.log(this); // undefined
}
logThis();
