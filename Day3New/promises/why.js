// 52 	Why do you need a promise

// Readability and Maintainability:

// Promises provide a more readable and organized way to handle asynchronous code compared to deeply nested callbacks. This improves code maintainability and reduces the likelihood of callback hell.

// Sequencing Operations:
// Promises allow you to sequence asynchronous operations in a clear and structured manner using .then() chaining. This makes it easier to understand the flow of asynchronous tasks.

// Error Handling:

// Promises have built-in error handling through the .catch() method, making it straightforward to manage errors in asynchronous operations. This improves code robustness and reduces the chance of unhandled exceptions.

// Avoiding Callback Hell:

// Using promises helps avoid callback hell, a situation where multiple nested callbacks make code difficult to read, understand, and maintain. Promises promote a more linear and manageable code structure.

// Promises provide control over the asynchronous flow of operations, allowing you to initiate tasks and handle their completion or failure in a structured manner.

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, username: 'john_doe' };
      resolve(userData);
    }, 1000);
  });
}

function fetchAdditionalData(userData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const additionalData = { email: 'john@example.com', status: 'active' };
      resolve(additionalData);
    }, 1000);
  });
}

fetchUserData()
  .then((userData) => {
    console.log('User Data:', userData);
    return fetchAdditionalData(userData);
  })
  .then((additionalData) => {
    console.log('Additional Data:', additionalData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
