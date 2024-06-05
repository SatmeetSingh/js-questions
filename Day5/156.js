// What are modifiers in regular expression

//  g
// The g modifier is used to perform a global search in the input string, meaning it finds all matches rather than just the first one.
const str = 'hello hello world';
const pattern = /hello/g;
const matches = str.match(pattern);
console.log(matches); // Output: ["hello", "hello"]

//  i - case insensitive
const str1 = 'Hello World';
const pattern1 = /hello/i;
const matches1 = str1.match(pattern1);
console.log(matches1[0]); // Output: ["Hello"]

// multiline m - The m modifier is used with the ^ and $ anchors to make them match the start and end of each line in a multiline string, rather than just the start and end of the entire string.

const str2 = 'Line 1\nLine 2\nLine 3';
const pattern2 = /^Line/gm;
const matches2 = str2.match(pattern2);
console.log(matches2); // Output: ["Line", "Line", "Line"]

// u - unicode - modifier (Unicode flag) is used to interpret the regex pattern as a sequence of Unicode code points, allowing for proper handling of Unicode characters.

// const str3 = '\uD83D\uDE00'; // Unicode smiley face
// const pattern3 = /\uD83D/u;
// const matches3 = str3.match(pattern3);
// console.log(matches3);

// The y modifier (sticky flag) is used to perform a "sticky" search in the input string, starting the search at the current position in the string.
