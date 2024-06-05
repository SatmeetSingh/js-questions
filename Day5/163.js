// Debugger Statement - he debugger keyword is a powerful tool that helps developers gain insight into their code's execution flow and pinpoint problematic areas.

//  debugger keyword is a built-in feature of JavaScript that triggers a breakpoint in the code .When encountered, it pauses the execution of the program and allows developers to inspect variables, step through code, and analyze the program's state at that specific point.

function calculateSum(a, b) {
  let sum = a + b;
  debugger; // Execution will pause here
  return sum;
}

let result = calculateSum(5, 10);
console.log(result);

// step into  - go into function

function processArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'stop') {
      arr.push('start');
      debugger;
      break;
    }
    // Perform other operations on the array elements
  }
  return arr;
}

const val = processArray(['name', 'age', 'type', 'stop', 'working']);
console.log(val);
