// 63 	What is promise chaining

// Promise chaining is a technique in JavaScript where multiple asynchronous operations are sequenced together using promises.

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, name: 'John Doe' };
      resolve(userData);
    }, 1000);
  });
}

function updateProfile(userData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      userData.updatedAt = new Date();
      resolve(userData);
    }, 1000);
  });
}

fetchUserData()
  .then((userData) => {
    console.log('Fetched Data:', userData);
    return updateProfile(userData);
  })
  .then((updatedUserData) => {
    console.log('Updated Profile:', updatedUserData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
