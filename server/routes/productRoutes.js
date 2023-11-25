import express from "express";
import {
  getProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// All the routes related to product

//Get Products route
router.get("/", getProducts);

//Add new product
router.post("/", newProduct);

//Get individual product
router.get("/:id", getProduct);

//Update individual product
router.put("/:id", updateProduct);

//delete individual product
router.delete("/:id", deleteProduct);

export default router;
