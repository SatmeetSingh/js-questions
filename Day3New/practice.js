// work in different thread during wait
// console.time();
// // async code
// setTimeout(() => {
//   console.log('setTimeout');
//   console.timeEnd();
// }, 4000);

// it can block the js main thread until we accept 'Ok'
// alert('ok');
//

// whileloop can also block main thread
// const blockingBtn = document.querySelector('.blocking');

// blockingBtn.addEventListener('click', () => {
//   const startTime = Date.now();
//   let currentTIme = startTime;

//   while (startTime + 1000 > currentTIme) {
//     currentTIme = Date.now();
//   }
// });
