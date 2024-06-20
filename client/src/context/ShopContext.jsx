/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  //Products State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Cart State
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  //Product Functions
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

  //Cart Functions
  const addToCart = (product) => {
    // Find if product exists in cartItems
    const productExists = cartItems.find((item) => item._id === product._id);

    if (productExists) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item._id === product.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((product) => product._id !== productId)
    );
  };

  const increaseCartItemCount = (productId) => {
    setCartItems((prevCart) =>
      prevCart.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const setCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  //Search Functions
  const setSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
    console.log(isSearchOpen);
  };

  const contextValue = {
    products,
    cartItems,
    isCartOpen,
    loading,
    error,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    fetchProducts,
    increaseCartItemCount,
    setCartOpen,
    setSearchOpen,
    isSearchOpen,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
