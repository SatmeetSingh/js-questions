// What are the benefits of initializing variables

// Initializing variables when they are declared is a good practice in programming for several reasons.

//  Avoiding Undefined Values
//  Uninitialized variables have the value undefined in JavaScript, which can lead to unexpected behavior or errors when the variable is used in operations. By initializing variables, you ensure they have a known value from the start.

// Improved Readability and Maintainability
// Easier Debugging - If a variable is properly initialized, it is easier to identify the source of bugs, as you can rule out undefined issues and focus on the logic that modifies the variable.

// Preventing Logical Errors - Uninitialized variables can sometimes pass through logic checks inappropriately (e.g., falsy values in JavaScript like undefined, null, 0, ''). Initializing variables helps guard against such logical errors.

function calculateTotal(price) {
  let total;
  if (price > 100) {
    total = price * 0.9; // Apply discount
  }
  // If price is 100 or less, total remains undefined
  return total; // This may return undefined, causing issues later
}

console.log(calculateTotal(50)); // Output: undefined

function calculateTotal1(price) {
  let total = 0; // Initialize with a default value
  if (price > 100) {
    total = price * 0.9; // Apply discount
  } else {
    total = price; // No discount applied
  }
  return total;
}

console.log(calculateTotal1(50)); // Output: 50
