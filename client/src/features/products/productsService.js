import axios from "axios";

const API_URL = "http://localhost:5080/api/products/";

// Fetch all products
const fetchAllProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Fetch products using search options
const fetchProductsBySearch = async (searchOptions) => {
  const response = await axios.get(API_URL, searchOptions);

  return response.data;
};

const productsService = {
  fetchAllProducts,
  fetchProductsBySearch,
};

export default productsService;
