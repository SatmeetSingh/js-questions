//  Q6:- 	What is the purpose of the array splice method?

// Delete the data from original array
//Removing element
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(2, 2);
console.log(numbers);
console.log(removed);

// adding
const numbers1 = [1, 2, 3, 4, 5];
// here (2 - index , 0- no of removing items  , 6, 7 are added to array )
numbers1.splice(2, 0, 6, 7);
console.log(numbers1);
// Modified array: [1, 2, 6, 7, 3, 4, 5]

// replacing
const numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(2, 2, 'a', 'b', 'c');
console.log(numbers3);
// Modified array: [1, 2, 'a', 'b', 'c', 5]
