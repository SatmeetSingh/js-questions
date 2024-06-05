// 53 	What are the three states of promise

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber); // Resolve with a random number
    } else {
      reject(new Error('Random number is too large')); // Reject with an error
    }
  }, 2000);
});

// Log the initial state of the promise
console.log('Initial State:', myPromise);

// Handling promise states
myPromise
  .then((result) => {
    console.log('Fulfilled:', result); // Successfully resolved
  })
  .catch((error) => {
    console.error('Rejected:', error); // Rejected due to error
  });

// Log the state after attaching handlers
console.log('State after attaching handlers:', myPromise);
