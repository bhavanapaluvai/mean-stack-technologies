var fs = require('fs'); 
var content="";
 fs.readFile('sample.txt', 'utf8',function (err, data) 
 { 
         if (err) throw err;                         
        content=content+data; 
	console.log('First File Data Copied.'+content);
        console.log("<br>");
	fs.readFile('text.txt', 'utf8',function (err, data) 
        { 
                     if (err) throw err;                         
                     content=content+data; 
                     console.log('Second File Data Copied.'+content);
                    console.log("<br>");
	             fs.writeFile('mergefile.txt', content, function (err)
                       { 
                        if (err)
        			console.log(err);
                        else
       	       console.log('Merge operation complete.'+content);
              });
       });
  });
