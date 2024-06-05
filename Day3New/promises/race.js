// 65 	What is the purpose of the race method in promise

// Promise.race(iterable);

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, name: 'John Doe' };
      resolve(userData);
    }, 1000);
  });
}

const promise1 = fetchData();
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Timeout')), 2000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log('First promise resolved:', result);
  })
  .catch((error) => {
    console.error('First promise rejected or timed out:', error);
  });

// The main purpose of Promise.race() is to race multiple promises against each other and act based on the first settled promise (resolved or rejected).
