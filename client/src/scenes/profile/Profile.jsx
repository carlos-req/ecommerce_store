import ButtonOutlined from "../../components/ButtonOutlined";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const { firstName } = user;
  return (
    <main className="w-full h-screen mx-auto mt-32">
      <section className="flex flex-col items-center justify-between gap-4 md:px-20 lg:flex-row ">
        <h1 className="text-2xl font-bold uppercase text-primary">
          Welcome back, {firstName}! 👋
        </h1>
        <ButtonOutlined
          width="20rem"
          title="Logout"
          textSize="md"
          onClick={() => {
            logout();
            navigate("/");
          }}
        />
      </section>

      <section className="flex flex-wrap items-center justify-center gap-8">
        <h3 className="mt-10 text-xl uppercase text-primary">My orders</h3>
        {/* Table of ourders */}
      </section>
    </main>
  );
};

export default ProfilePage;
