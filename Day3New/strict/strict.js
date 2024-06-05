// 66 	What is a strict mode in javascript

// javaScript's strict mode is a way to opt in to a restricted variant of JavaScript

// 'use strict'; //  -  strict mode for entire script

var x = 3;
console.log(x);
// variable = 10; // ReferenceError: variable is not defined - strict mode

// in function
function Vaar() {
  'use strict';
  var y = 3.14;
  varr = 10;
}
// Vaar();

function strictFunction() {
  'use strict';
  function nested() {
    return 'And so am I!';
  }
  return `Hi ! i'm a strict mode function ! ${nested()}`;
}

strictFunction();

// The entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it

// function myStrictFunction() {
//   // because this is a module, I'm strict by default
// }
// export default myStrictFunction;

// All parts of a class's body are strict mode code, including both class declarations and class expressions.

// changes converting mistakes into errors (as syntax errors or at runtime)
// changes simplifying how variable references are resolved
// changes simplifying eval and arguments
// changes making it easier to write "secure" JavaScript
// changes anticipating future ECMAScript evolution.

// delete Object.prototype; // TypeError
// delete [].length; // TypeError

var x;
// delete x; // syntax error

// the name is a configurable global property, prefix it with globalThis to delete it.

// delete globalThis.x;

// n strict mode, duplicate argument names are a syntax error
// function sum(a, a, c) {
//   // syntax error
//   'use strict';
//   return a + a + c; // wrong if this code ran
// }

// ('use strict');
// const sum =
//   015 + // syntax error
//   197 +
//   142;

// The standardized way to denote octal literals is via the 0o prefix.
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal);

// false.true = ''; // TypeError
// (14).sailing = 'home'; // TypeError
// 'with'.you = 'far away'; // TypeError

function f(a) {
  'use strict';
  a = 42;
  return [a, arguments[0]]; // [42, 17]
}
const pair = f(17);
console.log(pair[0] === 42);
console.log(pair[1] === 17);
