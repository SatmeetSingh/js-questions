// How do you test for an empty object

// Object.entries(obj).length === 0 && obj.constructor === Object;

//Object.keys(obj).length === 0 && obj.constructor === Object;

let userDetails = {
  name: 'John Doe',
  username: 'jonnydoe',
  age: 14,
};

console.log(Object.keys(userDetails).length);

const myEmptyObj = {};
console.log(Object.keys(myEmptyObj).length);

//checking the length alone is not the best option when checking if an object is empty or for any datatype. It is always best to confirm if the data type is correct.
const isObjectEmpty = (objectName) => {
  return (
    Object.keys(objectName).length === 0 && objectName.constructor === Object
  );
};

console.log(isObjectEmpty(userDetails));
console.log(isObjectEmpty(myEmptyObj));

if (Object.keys(myEmptyObj).length === 0 && myEmptyObj.constructor === Object) {
  console.log(true);
} else {
  console.log(false);
}

// everything has worked fine. But you might also want to avoid throwing a TypeError when a variable is undefined or a value of null is passed instead of {}.
let nullObj = null;
let undefinedObj;

const isObjectEmpty1 = (objectName) => {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};

console.log(isObjectEmpty1(userDetails)); // false
console.log(isObjectEmpty1(myEmptyObj)); // true
console.log(isObjectEmpty1(undefinedObj)); // undefined
console.log(isObjectEmpty1(nullObj));

console.log(JSON.stringify(userDetails));

const isObjectEmpty2 = (objectName) => {
  return JSON.stringify(objectName) === '{}';
};

console.log(isObjectEmpty2(userDetails));
console.log(isObjectEmpty2(myEmptyObj));
