import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
// flex-1 overflow-y-auto
