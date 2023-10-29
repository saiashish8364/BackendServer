const fs = require("fs");
function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

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
    const path = "D:/git/Backend/createServer/server/message.txt";
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.write("<html>");
      res.write("<head><title>hello</title></head>");
      res.write(
        `<body><p>${data}<form action='/message' method='POST' ><input type='text' name='message'/><button type='submit'>send</button></body>`
      );
      res.write("</html>");
      return res.end();
    });
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
}
module.exports = requestHandler;
//exports.handler=requestHandler
