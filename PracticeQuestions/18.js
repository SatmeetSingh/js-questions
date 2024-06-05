// Q18:-	What is the difference between let and var?

// var declares properties on the global object in the global scope; let does not.

var ab = 10;
console.log(window.ab); // 10

let bs = 10;
console.log(window.bs); // undefined

// 1) scope
function exampleVar1() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}
exampleVar1();

function exampleLet() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Error
}
exampleLet();

// 2) hoisting
// hoisted and initialized
console.log(a); // undefined
var a = 3;

// hoisted and not initialized
console.log(b); // Cannot access 'b' before initialization - error
let b = 3;

// 3) redeclaration

// eg
var a = 3;
var a = 4;
console.log(a); // 4

// let c = 10;
// let c = 20; // syntax error
// Tempotal dead zone in let

// loop
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); //result -  3, 3, 3
  }, 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j); //result - 0, 1, 2
  }, 100);
}
