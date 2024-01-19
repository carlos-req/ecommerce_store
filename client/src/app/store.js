import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import searchReducer from "../features/search/searchSlice";
import productsReducer from "../features/products/productsSlice";

//create redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    search: searchReducer,
    products: productsReducer,
  },
});
