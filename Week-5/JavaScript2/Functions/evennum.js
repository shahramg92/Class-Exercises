// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenNum(n) {
  return n % 2 == 0;
}

console.log(array.filter(evenNum));
