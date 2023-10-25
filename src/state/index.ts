/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

type InitStateType = {
  isCartOpen: boolean;
  items: MyItemType[];
  cart: Array<any>;
  isSearchOpen: boolean;
  search: string;
};

type MyItemType = {
  id: number;
  name: string;
  count: number;
};

const initialState: InitStateType = {
  isCartOpen: false,
  items: [],
  cart: [],
  isSearchOpen: false,
  search: "",
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
    setIsSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
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
