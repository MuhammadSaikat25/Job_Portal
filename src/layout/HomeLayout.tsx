import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const HomeLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
