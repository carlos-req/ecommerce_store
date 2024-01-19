import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  searchOptions: {
    name: "",
    catalog: "",
    gender: "",
  },
};

//fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (products, thunkAPI) => {
    try {
      return await productsService.fetchAllProducts(products);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//fetch products by search options
export const fetchProductsBySearch = createAsyncThunk(
  "products/fetchAllProducts",
  async (products, thunkAPI) => {
    try {
      return await productsService.fetchProductsBySearch(products);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchOptions: (state, action) => {
      state.searchOptions = action.payload;
    },
    resetSearchOptions: (state) => {
      state.searchOptions = initialState.searchOptions;
    },
  },
  /*
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {})
      .addCase(fetchAllProducts.fulfilled, (state) => {})
      .addCase(fetchAllProducts.rejected, (state) => {})
      .addCase(fetchProductsBySearch.pending, (state) => {})
      .addCase(fetchProductsBySearch.fulfilled, (state) => {})
      .addCase(fetchProductsBySearch.rejected, (state) => {});
  }, */
});

export const { setProducts, setSearchOptions, resetSearchOptions } =
  productsSlice.actions;

export default productsSlice.reducer;
