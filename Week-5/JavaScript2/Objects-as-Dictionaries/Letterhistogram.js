// Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:
// > letterHistogram('bananas')
// { b: 1, a: 3, n: 2, s: 1 }
// Note: the order of the keys doesn't matter.

function letterHistogram(string) {
  let histogram = {};
    for (var i = 0; i < string.length; i++) {
      let char = string[i]
      if (char in histogram) {
        histogram[char] += 1;
      }
      else {
        histogram[char] = 1;
      }
    }
    return histogram;
  }

console.log(letterHistogram('bananas'));
