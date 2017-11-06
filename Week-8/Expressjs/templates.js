// Templates
//
// Make the greet page say hello to visitor and tell the year they were born. This time you will use a .hbs file in the views folder to render the message using HTML.
//
// For example, if you go to the URL:
//
// /greet/Manoush?age=32
//
// The server should render the html:
//
// <h1>Hello, Manoush!</h1>
// <p>You were born in 1985.</p>

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
  let name = request.params.name;
  let year = parseInt(request.query.year);
  let age = (2017 - year);
  context = {
    name: name,
    year: year
  }
  response.render('greet.hbs', context);
});
// http://localhost:8000/greet/Shahram?year=23 example of url input

app.get('/age/:year', function(request, response) {
  let year = request.params.year;
  let age = (2017 - year);
  response.send('You are rougly ' + age + ' years old!')
});


app.listen(8000, function () {
  console.log('Port 8000 is good to go');
});
