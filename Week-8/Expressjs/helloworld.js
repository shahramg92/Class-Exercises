// Make an express program that will display "Hello, world!" at the root URL: /

const express = require('express');
const app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});
app.listen(8000, function () {
  console.log('Listening on port 8000');
});
