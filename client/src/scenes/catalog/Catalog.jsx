import { useContext, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { FaChevronDown } from "react-icons/fa6";
import { ShopContext } from "../../context/ShopContext";

const filters = [
    {
        name: "Styles",
        options: [
            "Featured",
            "Best Selling",
            "Newest",
            "Price: Low-High",
            "Price: High-Low",
        ],
    },
    { name: "Gender", options: ["Women", "Men", "Unisex"] },
    { name: "Color", options: ["Black", "Blue", "White"] },
    { name: "Size", options: ["XS", "S", "M", "L", "XL"] },
    { name: "Fit", options: ["Tight", "Relaxed", "Loose"] },
    { name: "Product Type", options: ["Shorts", "Leggings", "Tops"] },
    { name: "Collection", options: ["Amplify", "Tenacity", "Aura"] },
];

const FilterSection = ({ filter, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <hr className="my-2 opacity-30 bg-primary" />
            <h3
                className="flex items-center justify-between mb-2 font-semibold cursor-pointer text-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                {filter.name}
                <FaChevronDown
                    size={10}
                    className={`transform transition-transform text-primary ${isOpen ? "rotate-180" : ""}`}
                />
            </h3>
            {isOpen && (
                <div className="ml-2">
                    {filter.options.map((option) => (
                        <div key={option} className="flex items-center mb-1">
                            <input
                                type="checkbox"
                                id={`${filter.name}-${option}`}
                                className="mr-2 text-primary"
                                onChange={(e) =>
                                    onFilterChange(
                                        filter.name,
                                        option,
                                        e.target.checked
                                    )
                                }
                            />
                            <label
                                htmlFor={`${filter.name}-${option}`}
                                className="text-primary"
                            >
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Catalog = () => {
    const [activeFilters, setActiveFilters] = useState({});
    const { products } = useContext(ShopContext);

    const handleFilterChange = (filterName, option, checked) => {
        setActiveFilters((prev) => ({
            ...prev,
            [filterName]: {
                ...prev[filterName],
                [option]: checked,
            },
        }));
    };

    // Commented out filter logic
    /*
  const filteredProducts = products.filter(product => {
    // Apply filters here
    // Example: return all products if no filters are active, otherwise check each filter
    return Object.keys(activeFilters).every(filterName => {
      const activeOptions = Object.keys(activeFilters[filterName]).filter(option => activeFilters[filterName][option]);
      if (activeOptions.length === 0) return true; // No active options for this filter
      // Check if the product matches any of the active options for this filter
      // This is a simplified example and would need to be adjusted based on your actual product data structure
      return activeOptions.includes(product[filterName.toLowerCase()]);
    });
  });
  */

    return (
        <div className="flex-1 w-full h-screen mt-20 mb-20">
            <div className="container px-4 py-8 mx-auto">
                <section className="mb-10">
                    <h1 className="text-sm font-semibold text-subtitle">
                        Catalog
                    </h1>
                    <p className="text-3xl font-bold uppercase text-primary">
                        All Products
                    </p>
                    <p className="text-sm tracking-tight text-primary">
                        {/*filteredProducts.length */} X Products
                    </p>
                </section>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full pr-8 md:w-1/4">
                        {filters.map((filter) => (
                            <FilterSection
                                key={filter.name}
                                filter={filter}
                                onFilterChange={handleFilterChange}
                            />
                        ))}
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                            {products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
