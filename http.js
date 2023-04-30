const http = require('http');
const server = http.createServer((req, res) => {
 if (req.url == '/') {
  res.end("welcome to our homepage");
 }
 if (req.url == '/about') {
  //res.write();
  res.end("our history");
 }
 res.end("wrong webpage you are looking for");
})
server.listen(5000);