import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    lastName: "",
  });

  console.log(formData);
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <section className="absolute left-0 w-full top-1/4">
      <form className="flex flex-col items-center gap-6 mx-auto w-[80vw] max-w-[30rem]">
        <h1 className="text-xl font-black tracking-tighter uppercase text-slate-100">
          log into my account
        </h1>
        <div className="flex flex-col w-full px-16 form-item">
          <label className="text-xs font-black text-slate-200">
            Email Address:
          </label>
          <input
            className="w-full px-6 py-4 my-4 text-xs bg-transparent border-2 border-solid outline-none border-slate-100 rounded-2xl caret-slate-100"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col w-full px-16 form-item">
          <label className="text-xs font-black text-slate-200">Password:</label>
          <input
            className="w-full px-6 py-4 my-4 text-xs bg-transparent border-2 border-solid outline-none border-slate-100 rounded-2xl caret-slate-100"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          ></input>
        </div>
        <div className="w-full px-16 form-item">
          <button className="px-10 py-4 uppercase bg-slate-100 bg-opacity-80 text-[#0d0d0d] font-black  tracking-tighter text-md w-full rounded-2xl transation ease-in-out duration-200">
            Log In
          </button>
        </div>
        <div className="form-item">
          <h3 className="text-xs text-slate-200">
            New to Mentality?&nbsp;
            <Link to="/register" className="font-bold text-white">
              Create An Account
            </Link>
          </h3>
        </div>
      </form>
    </section>
  );
};

export default Login;
