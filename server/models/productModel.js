//database model for products
import { Schema, model } from "mongoose";

const productSizeSchema = new Schema({
  size: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
});

const ProductSchema = new Schema({
  name: {
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
  imageURL: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
  },
  clothingColl: {
    type: String,
  },
  group: {
    type: String,
    enum: ["men", "women", "both"],
    default: "both",
  },
  sizes: [productSizeSchema],
});

export const ProductModel = model("products", ProductSchema);
