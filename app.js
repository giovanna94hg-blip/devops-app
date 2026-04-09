const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hola DevOps 🚀");
});

server.listen(3000, () => {
  console.log("Server corriendo en puerto 3000");
});
