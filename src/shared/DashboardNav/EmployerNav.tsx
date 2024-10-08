import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icon.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineSend } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/feature/auth/authSlice";

const EmployerNav = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const [menu, setMenu] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  return (
    <nav className="">
      <div className="w-fit bg-[#FFFFFF] lg:flex flex-col min-h-screen px-4 pt-2 gap-y-5 hidden">
        <NavLink className={`flex items-center gap-2`} to={"/"}>
          <span>
            <IoMdHome />
          </span>
          <span>Home</span>
        </NavLink>
        <NavLink
          className={`flex items-center gap-x-1 ${
            pathname === "/employ-dashboard/dashboard-hero" &&
            "text-blue-700 bg-blue-100 p-2 rounded"
          }`}
          to={"dashboard-hero"}
        >
          <span>
            <MdOutlineDashboard />
          </span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          className={`flex items-center gap-x-1 ${
            pathname === "/employ-dashboard/company-profile" &&
            "text-blue-700 bg-blue-100 p-2 rounded"
          }`}
          to={"company-profile"}
        >
          <span>
            <FaUserTie />
          </span>
          <span>Company Profile</span>
        </NavLink>
        <NavLink
          className={`flex items-center gap-x-1 ${
            pathname === "/employ-dashboard/post-job" &&
            "text-blue-700 bg-blue-100 p-2 rounded"
          }`}
          to={"post-job"}
        >
          <span>
            <MdOutlineSend />
          </span>
          <span>Post Job</span>
        </NavLink>
        <NavLink
          className={`flex items-center gap-x-1 ${
            pathname === "/employ-dashboard/manage-job" &&
            "text-blue-700 bg-blue-100 p-2 rounded"
          }`}
          to={"manage-job"}
        >
          <span>
            <MdManageAccounts />
          </span>{" "}
          <span> Manage job</span>
        </NavLink>
        <NavLink
          className={`flex items-center gap-x-1 ${
            pathname === "/employ-dashboard/all-applicants" &&
            "text-blue-700 bg-blue-100 p-2 rounded"
          }`}
          to={"all-applicants"}
        >
          <span>
            <IoNewspaperOutline />
          </span>
          <span>All Applicants</span>
        </NavLink>
        <NavLink
          className={`flex items-center gap-x-1 ${
            pathname === "/employ-dashboard/message" &&
            "text-blue-700 bg-blue-100 p-2 rounded"
          }`}
          to={"message"}
        >
          <span>
            <FaMessage />
          </span>{" "}
          <span> Message</span>
        </NavLink>
        <NavLink
          className={`flex items-center gap-x-1 ${
            pathname === "/employ-dashboard/video-call" &&
            "text-blue-700 bg-blue-100 p-2 rounded"
          }`}
          to={"video-call"}
        >
          <span>
            <CiVideoOn />
          </span>{" "}
          <span> Video</span>
        </NavLink>
        <NavLink
          to={"/"}
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </NavLink>
      </div>
      <div
        className={`fixed lg:hidden top-0 w-full text-white transition-all duration-500 bg-[#22218C] p-3`}
      >
        <div className="flex items-center justify-between">
          <img className="w-[40px]" src={logo} alt="" />
          <div className="flex items-center gap-5">
            <span onClick={() => setMenu(!menu)}>
              <CiMenuBurger size={20} />
            </span>
          </div>
        </div>
      </div>

      {menu && (
        <div className="absolute top-0 bg-gray-950 bg-opacity-30 w-full h-screen lg:hidden">
          <div
            ref={sidebarRef}
            style={{ transform: menu ? "translateX(0)" : "translateX(-200px)" }}
            className="w-fit h-full text-white bg-[#22218C] p-3 fixed  z-[20] top-0 left-0 transition-transform duration-300"
          >
            <div className="">
              <img className="w-[40px]" src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-y-6 px-2 py-20">
              <NavLink className={`flex items-center gap-2`} to={"/"}>
                <span>
                  <IoMdHome />
                </span>
                <span>Home</span>
              </NavLink>
              <NavLink
                className={`flex items-center gap-x-1 ${
                  pathname === "/employ-dashboard/dashboard-hero" &&
                  "text-blue-700 bg-blue-100 p-2 rounded"
                }`}
                to={"dashboard-hero"}
              >
                <span>
                  <MdOutlineDashboard />
                </span>
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                className={`flex items-center gap-x-1 ${
                  pathname === "/employ-dashboard/company-profile" &&
                  "text-blue-700 bg-blue-100 p-2 rounded"
                }`}
                to={"company-profile"}
              >
                <span>
                  <FaUserTie />
                </span>
                <span>Company Profile</span>
              </NavLink>
              <NavLink
                className={`flex items-center gap-x-1 ${
                  pathname === "/employ-dashboard/post-job" &&
                  "text-blue-700 bg-blue-100 p-2 rounded"
                }`}
                to={"post-job"}
              >
                <span>
                  <MdOutlineSend />
                </span>
                <span>Post Job</span>
              </NavLink>
              <NavLink
                className={`flex items-center gap-x-1 ${
                  pathname === "/employ-dashboard/manage-job" &&
                  "text-blue-700 bg-blue-100 p-2 rounded"
                }`}
                to={"manage-job"}
              >
                <span>
                  <MdManageAccounts />
                </span>{" "}
                <span> Manage job</span>
              </NavLink>
              <NavLink
                className={`flex items-center gap-x-1 ${
                  pathname === "/employ-dashboard/all-applicants" &&
                  "text-blue-700 bg-blue-100 p-2 rounded"
                }`}
                to={"all-applicants"}
              >
                <span>
                  <IoNewspaperOutline />
                </span>
                <span>All Applicants</span>
              </NavLink>
              <NavLink
                className={`flex items-center gap-x-1 ${
                  pathname === "/employ-dashboard/message" &&
                  "text-blue-700 bg-blue-100 p-2 rounded"
                }`}
                to={"message"}
              >
                <span>
                  <FaMessage />
                </span>{" "}
                <span> Message</span>
              </NavLink>
              <NavLink
                className={`flex items-center gap-x-1 ${
                  pathname === "/employ-dashboard/video-call" &&
                  "text-blue-700 bg-blue-100 p-2 rounded"
                }`}
                to={"video-call"}
              >
                <span>
                  <CiVideoOn />
                </span>{" "}
                <span> Video</span>
              </NavLink>
              <NavLink
                to={"/"}
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EmployerNav;
