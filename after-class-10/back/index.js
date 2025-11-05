import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   res.send("En mantenimiento");
// });

const products = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 200 },
  { id: 3, name: "Producto 3", price: 300 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  //   console.log(req.body.name);
  const { name, price } = req.body;

  const product = {
    id: Math.max(...products.map((p) => p.id)) + 1,
    name,
    price,
  };

  products.push(product);

  res.status(201).json(product);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
