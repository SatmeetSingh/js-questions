// 54 	What is a callback function

//  A callback function is another function that is passed as argument to another function
// and is executed after some operation has been completed.

// callbacks are used to handle asynchronous operations like file reading , network requests or timers

// syncronous callback

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Asynchronous Callbacks

function delayedGreeting(name, callback) {
  setTimeout(() => {
    console.log('Hello, ' + name + '!');
    callback();
  }, 2000);
}

function afterGreeting() {
  console.log('This happens after the greeting.');
}

delayedGreeting('Alice', afterGreeting);
