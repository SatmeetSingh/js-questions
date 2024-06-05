//  36 	What is a post message

// Iframes
// post message enable the communication b/w two windows whether is it Iframe or parent page or seperate windows
// bilitiral communications - recieving window must have reciving algorithm

// Iframe and parent communication
// 1) listining  mechanisam

window.addEventListener('message', callbackFn);

// listener
function callbackFn(event) {
  if (event.origin !== 'https://www.google.com') {
    return;
  }
  console.log(event.data);
}

// post message dispatcher
window.top.postMessage(
  JSON.stringify({ message: 'Hello there' }),
  'http://127.0.0.1:5501/JSpractice/Day2/'
);
