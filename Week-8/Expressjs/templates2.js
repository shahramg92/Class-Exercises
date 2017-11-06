// Create this array in your server program:
//
// var animals = [
//   { name: 'cats', favorite: true },
//   { name: 'dogs', favorite: true },
//   { name: 'tree frogs', favorite: true },
//   { name: 'earth worms', favorite: false },
//   { name: 'guinea pigs', favorite: true },
// ];
// Feel free to change to match your current state of mind.
//
// Create a page at the URL /fav_animals that will render an ordered list of those animals which are your favorite.


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
