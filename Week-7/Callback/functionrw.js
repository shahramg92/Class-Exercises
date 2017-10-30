// Rewrite the following normal functions into callback functions.
//
// function add(x, y) {
//   var result = x + y;
//   return result;
// }
//
// function subtract(x, y) {
//   return x - y;
// }
//
// function greeting(person) {
//   return 'Hola, ' + person + '!';
// }
//
// function product(numbers) {
//   return numbers.reduce(function(a, b) {
//     return a * b;
//   }, 1);
// }

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

let calc = function(num1, num2, callback){
  return callback(num1, num2);
}

console.log(calc(2,3,add));
console.log(anything('James', greeting));
product([2, 3, 4], function (ans) {
  console.log(ans);
})
