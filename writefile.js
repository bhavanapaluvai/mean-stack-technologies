var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content is replaces the specified file and content if it exists with write()  method.!', function (err) {
  if (err) throw err;
  console.log('hello !');
});