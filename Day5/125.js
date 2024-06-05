// How do you check if a key exists in an object

// !("key" in obj);
// obj.hasOwnProperty("key");

const user = {
  name: 'John',
};

console.log(user.name !== undefined); // true
console.log(user.nickName !== undefined); // false
