var fs = require('fs');

fs.appendFile('file1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated text lets check it');
});