function ReturnPromise(callback) {
  setTimeout(() => {
    callback('value');
  }, 1000);
}

function Promise1() {
  const promise = new Promise((res, rej) => {
    ReturnPromise((val) => {
      return res(val);
    });
  });
}

Promise1().then((result) => {
  console.log(result);
});
