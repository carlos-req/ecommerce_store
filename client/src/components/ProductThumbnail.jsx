import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductThumbnail = ({ product, selectedTab }) => {
  const navigate = useNavigate();

  const { imageSrc, imageAlt, group, _id } = product;
  return (
    <div
      key={_id}
      className={`${
        (selectedTab.toLowerCase() === "men's" &&
          (group === "men" || group === "both")) ||
        (selectedTab.toLowerCase() === "women's" &&
          (group === "women" || group === "both"))
          ? ""
          : "hidden"
      }`}
    >
      <div
        onClick={() => {
          navigate(`/${_id}`);
        }}
        className="relative cursor-pointer bg-secondary w-28 md:w-44 rounded-xl group"
      >
        <img
          className="shadow-xl rounded-2xl group-hover:opacity-75"
          src={imageSrc}
          alt={imageAlt}
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
