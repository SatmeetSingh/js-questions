// Can we define properties for function
// Yes, We can define properties for functions because functions are also objects.

// .......................
function myFunction() {
  console.log('This is a function.');
}

// Add properties to the function
myFunction.description = 'This is a function that logs a message.';
myFunction.counter = 0;

// Add a method to the function
myFunction.incrementCounter = function () {
  myFunction.counter++;
};

console.log(myFunction.description);
//  "This is a function that logs a message."
console.log(myFunction.counter); // 0

myFunction.incrementCounter();
console.log(myFunction.counter); // 1

myFunction();

// You can add properties to the function object just like you would with any other object. In the example, myFunction.description and myFunction.counter are properties of myFunction.

//Similarly, you can add methods to the function. In the example, myFunction.incrementCounter is a method that increments the counter property.

// You can access and manipulate these properties and methods just like you would with any other object properties and methods.

function Person(name) {
  this.name = name;
}

Person.species = 'Homo sapiens';

Person.describe = function () {
  console.log(`Species: ${Person.species}`);
};

const alice = new Person('Alice');
console.log(alice.name); // Alice
Person.describe(); // Species: Homo sapiens

// .............
function trackCalls() {
  trackCalls.count++;
  console.log(`This function has been called ${trackCalls.count} times.`);
}

trackCalls.count = 0;

trackCalls(); // This function has been called 1 times.
trackCalls(); // This function has been called 2 times.
trackCalls(); // This function has been called 3 times.
