//  Q5:- 	What is the purpose of the array slice method?
//Immutability: as it does not modify the original array

// Creating a Copy of an Array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
console.log(copiedArray);
// Output: [1, 2, 3, 4, 5]
console.log(copiedArray === originalArray);
// real copy - false

//Extracting a Subarray:
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const subArray = fruits.slice(1, 4);
const subArray1 = fruits.slice(0);
const subArray2 = fruits.slice(-1);

console.log(subArray, subArray1, subArray2);
// Output:
// ['Banana', 'Cherry', 'Date']
//['Apple', 'Banana', 'Cherry', 'Date']
// ["Date"]

// Shallow Copy of Arrays with Objects
const originalArray1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
const copiedArray1 = originalArray1.slice();
console.log(copiedArray1[0] === originalArray1[0]);
// Output: true
