import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, imageSrc, imageAlt, price, _id } = product;
  const navigate = useNavigate();

  return (
    <section
      onClick={() => {
        navigate(`/${_id}`);
      }}
      key={_id}
      className="cursor-pointer group"
    >
      <div className="w-full overflow-hidden bg-secondary rounded-2xl ">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-primary200">{name}</h3>
      <p className="mt-1 text-lg font-medium text-primary">${price}</p>
    </section>
  );
};
export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
