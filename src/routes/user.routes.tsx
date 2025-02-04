import AboutPage from "../pages/About";
import BicycleDetails from "../pages/BicycleDetails";
import Bicycles from "../pages/Bicycles";
import CheckoutPage from "../pages/Checkout";
import Home from "../pages/Home";

export const userPaths = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bicycles",
    element: <Bicycles />,
  },
  {
    path: "/details/:id",
    element: <BicycleDetails />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/checkout/:id",
    element: <CheckoutPage />,
  },
];
