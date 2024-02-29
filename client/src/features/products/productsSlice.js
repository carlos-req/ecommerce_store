import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  searchOptions: {
    name: "",
    catalog: "",
    group: "",
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (thunkAPI) => {
    try {
      return await productsService.fetchAllProducts();
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
  "products/fetchProductsBySearch",
  async (searchOptions, thunkAPI) => {
    try {
      return await productsService.fetchProductsBySearch(searchOptions);
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
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setSearchOptions: (state, action) => {
      state.searchOptions = {
        ...state.searchOptions,
        ...action.payload,
      };
    },
    resetSearchOptions: (state) => {
      state.searchOptions = initialState.searchOptions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchProductsBySearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsBySearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(fetchProductsBySearch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setSearchOptions, resetSearchOptions } =
  productsSlice.actions;

export default productsSlice.reducer;
