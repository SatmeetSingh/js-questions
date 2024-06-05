//  Q23:-	How do you decode or encode a URL in JavaScript?

// Encoding - encodeUriCOmponent(url) , encodeURI
const url = 'https://example.com/search?query=hello world';
const encodedURL = encodeURIComponent(url);
console.log(encodedURL);
// it encodes URI by replcing instance of certain characters with with diff sequence
// result - https%3A%2F%2Fexample.com%2Fsearch%3Fquery%3Dhello%20world

// decoding - using - decodeURIComponent
const EncodeUrl = encodedURL;
const decodeUrl = decodeURIComponent(EncodeUrl);
console.log(`${decodeUrl}`);

// to encode parameters such as query parameters.

// eg
// encoding
const query = { search: 'satmeet singh', age: 24 };
const queryString = Object.keys(query)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
  .join('&');

console.log(queryString);

//decoding
const string = queryString;
const query1 = string.split('&').reduce((acc, pair) => {
  const [key, value] = pair.split('=');
  acc[decodeURIComponent(key)] = decodeURIComponent(value);
  return acc;
}, {});

console.log(query1);
