import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
const CartMenuItem = ({ item }) => {
  const { productName, price, count, imageURL, description } = item;

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
          <div className="flex justify-between text-sm font-medium text-slate-50">
            <h3>
              <a href="#">{productName}</a>
            </h3>
            <p className="pr-2 text-sm text-slate-50">${price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-200">Blue</p>
        </div>
        <div className="flex items-end justify-between flex-1 text-sm">
          <p className="text-slate-50">Qty {count} </p>

          <div className="flex pr-2">
            <FaTrashAlt className="text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartMenuItem;

CartMenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};
