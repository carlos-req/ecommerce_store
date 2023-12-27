import { useSelector } from "react-redux";
import ButtonOutlined from "../../components/ButtonOutlined";
const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  const { firstName } = user;
  return (
    <main className="w-full h-screen mx-auto mt-32">
      <section className="flex flex-col items-center justify-between gap-4 md:px-20 lg:flex-row ">
        <h1 className="text-2xl font-bold uppercase text-slate-100 ">
          Welcome back, {firstName}! 👋
        </h1>
        <ButtonOutlined width="20rem" title="Logout" textSize="md" />
      </section>

      <section className="flex flex-wrap items-center justify-center gap-8">
        <h3 className="text-xl uppercase">My orders</h3>
        {/* Table of ourders */}
      </section>
    </main>
  );
};

export default ProfilePage;
