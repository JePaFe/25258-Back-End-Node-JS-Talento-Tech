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
  if (typeof req.body.nombre == undefined) {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  const { nombre, precio, categorias } = req.body;

  const product = await model.createProduct(nombre, precio, categorias);

  res.status(201).json(product);
};
