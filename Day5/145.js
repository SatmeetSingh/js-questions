// 145 	What are the benefits of keeping declarations at the top

//  Readability and Maintainability
// Placing declarations at the top helps in logically organizing your code. When all variables and functions are declared at the beginning, it is easier for someone reading the code to understand what variables and functions are available and how they are used.

// Avoiding Hoisting Issues

// Preventing Reference Errors -  Declaring variables at the top ensures that all variables are defined before they are used. This prevents issues related to accessing variables before they are declared, which can lead to reference errors.

//Predictability: Consistent declaration placement leads to more predictable code behavior, reducing bugs and making the code easier to debug.

// without top declaration
function process(data) {
  result = data * 2;
  console.log(result);
  var result; // Declaration is hoisted, but initialization is not
}

process(5); // Output: 10, but it's less clear

//with top declarations
function process1(data) {
  var result;
  result = data * 2;
  console.log(result);
}

process1(5);

function process2(data) {
  let result;
  result = data * 2;
  console.log(result);
}

process2(5);
