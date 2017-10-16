// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:
// You are allowed to use a loop in the implementation of callNTimes.

function hello () {
  console.log("Hello, world!");
}

function callNTimes(num, fun) {
  for (var count = 0; count < num; count++) {
    fun();
  }
}

callNTimes(8, hello);
