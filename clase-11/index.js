import express from "express";

const app = express();

const products = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 200 },
  { id: 3, name: "Producto 3", price: 300 },
];

// /api/priducts?price=200

app.get("/api/products", (req, res) => {
  //   console.log(req.query);
  const { price } = req.query;

  if (price) {
    const productsFilter = products.filter((item) => item.price >= price);
    res.json(productsFilter);
    return;
  }

  res.json(products);
});

// app.get("/api/products/1", (req, res) => {
// app.get("/api/products/2", (req, res) => {

app.get("/api/products/:id", (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  //   const id = parseInt(req.params.id);

  const product = products.find((item) => item.id == id);

  if (!product) {
    res.status(404).json({ error: "El producto no existe" });
  }

  res.json(product);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
