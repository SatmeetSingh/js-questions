// The arguments object

// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

func1(1, 2, 3);

// The arguments object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object.
// arguments[0]; // first argument
// arguments[1]; // second argument
// arguments[2]; // third argument

function func(a) {
  arguments[0] = 99;
  console.log(a); //10
  console.log(arguments[0]); // 99
}
func(10);

function func2(a) {
  a = 99;
  console.log(arguments[0]); // 10
  console.log(a); //99
}
func2(10); // 99

function funcWithDefault(a = 55) {
  arguments[0] = 99;
  console.log(a);
}
funcWithDefault(10);

function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3();

// const args = Array.prototype.slice.call(arguments);
// or
// const args = Array.from(arguments);
// or
// const args = [...arguments];
