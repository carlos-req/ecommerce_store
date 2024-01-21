import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  const selectedProduct = products.find((product) => product._id === id);

  return (
    <div className="w-full h-screen">
      <p className="text-4xl font-bold text-zinc-200">
        {selectedProduct.productName}
      </p>
    </div>
  );
};
export default Product;
