// Q9:- 	What is the difference between == and === operators?

// == only checkes value - equality
// === checks value and type - strict equality

console.log(0 == false); // true (coerced to common type)
console.log(0 === false); // false (different types)

console.log('2' == 2); // true (coerced to common type)
console.log('2' === 2); // false (different types)

// in reference types - they check by memory address
const object = {
  name: 'nishant',
  age: 24,
};

const obj = { ...object };
console.log(obj === object); // false
console.log(obj == object); //false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(null == undefined); //true
console.log(null === undefined); // false
console.log(undefined === 0); // false
console.log(undefined == 0); // false
console.log(null === 0); // false
console.log(null == 0); //false
console.log(null == null); // true
console.log(null === null); //true
console.log(false === 0); // false
console.log(false == 0); //true
console.log(false == []); //
console.log(false === '');
console.log(false == '');
console.log(false == '0');
console.log(0 == [0]);
console.log(0 == {});
console.log(NaN == true);
console.log(NaN === true);
// null >= 0; //true
// null <= 0; //true
// null == 0; //false
// null > 0;  //false
// null < 0;  //false
