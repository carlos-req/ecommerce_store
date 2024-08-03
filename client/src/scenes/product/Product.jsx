import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { ShopContext } from "../../context/ShopContext";
import { toast } from "react-toastify";

const Product = () => {
    const { id } = useParams();
    const { products, addToCart } = useContext(ShopContext);
    const navigate = useNavigate();

    //State
    const [toggleDesc, setToggleDesc] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [count, setCount] = useState(1);
    const selectedProduct = products.find((product) => product._id === id);

    //Add to bag handler
    const handleAddToCart = () => {
        if (selectedSize == null || count == 0) {
            toast.error("Please select a size");
        } else {
            addToCart(selectedProduct, selectedSize, count);
        }
    };

    useEffect(() => {
        if (!selectedProduct) {
            navigate("/");
        }
        return () => {};
    }, [selectedProduct, navigate]);

    const {
        name,
        description,
        imageSrc,
        imageAlt,
        type,
        price,
        sizes,
        tags,
        materials,
        highlights,
        color,
    } = selectedProduct;
    return (
        <div className="container p-4 mx-auto mt-28">
            {/* Back Button */}
            <button
                className="flex items-center px-3 py-1 text-xs font-black tracking-wider uppercase bg-primary rounded-3xl"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <FaAngleLeft className="text-secondary" />
                <p className="tracking-tighter uppercase text-md text-secondary">
                    All products
                </p>
            </button>
            <section className="flex flex-wrap items-center gap-6 mt-10">
                {/* Left Section */}
                <section className="w-full lg:w-1/3">
                    <p className="my-2 text-2xl font-black tracking-tight text-left uppercase text-primary200">
                        {name}
                    </p>
                    <p className="text-sm text-primary">{type}</p>
                    <p className="my-2 font-black text-primary"> {color} </p>
                    <div className="flex gap-1">
                        {tags.map((tag, index) => {
                            return (
                                <p
                                    key={index}
                                    className="px-1 text-xs font-black tracking-tighter uppercase rounded-sm bg-primary text-secondary w-fit"
                                >
                                    {tag}
                                </p>
                            );
                        })}
                    </div>
                    <p className="my-2 text-sm font-black text-primary">
                        ${price}
                    </p>
                    <hr className="my-2 opacity-30 bg-primary" />
                    <ul className="pl-4 text-sm list-disc text-primary">
                        {highlights.map((highlight, index) => {
                            return <li key={index}>{highlight}</li>;
                        })}
                    </ul>
                    <hr className="my-2 opacity-30 bg-primary" />
                    <section>
                        <section className="flex justify-between">
                            <h3 className="text-sm text-primary">Materials</h3>
                            <p className="text-xs text-primary">{materials}</p>
                        </section>
                    </section>
                    <hr className="my-2 opacity-30 bg-primary" />
                    <section>
                        <section className="flex justify-between">
                            <h3 className="text-sm text-primary">
                                Description
                            </h3>
                            {toggleDesc ? (
                                <FaTimes
                                    className="cursor-pointer text-primary"
                                    onClick={() => {
                                        setToggleDesc(!toggleDesc);
                                    }}
                                />
                            ) : (
                                <FaPlus
                                    className="cursor-pointer text-primary"
                                    onClick={() => {
                                        setToggleDesc(!toggleDesc);
                                    }}
                                />
                            )}
                        </section>
                        <p
                            className={`my-2 text-sm text-primary transition-transform transform ${
                                toggleDesc
                                    ? "scale-100 opacity-100"
                                    : "scale-90 opacity-0 hidden"
                            } duration-300 ease-in`}
                            style={{ transitionProperty: "opacity, transform" }}
                        >
                            {description}
                        </p>
                    </section>
                </section>
                {/* Middle Section */}
                <section className="w-full lg:flex-1">
                    <img
                        alt={imageAlt}
                        src={imageSrc}
                        className="w-full h-auto rounded-2xl"
                    />
                </section>
                {/* Right Section */}
                <section className="w-full lg:w-1/3">
                    <section className="flex items-center justify-between">
                        <p className="my-2 text-xs font-black text-left uppercase text-primary200">
                            select size
                        </p>
                        <p className="px-1 py-[2px] my-2 text-[.60rem] text-right uppercase border cursor-pointer text-subtitle border-ctaborder">
                            size guide
                        </p>
                    </section>
                    <section className="flex flex-wrap gap-1 text-xs text-primary">
                        {sizes.map((size) =>
                            // if size is in stock
                            size.stock != 0 ? (
                                <button
                                    key={size.size}
                                    className={
                                        size.size === selectedSize
                                            ? "bg-primary text-secondary w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem] hover:bg-ctaborder border rounded-2xl border-ctaborder transition-all scale-90 "
                                            : "w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem] hover:bg-ctaborder border rounded-2xl border-ctaborder transition-all active:scale-90 "
                                    }
                                    onClick={() => {
                                        setSelectedSize(size.size);
                                        setCount(1);
                                    }}
                                >
                                    {size.size}
                                </button>
                            ) : null
                        )}
                    </section>
                    {selectedSize && (
                        <section className="flex items-center gap-1 my-2 text-sm font-black text-primary">
                            <p className="text-xs uppercase">Quantity:</p>
                            <section
                                className={
                                    count === 1
                                        ? "disabled  text-sm opacity-40"
                                        : "text-sm cursor-pointer"
                                }
                                onClick={() => {
                                    count === 1
                                        ? setCount(1)
                                        : setCount(count - 1);
                                }}
                            >
                                <FaMinus />
                            </section>
                            <p className="text-center text-primary">{count}</p>
                            <section
                                className="text-sm cursor-pointer"
                                onClick={() => {
                                    setCount(count + 1);
                                }}
                            >
                                <FaPlus />
                            </section>
                        </section>
                    )}
                    <div className="w-full my-2">
                        <button
                            onClick={handleAddToCart}
                            className="w-full px-10 py-4 font-black tracking-tighter uppercase transition duration-200 ease-in-out bg-primary text-secondary text-md rounded-2xl hover:bg-subtitle hover:drop-shadow-md"
                        >
                            Add to Bag
                        </button>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Product;
