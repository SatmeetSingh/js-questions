// 27 	What are closures

//Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data.

function Closure() {
  let name = 'Satmeet Singh';

  return function () {
    return `My name is ${name}`;
  };
}

const a = Closure();
console.log(a());
// ..............................

function Closure1(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

const closures2 = (x) => (y) => (z) => x * y * z;
console.log(closures2(2)(3)(4));
console.log(Closure1(3)(4)(5));
// ..............................

function memoized(fn) {
  let cache = {};

  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      let result = fn(arg);
      cache[arg] = result;
      return result;
    }
  };
}

function fabriconni(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fabriconni(n - 1) + fabriconni(n - 2);
}

const result = memoized(fabriconni);

console.time();
console.log(result(40));
console.timeEnd();
