import * as model from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  res.json(await model.getAllProducts());
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await model.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.json(product);
};

export const createProduct = async (req, res) => {
  if (typeof req.body.name == undefined) {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  const { name, price, categories } = req.body;

  const product = await model.createProduct({ name, price, categories });

  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categories } = req.body;

  const updatedProduct = await model.updateProduct(id, { name, price, categories });
  
  if (!updatedProduct) {
    return res.status(404).json({ error: "Not Found" });
  }
  
  res.json(updatedProduct);
};


export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await model.deleteProduct(id);

  if (!deleted) {
    return res.status(404).json({ error: "Not Found" });
  }

  res.json({ message: "Product deleted" });
};