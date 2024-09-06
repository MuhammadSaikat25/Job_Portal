import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icon.png";
import { CiMenuBurger } from "react-icons/ci";

const CandidateNav = () => {
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
      <div className="w-fit bg-red-600 lg:flex flex-col min-h-screen p-2 gap-y-5 hidden">
        <NavLink to={"/"}>Home</NavLink>
       <NavLink to={'/candidate/dashboard/myProfile'}>My Profile</NavLink>
        <NavLink to={""}>Change Password</NavLink>
        <NavLink to={""}>Logout</NavLink>
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
            <div className="flex flex-col gap-y-6 px-2 py-20">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"dashboard-hero"}>Dashboard</NavLink>
              <NavLink to={"company-profile"}>Company Profile</NavLink>
              <NavLink to={""}>Post Job</NavLink>
              <NavLink to={""}>Manage Job</NavLink>
              <NavLink to={""}>All Applicants</NavLink>
              <NavLink to={""}>Shortlisted Resumes</NavLink>
              <NavLink to={""}>Change Password</NavLink>
              <NavLink to={""}>Logout</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CandidateNav;
