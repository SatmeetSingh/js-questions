// 56 	What is a callback hell

// When you have multiple levels of nested callbacks, the code can become difficult to read and maintain. This problem is known as "callback hell" or the "pyramid of doom"

// function task1(callback) {
//   setTimeout(() => {
//     console.log('Task 1 completed');
//     callback();
//   }, 1000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log('Task 2 completed');
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log('Task 3 completed');
//     callback();
//   }, 1000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log('Task 4 completed');
//     callback();
//   }, 1000);
// }

// function task5(callback) {
//   setTimeout(() => {
//     console.log('Task 5 completed');
//     callback();
//   }, 1000);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         task5(() => {
//           console.log('All tasks completed');
//         });
//       });
//     });
//   });
// });

// To avoid deeply nested callbacks, you can use modern JavaScript features like Promises and async/await.

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task1 is completed');
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task2 is completed');
      resolve();
    }, 1000);
  });
}
function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task3 is completed');
      resolve();
    }, 1000);
  });
}
function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task4 is completed');
      resolve();
    }, 1000);
  });
}

task1()
  .then(task2)
  .then(task3)
  .then(task4)
  .then(() => {
    console.log('All Task is completed');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// async function runTasks() {
//   try {
//     await task1();
//     await task2();
//     await task3();
//     await task4();
//     console.log('All tasks completed');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// runTasks();
