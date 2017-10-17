// Implement your own custom forEach function which takes two arguments: an array arr and a function fun. It will call fun passing each item in arr to fun as the first argument. Example:

function forEach(list, fx) {
  for (i = 0; i < list.length; i++) {
    fx(list[i])
  }
}

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});
