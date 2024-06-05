// 44 	What are the methods available on session storage

// session storage store data for one session which persist from when its first load the page to when we close that tab

// methods

const data = [
  { name: 'Test1', email: 'test1@testmail.com', age: 24 },
  { name: 'Test2', email: 'test2@testmail.com', age: 23 },
  { name: 'Test3', email: 'test3@testmail.com', age: 25 },
];

const data1 = [
  { name: 'Test4', email: 'test4@testmail.com', age: 21 },
  { name: 'Test5', email: 'test5@testmail.com', age: 32 },
];

// convert data into string for nested data
const data2 = JSON.stringify(data);
const data3 = JSON.stringify(data1);

// store data i nsession storage
sessionStorage.setItem('test', data2);
sessionStorage.setItem('test1', data3);

// get method - get data through key
const a = sessionStorage.getItem('test');
const b = sessionStorage.getItem('test1');

//parse data convert to its original type
console.log(JSON.parse(a));
console.log(JSON.parse(b));

// to remove the data from perticular key
// sessionStorage.removeItem('test');

// clear all stored data in session storage
// sessionStorage.clear();

// can get the key from session storage
const key = sessionStorage.key(1);
const key1 = sessionStorage.key(2);
console.log(key, key1);
