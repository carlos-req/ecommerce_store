import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleLeft, FaTimes, FaPlus } from "react-icons/fa";
import { addToCart } from "../../features/cart/cartSlice";

const Product = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [toggleDesc, setToggleDesc] = useState(false);

  const selectedProduct = products.find((product) => product._id === id);
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
          <p className="my-2 text-sm font-black text-primary">${price}</p>
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
              <h3 className="text-sm text-primary">Description</h3>
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
            {sizes.map((size) => (
              <button
                key={size.size}
                className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem] hover:bg-ctaborder border rounded-2xl border-ctaborder transition-all active:scale-90 active:bg-secondary"
              >
                {size.size}
              </button>
            ))}
          </section>
          <div className="w-full my-2">
            <button
              onClick={() => {
                dispatch(addToCart({ ...selectedProduct, count }));
              }}
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
