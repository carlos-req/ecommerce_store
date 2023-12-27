const ProfilePage = () => {
  let fName = "johhny";
  let date = "2023-12-10";
  return (
    <main className="w-full h-screen mt-24 ">
      <section>
        <h1 className="text-4xl font-bold text-slate-100">
          Welcome back, {fName}! 👋
        </h1>
        <p className="font-bold text-slate-400">customer since {date}</p>

        <div>
          <button className="uppercase">logout</button>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-8">
        <h3 className="text-xl uppercase">My orders</h3>
        {/* Table of ourders */}
      </section>
    </main>
  );
};

export default ProfilePage;
