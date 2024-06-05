// 26 	What are classes in ES6
// classes - are blueprint/tempelate for creating Javascript object

// classes can be defined two ways
// declaration
// expression

// 1)
class Person {
  // constructor -It is used to initialize object properties
  constructor(name, age, isWorking, birth) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
    this.birth = birth;
  }
  //Class Methods
  get text() {
    return `${this.name} is ${this.age} years old and working-${this.isWorking} individual born in ${this.birth}`;
  }
}

// you can use class to create objects
let Nishant = new Person('Nishant', 23, true, 2001);
console.log(Nishant.text);
console.log(Nishant);

class NewPerson extends Person {
  constructor(gender, lastName) {
    this.gender = gender;
    this.lastName = lastName;
  }

  details() {
    return {
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      IsWorking: this.isWorking,
      birth: this.birth,
    };
  }
}

const NewNishant = new Person('male', 'kumar');
console.log(NewNishant);
// 2)
const Person1 = class {
  constructor(name, age, isWorking, birth) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
    this.birth = birth;
  }
};

const Satmeet = new Person('Satmeet', 24, true, 2000);
console.log(Satmeet);
