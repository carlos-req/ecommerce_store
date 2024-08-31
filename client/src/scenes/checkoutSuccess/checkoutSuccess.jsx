import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";

const CheckoutSuccess = () => {
    const { clearCart } = useContext(ShopContext);
    const [isProcessing, setIsProcessing] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleCheckoutSuccess = async (sessionId) => {
            try {
                await axios.post(
                    `${import.meta.env.VITE_SERVER_URL}/payments/checkout-success`,
                    {
                        sessionId,
                    }
                );
                //create a clear cart function
                clearCart();
            } catch (error) {
                console.log(error);
            } finally {
                setIsProcessing(false);
            }
        };

        const sessionId = new URLSearchParams(window.location.search).get(
            "session_id"
        );
        if (sessionId) {
            handleCheckoutSuccess(sessionId);
        } else {
            setIsProcessing(false);
            setError("No session ID found in the URL");
        }
    }, [clearCart]);

    if (isProcessing) return "Processing...";

    if (error) return `Error: ${error}`;

    return <div> Checkout Success</div>;
};
export default CheckoutSuccess;
