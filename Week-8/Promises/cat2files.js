// Cat 2 Files
//
// Write a function that takes two input filenames and one output filename. Read the files and combine the file contents. Write the combined contents to the output file. Use a promise style to chain the reading and writing together.

var readline = require('readline');
var fs = require('fs');


var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdin
});

r1.question("Enter a filename you want to use as input", function(filename)){
  return console.log(fs.readFile(filename));

}
