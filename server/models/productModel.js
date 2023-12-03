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
  clothingColl: {
    type: String,
  },
  group: {
    type: String,
    enum: ["men", "women", "both"],
    default: "both",
  },
});

export const ProductModel = model("products", ProductSchema);
