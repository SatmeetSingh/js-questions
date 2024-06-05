// How do you define JSON arrays   -

// A JSON array contains zero, one, or more ordered elements, separated by a comma. The JSON array is surrounded by square brackets [ ].

// [ ] //Empty JSON array

// [ 0, 1, 2, 3, 4, 5]

// [ “StringValue”, 10, 20.13, true, null ]

// [
//  {
//    “Name” : “Nested Object”
//  },
//  [ 10, 20, true, 40, “Nested Array” ]
// ]

// JSON Array is almost same as JavaScript Array. JSON array can store values of type string, array, boolean, number, object, or null. In JSON array, values are separated by commas. Array elements can be accessed using the [] operator.

var jsonStringArray = {
  students: ['Ram', 'Shyam', 'Radhika', 'Akshay', 'Prashant', 'Varun'],
};

var jsonNumberArray = {
  marks: [23, 44, 76, 34, 98],
};

var x = jsonStringArray.students[0];
var y = jsonNumberArray.marks[0];
console.log(x, y);

//  Json array of objects
// {
//   "books":[
//     {"name":"Let Us C", "author":"Yashavant Kanetkar"},
//     {"name":"Rich Dad Poor Dad", "author":"Robert Kiyosaki "},
//     {"name":"Introduction to Algorithms", "author":"Cormen"},
//  ]
// }

// JSON Array of Arrays

// {
//   "matrix": [
//       [ "a", "b", "c" ],
//       [ "d", "e", "f" ],
//       [ "g", "h", "i" ]
//   ],
// };
