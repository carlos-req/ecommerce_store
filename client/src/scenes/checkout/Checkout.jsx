import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import ButtonOutlined from "../../components/ButtonOutlined";
import tempImage from "../../../public/gray.jpg";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PRIVATE_STRIPE);

const Checkout = () => {
    const { cartItems } = useContext(ShopContext);

    const handleCheckout = async (e) => {
        e.preventDefault();
        const stripe = await stripePromise;

        //setting cart items to local storage incase canceled
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}payments/create-checkout-session`,
            {
                products: cartItems,
            }
        );
        const session = response.data;

        console.log(session);

        /* const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

         if (result.error) {
            console.error("Error:", result.error);
        } */
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

/* export default function CheckoutV2() {
    const [message, setMessage] = useState(null);
    const location = useLocation();
    const { addToCart } = useContext(ShopContext);

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );

            // Retrieve cart items from localStorage
            let cartItems = localStorage.getItem("cartItems");

            if (cartItems) {
                // Parse cart items and add them to the cart
                const parsedCartItems = JSON.parse(cartItems);
                parsedCartItems.forEach((item) => {
                    // Assuming the item structure has properties: product, selectedSize, count
                    addToCart(item, item.selectedSize, item.quantity);
                });
            }

            // Clear cart items from localStorage
            localStorage.removeItem("cartItems");
        }

        return () => {};
    }, [location]);
} */

export default Checkout;
