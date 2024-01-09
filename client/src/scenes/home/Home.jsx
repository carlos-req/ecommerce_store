import { Link } from "react-router-dom";
import gray from "/gray.jpg";
import whiteTop from "/gym_whitetop.jpg";
import gym from "/gym.jpg";
import TabsComponent from "../../components/TabsComponent";

const Home = () => {
  return (
    <main className="w-full h-screen mt-20 ">
      <div className="flex flex-wrap items-center justify-center gap-8">
        <section className="relative max-w-lg">
          <h3 className="absolute z-10 text-5xl font-bold bottom-36 left-12 text-slate-100">
            New
            <br />
            Arrivals
          </h3>
          <p className="absolute z-10 mb-2 text-sm font-bold bottom-28 left-12 text-slate-100">
            Introducing Aura, AirTech, and more...
          </p>
          <Link to="/women">
            <button className="absolute px-3 py-1 uppercase font-bold bg-[#ffffff4d] left-12 bottom-20 rounded-3xl text-slate-100 z-10">
              Shop Womens
            </button>
          </Link>
          <Link to="/men">
            <button className="absolute px-3 py-1 uppercase font-bold bg-[#ffffff4d] left-12 bottom-10 rounded-3xl text-slate-100 z-10">
              Shop Mens
            </button>
          </Link>
          <img
            className="drop-shadow-md rounded-3xl"
            src={gray}
            alt="gray shirt"
          />
        </section>
        <section className="relative max-w-lg">
          <img
            className="drop-shadow-md rounded-3xl brightness-90"
            src={whiteTop}
            alt="female in white workout top"
          />
        </section>
      </div>
      <TabsComponent
        items={["Men's", "Women's"]}
        title="Fall Collection"
        secTitle="All"
      />

      <section className="flex flex-wrap items-center justify-center">
        {/*gym*/}
        <section className="relative w-full h-auto">
          <img
            className=" drop-shadow-md rounded-3xl brightness-75"
            src={gym}
            alt="Mentality gym"
          />
          <section className="absolute left-0 flex-col items-center content-center w-full h-full text-center lg:flex top-1/4 drop-shadow-lg">
            <h3 className="text-5xl font-bold lg:text-8xl z-100 text-slate-100 drop-shadow-lg">
              Visit
              <br />
              Our Gym
            </h3>
            <p className="z-10 mb-2 text-sm font-bold lg:text-lg text-slate-100">
              An oasis where gym lovers can be found
            </p>
            <Link to="/gym">
              <button className="lg:text-xl px-3 py-1 uppercase font-bold bg-[#ffffff6b] drop-shadow-lg rounded-3xl text-slate-100 z-10">
                Learn more
              </button>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Home;
