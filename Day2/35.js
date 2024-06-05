//  35 	What is web storage

// this is web browser feature that allows web apps to
// store data locally in user's browser. it allows web-pags to save data across sessions, without relying on server-side storage solutions like db

// store data in key, value paors like very big object contains only string

// two ways to store data
// local Storage - even if we shut down the tab or window data will still persists - capacity depend on browser - min 5 Mb

// session Storage - persisted only for perticuler session as long as you close that window or tab that data is lost - min 5 mb of data can be stored

// things define Origin - protocol / host / port - must not disobay  these there for data access

// http://nishant.in/users
// http://nishant.in/auth
// we can access local storage in both case as its origin is same

//https://nishant.in/users - no access as it voilates the oriin - protocol
// http:// blog.nishant.in/ - no access
// http://nishant.in:8080  - no access

// Local storage
// Application - localStorage- stored on window object of browser - globel object

//1) overwrite value if key is same
// takes two prmeter key,value and store it into local storage in name of key
localStorage.setItem('Hello', ['name', ' Satmeet']);
localStorage.setItem('Hello1', ['name', ' Nishant']);

// get the value from the localStorage in reference to key
console.log(localStorage.getItem('Hello'));

// remove the value stored in reference of key
localStorage.removeItem('Hello');

// cler all values stored
localStorage.clear();

// session storage
// Data is cleared when page session ends
// a unique page session is created when document is loaded in browwser tab ;
//. A page session lasts as long as the browser is open, and survives over page reloads and restores.
// --Persistence Across Reloads:
// Cleared When the Tab is Closed:

// setItem() method
// takes Key, value and store value in particular location with name of key

// Storing data in sessionStorage
sessionStorage.setItem('key', 'value');

// Retrieving data from sessionStorage
let value = sessionStorage.getItem('key');
console.log(value); // Outputs: 'value'

// Removing data from sessionStorage
sessionStorage.removeItem('key');

// Clearing all data from sessionStorage
sessionStorage.clear();
