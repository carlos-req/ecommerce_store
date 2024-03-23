import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { setIsCartOpen } from "../../features/cart/cartSlice";
import CartMenuItem from "../../components/CartMenuItem";
import { Link } from "react-router-dom";

const CartMenu = () => {
  const dispatch = useDispatch();

  const { isCartOpen, cart } = useSelector((state) => state.cart);
  console.log(cart);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className={isCartOpen ? "relative z-20" : "hidden"}>
      <div className="fixed inset-0 bg-opacity-20 bg-zinc-900 backdrop-saturate-125 backdrop-blur-md drop-shadow-xl"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 flex overflow-hidden">
          <div className="fixed bottom-0 right-0 flex max-w-full pl-10 pointer-events-none top-24">
            <div className="w-screen max-w-md pointer-events-auto">
              <div className="flex flex-col overflow-y-scroll border shadow-xl h-[90%] bg-zinc-900 border-slate-100 border-opacity-40 rounded-xl">
                <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-black uppercase text-slate-100"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div
                      className="flex items-center ml-3 cursor-pointer h-7"
                      onClick={() => {
                        dispatch(setIsCartOpen());
                      }}
                    >
                      <FaTimes color="#fff" />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flow-root">
                      <ul className="">
                        {cart?.map((item) => {
                          return <CartMenuItem key={item._id} item={item} />;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-slate-100">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(setIsCartOpen());
                    }}
                    className="flex justify-center mt-6 text-sm text-center text-gray-500"
                  >
                    <button
                      type="button"
                      className="font-medium text-slate-100 hover:text-slate-200"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
