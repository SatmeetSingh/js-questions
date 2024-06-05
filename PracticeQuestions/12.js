// Q12:-	What is a first order function?

//  first-order function is a function that is not a higher-order function.
// higher-order function is a function that takes one or more functions as arguments, or returns a function as its result

// this is first oreder function
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 4));

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(2, 4));
