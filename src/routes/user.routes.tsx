import AboutPage from "../pages/About";
import BicycleDetails from "../pages/BicycleDetails";
import Bicycles from "../pages/Bicycles";
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
];
