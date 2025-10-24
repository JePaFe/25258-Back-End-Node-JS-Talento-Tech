import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end("Hola desde HTTP!!!");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
