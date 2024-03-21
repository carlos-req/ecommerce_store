import React, { useState } from "react";
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

  return (
    <React.Fragment>
      <div className="w-full h-screen mt-28 ">
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
        <section className="flex items-center gap-6 mt-20">
          {/* Left Section */}
          <section className="w-6/12">
            <p className="my-2 text-2xl font-black tracking-tight text-left uppercase text-primary200">
              {selectedProduct.productName}
            </p>
            <p className="text-sm text-primary">
              Men Performance Short Sleeve Tee
            </p>
            <p className="my-2 font-black text-primary"> White </p>
            <div>
              <p className=" p-0.5 text-xs font-black tracking-tighter uppercase rounded-sm  bg-primary text-secondary w-fit">
                New style
              </p>
            </div>
            <p className="my-2 text-sm font-black text-primary">
              ${selectedProduct.price}
            </p>
            <hr className="my-2 opacity-30 bg-primary" />
            <ul className="pl-4 text-sm list-disc text-primary">
              <li>Fitted short sleeve</li>
              <li>Sweat-wicking, breathable fabric</li>
              <li>Rubberized aplique on chest</li>
              <li>Soft stretch fabric</li>
              <li>Straight hemline style</li>
            </ul>
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
                  toggleDesc ? "scale-100 opacity-100" : "scale-90 opacity-0"
                } duration-300 ease-in`}
                style={{ transitionProperty: "opacity, transform" }}
              >
                {selectedProduct.description}
              </p>
            </section>
          </section>
          {/* Middle Section */}
          <section className="flex-auto">
            <img
              alt={`${selectedProduct.productName} product image`}
              src={selectedProduct.imageURL}
              className="cover-image rounded-2xl"
            />
          </section>
          {/* Right Section */}
          <section className="w-6/12">
            <section className="flex items-center justify-between">
              <p className="my-2 text-xs font-black text-left uppercase text-primary200">
                select size
              </p>
              <p className="px-1 py-[2px] my-2 text-[.60rem] text-right uppercase border cursor-pointer text-subtitle border-ctaborder">
                size guide
              </p>
            </section>
            <section className="flex flex-wrap gap-1 text-xs text-primary">
              <button className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem] border rounded-2xl border-ctaborder transition-all active:scale-90  active:bg-secondary">
                xxs
              </button>
              <button className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem]  border rounded-2xl border-ctaborder transition-all active:scale-90  active:bg-secondary">
                xs
              </button>
              <button className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem]  border rounded-2xl border-ctaborder transition-all active:scale-90  active:bg-secondary">
                sm
              </button>
              <button className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem]  border rounded-2xl border-ctaborder transition-all active:scale-90  active:bg-secondary">
                m
              </button>
              <button className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem]  border rounded-2xl border-ctaborder transition-all active:scale-90  active:bg-secondary">
                l
              </button>
              <button className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem]  border rounded-2xl border-ctaborder transition-all active:scale-90  active:bg-secondary">
                xl
              </button>
              <button className="w-auto uppercase mr-[5px] mb-[5px] min-w-[3.5rem] min-h-[3.5rem]  border rounded-2xl border-ctaborder transition-all active:scale-90  active:bg-secondary">
                xxl
              </button>
            </section>
            <div className="w-full my-2">
              <button
                onClick={() => {
                  dispatch(addToCart({ ...selectedProduct, count }));
                }}
                className="w-full px-10 py-4 font-black tracking-tighter uppercase duration-200 ease-in-out bg-primary bg-opacity-80 text-secondary text-md rounded-2xl transation hover:bg-opacity-100 hover:drop-shadow-md "
              >
                Add to Bag
              </button>
            </div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Product;
