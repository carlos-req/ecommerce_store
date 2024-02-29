import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsBySearch } from "../features/products/productsSlice";
//import { toast } from "react-toastify";

export const useFetchProductBySearch = () => {
  const dispatch = useDispatch();

  const { searchOptions, isError, message, isSuccess } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    // Dispatch action to fetch products by search options
    dispatch(fetchProductsBySearch(searchOptions));

    return () => {};
  }, [dispatch, searchOptions, isError, message, isSuccess]);
};
