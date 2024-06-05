// 49 	Give an example of a web worker

// eg

let w = new Worker('worker.js');
console.log(w);

w.addEventListener('message', function (e) {
  var el = document.getElementById('result');
  el.innerHTML += e.data + '\n';
});

setTimeout(function () {
  console.log('page sends message ...');
  w.postMessage('Abolish Poverty.');
}, 2000);
