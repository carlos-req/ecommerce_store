import Spinner from "../../components/Spinner";
import ProductCard from "../../components/ProductCard";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
const Womens = () => {
    const { products, isLoading } = useContext(ShopContext);

    const filteredProducts =
        products?.filter(
            (product) => product.group === "women" || product.group === "both"
        ) || [];

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <main className="flex-1 w-full h-screen mt-20 mb-20">
            <section>
                <h2 className="text-sm font-semibold text-subtitle">Women's</h2>
                <section className="flex flex-col">
                    <p className="text-3xl font-bold uppercase text-primary">
                        All Women's Products
                    </p>
                    <p className="text-sm tracking-tight text-primary">
                        {filteredProducts?.length} Products
                    </p>
                </section>
            </section>
            <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5">
                    {filteredProducts?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
};
export default Womens;
