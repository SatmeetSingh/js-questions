// How do get query string values in javascript

// URLSearchParams.get(name)

const str1 = 'http://example.com/path?paramName=GeeksforGeeks';

// Parse the URL
const parsedUrl = new URL(str1);

// Get the value of a specific parameter from the query string
const paramName = 'paramName';
const result = parsedUrl.searchParams.get(paramName);

if (result !== null) {
  console.log('Value of ' + paramName + ' is: ' + result);
} else {
  console.log(paramName + ' not found in the query string.');
}
