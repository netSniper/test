var http = require('http');
http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<h1>Node.js</h1>');
res.end('<p>Hello World</p>');
}).listen(5000);
//添加注释
console.log("HTTP server is listening at port 5000.");
console.log(123);






