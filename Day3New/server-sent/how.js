//  58 	How do you receive server-sent event notifications

let sse = new EventSource('http://localhost:8080/stream');

sse.onmessage = function (event) {
  const data = JSON.parse(event.data);
  console.log(event);
  // const eventElement = document.createElement('div');
  // eventElement.textContent = `Message: ${data.message}, Counter: ${data.counter}`;
  // document.getElementById('events').appendChild(eventElement);
};

sse.onerror = function (err) {
  console.error('EventSource failed:', err);
  eventSource.close();
};
