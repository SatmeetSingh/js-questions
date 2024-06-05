// What is a promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promises are designed for handling asynchronous operations. They allow you to work with code that takes time to complete

// A promise can be in one of three states: pending (initial state), fulfilled (operation completed successfully), or rejected (operation failed).

// Promises support chaining, which allows you to sequence asynchronous operations in a more readable and manageable way.

// Promises have built-in mechanisms for error handling through .catch() and .then() methods, making it easier to manage errors in asynchronous code.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error('Random number is too large'));
    }
  }, 1000); // Simulating asynchronous operation
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    // Simulating fetching user data from an API
    setTimeout(() => {
      const userData = { name: 'Alice', age: 30 };
      resolve(userData);
    }, 3000);
  });
};

console.log(typeof fetchUserData, 'jjj');
fetchUserData()
  .then((userData) => {
    console.log('User data:', userData);
    return fetchUserData();
  })
  .then((userData) => {
    console.log('Second fetch:', userData);
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  });
