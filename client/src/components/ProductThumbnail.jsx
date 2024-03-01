import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductThumbnail = ({ product, selectedTab }) => {
  const navigate = useNavigate();
  return (
    <div
      key={product._id}
      className={`${
        (selectedTab.toLowerCase() === "men's" &&
          (product.group === "men" || product.group === "both")) ||
        (selectedTab.toLowerCase() === "women's" &&
          (product.group === "women" || product.group === "both"))
          ? ""
          : "hidden"
      }`}
    >
      <div
        onClick={() => {
          navigate(`/${product._id}`);
        }}
        className="relative cursor-pointer bg-secondary w-28 md:w-44 rounded-xl group"
      >
        <img
          className="shadow-xl rounded-2xl group-hover:opacity-75"
          src={product.imageURL}
        />
      </div>
    </div>
  );
};
export default ProductThumbnail;

ProductThumbnail.propTypes = {
  product: PropTypes.object.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
