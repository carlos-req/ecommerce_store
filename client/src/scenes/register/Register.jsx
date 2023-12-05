import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //destructure form data
  const { firstName, lastName, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      //make this toast.error
      console.log(message);
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

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(register(userData));
  };

  // return a spinner if loading
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="absolute left-0 w-full top-[22%]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 mx-auto w-[80vw] max-w-[30rem]"
      >
        <h1 className="text-3xl font-black tracking-tight uppercase text-slate-100">
          Register
        </h1>
        <div className="flex flex-col w-full px-20 form-item">
          <label
            htmlFor="firstName"
            className="text-xs font-black text-slate-200"
          >
            First Name:
          </label>
          <input
            className="w-full px-6 py-3 my-4 text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-slate-400 rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
            type="text"
            required
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={firstName}
          ></input>
        </div>
        <div className="flex flex-col w-full px-20 form-item">
          <label
            htmlFor="lastName"
            className="text-xs font-black text-slate-200"
          >
            Last Name:
          </label>
          <input
            className="w-full px-6 py-3 my-4 text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-slate-400 rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={lastName}
          ></input>
        </div>
        <div className="flex flex-col w-full px-20 form-item">
          <label htmlFor="email" className="text-xs font-black text-slate-200">
            Email Address:
          </label>
          <input
            className="w-full px-6 py-3 my-4 text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-slate-400 rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
          ></input>
        </div>
        <div className="flex flex-col w-full px-20 form-item">
          <label
            htmlFor="password"
            className="text-xs font-black text-slate-200"
          >
            Password:
          </label>
          <input
            className="w-full px-6 py-3 my-4 text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-slate-400 rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          ></input>
        </div>
        <div className="w-full px-20 form-item">
          <button
            type="submit"
            className="px-12 py-4 uppercase bg-slate-100 bg-opacity-80 text-[#0d0d0d] font-black  tracking-tighter text-md w-full rounded-2xl transation ease-in-out duration-200 hover:bg-opacity-100 hover:drop-shadow-md"
          >
            create a new account
          </button>
        </div>
        <div className="form-item">
          <h3 className="text-xs text-slate-200">
            Already a Member?&nbsp;
            <Link to="/login" className="font-bold text-white">
              Sign in here
            </Link>
          </h3>
        </div>
      </form>
    </section>
  );
};

export default Register;
