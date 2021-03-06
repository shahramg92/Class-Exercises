// Given an array of urls:
//
// var urls = [
//   'https://en.wikipedia.org/wiki/Futures_and_promises',
//   'https://en.wikipedia.org/wiki/Continuation-passing_style',
//   'https://en.wikipedia.org/wiki/JavaScript',
//   'https://en.wikipedia.org/wiki/Node.js',
//   'https://en.wikipedia.org/wiki/Google_Chrome'
// ];
// Use Promise.all and request-promise to retrieve the HTML files for all the web pages.

var rp = require('request-promise');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

var plist = [];
urls.forEach(function (url) {
  var p = rp(url);
  plist.push(p);
});

Promise.all(plist)
  .then(function (responses) {
    console.log(responses);
  });
