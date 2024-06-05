// Q13:-	What is a higher order function?
// that takes functions as arguments or return function as result such as callbacks

// eg;-  map function
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((num) => num * num);

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

//
const subtract = function (a, b) {
  return a - b;
};

function Order(c, d, operation) {
  return operation(c, d);
}

console.log(Order(2, 4, subtract));
