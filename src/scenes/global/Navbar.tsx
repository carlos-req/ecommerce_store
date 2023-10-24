import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <header className="fixed flex justify-center items-center w-full h-[80px] top-0 left-0 p-2">
        <nav className=" flex justify-items-center items-center justify-between h-[50px] w-4/6 rounded-[2rem] bg-stone-950 px-5 bg-opacity-50 backdrop-blur-md">
          <section>
            <Link to="/">
              <p className="font-bold text-slate-50 ">MENTALITY</p>
            </Link>
          </section>
          <section className="flex gap-5">
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
          <section className="flex gap-5">
            <FaSearch color="#e2e8f0" size={20} />
            <FaShoppingCart color="#e2e8f0" size={20} />
          </section>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
