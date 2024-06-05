// Q22:-	What is IIFE(Immediately Invoked Function Expression)?

// function that is executed as soon as its defined -
// syntax   (function(){})()

// eg

(function () {
  console.log('Immidiate execution');
})();

const result = (function (a) {
  var init = a;
  return init * 2;
})(10);

console.log(result);
