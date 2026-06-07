import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/homePageData";
import useAuth from "../../hooks/useAuth";

const NavBer = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLogout = () => {
    setIsMenuOpen(false);
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinkClass = ({ isActive }) =>
    `relative text-[16px] font-semibold transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-secondary1 after:transition-transform hover:text-secondary1 hover:after:scale-x-100 ${
      isActive ? "text-secondary1 after:scale-x-100" : "text-nu20"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `rounded-md px-4 py-3 text-[16px] font-semibold transition ${
      isActive
        ? "bg-nu30 text-secondary1"
        : "text-nu20 hover:bg-primary1 hover:text-secondary1"
    }`;

  const authButtonClass =
    "inline-flex items-center justify-center rounded-md bg-secondary1 px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#d92e68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary1";

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-nu30/70 bg-white/80 shadow-sm backdrop-blur-xl">
      <nav
        className="container-2 flex items-center justify-between gap-4 py-4"
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          className="min-w-0 text-xl font-bold tracking-tight text-nu20 sm:text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          Jerin's <span className="inline text-secondary1">Parlour</span>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden shrink-0 lg:block">
          {user ? (
            <button type="button" onClick={handleLogout} className={authButtonClass}>
              Sign Out
            </button>
          ) : (
            <NavLink to="/login" className={authButtonClass}>
              Login
            </NavLink>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-nu30 bg-white/80 text-xl text-nu20 transition hover:border-secondary1 hover:text-secondary1 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`container-2 grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="mb-4 grid gap-2 rounded-lg border border-nu30 bg-white/95 p-3 shadow-xl backdrop-blur-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-2 border-t border-nu30 pt-3">
              {user ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full rounded-md bg-secondary1 px-4 py-3 text-[16px] font-semibold text-white transition hover:bg-[#d92e68]"
                >
                  Sign Out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="flex w-full items-center justify-center rounded-md bg-secondary1 px-4 py-3 text-[16px] font-semibold text-white transition hover:bg-[#d92e68]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBer;
