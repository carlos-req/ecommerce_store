// GET/public
const getProducts = (req, res) => {
  res.status(200).json({ message: "User Registered" });
};

// POST/private
const newProduct = (req, res) => {
  res.status(200).json({ message: "User logged in" });
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
