// Q4:- 	What is JSON and its common operations?

//JSON (JavaScript Object Notation) is a lightweight data interchange format that is widely used for representing and transmitting structured data between a server and a client, or between different parts of an application
// language independent
// human readable
// easy to generate and parse

// can be converted to Json string
const data = { name: 'John', age: 30 };
// const arr = ['Hello ', 'World'];
const jsonStr = JSON.stringify(data);
// const jsonStr = JSON.stringify(arr);
console.log(jsonStr);
// Output: '{"name":"John","age":30}'

// converted back
const obj = JSON.parse(jsonStr);
console.log(obj); // Output: { name: 'John', age: 30 }

console.log(obj.name); // Output: 'John'
console.log(obj.age); // Output: 30

// modification
obj.age = 35;
obj.city = 'New York';
delete obj.name;

const updatedJsonStr = JSON.stringify(obj);
console.log(updatedJsonStr);

// cloning
const originalObj = { name: 'John', age: 30 };
const clonedObj = JSON.parse(JSON.stringify(originalObj));
console.log(clonedObj);
// Output: { name: 'John', age: 30 }

// reference not cloning
const person = { name: 'satmeet', age: 24 };
const person2 = person;
console.log(person === person2);
