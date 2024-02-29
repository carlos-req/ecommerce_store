import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetSearchOptions,
  setSearchOptions,
} from "../../features/products/productsSlice";
import Spinner from "../../components/Spinner";
import ProductThumbnailCat from "../global/ProductThumbnailCat";
import { useFetchProductBySearch } from "../../hooks/useFetchProductBySearch";

const Mens = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  // Setting search options
  useEffect(() => {
    dispatch(setSearchOptions({ group: ["men", "both"] }));
    return () => {
      dispatch(resetSearchOptions());
    };
  }, [dispatch]);

  // Call custom hook
  useFetchProductBySearch();

  if (isLoading) {
    return <Spinner />;
  }

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
      <section className="flex gap-3 mt-6">
        {products.map((product) => (
          <ProductThumbnailCat key={product._id} product={product} />
        ))}
      </section>
    </main>
  );
};
export default Mens;
