//  How do you loop through or enumerate javascript object

// object.hasOwnProperty( prop ); - he “hasOwnProperty()” method in JavaScript is handy for checking if an object has a specific property that belongs to it directly, rather than inherited from its prototype chain.

function iterateObject() {
  let exampleObj = {
    book: 'Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
  };

  for (let key in exampleObj) {
    if (exampleObj.hasOwnProperty(key)) {
      let value = exampleObj[key];
      console.log(key, value);
    }
  }
  console.log(Object.entries(exampleObj));
}
iterateObject();

// Using Object.entries() method and map() Method

function iterateObject1() {
  let exampleObj = {
    book: 'Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
  };

  console.log(Object.entries(exampleObj));
  Object.entries(exampleObj).map((entry) => {
    let key = entry[0];
    let value = entry[1];
    console.log(key, value);
  });
}

iterateObject1();

function iterateObject2() {
  let exampleObj = {
    book: 'Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
  };

  console.log(Object.keys(exampleObj));
  // Using forEach() method and object.keys() Method
  Object.keys(exampleObj).forEach((key) => {
    const value = exampleObj[key];
    console.log(`${key}: ${value}`);
  });

  console.log(Object.values(exampleObj));

  // Object.values() method and forEach() Method
  Object.values(exampleObj).forEach((value, index) => {
    const key = Object.keys(exampleObj)[index];
    console.log(key, value);
  });
}
iterateObject2();
