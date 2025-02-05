import { DashboardOutlined, PlusOutlined } from "@ant-design/icons";
import { TAdminSidebarItem, TRoute } from "../types";
import { NavLink } from "react-router-dom";
import AddProduct from "../pages/Dashboard/Admin/ProductManagement/AddProduct";
import UsersPage from "../pages/Dashboard/Admin/UserManagement/Users";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <DashboardOutlined />,
    element: <h1>Admin dashboard</h1>,
  },
  {
    name: "Crate Product",
    path: "crate-product",
    icon: <PlusOutlined />,
    element: <AddProduct />,
  },
  {
    name: "User Management",
    icon: <DashboardOutlined />,
    children: [
      {
        name: "Users",
        path: "users",
        icon: <PlusOutlined />,
        element: <UsersPage />,
      },
    ],
  },
];

export const adminSidebarItems = adminPaths.reduce(
  (acc: TAdminSidebarItem[], item) => {
    if (item.path && item.element && item.icon) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
        icon: item.icon,
      });
    }
    if (!item.icon) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        icon: item.icon,
        children: item.children.map((child) => {
          return {
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
            icon: child.icon,
          };
        }),
      });
    }

    return acc;
  },
  []
);

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);
