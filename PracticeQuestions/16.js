// Q16:-	What is a pure function?
// the function return values are identical for identical arguments

function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

function greet(name) {
  return `Hello, ${name}!`;
}

//  impure
var addNew = Math.random();

function add(a, b) {
  return a + b + addNew;
}

console.log(add(4, 5));
