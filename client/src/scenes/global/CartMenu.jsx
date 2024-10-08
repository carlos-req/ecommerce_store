import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import CartMenuItem from "../../components/CartMenuItem";
import { FaTimes } from "react-icons/fa";

const CartMenu = () => {
    const { isCartOpen, cartItems, setCartOpen } = useContext(ShopContext);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className={isCartOpen ? "relative z-20" : "hidden"}>
            <div className="fixed inset-0 bg-opacity-20 bg-zinc-900 backdrop-saturate-125 backdrop-blur-md drop-shadow-xl"></div>
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 flex overflow-hidden">
                    <div className="fixed bottom-0 right-0 flex max-w-full pl-10 pointer-events-none top-24">
                        <div className="w-screen max-w-md pointer-events-auto">
                            <div className="flex flex-col  border shadow-xl h-[90%] bg-background border-ctaborder border-opacity-40 rounded-xl">
                                <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2
                                            className="text-lg font-black uppercase text-primary"
                                            id="slide-over-title"
                                        >
                                            Shopping cart
                                        </h2>
                                        <div
                                            className="flex items-center px-2 py-1 ml-3 cursor-pointer h-7 hover:bg-gray-200 hover:bg-opacity-10 rounded-xl"
                                            onClick={() => {
                                                setCartOpen();
                                            }}
                                        >
                                            <FaTimes className="text-primary hover:text-primary200" />
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <div className="flow-root">
                                            <ul>
                                                {cartItems?.map((product) => {
                                                    return (
                                                        <CartMenuItem
                                                            key={
                                                                product._id +
                                                                Math.floor(
                                                                    Math.random() *
                                                                        1000000
                                                                )
                                                            }
                                                            product={product}
                                                        />
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 py-6 border-t border-ctaborder sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-primary">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-subtitle">
                                        Shipping and taxes calculated at
                                        checkout.
                                    </p>
                                    <Link
                                        to="/checkout"
                                        onClick={() => {
                                            setCartOpen();
                                        }}
                                    >
                                        <button className="flex items-center justify-center w-full px-6 py-3 mt-6 text-base font-black uppercase border border-transparent rounded-md shadow-sm bg-primary text-secondary hover:bg-subtitle">
                                            Checkout
                                        </button>
                                    </Link>

                                    <div
                                        onClick={() => {
                                            setCartOpen();
                                        }}
                                        className="flex justify-center mt-6 text-sm text-center text-gray-500"
                                    >
                                        <button
                                            type="button"
                                            className="font-medium text-primary hover:text-subtitle"
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
