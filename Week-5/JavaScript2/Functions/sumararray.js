// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.reduce(function getSum (x, y) {
  console.log(x, y);
  return x + y;
}));
