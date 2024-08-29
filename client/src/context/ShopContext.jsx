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
    const addToCart = (product, selectedSize, count) => {
        // Find if product exists in cartItems with the same _id and selectedSize
        const productExistsWithSameSize = cartItems.find(
            (item) =>
                item._id === product._id && item.selectedSize === selectedSize
        );

        if (productExistsWithSameSize) {
            // If the product with the same size exists, update the quantity
            setCartItems((prevCart) =>
                prevCart.map((item) => {
                    if (
                        item._id === product._id &&
                        item.selectedSize === selectedSize
                    ) {
                        return {
                            ...item,
                            quantity: item.quantity + count,
                        };
                    } else {
                        return item;
                    }
                })
            );
        } else {
            // If the product with the same size does not exist, add it as a new item
            console.log(product);
            setCartItems((prevCart) => [
                ...prevCart,
                { ...product, quantity: count, selectedSize },
            ]);
        }
    };

    const removeFromCart = (cartItem) => {
        // Remove the item from the cart if it has the same _id and selectedSize
        console.log(cartItem);
        setCartItems((prevCart) =>
            prevCart.filter(
                (item) =>
                    !(
                        item._id === cartItem._id &&
                        item.selectedSize === cartItem.selectedSize
                    )
            )
        );
    };

    const increaseCartItemCount = (productId) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item._id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const setCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    //Search Functions
    const setSearchOpen = () => {
        setIsSearchOpen(!isSearchOpen);
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
        setCartItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};
