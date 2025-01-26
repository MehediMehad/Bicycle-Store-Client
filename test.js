const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: "DashboardOutlined😂",
    element: "<h1>Admin dashboard</h1>",
  },
  {
    name: "Crate Product",
    path: "crate-product",
    icon: "DashboardOutlined😂",
    element: "<h1>Crate Product</h1>",
  },
  {
    name: "User Management",
    icon: "DashboardOutlined😂",
    children: [
      {
        name: "Crate User",
        path: "crate-user",
        icon: "DashboardOutlined😂",
        element: "<h1>crate-user</h1>",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element && item.icon) {
    acc.push({
      key: item.name,
      label: "NAV",
      icon: "ICON",
    });
  }
  if (!item.icon) {
    acc.push({
      key: item.name,
      label: "NAV",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: "NAV",
      icon: "ICON",
      children: item.children.map((child) => {
        return {
          key: child.name,
          label: "NAV",
          icon: "ICON",
        };
      }),
    });
  }

  return acc;
}, []);

console.log(newArray);
