import { Outlet } from "react-router-dom";
import EmployerNav from "../shared/DashboardNav/EmployerNav";

const EmployerLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed top-0 z-10">
        <EmployerNav />
      </div>
      <div className="flex-1 overflow-y-auto lg:pl-[160px]">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployerLayout;
