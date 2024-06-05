//  Q20:-	How do you redeclare variables in switch block without an error?
let cases = 'case1';

//1) we can use var instead of let or const as it doesn't cause syntax error

switch (cases) {
  case 'case1':
    var message = 'This is case 1';
    console.log(message);
    break;
  case 'case2':
    var message = 'This is case 2';
    console.log(message);
    break;
  case 'case3':
    var message = 'This is case 3';
    console.log(message);
    break;
  default:
    var message = 'This is the default case';
    console.log(message);
}

// but here there ase some consiquences as
// overwriting the variable value

//2)  you can use {} curly braces inside case
// now ease case has its own scope

switch (cases) {
  case 'case1': {
    let message = 'This is case 1';
    console.log(message);
    break;
  }
  case 'case2': {
    let message = 'This is case 2';
    console.log(message);
    break;
  }
  case 'case3': {
    const message = 'This is case 3';
    console.log(message);
    break;
  }
  default: {
    let message = 'This is the default case';
    console.log(message);
    break;
  }
}
