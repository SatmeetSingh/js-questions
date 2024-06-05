// What are js labels

// the label statement is used to label a block of code. A labeled statement can be used with loops and control flow statements to provide a target for the break and continue statements.

/*
Label:
    statement (loop or block of code)
    */

// Label: A unique string that is Used to define the name of the block or loop.
// Statement: It can be a loop or block.
// Break: Used to terminate the loop or block of code.
// Continue: Used to terminate or jump from the current iteration of the loop.

let sum = 0,
  a = 1;

outerloop: while (true) {
  a = 1;

  innerloop: while (a < 3) {
    sum += a;
    if (sum > 12) {
      break outerloop;
    }
    console.log('sum =' + sum);
    a++;
  }
}

blockOfCode: {
  console.log('This part will be executed');
  break blockOfCode;
  console.log('this part will not be executed');
}
console.log('out of the block');

// myLabel: function myLabeledFunction() {
//   console.log('This is a labeled function.');
// }

// // Calling the labeled function
// myLabeledFunction();
