// chaining

// function traceValue(someParam) {
//   return condition1
//     ? value1
//     : condition2
//     ? value2
//     : condition3
//     ? value3
//     : value4;
// }

// // The above conditional operator is equivalent to:

// function traceValue(someParam) {
//   if (condition1) {
//     return value1;
//   } else if (condition2) {
//     return value2;
//   } else if (condition3) {
//     return value3;
//   } else {
//     return value4;
//   }
// }

// eg -

const ft = (m, n) => {
  return m === 0
    ? n + 1
    : m > 0 && n === 0
    ? ft(m - 1, 1)
    : m > 0 && n > 0 && ft(m - 1, ft(m, n - 1));
};

console.log(ft(3, 1));
