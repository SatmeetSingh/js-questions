// 	What are the main rules of promise

// Promises in JavaScript follow several key rules that govern their behavior and usage.

// When a promise is created using the new Promise() constructor, it starts in the "pending" state. This means that the asynchronous operation associated with the promise has not yet completed.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber); // Resolve with a random number
    } else {
      reject(new Error('Random number is too large')); // Reject with an error
    }
  }, 1000);
});

// states
console.log('Initial State:', myPromise); // Pending state initially

myPromise
  .then((result) => {
    console.log('Fulfilled:', result); // Fulfilled state
  })
  .catch((error) => {
    console.error('Rejected:', error); // Rejected state
  });

// Rule: Promises are designed for handling asynchronous operations. They execute asynchronous code without blocking the main thread.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { id: 1, name: 'Satmeet SIngh' };
      resolve(data);
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log('Fetched Data:', data);
});

//  Promises support chaining using .then() to sequence asynchronous operations.

function processUserData(val) {
  return val;
}

// Promises have built-in error handling using .catch() to handle rejected promises or errors thrown during promise execution.
fetchData()
  .then((data) => {
    console.log('Fetched Data:', data);
    return processUserData(data);
  })
  .then((processedData) => {
    console.log('Processed Data:', processedData);
  })
  .catch((err) => {
    console.log('Error', err);
  });

// Promise All -  promise.all()
// Promise.all() is used to handle multiple promises concurrently, waiting for all of them to fulfill or any one to reject.

const promise1 = fetchData();
const promise2 = processUserData({ id: 1, name: 'Alice' });

Promise.all([promise1, promise2])
  .then((results) => {
    console.log('All promises fulfilled:', results);
  })
  .catch((error) => {
    console.error('One or more promises rejected:', error);
  });
