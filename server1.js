const http = require("http");
var server = http.createServer((req,res) => {
	res.write("Hello World!");
	res.end();
});
server.listen(3000);
console.log("Server started... Running on localhost:3000");