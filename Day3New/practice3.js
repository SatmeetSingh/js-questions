let promise = new Promise(function (resolve, reject) {
  // do something
});

// fulfilled , rejected , pending , settled

let p1 = new Promise(function (resolve, reject) {
  const x = 'Nishant Kumar';
  const y = 'Nishant Kumar';
  if (x === y) resolve('Same');
  reject('Not Same');
});

console.log(p1);

p1.then(function () {
  console.log('Its all same');
}).catch(function (err) {
  console.log(err);
});

// .then()

// .catch
let p2 = new Promise(function (resolve, reject) {
  reject('Promise rejected');
});

p2.then(function (res) {
  console.log(res);
}).catch(function (err) {
  console.log(err);
});

// new Promise(executer); - syntax
// The executor can be the custom code that ties an outcome to a promise. You, the programmer, write the executor.

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved');
  }, 100);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved second');
  }, 100);
});

promise3
  .then((value) => {
    console.log('value: ' + value);
  })
  .catch((err) => {
    console.log('error: ' + err);
  });

promise4
  .then((value) => {
    console.log('value: ' + value);
  })
  .catch((err) => {
    console.log('error: ' + err);
  });

console.log(promise3);

// promise.constructor - return Promise constructor function for object

function gfg() {
  const p3 = new Promise((resolve, reject) => {});
  let val = p3.constructor;
  console.log(val);
}

gfg();

function myGeeks() {
  let prom = new Promise((resolve, reject) => {});

  console.log(prom.constructor);
}

myGeeks();

const p5 = Promise.resolve(50);
const p6 = 200;
const p7 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'geek');
});

Promise.all([p5, p6, p7])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (err) {
    console.log(err);
  });

const tOut3 = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

tOut3(1000).then((result) => console.log(result));

Promise.all([tOut3(1000), tOut3(2000)]).then((result) => console.log(result));

const tOut1 = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

const durations = [1000, 2000, 3000];

const promises = [];

durations.map((duration) => {
  promises.push(tOut1(duration));
});

// console.log(promises);

Promise.all(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

const tOut2 = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t === 2000) {
        reject(`Rejected at ${t}`);
      } else {
        resolve(`Completed in ${t} sec`);
      }
    }, t);
  });
};

const durations1 = [1000, 2000, 3000, 4000, 5000];

const promises1 = [];

durations1.map((duration) => {
  promises1.push(tOut2(duration));
});

Promise.all(promises1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

let first_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved First after 1 second');
  }, 1000);
});

let second_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved First after 2 seconds');
  }, 2000);
});

let third_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved First after 3 seconds');
  }, 3000);
});

try {
  let result = Promise.all([first_promise, second_promise, third_promise]);
  result.then((data) => console.log(data));
} catch (error) {
  console.log(error);
}

// allSettled() - handle multiple promises and return single promise - if arg is empty then return resolved
// other cases pending
const a = Promise.resolve(50);
const b = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, 'Nishant');
});
const prm = [a, b];

Promise.allSettled(prm).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log(result.value, 'fulfilled');
    } else {
      console.log(result.value, 'rejected');
    }
  });
});

const tOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

tOut(1000).then((result) => {
  console.log(result);
});

Promise.allSettled([tOut(1000), tOut(2000)]).then((result) =>
  console.log(result)
);

let first = Promise.resolve(200);
let second = Promise.reject('Rejected promise');
let third = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200), 100;
  });
});

first.then((result) => console.log(result));

let result = Promise.allSettled([first, second, third]);

try {
  result.then((result) => console.log(result));
} catch (error) {
  console.log(error);
}

/// race - fist to resolve or reject

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, 'one');
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 220, 'two');
});

Promise.race([p3, p4]).then((res) => {
  console.log(res);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('five'), 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('six'), 300);
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// promise.reject- used to return rejected Promise obj with given resins for rejection

// Promise.reject(reason)

let promise5 = Promise.reject('I an a reason for error');

promise5.catch((err) => {
  console.log(err);
});
// .............................
const t = Date.now();

const e = Promise.resolve(12345);
console.log(`A:${Date.now() - t}`);
e.then((res) => {
  console.log(`${res}:${Date.now() - t}`);
});
console.log(`C:${Date.now() - t}`);

Promise.resolve(11815047).then((val) => console.log(val));

const pre = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([89, 45, 323]);
  }, 5000);
});

pre
  .then((val) => {
    console.log(val[1]);
  })
  .catch((err) => console.log(err));

const pre1 = Promise.resolve(3126);

const pre2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    pre1.then((val) => {
      console.log(val);
    });
  }, 5000);
});

pre2.then((val) => {
  console.log(val);
});

let task = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise has been rejected');
  }, 2000);
});

task
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log(
      'This is finally() block that is ' + 'executed after Promise is settled'
    );
  });
