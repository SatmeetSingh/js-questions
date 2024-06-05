// What is undefined property

// he undefined global property represents the primitive value undefined.

function test(val) {
  if (val === undefined) {
    return 'Undefined Value';
  }
  return val;
}

let a;
console.log(test(a));

// primitive
// When a variable is declared but not initialized, its value is undefined.
//If a function does not return a value  explicitly, it implicitly returns undefined.

let b;
console.log(b);

function doNothing() {
  let c = 10;
}
console.log(doNothing());

function greet(name) {
  console.log('Hello, ' + name);
}

greet(); // missing parameter

// non existant obj properties
const person = { name: 'Alice' };
console.log(person.age);

let e;
if (e === undefined) {
  console.log('a is undefined');
}

if (typeof e === 'undefined') {
  console.log('a is undefined');
}

let x;
if (x === void 0) {
  console.log('a is undefined');
}
