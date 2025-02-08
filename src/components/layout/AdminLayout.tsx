import { Layout, Menu } from "antd";
import logo from "../../assets/icons/logo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
} from "@ant-design/icons"; // Icons for trigger
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import {
  MdAddChart,
  MdHome,
  MdManageHistory,
  MdOutlineProductionQuantityLimits,
  MdPassword,
  MdUpdate,
} from "react-icons/md";

const { Header, Content, Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  USER: "customer",
};

const AdminLayout = () => {
  const user = useAppSelector(useCurrentUser);
  let sidebarItems;

  switch (user!.userRole) {
    case userRole.USER:
      sidebarItems = [
        {
          key: "dashboard",
          icon: <MdHome size={20} />,
          label: <NavLink to={"/"}>Back to Home</NavLink>,
        },
        {
          key: "my-orders",
          icon: <OrderedListOutlined />,
          label: (
            <NavLink to={`/customer/dashboard/my-orders`}>My Orders</NavLink>
          ),
        },
        {
          key: "change-password",
          icon: <MdPassword />,
          label: (
            <NavLink to={"/customer/dashboard/change-password"}>
              Change Password
            </NavLink>
          ),
        },
      ];
      break;
    case userRole.ADMIN:
      sidebarItems = [
        {
          key: "dashboard",
          icon: <MdHome size={20} />,
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
                <NavLink to={"/admin/dashboard/products"}>Products</NavLink>
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
          // defaultSelectedKeys={["dashboard"]}
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
