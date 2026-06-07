import { NavLink } from "react-router-dom";
import { navItems } from "../../data/homePageData";
import useAuth from "../../hooks/useAuth";

const NavBer = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="sticky left-0 top-0 z-20 w-full border-b border-nu30/70 bg-white/95 backdrop-blur">
      <nav className="container-2 flex items-center justify-between gap-4 py-4 sm:py-5 lg:py-6">
        <NavLink
          to="/"
          className="min-w-0 text-xl font-bold tracking-tight text-nu20 sm:text-2xl"
        >
          Jerin's <span className="inline text-secondary1">Parlour</span>
        </NavLink>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-[16px] font-medium transition hover:text-secondary1 ${
                  isActive ? "text-secondary1" : "text-nu20"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="shrink-0">
          {user ? (
            <>
              <NavLink
                onClick={handleLogout}
                className="rounded-md bg-secondary1 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#d92e68] sm:px-8 sm:py-3 sm:text-[16px]"
              >
                Sign Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-md bg-secondary1 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#d92e68] sm:px-8 sm:py-3 sm:text-[16px]"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
      <div className="container-2 flex gap-5 overflow-x-auto pb-4 lg:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `shrink-0 text-[14px] font-medium transition hover:text-secondary1 ${
                isActive ? "text-secondary1" : "text-nu20"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default NavBer;
