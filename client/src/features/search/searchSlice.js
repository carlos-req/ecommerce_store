import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpen: false,
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
  },
});

export const { setIsSearchOpen } = searchSlice.actions;

export default searchSlice.reducer;
