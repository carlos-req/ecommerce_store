import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const results = [];
  //const [results, setResults] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleSearch = async () => {
  //   setLoading(true);
  //   setError(null);
  //   // TODO: Implement search logic
  // };

  const { isSearchOpen, setSearchOpen } = useContext(ShopContext);

  return (
    <div
      className={
        isSearchOpen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          : "hidden"
      }
    >
      <div className="relative w-full max-w-3xl p-4 rounded-lg shadow-lg bg-subtitle">
        <button className="absolute text-gray-500 top-4 right-4 hover:text-gray-700">
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
            className="w-full p-2 border-b border-gray-300 focus:outline-none"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter"}
          />
        </div>
        <h3 className="mb-2 text-lg font-bold">Popular Searches</h3>
        <ul className="mb-4">
          <li>Amplify</li>
          <li>Amplify Shorts</li>
          <li>Amplify Leggings</li>
          <li>Amplify Bra</li>
        </ul>
        <h3 className="mb-2 text-lg font-bold">Trending Products</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {results.map((product) => (
            <div
              key={product._id}
              className="p-2 bg-gray-100 rounded-lg shadow-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-40 mb-2 rounded-lg"
              />
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
