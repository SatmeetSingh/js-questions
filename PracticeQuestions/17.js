// Q17:- 	What is the purpose of the let keyword?

// 1) BLock scope

function exampleLet() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Error
}
exampleLet();

//2) Hoisting Behavior

// hoisted and not initialized
console.log(b); // Cannot access 'b' before initialization - error
let a = b;

// 3)Redefinition Prevention
let message = 'Hello';
// let message = 'Goodbye'; // SyntaxError: Identifier 'message' has already been declared

// 4)  For Loop Behavior
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 0, 1, 2
  }, 100);
}

// i is block-scoped to each iteration of the loop, resulting in the expected behavior.
