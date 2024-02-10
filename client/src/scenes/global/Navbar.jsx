import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { setIsCartOpen, setIsSearchOpen } from "../../features/cart/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  //handle behavior of user icon
  const handleClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("login");
    }
  };

  return (
    <React.Fragment>
      <header className=" z-30 fixed flex justify-center items-center w-full h-[80px] top-0 left-0 p-2">
        <nav className=" flex justify-items-center items-center justify-between h-[50px] md:w-7/8 w-full rounded-[2rem] max-w-[1440px] bg-zinc-900 px-5 bg-opacity-20 backdrop-saturate-200 backdrop-blur-md drop-shadow-xl">
          <section>
            <NavLink to="/">
              <p className="font-bold text-slate-50 ">MENTALITY</p>
            </NavLink>
          </section>
          <section className="hidden gap-5 md:flex">
            <NavLink to="/womens">
              <p className="font-bold text-slate-200 hover:border-b-slate-100 hover:border-b-4 hover:transition-transform hover:scale-110">
                Women
              </p>
            </NavLink>
            <NavLink to="/mens">
              <p className="font-bold text-slate-200 hover:border-b-slate-100 hover:border-b-4 hover:transition-transform hover:scale-110">
                Men
              </p>
            </NavLink>
          </section>
          <section className="flex gap-5 cursor-pointer">
            <FaSearch
              color="#e2e8f0"
              size={20}
              onClick={() => {
                dispatch(setIsSearchOpen());
              }}
            />
            <FaUser color="#e2e8f0" size={20} onClick={handleClick} />
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
