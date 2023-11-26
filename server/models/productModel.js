//database model for products
import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

export const Product = model("Product", ProductSchema);
