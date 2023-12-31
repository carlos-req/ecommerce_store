import { Link } from "react-router-dom";
import gray from "/gray.jpg";
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
            className="drop-shadow-xl rounded-3xl"
            src={gray}
            alt="gray shirt"
          />
        </section>
        <section className="relative max-w-lg">
          <img
            className="drop-shadow-xl rounded-3xl"
            src={gray}
            alt="gray shirt"
          />
        </section>
      </div>
      <TabsComponent
        items={["Men's", "Women's"]}
        title="Fall Collection"
        secTitle="All"
      />
    </main>
  );
};

export default Home;
