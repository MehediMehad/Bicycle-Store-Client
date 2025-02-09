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
import ChangePassword from "../pages/Dashboard/User/ChangePassword";
import Products from "../pages/Dashboard/Admin/ProductManagement/Products";
import UpdateProduct from "../pages/Dashboard/Admin/ProductManagement/UpdateProduct";
import MyOrders from "../pages/Dashboard/User/MyOrders";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
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
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-update/:id",
        element: <UpdateProduct />,
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
        path: "user-management",
        element: <UsersPage />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/customer/dashboard",
    errorElement: <ErrorPage />,
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
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
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
