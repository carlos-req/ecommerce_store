import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => {
        navigate(`/${product._id}`);
      }}
      key={product._id}
      className="cursor-pointer group"
    >
      <div className="w-full overflow-hidden bg-gray-200 rounded-2xl ">
        <img
          src={product.imageURL}
          alt={product.imageAlt}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-primary200">{product.productName}</h3>
      <p className="mt-1 text-lg font-medium text-primary">${product.price}</p>
    </section>
  );
};
export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
