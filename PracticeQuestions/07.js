// Q7:- 	What is the difference between slice and splice?

// slice - creates a new array by extracting a portion of an existing array and returning that portion as a new array.
// Does Not Modify Original Array
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// result need to be assigned in new array
const extracted = fruits.slice(1, 3);
console.log(extracted);

console.log(fruits);

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
// Modifies Original Array
// Returns an array containing the deleted elements (if any). If no elements are deleted, an empty array is returned.

const numbers = [10, 20, 30, 40, 50];
const removed = numbers.splice(2, 2, 35, 45);
console.log(removed);

console.log(numbers);
