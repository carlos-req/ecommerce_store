import { Link } from "react-router-dom";
const CheckoutCancel = () => {
    return (
        <main className="flex-1 w-full h-screen mt-20 mb-20">
            <section>
                <p className="my-10 text-3xl text-primary">
                    Payment Cancelled. Please try again.
                </p>
                <Link to="/">
                    <button
                        type="submit"
                        className="px-12 py-4 text-xl font-black tracking-tighter uppercase duration-200 ease-in-out lg:px-4 lg:py-2 lg:rounded-lg bg-primary bg-opacity-80 text-secondary lg:text-base rounded-2xl transation hover:bg-opacity-100 hover:drop-shadow-md hover:text-gray-600"
                    >
                        Home
                    </button>
                </Link>
            </section>
        </main>
    );
};
export default CheckoutCancel;
