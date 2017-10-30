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
  return numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
}

let anything = function(x, callback) {
  return callback(x);
}

let calc = function(num1, num2, callback){
  return callback(num1, num2);
}

console.log(calc(2,3,add));
console.log(anything('James', greeting));
