import { Layout, Menu } from "antd";
import logo from "../../assets/icons/logo.png";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"; // Icons for trigger
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import {
  MdAddChart,
  MdDashboard,
  MdManageHistory,
  MdOutlineProductionQuantityLimits,
  MdUpdate,
} from "react-icons/md";
import { Home, StepBack } from "lucide-react";
// import { adminSidebarItems } from "../../routes/admin.routes";

const { Header, Content, Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const AdminLayout = () => {
  const user = useAppSelector(useCurrentUser);
  let sidebarItems;

  switch (user!.userRole) {
    case userRole.USER:
      sidebarItems = [
        {
          key: "UserDashboard",
          icon: <MdDashboard />,
          label: <NavLink to={"/user/dashboard"}>Dashboard</NavLink>,
        },
        {
          key: "view-order-history",
          icon: <Home />,
          label: (
            <NavLink to={"/user/dashboard/view-order-history"}>
              View order history
            </NavLink>
          ),
        },
      ];
      break;
    case userRole.ADMIN:
      sidebarItems = [
        {
          key: "dashboard",
          icon: <StepBack />,
          label: <NavLink to={"/"}>Back to Home</NavLink>,
        },
        {
          key: "ProductManagement",
          icon: <MdOutlineProductionQuantityLimits />,
          label: "Product Management",
          children: [
            {
              key: "AddProduct",
              icon: <MdAddChart />,
              label: (
                <NavLink to={"/admin/dashboard/add-product"}>
                  Add Product
                </NavLink>
              ),
            },
            {
              key: "update-product",
              icon: <MdUpdate />,
              label: (
                <NavLink to={"/admin/dashboard/update-product"}>
                  Update Product
                </NavLink>
              ),
            },
            {
              key: "ViewAllOrders",
              icon: <MdManageHistory />,

              label: (
                <NavLink to={"/admin/dashboard/all-order"}>
                  View All Orders
                </NavLink>
              ),
            },
            {
              key: "ManageProduct",
              icon: <MdManageHistory />,

              label: (
                <NavLink to={"/admin/dashboard/manage-product"}>
                  Manage Product
                </NavLink>
              ),
            },
            {
              key: "ManagingOrders",
              icon: <MdAddChart />,
              label: (
                <NavLink to={"/admin/dashboard/managing-orders"}>
                  Managing Orders
                </NavLink>
              ),
            },
          ],
        },
        {
          key: "UserManagement",
          icon: <MdAddChart />,
          label: "User Management",
          children: [
            {
              key: "DeactivatingAccounts",
              icon: <MdAddChart />,
              label: (
                <NavLink to={"/admin/dashboard/user-management"}>
                  User-Management
                </NavLink>
              ),
            },
            {
              key: "change-password",
              icon: <MdAddChart />,
              label: (
                <NavLink to={"/admin/dashboard/change-password"}>
                  Change Password
                </NavLink>
              ),
            },
          ],
        },
      ];
      break;

    default:
      break;
  }
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={null} // Disable default trigger
        style={{
          height: "100vh",
          boxShadow: "2px 0 6px rgba(0, 0, 0, 0.1)", // Add shadow for better UI
        }}
      >
        {/* LOGO */}
        <div
          style={{
            background: "#EEF1EC",
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {collapsed ? (
            <div className="w-10 p-2">
              <img src={logo} alt="logo" />
            </div>
          ) : (
            <div className="w-10 p-2">
              <img src={logo} alt="logo" />
            </div>
          )}
        </div>
        {/* Trigger button */}
        <div
          style={{
            textAlign: "center",
            padding: "10px 0",
            cursor: "pointer",
            background: "#f0f2f5",
            borderBottom: "1px solid #d9d9d9",
          }}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <MenuUnfoldOutlined className="text-2xl" />
          ) : (
            <MenuFoldOutlined className="text-2xl" />
          )}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={sidebarItems} // items
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#EEF1EC" }} />
        <Content style={{ margin: "0px 16px 0" }}>
          <div
            style={{
              padding: 24,
              background: "white",
              margin: "16px 0",
              borderRadius: "0px",
              minHeight: "100vh",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
