// 170 	How do you make asynchronous HTTP request

// fetch api

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Usage
fetchData('https://jsonplaceholder.typicode.com/todos/1');

// async /await
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Usage
fetchData('https://jsonplaceholder.typicode.com/todos/9');

// Axios - install package
// const axios = require('axios');

// function fetchData(url) {
//     axios.get(url)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error("There was a problem with the axios request:", error);
//         });
// }

// // Usage
// fetchData("https://api.example.com/data");
