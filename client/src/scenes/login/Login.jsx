import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  //return a spinner if loading
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="absolute left-0 w-full top-1/4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 mx-auto w-[80vw] max-w-[30rem]"
      >
        <h1 className="text-3xl font-black tracking-tight uppercase text-slate-100">
          log into my account
        </h1>
        <div className="flex flex-col w-full px-20 form-item">
          <label className="text-xs font-black text-slate-200">
            Email Address:
          </label>
          <input
            className="w-full px-6 py-3 my-4 text-xs ease-in-out bg-transparent border-2 border-solid outline-none border-slate-400 rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
          ></input>
        </div>
        <div className="flex flex-col w-full px-20 form-item">
          <label className="text-xs font-black text-slate-200">Password:</label>
          <input
            className="w-full px-6 py-3 my-4 text-xs ease-in-out bg-transparent border-2 border-solid outline-none border-slate-400 rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          ></input>
        </div>
        <div className="w-full px-20 form-item">
          <button className="px-10 py-4 uppercase bg-slate-100 bg-opacity-80 text-[#0d0d0d] font-black  tracking-tighter text-md w-full rounded-2xl transation ease-in-out duration-200 hover:bg-opacity-100 hover:drop-shadow-md ">
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
