import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const CartMenuItem = ({ product }) => {
  const { productName, price, count, imageURL, description } = product;
  const dispatch = useDispatch();

  return (
    <section className="flex px-3 py-2 my-2 border rounded-2xl">
      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
        <img
          src={imageURL}
          alt={description}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 ml-4">
        <div>
          <div className="flex justify-between text-sm font-medium text-primary">
            <h3>
              <a href="#">{productName}</a>
            </h3>
            <p className="pr-2 text-sm text-subtitle">${price}</p>
          </div>
          <p className="mt-1 text-sm text-subtitle">Color</p>
        </div>
        <div className="flex items-end justify-between flex-1 text-sm">
          <p className="text-slate-50">Qty: {count} </p>

          <div
            className="flex p-1 rounded-lg cursor-pointer hover:text-red-400 hover:bg-gray-200 hover:bg-opacity-10"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <FaTrashAlt className="text-red-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartMenuItem;

CartMenuItem.propTypes = {
  product: PropTypes.object.isRequired,
};
