// What are the string methods available in Regular expression

// search() and replace().

let text = 'Visit W3Schools!';
let n = text.search('W3Schools!');
console.log(n); // return index 6

let n1 = text.search(/w3schools/);
console.log(n1); //-1

let n2 = text.search(/w3schools/i);
console.log(n2); // 6

//
let text3 = 'Visit Microsoft!';
let result = text3.replace('Microsoft', 'W3Schools');
console.log(result);

let result1 = text.replace(/microsoft/i, 'W3Schools');
console.log(result1);
