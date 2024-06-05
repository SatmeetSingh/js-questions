// 75 	What is eval

// eval() function evauates js code represented a string and return its completion value

console.log(eval('2+2'));
console.log(eval('2-2'));
console.log(eval('2/2'));
console.log(eval('2*2'));
console.log(eval(new String('2 + 2')));
console.log(eval('2+2') === eval('4'));
console.log(eval('2+2') === eval(new String('2 +2')));

// const eval = 1;

const geval = eval;
console.log(geval('2 + 4'));

const value = new String('2 + 2');
console.log(eval(String(value)));

function strictContext() {
  'use strict';
  eval?.(`with (Math) console.log(PI);`);
}
function strictContextStrictEval() {
  'use strict';
  eval?.(`"use strict"; with (Math) console.log(PI);`);
}
strictContext(); // Logs 3.141592653589793
// strictContextStrictEval();
//Throws a SyntaxError because the source string is in strict mode

// eval('var a = 1;');
// console.log(a);

// eval("'use strict'; var b = 1;");
// console.log(b);

function strictContext() {
  'use strict';
  // string is not strict, so c is still global
  eval?.('var c = 1;');
  // Direct eval in a strict context, so d is scoped
  eval('var d = 1;');
}
strictContext();
console.log(c); // 1
// console.log(d); // not defined

// never use direct eval

function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse('{ a: 4 - 1, b: function () {}, c: new Date() }'));

//
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse('{ a: 4 - 1, b: function () {}, c: new Date() }'));

const str = 'if (a) { 1 + 1 } else { 1 + 2 }';
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3

let x = 5;
const str1 = `if (x === 5) {
  console.log("z is 42");
  z = 42;
  x = 420;
} else {
  z = 0;
}`;

console.log('x is ', eval(str1)); // z is 42  z is 42
