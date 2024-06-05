// 71 	What is typeof operator

// the `typeof` operator is used to determine the data type of its operand. It returns the data type as a string.

// typeof operand
// // OR
// typeof (operand)

let x = 42;
let y = 'Hello';
let z = true;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

console.log(typeof [1, 2, 3]);
// Output: "object" (arrays are objects)
console.log(typeof null);
// Output: "object" (a known bug in JavaScript)
console.log(typeof undefined);
// undefined

function greet(name) {
  console.log('Hello, ' + name);
}

console.log(typeof greet);

const sym = Symbol('symbol');
const bigInt = 9007199254740991n;

console.log(typeof sym); // Output: "symbol"
console.log(typeof bigInt); // Output: "bigint"

console.log(typeof Math.LN10 === 'number');
console.log(typeof Infinity === 'number');
console.log(typeof NaN === 'number');
console.log(typeof NaN);
// (NaN is considered a numeric value)
console.log(typeof Number('100') === 'number');

console.log(typeof function () {} === 'function');

//classes too are objects
console.log(typeof class C {} === 'function');
console.log(typeof Math.sin === 'function');
