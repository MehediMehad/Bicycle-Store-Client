import { Layout, Menu, MenuProps } from "antd";
import logo from "../../assets/icons/logo.png";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons"; // Icons for trigger
import React from "react";

const { Header, Content, Sider } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <DashboardOutlined />, // Icon for Dashboard
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <UserOutlined />, // Icon for Profile
      label: "Profile",
    },
    {
      key: "3",
      icon: <TeamOutlined />, // Icon for User Management
      label: "User Management",
      children: [
        {
          key: "11",
          icon: <PlusOutlined />, // Icon for Create Admin
          label: "Create Admin",
        },
        {
          key: "12",
          icon: <PlusOutlined />, // Icon for Create Student
          label: "Create Student",
        },
      ],
    },
  ];

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
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
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
            The Main Content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
