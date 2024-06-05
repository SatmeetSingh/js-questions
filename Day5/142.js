// 142 	What is a polyfill

// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

// Polyfill is a way to modify or add new functions. It is basically a piece of code to add/modify the new functions.It is used to provide modern functionality to web browsers.

// It’s like browser fallback what if your browser doesn’t provide the map( ) function then you will need to code your own map( ) function. We will discuss polyfills for the following methods:

// Using map( )
// Using forEach( )
// Using reduce( )

// Polyfill for map( ) function

const arr = [1, 2, 3, 4, 5];

function callback(ele) {
  return ele * 2;
}

Array.prototype.myMap = function (callback) {
  const myArr = [];
  for (const i in this) {
    myArr.push(callback(this[i]));
  }
  return myArr;
};

const newArr = arr.myMap(callback);
for (let i in newArr) {
  console.log(newArr[i]);
}

// Polyfill for forEach( ) function
const arr1 = [1, 2, 3, 4, 5];

function myFunction(ele) {
  console.log(ele);
}

Array.prototype.myForEach = function (callback) {
  for (const i in this) {
    callback(this[i]);
  }
};

arr1.myForEach(myFunction);
console.log(arr1);
