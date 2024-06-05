// 62 	What is callback in callback

// A "callback in callback" refers to a situation where one callback function is nested inside another callback function.

// why use
// To ensure that an asynchronous task starts only after a previous one has completed.

//When the result of one asynchronous operation is needed for the next operation.

function firstTask(callback) {
  setTimeout(() => {
    console.log('First task completed');
    callback();
  }, 1000);
}

function secondTask(callback) {
  setTimeout(() => {
    console.log('Second task completed');
    callback();
  }, 1000);
}

function thirdTask(callback) {
  setTimeout(() => {
    console.log('Third task completed');
    callback();
  }, 1000);
}

// Using callbacks in callbacks to execute tasks sequentially
firstTask(() => {
  secondTask(() => {
    thirdTask(() => {
      console.log('All tasks completed');
    });
  });
});
