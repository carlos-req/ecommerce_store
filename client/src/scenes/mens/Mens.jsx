import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsBySearch,
  setSearchOptions,
} from "../../features/products/productsSlice";
import ProductThumbnailCat from "../global/ProductThumbnailCat";

const Mens = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { searchOptions } = useSelector((state) => state.products);

  useEffect(() => {
    // Dispatch action to set search options
    dispatch(setSearchOptions({ group: ["men", "both"] }));
  }, [dispatch]);

  useEffect(() => {
    // Dispatch action to fetch products by search options
    dispatch(fetchProductsBySearch(searchOptions));
  }, [dispatch, searchOptions]);

  return (
    <main className="flex-1 w-full h-screen mt-20 mb-20">
      <section>
        <h2 className="text-sm font-semibold text-subtitle">Mens</h2>
        <section className="flex flex-col">
          <p className="text-3xl font-bold tracking-tighter uppercase text-primary">
            All Mens Products
          </p>
          <p className="text-sm tracking-tight text-subtitle">
            {products.length} Products
          </p>
        </section>
      </section>
      <section className="my-3">
        {products.map((product) => (
          <ProductThumbnailCat key={product._id} product={product} />
        ))}
      </section>
    </main>
  );
};
export default Mens;
