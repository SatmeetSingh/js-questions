// 64 	What is promise.all

// Promise.all() is a method in JavaScript that takes an iterable (such as an array or a promise-like object) containing multiple promises as input and returns a single promise.

// Promise.all(iterable);

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, name: 'John Doe' };
      resolve(userData);
    }, 1000);
  });
}

function processUserData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

const promise1 = fetchData();
const promise2 = processUserData({ id: 1, name: 'Alice' });

Promise.all([promise1, promise2])
  .then((results) => {
    console.log('All promises fulfilled:', results);
  })
  .catch((error) => {
    console.error('One or more promises rejected:', error);
  });

const promise = Promise.resolve(42); // Resolved promise with value 42
const promis1 = 'Hello'; // Non-promise value

Promise.all([promise, promis1])
  .then((results) => {
    console.log('All promises fulfilled:', results); // [42, 'Hello']
  })
  .catch((error) => {
    console.error('One or more promises rejected:', error);
  });

//   Parallel Asynchronous Operations: Execute multiple asynchronous operations concurrently and wait for all of them to complete.
// Fetching Data from Multiple Sources: Fetch data from different APIs or sources and process them collectively.
// Batch Processing: Perform batch operations where multiple tasks need to be completed before proceeding.
