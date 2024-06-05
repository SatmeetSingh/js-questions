// Q8:- 	How do you compare an Object with a Map?

// map is rather flexible
// object  keys are string
// map keys can be any datatype  , functions

// Objects are commonly used for simple key-value mappings and as general-purpose data containers.
//  Maps are preferred when you need keys that are not strings or when you need to preserve the order of entries.

// Creating an object and a Map with the same key-value pairs
const obj = { key1: 'value1', key2: 'value2' };
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

let employeeMap = new Map();
employeeMap.set('Nishant', { age: 23, department: 'IT' });
employeeMap.set('satmeet', { age: 24, department: 'II' });

console.log('Employee information using Map:');
console.log(employeeMap.get('Nishant'));
console.log(employeeMap.get('satmeet'));
console.log(employeeMap.size);

let employeeObject = {
  nishant: { age: 23, department: 'IT' },
  Satmeet: { age: 24, department: 'IT' },
};

console.log('\nEmployee information using Object:');
console.log(employeeObject['Satmeet']);

console.log(employeeObject['nishant']);
