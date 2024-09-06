import { Outlet } from "react-router-dom";
import CandidateNav from "../shared/DashboardNav/CandidateNav";

const CandidateLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed top-0 z-10">
        <CandidateNav />
      </div>
      <div className="flex-1 overflow-y-auto lg:pl-[140px]">
        <Outlet />
      </div>
    </div>
  );
};

export default CandidateLayout;
