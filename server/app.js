const http = require("http");

function rqListner(req, res) {
  console.log("Ashish");
}
const server = http.createServer(rqListner);

server.listen(4000);
