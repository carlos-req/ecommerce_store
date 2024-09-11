import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    FaTwitter,
    FaInstagram,
    FaTiktok,
    FaFacebook,
    FaYoutube,
} from "react-icons/fa";

const helpLinks = [
    { path: "/", name: "Help Center" },
    { path: "/", name: "Contact us" },
    { path: "/", name: "Shipping Info" },
    { path: "/", name: "Track My Order" },
    { path: "/", name: "Returns & Exchanges" },
];

const moreLinks = [
    { path: "/", name: "Share The Look" },
    { path: "/", name: "About Us" },
    { path: "/", name: "Careers" },
    { path: "/", name: "Mentality Gym" },
    { path: "/", name: "Shows" },
];
export const FooterLinks = ({ name, path }) => {
    return (
        <Link to={path}>
            <p className="my-3 text-xs text-primary200 opacity-80">{name}</p>
        </Link>
    );
};

const Footer = () => {
    return (
        <footer className="mt-20 mb-12 lg:px-8">
            <section className="flex flex-col lg:flex-row-reverse lg:justify-between">
                {/*news letter/ social media*/}
                <section className="flex flex-col gap-6 px-8 mb-8 lg:gap-2">
                    <h6 className="px-8 text-xl font-black text-center uppercase text-primary ">
                        Mentality Newsletter
                    </h6>
                    {/*This would be a form that handles submission for newsletter*/}
                    <section className="flex flex-col items-center gap-6 lg:flex-row lg:gap-3">
                        <input
                            className="w-full px-6 py-3 text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-ctaborder rounded-2xl caret-primary text-primary focus:border-primary "
                            type="email"
                            required
                            placeholder="Your Email Address"
                            name="email"
                        />
                        <div className="w-full lg:w-36">
                            <button
                                type="submit"
                                className="w-full px-12 py-4 text-xl font-black tracking-tighter uppercase duration-200 ease-in-out lg:px-4 lg:py-2 lg:rounded-lg bg-primary bg-opacity-80 text-secondary lg:text-base rounded-2xl transation hover:bg-opacity-100 hover:drop-shadow-md"
                            >
                                Sign Up
                            </button>
                        </div>
                    </section>
                    <hr className="lg:hidden bg-primary"></hr>
                    <section className="flex flex-row items-center justify-between cursor-pointer lg:px-2 lg:mt-8 ">
                        <FaInstagram className="footer--icon-hover" size={20} />
                        <FaTiktok className="footer--icon-hover" size={20} />
                        <FaTwitter className="footer--icon-hover" size={20} />
                        <FaFacebook className="footer--icon-hover" size={20} />
                        <FaYoutube className="footer--icon-hover" size={20} />
                    </section>
                </section>
                <section className="flex flex-col gap-8 text-left text-primary md:flex-row ">
                    <section className="w-full px-4 py-4 border-2 border-ctaborder md:border-0 rounded-3xl">
                        <h3 className="font-extrabold uppercase">Help</h3>
                        {helpLinks.map((link) => (
                            <FooterLinks
                                key={link.name}
                                path={link.path}
                                name={link.name}
                            />
                        ))}
                    </section>
                    <section className="w-full px-4 py-4 border-2 border-ctaborder md:border-0 rounded-3xl">
                        <h3 className="font-extrabold uppercase">More</h3>
                        {moreLinks.map((link) => (
                            <FooterLinks
                                key={link.name}
                                path={link.path}
                                name={link.name}
                            />
                        ))}
                    </section>
                </section>
            </section>
            <section className="mt-8 text-center ">
                {/*copyright section*/}
                <p className="text-xs text-primary200">
                    &copy;&nbsp;2024&nbsp;|&nbsp;Mentality LLC&nbsp;|&nbsp;All
                    Rights Reserved
                </p>
                <p className="inline text-xs font-bold tracking-tighter text-center uppercase">
                    <Link>
                        <span className="inline text-primary200">
                            privacy policy
                        </span>
                    </Link>
                    <span className="inline text-primary">&nbsp;|&nbsp;</span>
                    <Link>
                        <span className="inline text-primary200">
                            terms of service
                        </span>
                    </Link>
                    <span className="inline text-primary">&nbsp;|&nbsp;</span>
                    <Link>
                        <span className="inline text-primary200">CCPA</span>
                    </Link>
                    <span className="inline text-primary">&nbsp;|&nbsp;</span>
                    <Link>
                        <span className="inline text-primary200">Sitemap</span>
                    </Link>
                </p>
            </section>
        </footer>
    );
};

export default Footer;

FooterLinks.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};
