import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../components/layout/AdminLayout";
import { adminRoutes } from "./admin.routes";
import { userPaths } from "./user.routes";
import Login from "../pages/Login";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import Registration from "../pages/Registration";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: userPaths,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />,
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <Registration />,
  },
]);

export default routes;
