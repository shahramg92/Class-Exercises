// Query Parameters: Tell the year you were born
//
// Adding to the same program, display the year you were born when you report your age in a query parameter. For example, when you go to the URL:
//
// /year?age=32 it will display You were born in 1985.

const express = require('express');
const app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.get('/cats', function (request, response) {
  response.send('Meow')
});

app.get('/dogs', function (request, response) {
  response.send('Woof')
});

app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together')
});

app.get('/greet/:name', function(request, response) {
  var name = request.params.name || 'world';
  response.send('Hello ' + name + '!');
});

app.get('/age/:year', function(request, response) {
  let year = request.params.year;
  let age = (2017 - year);
  response.send('You are rougly ' + age + ' years old!')
});


app.listen(8000, function () {
  console.log('Port 8000 is good to go');
});
