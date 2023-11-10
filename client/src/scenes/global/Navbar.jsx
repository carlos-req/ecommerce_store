import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setIsCartOpen, setIsSearchOpen } from "../../state";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart.isCartOpen);
  return (
    <React.Fragment>
      <header className=" z-10 fixed flex justify-center items-center w-full h-[80px] top-0 left-0 p-2">
        <nav className=" flex justify-items-center items-center justify-between h-[50px] w-4/6 rounded-[2rem] bg-stone-950 px-5 bg-opacity-50 backdrop-blur-md drop-shadow-lg">
          <section>
            <Link to="/">
              <p className="font-bold text-slate-50 ">MENTALITY</p>
            </Link>
          </section>
          <section className="hidden gap-5 md:flex">
            <Link to="/">
              <p className="font-bold text-slate-200 hover:border-b-slate-100 hover:border-b-4 hover:transition-transform hover:scale-110">
                Women
              </p>
            </Link>
            <Link to="/">
              <p className="font-bold text-slate-200 hover:border-b-slate-100 hover:border-b-4 hover:transition-transform hover:scale-110">
                Men
              </p>
            </Link>
          </section>
          <section className="flex gap-5 cursor-pointer">
            <FaSearch
              color="#e2e8f0"
              size={20}
              onClick={() => {
                dispatch(setIsSearchOpen());
              }}
            />
            <FaShoppingCart
              color="#e2e8f0"
              size={20}
              onClick={() => {
                dispatch(setIsCartOpen());
              }}
            />
            {cart.length > 0 && (
              <section>
                <p className="absolute px-1 text-xs rounded-full top-2.5 bg-opacity-70 bg-slate-500 right-8 text-slate-100">
                  {cart.length}
                </p>
              </section>
            )}
          </section>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
