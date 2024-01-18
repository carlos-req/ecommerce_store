import { useSelector } from "react-redux";
import ButtonOutlined from "../../components/ButtonOutlined";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName } = user;
  return (
    <main className="w-full h-screen mx-auto mt-32">
      <section className="flex flex-col items-center justify-between gap-4 md:px-20 lg:flex-row ">
        <h1 className="text-2xl font-bold uppercase text-slate-100">
          Welcome back, {firstName}! 👋
        </h1>
        <ButtonOutlined
          width="20rem"
          title="Logout"
          textSize="md"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        />
      </section>

      <section className="flex flex-wrap items-center justify-center gap-8">
        <h3 className="mt-10 text-xl uppercase text-slate-100">My orders</h3>
        {/* Table of ourders */}
      </section>
    </main>
  );
};

export default ProfilePage;
