// function sleep(ms) {
//   return new Promise((res) => {
//     setTimeout(res, ms);
//   });
// }

(function () {
  var message = 'IIFE';
  console.log(message);
})();
// console.log(message);

// let uri = 'employeeDetails?name=john&occupation=manager';
// let encoded_uri = encodeURIComponent(uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log(encoded_uri);
// console.log(decoded_uri);

let arr1 = ['Nishant', 2, true, {}];

arr1.push('age');
console.log(arr1);
arr1.unshift(24);
console.log(arr1);

// The concat() method is used to concatenate two or more arrays and it gives the merged array.
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 0, 11, 12, 13];
let newArray = arr.concat(10, 2);
let newArray1 = arr.concat(arr2);
console.log(arr);
console.log(arr2);
console.log(newArray);
console.log(newArray1);

// use to flatten the array
// Array.flat([depth]);

const arr3 = [
  ['1', '2'],
  ['3', '4', '5', ['6'], '7'],
];

const flatArr = arr3.flat(1);
const flatArr1 = arr3.flat(2);
console.log(flatArr, flatArr1);
