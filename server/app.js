const http = require("http");

function rqListner(req, res) {
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>hello</title></head>");
    res.write("<body><h1>welcome home</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>hello</title></head>");
    res.write("<body><h1>welcome to about</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>hello</title></head>");
    res.write("<body><h1>welcome to my node js project</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>hello</title></head>");
    res.write("<body><h1>welcome</h1></body>");
    res.write("</html>");
    res.end();
  }

  //process.exit();
}
const server = http.createServer(rqListner);

server.listen(3000);
