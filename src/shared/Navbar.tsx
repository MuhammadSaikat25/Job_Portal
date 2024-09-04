import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../pages/auth/Login";
import SingIn from "../pages/auth/SingIn";
import MobileSideBar from "./MobileSideBar";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/image.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [loginModal, setLoginModal] = useState(false);
  const [singUpModal, setSingUpModal] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="">
      <div
        className={`hidden lg:block fixed top-0 w-full text-white transition-all duration-500  ${
          scroll >= 80 ? "lg:bg-[#22218C] py-4" : "bg-transparent py-5"
        }`}
      >
        {scroll >= 80 ? (
          <>
            <div className="flex items-center justify-around">
              <img className="w-[40px]" src={logo} alt="" />
              <div className="flex items-center gap-5">
                <Link to={""}>Home</Link>
                <Link to={""}>Find job</Link>
                <Link to={""}>Employers</Link>
                <Link to={""}>Candidate</Link>
                <div className="flex items-center gap-2 border border-white px-3 py-1 rounded-2xl hover:bg-white hover:text-blue-600 duration-700 cursor-pointer">
                  <button onClick={() => setLoginModal(true)}>Login</button>
                  <p>/</p>
                  <button onClick={() => setSingUpModal(true)}>Register</button>
                </div>
                <Link to={"employ-dashboard/dashboard-hero"}>Dashboard</Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-around">
            <img className="w-[40px]" src={logo} alt="" />
            <div className="flex items-center gap-5">
              <Link to={""}>Home</Link>
              <Link to={""}>Find job</Link>
              <Link to={""}>Employers</Link>
              <Link to={""}>Candidate</Link>
              <div className="flex items-center gap-2 border border-white px-3 py-1 rounded-2xl hover:bg-white hover:text-blue-600 duration-700 cursor-pointer">
                <button onClick={() => setLoginModal(true)}>Login</button>
                <p>/</p>
                <button onClick={() => setSingUpModal(true)}>Register</button>
              </div>
              <Link to={"employ-dashboard/dashboard-hero"}>Dashboard</Link>
            </div>
          </div>
        )}
      </div>
      {/* ----------------- auth component------------------- */}
      <div className="">
        {loginModal && (
          <Login loginModal={loginModal} setLoginModal={setLoginModal} />
        )}
        {singUpModal && (
          <SingIn singUpModal={singUpModal} setSingUpModal={setSingUpModal} />
        )}
      </div>
      {/* ---------------------------- small navbar --------------------- */}
      <div className="bg-[#22218C] lg:hidden">
        <div className="flex items-center p-2 justify-between text-white">
          <h1>Home</h1>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-2 border border-white text-[10px] px-3 py-1 rounded-2xl hover:bg-white hover:text-blue-600 duration-700 cursor-pointer">
              <button onClick={() => setLoginModal(true)}>Login</button>
              <p>/</p>
              <button onClick={() => setSingUpModal(true)}>Register</button>
            </div>
            <span onClick={() => setMenu(!menu)}>
              <CiMenuBurger size={20} />
            </span>
          </div>
        </div>
        {menu && <MobileSideBar setMenu={setMenu} menu={menu} />}
      </div>
    </nav>
  );
};

export default Navbar;
