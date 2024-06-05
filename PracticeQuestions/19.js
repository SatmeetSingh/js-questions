//  Q19:-	What is the reason to choose the name let as a keyword?

// Keywords in JavaScript are a set of reserved words that cannot be used as names of functions, labels, or variables as they are already a part of the syntax of JavaScript.
//  Each of the keywords has its own meaning. They are generally used in executing internal operations.

// 1) declare block-scoped let variable

if (true) {
  let x = 20;
  console.log(x); // 20
}
// console.log(x);
// ReferenceError: x is not defined

//  Also incase of hoisting

// console.log(val); // undefined (due to var hoisting)
// var val = 10;

// console.log(cal); // ReferenceError: Cannot access 'b' before initialization
// let cal = 20;

// eg
function example() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log('var:', i);
    }, 100);
  }
  // var overwrite previous value
  // Output: var: 3, var: 3, var: 3

  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log('let:', j);
    }, 100);
  }
  // let create new j for each loop
  // Output: let: 0, let: 1, let: 2
}

example();
