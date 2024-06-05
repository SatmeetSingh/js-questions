//  Q25:-	What is Hoisting?

//  before  the code runs js moves the declarations of functions and variable to the top of their respective scopes  during compling phase

console.log(sum(2, 3));
console.log(a); // undefined because var is initialised but haven't give a value

function sum(a, b) {
  return a + b;
}

var a = 2; // is Hoisted as well

console.log(b); // because of temporal dead zone
const b = 2;
