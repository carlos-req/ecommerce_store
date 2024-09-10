import { Link } from "react-router-dom";
import gray from "/gray.jpg";
import whiteTop from "/gym_whitetop.jpg";
import gym from "/gym.jpg";
import TabsComponent from "../../components/TabsComponent";
import ProductShowcase from "../../components/ProductShowcase";

const Home = () => {
    return (
        <main className="flex-1 w-full h-screen mt-20 mb-20">
            <div className="px-4 py-8 mx-auto ">
                <div className="flex flex-col gap-6 md:flex-row">
                    <ProductShowcase
                        imageSrc={gray}
                        title="Introducing Aura"
                        subtitle="New Arrivals"
                        buttonTitle="Shop Mens"
                        link="/men"
                    />
                    <ProductShowcase
                        imageSrc={whiteTop}
                        title="AMPLIFY"
                        subtitle="never duplicated"
                        buttonTitle="Shop Womens"
                        link="/women"
                    />
                </div>
            </div>

            <TabsComponent
                items={["Men's", "Women's"]}
                title="Fall Collection"
                secTitle="All"
                path="/catalog/fall"
            />
            <div className="relative w-[96%] mx-auto h-[60vh] overflow-hidden rounded-3xl">
                <img
                    src={gym}
                    alt="Group of people exercising in a gym"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center md:p-12">
                    <h1 className="mb-2 text-4xl font-bold text-primary drop-shadow-lg md:text-6xl md:mb-4">
                        Visit Our Gym
                    </h1>
                    <p className="max-w-md mb-4 text-sm font-semibold text-primary drop-shadow-lg text-bold font md:mb-6">
                        An oasis where gym lovers can be found.
                    </p>
                    <Link to="/gym">
                        <button className="px-3 py-1 font-bold transition duration-300 text-primary rounded-3xl bg-ctabutton hover:bg-gray-400">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Home;
