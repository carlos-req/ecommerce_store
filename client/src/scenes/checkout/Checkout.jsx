import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../lib/axios";
import ButtonOutlined from "../../components/ButtonOutlined";
import addmore from "/addmore.png";
import { FaPlus } from "react-icons/fa";

const Checkout = () => {
    const { cartItems } = useContext(ShopContext);
    const { user } = useContext(AuthContext);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleCheckout = async (e) => {
        e.preventDefault();

        let reqUser = null;
        user !== null ? (reqUser = user) : (reqUser = null);

        //setting cart items to local storage incase canceled
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        try {
            const response = await axios.post(
                `payments/create-checkout-session`,
                {
                    products: cartItems,
                    user: reqUser,
                }
            );
            const session = response.data;

            if (!session || !session.url) {
                throw new Error("Session URL not found");
            }

            window.location.href = session.url;
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    return (
        <main className="flex-1 w-full h-screen mt-20 mb-20">
            <h1 className="text-3xl text-white">Cart Summary</h1>
            <div className="flow-root">
                <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5">
                        {cartItems?.map((product) => {
                            return (
                                <section key={product._id}>
                                    <div className="w-full overflow-hidden cursor-pointer bg-secondary rounded-2xl group">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="object-cover object-center w-full h-full group-hover:opacity-75"
                                        />
                                    </div>
                                    <h4 className="mt-2 text-sm font-bold text-primary200">
                                        {product.name}
                                    </h4>
                                    <p className="text-xs text-primary">
                                        {product.quantity} - ${product.price}
                                        ,&nbsp;
                                        {product.selectedSize.toUpperCase()}
                                    </p>
                                </section>
                            );
                        })}
                        {cartItems.length < 2 && (
                            <section key={1011}>
                                <div className="w-full overflow-hidden cursor-pointer bg-secondary rounded-2xl group">
                                    <Link
                                        to="/"
                                        className="relative flex items-center justify-center"
                                    >
                                        <FaPlus
                                            className="absolute z-10 text-primary"
                                            size={30}
                                        />
                                        <img
                                            src={addmore}
                                            alt="Add more items"
                                            className="object-cover object-center w-full h-full border border-white aspect-auto group-hover:opacity-75 blur-xl "
                                        />
                                    </Link>
                                </div>
                                <p className="mt-2 text-sm font-bold text-center text-primary200">
                                    Add more items
                                </p>
                                <p className="mt-1 text-lg font-medium text-primary"></p>
                            </section>
                        )}
                    </div>
                </div>
            </div>

            <form
                onSubmit={handleCheckout}
                className="flex justify-center mx-auto"
            >
                <ButtonOutlined
                    type="submit"
                    title="Checkout"
                    textSize={"xl"}
                ></ButtonOutlined>
            </form>
        </main>
    );
};

export default Checkout;
