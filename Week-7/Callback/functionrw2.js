// Function Rewrites with a Delay
// Add a 1000 millisecond delay to the callback versions of the exercise above.

let add = function(a,b){
  return a + b;
}

let subtract = function(a,b){
  return a - b;
}

let greeting = function(person, callback){
  return 'Hola, ' + person + '!';
}

let product = function(numbers, callback) {
  var ans = numbers.reduce(function(a, b) {
    return a * b;
  }, 1);

  callback(ans);
}

let anything = function(x, callback) {
  return callback(x);
}

let calc = function(num1, num2, f, callback){
  setTimeout(function(){
  var ans = f(num1, num2);
  if (callback) {
    callback(ans);
  }
}, 2000);
}

console.log(calc(2,3,add, function (ans) {
  console.log(ans);
}));
console.log(anything('James', greeting));
product([2, 3, 4], function (ans) {
  console.log(ans);
})
