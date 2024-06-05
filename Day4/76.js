// 76	What is the difference between window and document

//The Document object is the HTML document that appears in the browser window and serves as an interface for interacting with the web page’s content

// he Window object is a global object in client-side JavaScript, representing the browser window containing a DOM document and acting as the root of the document object model.

// ........................................................
// polling -Polling is a common technique used to repeatedly check a condition or resource at regular intervals. In JavaScript, setInterval is typically used for this purpose. Polling can be useful for checking the status of a network request, monitoring changes, or querying a server for updates. However, it’s important to handle the maximum number of attempts and potential errors to avoid infinite loops or unnecessary network traffic.

// function checkCondition() {
//   // Simulate checking a condition
//   const conditionMet = Math.random() > 0.9; // Randomly returns true 20% of the time
//   return conditionMet;
// }

// function poll(fn, callback, interval = 500, maxAttempts = 10) {
//   let attempts = 0;

//   const intervalId = setInterval(() => {
//     attempts++;
//     if (fn()) {
//       clearInterval(intervalId);
//       callback(null, 'Condition met');
//     } else if (attempts >= maxAttempts) {
//       clearInterval(intervalId);
//       callback(new Error('Max attempts reached'), null);
//     }
//   }, interval);
// }

// poll(checkCondition, (err, result) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log(result);
//   }
// });
