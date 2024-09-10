import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import ProductThumbnail from "../components/ProductThumbnail";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Spinner from "../components/Spinner";

const TabsComponent = ({ items, title, secTitle, path }) => {
    const [selectedTab, setSelectedTab] = useState(items[0]);
    const [focusedButton, setFocusedButton] = useState(items[0]);
    const navigate = useNavigate();
    const { products, loading } = useContext(ShopContext);

    useEffect(() => {
        setFocusedButton(selectedTab);
    }, [selectedTab]);

    return (
        <section className="w-full max-w-6xl px-2 py-10 mx-auto lg:px-12">
            <section className="flex items-start justify-between">
                <section>
                    <h4 className="mb-[-0.25rem] text-md text-primary">
                        {secTitle}
                    </h4>
                    <h3 className="text-xl font-bold uppercase text-primary">
                        {title}
                    </h3>
                </section>
                <section>
                    <button
                        className="px-3 py-1 text-xs font-black bg-primary rounded-3xl"
                        onClick={() => {
                            navigate(`${path}`);
                        }}
                    >
                        Shop All
                    </button>
                </section>
            </section>
            <div className="flex items-start pt-3 pb-12 text-xs">
                <div className="flex flex-col w-full max-w-[13rem] gap-y-2">
                    <div className="flex items-center justify-between p-1 font-bold border-2 border-red-800 text-primary rounded-3xl gap-x-2">
                        {items.map((item) => {
                            return (
                                <button
                                    key={item}
                                    onClick={() => {
                                        setSelectedTab(item);
                                        setFocusedButton(item);
                                    }}
                                    className={`outline-none w-full py-1 rounded-3xl text-center uppercase ease-in-out  transition-all duration-500${
                                        focusedButton === item
                                            ? " bg-red-800 text-primary "
                                            : ""
                                    } `}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>

                    {loading ? (
                        <Spinner />
                    ) : (
                        <div className="flex flex-row flex-wrap gap-3 product--thumbnail-container">
                            {products?.map((product) => {
                                return (
                                    <ProductThumbnail
                                        key={product._id}
                                        product={product}
                                        selectedTab={selectedTab}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TabsComponent;

TabsComponent.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    secTitle: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};
