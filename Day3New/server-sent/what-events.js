// 60 	What are the events available for server sent events

// message - when message is recieved from server
// open - then connection to server is opened
// error = for when error  occrs - connection failure  or unexpected response

const eventSource = new EventSource('/event');

eventSource.onmessage = function (event) {
  const data = JSON.parse(event.data);
  console.log('Received message:', data);
};

eventSource.onopen = function () {
  console.log('Connection to server opened.');
};

eventSource.onerror = function (event) {
  if (event.readyState === EventSource.CLOSED) {
    console.log('Connection to server closed.');
  } else {
    console.error('Error occurred:', event);
  }
};

// Handling a custom event
eventSource.addEventListener('customEvent', function (event) {
  const data = JSON.parse(event.data);
  console.log('Received custom event:', data);
});
