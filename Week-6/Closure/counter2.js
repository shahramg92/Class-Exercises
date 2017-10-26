// Allow the caller of counter to initialize the count to the first argument that's passed in.

function counter (start) {
  var actuallyCount = function () {
    start++;
    return start;
  }
  return actuallyCount;
}

var x = counter(3);
console.log(x());
console.log(x());
console.log(x());
