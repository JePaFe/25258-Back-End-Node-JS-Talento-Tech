import productService from "../services/products.service.js";

export const getProducts = (req, res) => {
  res.json(productService.getProducts());
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = productService.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.json(product);
};

export const createProduct = (req, res) => {
  if (typeof req.body.name == undefined) {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  const { name } = req.body;

  const product = productService.createProduct(name);

  res.status(201).json(product);
};
