import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();

  const selectedProduct = products.find((product) => product._id === id);

  return (
    <div className="w-full h-screen mt-20 mb-24">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <FaAngleLeft color="#FFF" />
        <p className="tracking-tighter uppercase text-md text-slate-100">
          All products
        </p>
      </button>
      <p className="text-4xl font-bold text-zinc-200">
        {selectedProduct.productName}
      </p>
      <div className=" w-96">
        <img
          alt={`${selectedProduct.productName} product image`}
          src={selectedProduct.imageURL}
        />
      </div>
      <p className="text-xl text-slate-100">{selectedProduct.price}</p>
      <p className="text-xl text-slate-100">{selectedProduct.description}</p>
      <h3 className="text-lg font-black tracking-tighter uppercase text-slate-100">
        Collection:
      </h3>
      <p className="text-sm uppercase text-slate-100">
        {selectedProduct.clothingColl}
      </p>
    </div>
  );
};
export default Product;
