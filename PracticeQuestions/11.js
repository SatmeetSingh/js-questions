// Q11:- 	What is a first class function?

// 1// Assigned to variables
// 2// Passed as arguments to other functions
// 3// Returned from other functions
// 4// Stored in data structures (like arrays or objects
// in js All functions are first-class functions
// Example of a first-class function (also a first-order function)
function add(a, b) {
  return a + b;
}

// Example of using a first-class function
const operation = add;

// Function taking a function as an argument
function executeOperation(operation, a, b) {
  return operation(a, b);
}

// Passing a function as an argument
const result = executeOperation(operation, 5, 3);
console.log(result); // Output: 8
