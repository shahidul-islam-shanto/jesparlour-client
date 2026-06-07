import { NavLink } from "react-router-dom";
import { navItems } from "../../data/homePageData";

const Footer = () => {
  return (
    <footer className="bg-nu20 py-12 text-white">
      <div className="container-2 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div data-aos="fade-up">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Jerin's <span className="inline text-secondary1">Parlour</span>
          </NavLink>
          <p className="mt-4 max-w-[360px] text-[15px] leading-7 text-white/70">
            Premium beauty care, skin treatments, and salon services crafted for
            every woman.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-[18px] font-semibold text-white">Explore</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-[15px] font-medium text-white/70 transition hover:text-secondary1"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-[18px] font-semibold text-white">Contact</h2>
          <div className="mt-5 grid gap-3 text-[15px] text-white/70">
            <p>House 10, Road 12, Dhaka</p>
            <p>hello@jerinsparlour.com</p>
            <p>+880 1700 000 000</p>
          </div>
        </div>
      </div>

      <div className="container-2 mt-10 border-t border-white/10 pt-6">
        <p className="text-center text-[14px] text-white/60">
          Copyright 2026 Jerin's Parlour. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
