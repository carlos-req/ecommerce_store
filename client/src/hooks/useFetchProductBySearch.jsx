import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetSearchOptions,
  fetchProductsBySearch,
} from "../features/products/productsSlice";
//import { toast } from "react-toastify";

export const useFetchProductBySearch = () => {
  const dispatch = useDispatch();

  const { searchOptions, isError, message, isSuccess } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    // Dispatch action to fetch products by search options
    if (!searchOptions.group == "") {
      dispatch(fetchProductsBySearch(searchOptions));
    }
    setTimeout(() => dispatch(resetSearchOptions()), 1000);
  }, [dispatch, searchOptions, isError, message, isSuccess]);
};
