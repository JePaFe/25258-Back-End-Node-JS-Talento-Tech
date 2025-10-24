// console.log(__dirname);

import express from "express";

import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(join(__dirname, "plumber.jpg"));

const app = express();

app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "plumber.jpg"));
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
