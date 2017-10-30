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

function add (x, y, callback) {
  var result = x + y;
  callback(result);
}
function multiply (x, y, callback) {
  var result = x * y;
  callback(result);
}
add(1, 2, function (result) {
  multiply(result, 3, function (final_result) {
    console.log(final_result);
  });
});
