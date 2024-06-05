// setTimeout

const data = {
  name: 'GeeksforGeeks',
  greet: function (message) {
    console.log(message + ', ' + this.name + '!');
  },
};

setTimeout(data.greet.bind(data, 'Hello'), 1000);
// console.log(typeof data.greet('Hello'));
// setTimeout(data.greet('Hello'), 1000); // type problem - type undefined

setTimeout(
  (message) => {
    console.log(message);
  },
  2000,
  ...['Hello, Geeks']
);

function myFunction(message) {
  console.log(message);
}

setTimeout(myFunction, 100, 'Hello World!');

// closure

function myFunction(param1, param2) {
  return function () {
    console.log(param1 + ' ' + param2);
  };
}

let result = myFunction('Hello', 'GeeksGeeks');
setTimeout(result, 1000);
