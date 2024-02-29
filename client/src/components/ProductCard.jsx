import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div key={product._id}>
      <div
        onClick={() => {
          navigate(`/${product._id}`);
        }}
        className="relative cursor-pointer w-28 md:w-44 rounded-xl group"
      >
        <p className="absolute z-10 hidden text-lg font-black transform -translate-x-1/2 bottom-4 left-1/2 text-primary group-hover:block">
          {product.price}
        </p>
        <button
          onClick={() => {}}
          className="absolute z-10 hidden transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 group-hover:block"
        >
          <FaPlus size={40} color="#fff" />
        </button>
        <div className="absolute z-0 hidden md:h-[13.75rem] py-20 transform -translate-x-1/2 -translate-y-1/2 w-[7.1em] md:w-[11.1rem] opacity-80 rounded-2xl top-1/2 left-1/2 group-hover:block bg-gray-950 backdrop-saturate-200 backdrop-blur-xs bg-opacity-60"></div>
        <img className="shadow-xl rounded-2xl " src={product.imageURL} />
      </div>
    </div>
  );
};
export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
