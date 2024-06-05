const express = require('express');

const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://127.0.0.1:5501/JSpractice/Day3/server-sent/index.html',
  optionsSuccessStatus: 200,
};

app.get('/', (req, res) => {
  res.send('hello!');
});
app.use(cors());

// to unlock sse first do get request and setheader
app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');

  // one event
  send(res);
});

let i = 0;
function send(res) {
  const message = {
    message: `hello!${i++}`,
  };
  res.write('data: ' + `${JSON.stringify(message)}\n\n`);
  setTimeout(() => send(res), 1000);
}

// even if we kill the server and then restarted it it automaticalall sends data here
// attempts to reconnect again

app.listen(8080);
console.log('listening on port 8080');
