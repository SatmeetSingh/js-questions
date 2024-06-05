// 55 	Why do we need callbacks

// Handling Asynchronous Operations
// JavaScript is single-threaded, meaning it can only do one thing at a time. To perform time-consuming tasks like I/O operations (e.g., network requests, file reading), callbacks allow the program to continue executing other code while waiting for these operations to complete.

// const data = readFileSync('file.txt');
// console.log(data);
// console.log('This happens after the file is read');

// Non-Blocking Code
// Callbacks enable non-blocking code execution, meaning that the program can perform other tasks while waiting for an operation to complete. This is crucial for maintaining responsiveness in applications, especially in environments like web browsers where blocking the main thread would freeze the user interface.

//Event Handling
// Callbacks are used extensively for event handling. In web development, many interactions (like clicks, form submissions, and key presses) are handled using callbacks.

// document.getElementById('myButton').addEventListener('click', () => {
//   console.log('Button was clicked!');
// });

// Flexibility and Customization
// Callbacks provide flexibility and allow customization of behavior. A function can accept a callback to determine what action to take after completing its main task, making the code more modular and reusable

function taskDone(task, callback) {
  console.log(`{DOing ${task}...}`);
}

function onTaskDone() {
  console.log('Task completed!');
}

taskDone('laundry', onTaskDone);

// Composition of Asynchronous Tasks
// Callbacks can be used to compose complex asynchronous workflows by chaining multiple asynchronous operations together.

function step1(callback) {
  setTimeout(() => {
    console.log('Step 1 completed');
    callback();
  }, 2000);
}

function step2(callback) {
  setTimeout(() => {
    console.log('Step 2 completed');
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log('Step 3 completed');
    callback();
  }, 3000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log('All steps completed');
    });
  });
});
