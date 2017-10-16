// Write a function wordHistogram which takes a string as argument and tallies the number of times each word appears in the string, and returns the tally as an object. Example:
//
// > wordHistogram('to be or not to be')
// { to: 2, be: 2, or: 1, not: 1 }

function wordHistogram(string) {
  var words = string.split(' ');
  var histogram = {};
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (word in histogram) {
        histogram[word] += 1;
      }
      else {
        histogram[word] = 1;
      }
    }
    return histogram;
  }


console.log(wordHistogram("I hate this assignment"));
