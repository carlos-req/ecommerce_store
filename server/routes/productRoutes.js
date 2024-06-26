import express from "express";
import {
  getProducts,
  getProductsBySearch,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

// All the routes related to product

//Get Products - Public
router.get("/", getProducts);

//Add product - Private
//router.post("/", isAdmin, newProduct);
router.post("/", newProduct);

//Get Products by Search - Public
router.post("/search", getProductsBySearch);

//Get product - Public
router.get("/:id", getProduct);

//Update product - Private
router.put("/:id", updateProduct);

//delete product - Private
router.delete("/:id", deleteProduct);

export default router;
