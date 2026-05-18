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
      <nav className="container-2 flex items-center justify-between py-6">
        <NavLink to="/" className="text-2xl font-bold tracking-tight text-nu20">
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
        <div className="">
          {user ? (
            <>
              <NavLink
                onClick={handleLogout}
                className="rounded-md bg-secondary1 px-8 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:bg-[#d92e68]"
              >
                Sign Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-md bg-secondary1 px-8 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:bg-[#d92e68]"
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
