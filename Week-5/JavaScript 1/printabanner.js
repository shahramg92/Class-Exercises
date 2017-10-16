// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.


function printBanner(text) {
  console.log('*'.repeat(text.length + 4));
  console.log('* ' + text + ' *');
  console.log('*'.repeat(text.length + 4));
}

printBanner('Welcome to DigitalCrafts');
