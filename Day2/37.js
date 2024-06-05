//    37 	What is a cookie

// A cookie is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with subsequent requests. Cookies are commonly used to manage user sessions, track user activity, and store user preferences on a website.

// A cookie is an amount of information that persists between a server-side and a client-side. A web browser stores this information at the time of browsing.

//A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. It maintains the state of a user and remembers the user's information among all the web pages.

// How it works

// When a user sends a request to the server, then each of that request is treated as a new request sent by the different user.
// So, to recognize the old user, we need to add the cookie with the response from the server.
// browser at the client-side.
// Now, whenever a user sends a request to the server, the cookie is added with that request automatically. Due to the cookie, the server recognizes the users.

// For normal use without the optional fields

// writing cookie
// document.cookie = 'name= value';

// // reading cookie
// var cookieVal = document.cookie;

// console.log(cookieVal);

//
document.cookie =
  'username=SatmeetSIngh; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/';

let cookies = document.cookie;
console.log(cookies); // Outputs: "username=JohnDoe"

// Key Characterstics
// 1) Size limit - 4KB
// Browser has limit of (20- 50 cookies) per domain

// 2) Lifetime
// session Cookie - temporary cookie deleted when browser is closed
// permanet - remain for set period of time or when manualay deleted
