// What is the way to find the number of parameters expected by afunction

// he length property of a function in JavaScript is a useful way to determine the number of formal parameters that the function expects.
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
console.log(sum.length); // 4 is the number of parameters expected.

// no params
function noParams() {
  console.log('No parameters');
}
console.log(noParams.length); // 0

// default
function defaultParams(a, b = 2, c = 3) {
  return a + b + c;
}
console.log(defaultParams.length); // 1

// rest param

function restParams(a, ...args) {
  return a + args.length;
}

console.log(restParams.length);

const arrowFunction = (a, b) => a + b;

console.log(arrowFunction.length);

const anonFunction = function (a, b, c) {
  return a + b + c;
};

console.log(anonFunction.length);

const funcExpr = function (a, b) {
  return a + b;
};

console.log(funcExpr.length);
