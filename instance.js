const http = require('http');

const port = 443;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, Proyecto Aprobado');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
