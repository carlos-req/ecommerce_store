import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsBySearch,
  setSearchOptions,
} from "../../features/products/productsSlice";
import ProductThumbnailCat from "../global/ProductThumbnailCat";

const Mens = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch action to set search options with gender as "mens"
    dispatch(setSearchOptions({ group: "men" }));

    // Dispatch action to fetch products by search options
    dispatch(fetchProductsBySearch());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);

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
        {products.map((product) => {
          return <ProductThumbnailCat key={product._id} product={product} />;
        })}
      </section>
    </main>
  );
};
export default Mens;
