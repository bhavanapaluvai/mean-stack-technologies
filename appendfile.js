var fs = require('fs');
var data = "node.js";

fs.appendFile('demofile.txt', data,'utf8',
 function (err) {
  if (err) throw err;
  console.log('Saved!');
})


