// Q24:-	What is memoization?

// -  is a way to speed up app by caching the data to heavy or expensive functions nd return it in case of same input again
//  caching is  temp data store that store data in order to seve future req for that data more quickly

// eg - fibonacci

function fibonacci(n, preValue = []) {
  if (preValue[n] != null) {
    return preValue[n];
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  const result = fibonacci(n - 1, preValue) + fibonacci(n - 2, preValue);

  preValue[n] = result;
  return result;
}
console.time();
console.log(fibonacci(16));
console.timeEnd();

function add(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

function memoize(fn) {
  let prevalue = {};
  let isCalled = false;
  return function (...args) {
    let n = JSON.stringify(args);
    if (n in prevalue && isCalled) {
      return prevalue[n];
    } else {
      let result = fn.apply(this, args);
      prevalue[n] = result;
      isCalled = true;
      return [result, isCalled];
    }
  };
}

const a = memoize(add);
console.log(a(100000000));
console.log(a(100));
console.log(a(100));
console.log(a(100));
console.log(a(100));
