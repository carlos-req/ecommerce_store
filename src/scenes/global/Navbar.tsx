import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <header className="fixed flex justify-center w-full h-[60px] top-0 left-0 p-2">
        <nav className=" flex justify-items-center items-center justify-center h-[40px] w-5/6 rounded-[2rem] bg-slate-100">
          <div className="">Mentality</div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
