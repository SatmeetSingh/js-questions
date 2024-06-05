//  Q14:-	What is a unary function?

// that takes exactly one argument
// produce single output
// often pure

// Unary function to square a number
function square(x) {
  return x * x;
}

// Using the unary function
let result = square(5); // Result is 25

function add(x) {
  return x + x;
}
console.log(add(5));

function unaryFunc(param) {
  console.log(param * 33);
}
unaryFunc(5);
unaryFunc(3);
