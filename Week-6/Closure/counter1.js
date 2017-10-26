// Make a counter function that returns a function that returns a successive number each time it is called.

function counter () {
  var count = 0;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}

var x = counter();
console.log(x());
