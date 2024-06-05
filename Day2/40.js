//  40 	How do you delete a cookie

const express = require('express');
const app = express();

app.get('/create-cookie', (req, res) => {
  res.cookie('myCookie', 'cookieValue', {
    maxAge: 900000,
    httpOnly: true,
    path: '/',
  });
  res.send('Cookie has been created');
});

app.get('/delete-cookie', (req, res) => {
  res.cookie('myCookie', '', { expires: new Date(0), path: '/' });
  res.send('Cookie has been deleted');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
