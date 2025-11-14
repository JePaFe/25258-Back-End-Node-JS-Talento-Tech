import { Router } from "express";

const router = Router();

import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/products.controller.js";

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);

export default router;
