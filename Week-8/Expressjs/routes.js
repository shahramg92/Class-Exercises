// Routes
//
// Add to your program the following pages:
//
// "Meow" at the URL /cats
// "Woof" at the URL /dogs
// "Living together" at the URL /cats_and_dogsvar express = require('express');

const express = require('express');
const app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});
app.get('/cats', function (request, response) {
  response.send('Meow')
})
app.get('/dogs', function (request, response) {
  response.send('Woof')
})
app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together')
})

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
