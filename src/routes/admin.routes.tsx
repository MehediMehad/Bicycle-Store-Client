import { DashboardOutlined, PlusOutlined } from "@ant-design/icons";
import { TAdminSidebarItem, TRoute } from "../types";
import { NavLink } from "react-router-dom";

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
    icon: <DashboardOutlined />,
    element: <h1>Crate Product</h1>,
  },
  {
    name: "User Management",
    icon: <DashboardOutlined />,
    children: [
      {
        name: "Crate User",
        path: "crate-user",
        icon: <PlusOutlined />,
        element: <h1>crate-user</h1>,
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
        label: "NAV",
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
