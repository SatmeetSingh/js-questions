// 30 	What is scope in javascript

// - refer to accessibility of variavles, function and objects in araious parts of code

// global Scope and local Scope
//  Global Scope - variable declared in global scene - accessible to anu part of code even insde the function

var globalVar = 'I am Global';

function printVar() {
  console.log(globalVar);
}

printVar();
console.log(globalVar);

// local Scope -  varaible declared inside a function or block have local scope -only accessible to certain function

//  - function scope - varible declared inside a function and not acccesible outside the function

function myFunction() {
  var functionScopedVar = 'I am local to the function ';
  console.log(functionScopedVar);
}
myFunction();
// console.log(functionScopedVar);

// Block scope - variable with in the block like(if statement or loop)- using let , const

if (true) {
  let blockScopeVar = ' I am local to the block';
  console.log(blockScopeVar);
}

console.log(blockScopeVar);

//scope chain
// When a variable is referenced, JavaScript starts looking for the variable in the current scope. If it’s not found, it moves up to the outer scope, and this process continues until the variable is found or the global scope is reached.

var globalVar = 'global';

function outerFunction() {
  var outerVar = 'outer';

  function innerFunction() {
    var innerVar = 'inner';
    console.log(globalVar); // Accessible
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }

  innerFunction();
  console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();

//Minimize Global Variables
// Use let and const:
