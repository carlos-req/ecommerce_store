import { Link } from "react-router-dom";

export const FooterLinks = ({ name, path }) => {
  return (
    <Link to={path}>
      <p>{name}</p>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="mt-auto mb-12">
      <section>
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
        <section>{/*news letter/ social media*/}</section>
      </section>
      <section className="text-center">
        {/*copyright section*/}
        <p>&copy;2024|Mentality LLC|All Rights Reserved</p>
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
