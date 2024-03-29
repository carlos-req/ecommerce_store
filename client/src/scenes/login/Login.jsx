import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import { FormField } from "../../components/FormField";
import { useAuthEffect } from "../../hooks/useAuthEffect";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  //destructure form data
  const { email, password } = formData;

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

  const { isLoading } = useAuthEffect();

  //return a spinner if loading
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="w-full h-auto mb-20 mt-52">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 mx-auto w-[80vw] max-w-[30rem]"
      >
        <h1 className="text-3xl font-black tracking-tight uppercase text-primary">
          log into my account
        </h1>
        <FormField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="w-full px-20 form-item">
          <button className="w-full px-10 py-4 font-black tracking-tighter uppercase duration-200 ease-in-out bg-primary bg-opacity-80 text-secondary text-md rounded-2xl transation hover:bg-opacity-100 hover:drop-shadow-md ">
            Log In
          </button>
        </div>
        <div className="form-item">
          <h3 className="text-xs text-primary200">
            New to Mentality?&nbsp;
            <Link to="/register" className="font-bold text-primary">
              Create An Account
            </Link>
          </h3>
        </div>
      </form>
    </section>
  );
};

export default Login;
