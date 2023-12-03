import { ProductModel } from "../models/productModel.js";

// GET/public
const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    if (!products) {
      return res.status(400).json({ message: "No Products found" });
    }
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// POST/private
const newProduct = async (req, res) => {
  const {
    productName,
    price,
    description,
    stockQuantity,
    imageURL,
    clothingColl,
    group,
  } = req.body;

  try {
    if (!productName || !price || !description || !stockQuantity || !imageURL) {
      return res
        .status(400)
        .json({ message: "required fields are not present" });
    }
    //creating new product in DB
    const newProduct = new ProductModel({
      productName,
      price,
      description,
      stockQuantity,
      imageURL,
      clothingColl,
      group,
    });
    console.log(newProduct);
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// GET/public
const getProduct = (req, res) => {
  res.status(200).json({ message: "User profile found" });
};

// PUT/private
const updateProduct = (req, res) => {
  res.status(200).json({ message: "User profile Updated" });
};

// DEL/private
const deleteProduct = (req, res) => {
  res.status(200).json({ message: "User profile Updated" });
};

export { getProducts, newProduct, getProduct, updateProduct, deleteProduct };
