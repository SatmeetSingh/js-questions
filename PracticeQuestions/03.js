// Q3:-	What is the difference between Call, Apply and Bind?

const person = {
  name: 'Satmeet Singh',
  age: 24,
};

function Text() {
  console.log(` ${this.name} is ${this.age} years old`);
}

function Text2(city, available) {
  console.log(
    ` ${this.name} is ${this.age} years old lives in ${city} amd is currently ${available} `
  );
}

Text();
// call and apply are use to temperarily bind the object to function and this can use that obj as referance
Text.call(person);
Text.apply(person);
Text();

Text2();
// only difference b/w call and apply is apply takes array of arguments insted of arguments
Text2.call(person, 'Kharar', 'available');
Text2.apply(person, ['Kharar', 'available']);
Text2();

//bind
const person2 = {
  name: 'Satmeet Singh',
  age: 24,
};

function Text3(city, available) {
  return ` ${this.name} is ${this.age} years old lives in ${city} and is currently ${available} `;
}

const textbind = Text3.bind(person2);
console.log(textbind('Kharar', 'not available'));

// this refer to first bind one
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

function fullName() {
  return this.firstName + ' ' + this.lastName;
}

const member = {
  firstName: 'Hege',
  lastName: 'Nilsen',
};

let fullName1 = fullName.bind(member);
let fullName2 = fullName1.bind(person1);
console.log(fullName1(), fullName2());
