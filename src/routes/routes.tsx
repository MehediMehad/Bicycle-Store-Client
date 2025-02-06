import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import VerifyOrderPage from "../pages/VerifyOrder";
import Bicycles from "../pages/Bicycles";
import BicycleDetailsPage from "../pages/BicycleDetails";
import AboutPage from "../pages/About";
import CheckoutPage from "../pages/Checkout";
import AdminProtectedLayout from "../components/layout/AdminProtectedLayout";
import AddProduct from "../pages/Dashboard/Admin/ProductManagement/AddProduct";
import AllOrder from "../pages/Dashboard/Admin/OrderManagement/AllOrder";
import Home from "../pages/Home";
import UsersPage from "../pages/Dashboard/Admin/UserManagement/Users";
import UserProtectedLayout from "../components/layout/UserProtectedLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        element: <BicycleDetailsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/checkout/:id",
        element: <CheckoutPage />,
      },
      {
        path: "/verify-order",
        element: <VerifyOrderPage />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminProtectedLayout>
        <Dashboard />
      </AdminProtectedLayout>
    ),
    children: [
      {
        index: true,
        element: <AddProduct />,
      },
      {
        path: "all-order",
        element: <AllOrder />,
      },
      {
        path: "all-users",
        element: <UsersPage />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "user-management",
        element: <UsersPage />,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <UserProtectedLayout>
        <Dashboard />
      </UserProtectedLayout>
    ),
    children: [
      {
        index: true,
        element: <h1>User</h1>,
      },
      {
        path: "all-order",
        element: <p>All Orders</p>,
      },
      {
        path: "all-users",
        element: <UsersPage />,
      },
    ],
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
// {
//   name: "Dashboard",
//   path: "dashboard",
//   icon: <DashboardOutlined />,
//   element: <h1>Admin dashboard</h1>,
// },
// {
//   name: "Crate Product",
//   path: "crate-product",
//   icon: <MdAddChart />,
//   element: <AddProduct />,
// },
// {
//   name: "Orders",
//   path: "all-order",
//   icon: <ProductFilled />,
//   element: <AllOrder />,
// },
// {
//   name: "User Management",
//   icon: <User />,
//   children: [
//     {
//       name: "Users",
//       path: "users",
//       icon: <PlusOutlined />,
//       element: <UsersPage />,
//     },
//   ],
// },
