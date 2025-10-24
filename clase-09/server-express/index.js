import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Middleware");
  // res.send("<h1>Middleware</h1>");
  next();
});

app.get("/", (req, res) => {
  res.send("Hola Express - GET");
});

app.post("/", (req, res) => {
  res.send("Hola Express - POST");
});

app.get("/plomero", (req, res) => {
  res.sendFile(process.cwd() + "/plumber.jpg");
});

console.log(process.cwd());

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
