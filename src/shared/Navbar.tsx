import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../pages/auth/Login";
import SingIn from "../pages/auth/SingIn";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [loginModal, setLoginModal] = useState(false);
  const [singUpModal, setSingUpModal] = useState(false);

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
    <nav
      className={`fixed top-0 w-full text-white transition-all duration-500 ${
        scroll >= 80 ? "bg-[#22218C] py-4" : "bg-transparent py-5"
      }`}
    >
      {scroll >= 80 ? (
        <>
          <div className="flex items-center justify-around">
            <h1>Home</h1>
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
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-around">
          <h1>Home</h1>
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
          </div>
        </div>
      )}
      {loginModal && (
        <Login loginModal={loginModal} setLoginModal={setLoginModal} />
      )}
      {singUpModal && (
        <SingIn singUpModal={singUpModal} setSingUpModal={setSingUpModal} />
      )}
    </nav>
  );
};

export default Navbar;
