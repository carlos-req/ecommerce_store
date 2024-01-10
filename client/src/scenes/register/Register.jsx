import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import { useAuthEffect } from "../../hooks/useAuthEffect";
import { FormField } from "../../components/FormField";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { isLoading } = useAuthEffect();
  const dispatch = useDispatch();

  //destructure form data
  const { firstName, lastName, email, password } = formData;

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
      firstName,
      lastName,
      email,
      password,
    };
    console.log(userData);
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
        <FormField
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
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
