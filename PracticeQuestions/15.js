// Q15:-	What is the currying function?

//curring - transforms the function of multiple arguments into several functions of a single argument in sequence.
//Currying helps you avoid passing the same variable multiple times,
// It helps to create a higher order function.

// curring function
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(4)(5)(6));

const a = calculateVolume(3);
const b = a(4);
console.log(b(6));

// simple function
function calculateVolume1(length, breadth, height) {
  return length * breadth * height;
}
console.log(calculateVolume1(4, 5, 6));

function sum(num1) {
  return function (num2) {
    if (!num2) {
      return num1;
    }
    return sum(num1 + num2);
  };
}
console.log('Sum :', sum(1)(2)(3)(4)(5)(6)(7)(8)(9)());
