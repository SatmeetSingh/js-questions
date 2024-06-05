// 173 	What is a conditional operator in javascript

function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

// for truthy val or falsy val

console.log(getFee(true));
console.log(getFee([]));
console.log(getFee({}));
console.log(getFee('Hello'));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"

// condition ? exprIfTrue : exprIfFalse

const age = 25;
const beverage = age >= 21 ? 'Beer' : 'Juice';
console.log(beverage);

//Handling null values

const greeting = (person) => {
  const name = person ? person.name : 'Stranger';
  return `Howdy , ${name} `;
};

console.log(greeting({ name: 'Alice' }));
console.log(greeting(null));

// for if else case
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}
