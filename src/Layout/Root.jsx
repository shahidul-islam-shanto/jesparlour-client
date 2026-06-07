import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBer from "../Components/NavBer/NavBer";
import { useAos } from "../hooks/useAos";

const Root = () => {
  useAos();

  return (
    <div className="min-h-screen bg-white text-nu20">
      <NavBer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
