// 68 	How do you declare strict mode

// To declare strict mode in JavaScript, you use the directive "use strict";.
//  The "use strict"; directive must be at the top of the script or function. Any other statements before it will cause it to be ignored.
//  Strict mode can be applied to an entire script or individual functions. There is no way to apply strict mode to specific blocks of code

// Declaring Strict Mode for an Entire Script

'use strict';

var x = 3.14;
myVariable = 10;
// Throws an error: myVariable is not declared

// Declaring Strict Mode for a Function

function myFunction() {
  'use strict';
  var y = 3.14;
  myOtherVariable = 20;
  // Throws an error: myOtherVariable is not declared
}
