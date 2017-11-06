// Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
//
// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc...

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
app.get('/hello/:name', function(request, response) {
  var name = request.params.name || 'world';
  response.send('Hello ' + name + '!');
});


app.listen(8000, function () {
  console.log('Listening on port 8000');
});
