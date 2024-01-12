import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export const FooterLinks = ({ name, path }) => {
  return (
    <Link to={path}>
      <p className="my-3 text-xs text-slate-200 opacity-80">{name}</p>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="mt-auto mb-12 lg:px-8">
      <section className="flex flex-col lg:flex-row-reverse lg:justify-between">
        {/*news letter/ social media*/}
        <section className="flex flex-col gap-6 px-8 mb-8 lg:gap-2">
          <h6 className="px-8 text-xl font-black tracking-tight text-center uppercase text-slate-100 ">
            Sign up for Mentality newsletter
          </h6>
          {/*This would be a form that handles submission for newsletter*/}
          <section className="flex flex-col items-center gap-6 lg:flex-row lg:gap-3">
            <input
              className="w-full px-6 py-3  text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-[#ffffff6b] rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50  "
              type="email"
              required
              placeholder="Your Email Address"
              name="email"
            />
            <div className="w-full lg:w-36">
              <button
                type="submit"
                className="px-12 lg:px-4 py-4 lg:py-2 lg:rounded-lg  uppercase bg-slate-100 bg-opacity-80 text-[#0d0d0d] font-black  tracking-tighter text-xl lg:text-base w-full rounded-2xl transation ease-in-out duration-200 hover:bg-opacity-100 hover:drop-shadow-md "
              >
                Sign Up
              </button>
            </div>
          </section>
          <hr className="lg:hidden"></hr>
          <section className="flex flex-row items-center justify-between cursor-pointer lg:px-2 lg:mt-8 ">
            <FaInstagram className="footer--icon-hover" size={20} />
            <FaTiktok className="footer--icon-hover" size={20} />
            <FaTwitter className="footer--icon-hover" size={20} />
            <FaFacebook className="footer--icon-hover" size={20} />
            <FaYoutube className="footer--icon-hover" size={20} />
          </section>
        </section>
        <section className="flex flex-col gap-8 text-left text-slate-100 md:flex-row ">
          <section className="w-full px-4 py-4 border-2 border-[#ffffff6b] md:border-0 rounded-3xl">
            <h3 className="font-extrabold uppercase">Help</h3>
            <FooterLinks path="/help" name="Help Center" />
            <FooterLinks path="/contactus" name="Contact us" />
            <FooterLinks path="/shipping_info" name="Shipping Info" />
            <FooterLinks path="/track" name="Track My Order" />
            <FooterLinks path="/returns_exchanges" name="Returns & Exchanges" />
          </section>
          <section className="w-full px-4 py-4 border-2 border-[#ffffff6b] md:border-0 rounded-3xl">
            <h3 className="font-extrabold uppercase">More</h3>
            <FooterLinks path="/share" name="Share The Look" />
            <FooterLinks path="/about" name="About Us" />
            <FooterLinks path="/careers" name="Careers" />
            <FooterLinks path="/gym" name="Mentality Gym" />
            <FooterLinks path="/shows" name="Shows" />
          </section>
        </section>
      </section>
      <section className="mt-8 text-center ">
        {/*copyright section*/}
        <p className="text-xs text-slate-200">
          &copy;&nbsp;2024&nbsp;|&nbsp;Mentality LLC&nbsp;|&nbsp;All Rights
          Reserved
        </p>
        <p className="inline text-xs font-bold tracking-tighter text-center uppercase">
          <Link>
            <p className="inline text-slate-200">privacy policy</p>
          </Link>
          <p className="inline text-slate-100">&nbsp;|&nbsp;</p>
          <Link>
            <p className="inline text-slate-200">terms of service</p>
          </Link>
          <p className="inline text-slate-100">&nbsp;|&nbsp;</p>
          <Link>
            <p className="inline text-slate-200">CCPA</p>
          </Link>
          <p className="inline text-slate-100">&nbsp;|&nbsp;</p>
          <Link>
            <p className="inline text-slate-200">Sitemap</p>
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
