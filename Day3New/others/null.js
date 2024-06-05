// 73 	What is null value

// The null value represents the intentional absence of any object value.
// it is one of JavaScript's primitive values and is treated as falsy for boolean operations.

const a = null;
console.log(a);
console.log(typeof null);
null === null; // true
null == null; // true

console.log(!null);

console.log(Number.isNaN(null));

let car = {
  model: 'Tesla',
  owner: null, // Owner is currently not assigned
};

if (car.owner === null) {
  console.log('The car has no owner assigned');
}

// it is used to indicate that a variable should be empty or that a reference points to no object
