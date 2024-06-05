// 70 	What is the purpose of the delete operator

// The delete operator in JavaScript is used to remove a property from an object

// its primary purpose is to allow developers to dynamically remove properties or elements from objects and arrays during runtime.

// delete object
// // or
// delete object.property
// // or
// delete object['property']

let obj = {
  firstName: 'Raj',
  lastName: 'Kumar',
  salary: 30000,
};

console.log(obj);
// It returns `true` if successful, and `false` otherwise.
console.log(delete obj.salary); // true
console.log(obj);

// ...................................

let obj1 = {
  name: 'John',
};

Object.defineProperty(obj1, 'age', {
  value: 20,
  configurable: false, // making age non-configurable
});
console.log(obj1);

let result = delete obj1.age;
console.log(result);
console.log(obj1);

// .......................................
//  Deleting arrays

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
console.log(delete arr[0]);
console.log(arr); // delelted element is replaced with empty slot

//  ............................
var globalVar = 10;
let localVar = 20;

// delete globalVar returns true, deleting the global property.
// delete localVar returns false because let variables cannot be deleted.
console.log(delete globalVar); // true, deletion successful
console.log(delete localVar); // false, deletion fails

console.log(globalVar); // undefined
console.log(localVar); // 20

// When an element in an array is deleted using delete, the array still retains the original length, and the deleted element becomes undefined.
// Using delete with objects removes the property entirely, whereas setting a property to undefined leaves the property existing in the object.
