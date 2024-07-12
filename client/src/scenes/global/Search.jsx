import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const { products } = useContext(ShopContext);
  const results = products.slice(4);
  const navigate = useNavigate();

  const { isSearchOpen, setSearchOpen } = useContext(ShopContext);

  return (
    <div
      className={
        isSearchOpen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          : "hidden"
      }
    >
      <div className="relative w-full max-w-3xl p-4 rounded-lg shadow-lg bg-background">
        <button className="absolute text-gray-400 top-6 right-6 hover:text-gray-400">
          <FaTimes
            size={20}
            onClick={() => {
              setSearchOpen();
            }}
          />
        </button>
        <div className="flex items-center mb-4">
          <FaSearch className="mr-2 text-gray-400" />
          <input
            type="text"
            className="w-full p-2 bg-[#2a2a2a] border-b border-gray-700 rounded-lg text-primary200 focus:outline-none placeholder-slate-100"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter"}
          />
        </div>
        <h3 className="mb-2 text-lg font-bold text-primary">
          Popular Searches
        </h3>
        <ul className="mb-4 cursor-pointer text-primary200">
          <li onClick={() => setQuery("Amplify")}>Amplify</li>
          <li onClick={() => setQuery("Amplify Shorts")}>Amplify Shorts</li>
          <li onClick={() => setQuery("Amplify Leggings")}>Amplify Leggings</li>
          <li onClick={() => setQuery("Amplify Bra")}>Amplify Bra</li>
        </ul>
        <h3 className="mb-2 text-lg font-bold text-primary">
          Trending Products
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {results.map((product) => (
            <div
              key={product._id}
              className="p-2 bg-gray-200 rounded-lg shadow-sm"
              onClick={() => {
                navigate(`/${product._id}`);
                setSearchOpen();
              }}
            >
              <img
                src={product.imageSrc}
                alt={product.name}
                className="object-contain w-full h-40 mb-2 rounded-lg"
              />
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-black">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
