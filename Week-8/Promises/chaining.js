// Chaining
//
// Using request-promise and fs-promise modules build a function called saveWebPage which takes two parameters, url and filename. The function should chain the two promises together to download the URL and then save the file.

const fs = require('fs-extra');
const rp = require('request-promise');

var url = 'https://weather.shahramghassemi.com';
var filename = 'file1.txt';


var saveWebPage = function(url,filename) {
  rp(url).then(function(htmlString){
    return fs.outputFile(filename,htmlString);
  }).then(() => console.log('success!'));
}

saveWebPage(url,filename);
