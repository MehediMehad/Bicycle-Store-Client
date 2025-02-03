import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-br from-green-50/10 to-blue-50/10">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
