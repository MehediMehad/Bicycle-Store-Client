import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../components/layout/AdminLayout";
import { adminRoutes } from "./admin.routes";
import { userPaths } from "./user.routes";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: userPaths,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <h1>Registration</h1>,
  },
]);

export default routes;
