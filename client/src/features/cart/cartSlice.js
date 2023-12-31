import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  items: [],
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.includes(action.payload.item)
        ? increaseCount(action.payload.item)
        : (state.cart = [...state.cart, action.payload.item]);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        item.id === action.payload.id ? item.count++ : item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        item.id === action.payload.id && item.count > 1 ? item.count-- : item;
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
