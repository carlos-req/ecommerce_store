import ButtonOutlined from "./components/ButtonOutlined";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl text-center uppercase text-slate-100">
        Whoops...
      </h1>
      <p className="mb-4 text-3xl text-center uppercase text-slate-100">
        Page not found
      </p>
      <Link to="/">
        <ButtonOutlined width="20rem" title="home" textSize="xl" />
      </Link>
    </div>
  );
};

export default Error;
