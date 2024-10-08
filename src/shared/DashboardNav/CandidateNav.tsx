import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icon.png";
import { CiMenuBurger } from "react-icons/ci";
import { PiReadCvLogoLight } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { logOut } from "../../redux/feature/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const CandidateNav = () => {
  const [menu, setMenu] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
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
    <nav className="text-gray-800 test bg-gray-200">
      <div className="w-fit tets lg:flex flex-col min-h-screen p-2 gap-y-5 hidden">
        <NavLink className={"flex items-center gap-x-1"} to={"/"}>
          <span>
            <CiHome />
          </span>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
              : "flex items-center gap-x-1"
          }
          to={"/candidate/dashboard/dashboard-hero"}
        >
          <span>
            <MdDashboardCustomize />
          </span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
              : "flex items-center gap-x-1"
          }
          to={"/candidate/dashboard/myProfile"}
        >
          <span>
            <FaUserAlt />
          </span>
          <span>My Profile</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
              : "flex items-center gap-x-1"
          }
          to={"/candidate/dashboard/candidate-resume"}
        >
          <span>
            <PiReadCvLogoLight />
          </span>
          <span> My Resume</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
              : "flex items-center gap-x-1"
          }
          to={"/candidate/dashboard/applied-jobs"}
        >
          <span>
            <MdOutlineWorkHistory />
          </span>
          <span>Applied Jobs</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
              : "flex items-center gap-x-1"
          }
          to={"/candidate/dashboard/message"}
        >
          <span>
            <RiMessage2Line />
          </span>
          <span>Message</span>
        </NavLink>

        <NavLink onClick={() => {
            dispatch(logOut());
          }} to={"/"}>Logout</NavLink>
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
            className="w-fit h-full text-white bg-[#22218C]  fixed  z-[20] top-0 left-0 transition-transform duration-300"
          >
            <div className="">
              <img className="w-[40px]" src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-y-6 p-4 py-20">
              <NavLink className={"flex items-center gap-x-1"} to={"/"}>
                <span>
                  <CiHome />
                </span>
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
                    : "flex items-center gap-x-1"
                }
                to={"/candidate/dashboard/dashboard-hero"}
              >
                <span>
                  <MdDashboardCustomize />
                </span>
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
                    : "flex items-center gap-x-1"
                }
                to={"/candidate/dashboard/myProfile"}
              >
                <span>
                  <FaUserAlt />
                </span>
                <span>My Profile</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
                    : "flex items-center gap-x-1"
                }
                to={"/candidate/dashboard/candidate-resume"}
              >
                <span>
                  <PiReadCvLogoLight />
                </span>
                <span> My Resume</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
                    : "flex items-center gap-x-1"
                }
                to={"/candidate/dashboard/applied-jobs"}
              >
                <span>
                  <MdOutlineWorkHistory />
                </span>
                <span>Applied Jobs</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-1 bg-blue-200 text-blue-500 p-1 rounded"
                    : "flex items-center gap-x-1"
                }
                to={"/candidate/dashboard/message"}
              >
                <span>
                  <RiMessage2Line />
                </span>
                <span>Message</span>
              </NavLink>

              <NavLink to={"/"}>Logout</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CandidateNav;
