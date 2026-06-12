import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import AddToCart from "../Pages/AddToCart/AddToCart";
import Login from "../Pages/Login/Login";
import OurPortfolio from "../Pages/OurPortfolio/OurPortfolio";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/Home/Sections/ServiceDetails";

const serviceDetailsLoader = async ({ params }) => {
  const response = await fetch("http://localhost:3000/services");

  const services = await response.json();
  const service = services.find(({ _id }) => _id === params.id);

  return service;
};

const addToCartLoader = async ({ params }) => {
  const response = await fetch("http://localhost:3000/services");

  const services = await response.json();
  const service = services.find(({ _id }) => _id === params.id);

  return service;
};

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
        path: "addToCart/:id",
        element: <AddToCart />,
        loader: addToCartLoader,
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
        path: "serviceDetails/:id",
        element: <ServiceDetails />,
        loader: serviceDetailsLoader,
      },
    ],
  },
]);

export default router;
