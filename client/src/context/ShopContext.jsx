/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}products`
      );
      setProducts(response.data);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch products";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const contextValue = {
    products,
    cartItems,
    cartIsOpen,
    loading,
    error,
    setCartIsOpen,
    addToCart,
    removeFromCart,
    fetchProducts,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
