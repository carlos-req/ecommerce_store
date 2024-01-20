import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../features/products/productsSlice";

const TabsComponent = ({ items, title, secTitle, path }) => {
  const [selectedTab, setSelectedTab] = useState(items[0]);
  const [focusedButton, setFocusedButton] = useState(items[0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    setFocusedButton(selectedTab);
  }, [selectedTab]);

  return (
    <section className="w-full max-w-6xl px-2 py-10 mx-auto lg:px-12">
      <section className="flex items-start justify-between">
        <section>
          <h4 className="mb-[-0.25rem] text-md text-slate-100">{secTitle}</h4>
          <h3 className="text-xl font-bold uppercase text-slate-100">
            {title}
          </h3>
        </section>
        <section>
          <button
            className="px-3 py-1 text-xs font-black tracking-wider uppercase bg-slate-100 rounded-3xl"
            onClick={() => {
              navigate(`${path}`);
            }}
          >
            shop all
          </button>
        </section>
      </section>
      <div className="flex items-start pt-3 pb-12 text-xs">
        <div className="flex flex-col w-full max-w-[13rem] gap-y-2">
          <div className="flex items-center justify-between p-1 font-bold text-white border-2 border-red-800 rounded-3xl gap-x-2">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSelectedTab(item);
                  setFocusedButton(item);
                }}
                className={`outline-none w-full py-1 rounded-3xl text-center uppercase ease-in-out  transition-all duration-500${
                  focusedButton === item ? " bg-red-800 text-slate-100 " : ""
                } `}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-row w-full gap-3">
            {products.map((product) => (
              <div
                key={product._id}
                className={`${
                  (selectedTab.toLowerCase() === "men's" &&
                    (product.group === "men" || product.group === "both")) ||
                  (selectedTab.toLowerCase() === "women's" &&
                    (product.group === "women" || product.group === "both"))
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="w-32">
                  <img src={product.imageURL} />
                </div>

                <p className="text-lg text-slate-100">{product.price}</p>
              </div>
            ))}
          </div>
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
