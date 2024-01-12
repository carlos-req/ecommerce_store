import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const FooterLinks = ({ name, path }) => {
  return (
    <Link to={path}>
      <p className="my-3 text-xs text-slate-200 opacity-80">{name}</p>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="mt-auto mb-12">
      <section>
        <section>
          <h6 className="px-8 text-xl font-black tracking-tight text-center uppercase text-slate-100">
            Sign up for Mentality newsletter
          </h6>
          <section className="px-8">
            {/*This would be a form that handles submission for newsletter*/}
            <input
              className="w-full px-6 py-3 my-4 text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-[#ffffff6b] rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
              type="email"
              required
              placeholder="Your Email Address"
              name="email"
            />
          </section>
          {/*news letter/ social media*/}
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
