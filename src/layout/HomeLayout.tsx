import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
