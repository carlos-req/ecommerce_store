import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import ButtonOutlined from "../../components/ButtonOutlined";
import tempImage from "../../../public/gray.jpg";

const ProductDisplay = () => {
    const { cartItems } = useContext(ShopContext);

    const handleCheckout = async (e) => {
        e.preventDefault();
        try {
            console.log(cartItems);
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL_BASE}/create-checkout-session`,
                {
                    items: cartItems,
                }
            );
            //console.log(response);
            window.location = response.data;
        } catch (error) {
            console.error("Error creating checkout session:", error);
            alert(
                "There was an error processing your checkout. Please try again."
            );
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
                                <section
                                    key={product._id}
                                    className="cursor-pointer group"
                                >
                                    <div className="w-full overflow-hidden bg-secondary rounded-2xl ">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="object-cover object-center w-full h-full group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-primary200">
                                        {product.name}
                                    </h3>
                                    <p className="mt-1 text-lg font-medium text-primary">
                                        {product.quantity} - ${product.price}
                                        ,&nbsp;
                                        {product.selectedSize.toUpperCase()}
                                    </p>
                                </section>
                            );
                        })}
                        {cartItems.length < 2 && (
                            <section
                                key={1011}
                                className="cursor-pointer group"
                            >
                                <div className="w-full overflow-hidden bg-secondary rounded-2xl ">
                                    <img
                                        src={tempImage}
                                        alt="Add more items"
                                        className="object-cover object-center w-full h-full aspect-auto group-hover:opacity-75 blur-xl"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-center text-primary200">
                                    Add more items
                                </h3>
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

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Checkout() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? <Message message={message} /> : <ProductDisplay />;
}
