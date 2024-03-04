import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Find product if exists in cart
      const productExists = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (productExists) {
        //increase count if product already exists
        state.cart = state.cart.map((product) => {
          if (product._id === action.payload._id) {
            return { ...product, count: product.count + 1 };
          } else {
            return product;
          }
        });
      } else {
        //Add product to cart
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product._id === action.payload._id) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
        product._id === action.payload._id && product.count > 1
          ? product.count--
          : product;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  setIsSearchOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
