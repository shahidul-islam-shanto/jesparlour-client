import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OurPortfolio from "../Pages/OurPortfolio/OurPortfolio";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/Home/Sections/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "our-portfolio",
        element: <OurPortfolio />,
      },
      {
        path: "our-team",
        element: <OurTeam />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "/serviceDetails",
        element: <ServiceDetails/> 
      }
    ],
  },
]);

export default router;
