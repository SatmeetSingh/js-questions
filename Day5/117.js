// What is the purpose of clearTimeout method

// The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.

var msg;
function greeting() {
  console.log('Good morning');
}
function start() {
  msg = setTimeout(greeting, 3000);
}

function stop() {
  clearTimeout(msg);
}

start();
stop();
