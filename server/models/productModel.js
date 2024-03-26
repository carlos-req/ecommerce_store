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

const imageDetailsSchema = new Schema({
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
  image: [imageDetailsSchema],
  type: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  highlights: [String],
  color: {
    type: String,
  },
  collection: {
    type: String,
  },
  materials: {
    type: String,
  },
  tags: [String],
  group: {
    type: String,
    enum: ["men", "women", "both"],
    default: "both",
  },
  sizes: [productSizeSchema],
});

export const ProductModel = model("products", ProductSchema);
