import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../components/layout/AdminLayout";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: userPaths,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: adminPaths,
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/registration",
    element: <h1>Registration</h1>,
  },
]);

export default routes;
