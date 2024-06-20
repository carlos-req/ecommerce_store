import { ProductModel } from "../models/productModel.js";

// GET/public
const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    if (!products) {
      return res.status(400).json({ message: "No Products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//POST /public
const getProductsBySearch = async (req, res) => {
  try {
    const { _id, name, catalog, group } = req.body;
    const query = {};
    if (_id) query._id = _id;
    if (name) query.name = { $in: name };
    if (catalog) query.catalog = catalog;
    if (group) query.group = group;

    const products = await ProductModel.find(query);

    if (!products) {
      return res.status(400).json({ message: "No Products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// POST/private
const newProduct = async (req, res) => {
  const {
    name,
    price,
    imageSrc,
    imageAlt,
    type,
    description,
    highlights,
    color,
    series,
    materials,
    tags,
    group,
    sizes,
  } = req.body;

  try {
    if (!name || !price || !description || !imageSrc || !sizes) {
      return res
        .status(400)
        .json({ message: "required fields are not present" });
    }
    //creating new product in DB
    const newProduct = new ProductModel({
      name,
      price,
      imageSrc,
      imageAlt,
      type,
      description,
      highlights,
      color,
      series,
      materials,
      tags,
      group,
      sizes,
    });
    console.log(newProduct);
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// GET/public
const getProduct = async (req, res) => {
  const { _id } = req.body;
  try {
    const product = await ProductModel.find({ _id });
    if (!product) res.status(400).json({ message: "product not found" });
  } catch (err) {
    res.status(500).json({ message: err });
  }

  res.status(200).json({ message: "Product found" });
};

// PUT/private
const updateProduct = (req, res) => {
  res.status(200).json({ message: "User profile Updated" });
};

// DEL/private
const deleteProduct = (req, res) => {
  res.status(200).json({ message: "User profile Updated" });
};

export {
  getProducts,
  getProductsBySearch,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
