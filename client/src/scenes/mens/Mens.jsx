import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../features/products/productsSlice";
import ProductThumbnailCat from "../global/ProductThumbnailCat";

const Mens = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);

  return (
    <main className="flex-1 w-full h-screen mt-20 mb-20">
      <section>
        <h2 className="text-sm font-semibold  text-[#ffffffc0]">Mens</h2>
        <section className="flex flex-col">
          <p className="text-3xl font-bold tracking-tighter uppercase text-slate-100">
            All Mens Products
          </p>
          <p className="text-sm tracking-tight text-[#ffffffc0]">
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
