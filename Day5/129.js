// How to make first letter of a string uppercase in JavaScript ?

// slice method
function capitalizeFLetter() {
  let string = 'geeksforgeeks';
  console.log(string[0].toUpperCase() + string.slice(1));
}
capitalizeFLetter();

// JavaScript charAt() Function
function capitalizeFLetter1() {
  let string = 'geeksforgeeks';
  console.log(string.charAt(0).toUpperCase() + string.slice(1));
}
capitalizeFLetter1();

// replace -  JavaScript replace() Function
// This is a built-in function in JavaScript that is used to replace a slice of a string with another string or a regular expression

function capitalizeFLetter2() {
  let string = 'geeksforgeeks';
  console.log(string.replace(string[0], string[0].toUpperCase()));
}
capitalizeFLetter2();

//  Using the split() , map() and join() methods
let str = 'geeksforgeeks';
let result = str
  .split('')
  .map((char, index) => (index === 0 ? char.toUpperCase() : char))
  .join('');
console.log(result);

// spread

let str1 = 'geeksforgeeks';
let result1 = [...str1]
  .map((char, index) => (index === 0 ? char.toUpperCase() : char))
  .join('');
console.log(result);
