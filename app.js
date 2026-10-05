const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola! La meva app funciona 🚀\n");
});

server.listen(3000, () => {
  console.log("App escoltant al port 3000");
});
