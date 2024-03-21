import PropTypes from "prop-types";
const CartMenuItem = ({ name, price, count }) => {
  return (
    <section className="flex px-3 py-3 my-2 border rounded-2xl">
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 ml-4">
        <div>
          <div className="flex justify-between text-base font-medium text-slate-50">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="ml-4 text-slate-50">${price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-200">Blue</p>
        </div>
        <div className="flex items-end justify-between flex-1 text-sm">
          <p className="text-slate-50">Qty {count} </p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-slate-50 hover:text-slate-200"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartMenuItem;

CartMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
