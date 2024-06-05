// How do you add a key value pair in javascript

//  .
const obj = { Organisation: 'GFG' };
obj.field = 'CS';

console.log(obj);

//  []
const obj1 = { Organisation: 'GFG' };
const Field = 'field';
const Year = 'year';
const lang = 'lang';
obj1[Field] = 'CS';
obj1[Year] = '2023';
obj1[lang] = 'English';

console.log(obj1);

// spread
const obj2 = { Organisation: 'GFG' };
const newObj = { ...obj2, field: 'CS' };
console.log(newObj);

// Using Objcet.assign() method -  we are using Objcet.assign() method to assign the key and value to the object. We are passing the object name and the field that we want to use in the object.

const obj3 = { Organisation: 'GFG' };
Object.assign(obj3, { field: 'CS' });
console.log(obj3);

// Using Objcet.defineProperty() method- we are using Objcet.defineProperty() method to assign the key and value to the object. We are passing the object name and the field that we want to use in the object with some extra specification that is served by the method itself.

const obj4 = { Organisation: 'GFG' };
Object.defineProperty(obj4, 'field', {
  value: 'CS',
  writable: false,
  enumerable: true,
  configurable: true,
});
console.log(obj4);

obj4.afield = 'Civil';
console.log(obj4);
