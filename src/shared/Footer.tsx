import logo from "../assets/image.png";
import img from "../assets/footerImg.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const currentYear = new Date().getFullYear();
  return (
    <div data-aos="zoom-in" className="bg-[#0C071B] relative p-10 lg:p-20">
      <img
        src={img}
        alt=""
        className="absolute -top-[180px] left-1 hidden lg:block"
      />
      <div className="text-gray-300 text-center">
        <p className="text-2xl font-semibold">Got a question?</p>
        <p className="text-sm py-2">
          We are here to help. Check out our FAQs, send us an email or call us
          at 2 200 7007 9222
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-around py-10 gap-10 lg:gap-5">
        <div className="text-white flex flex-col gap-3">
          <section className="flex items-center gap-x-2 text-gray-300">
            <img src={logo} alt="" className="w-[40px]" />
            <p>TalentPlus</p>
          </section>
          <section className="flex flex-col text-gray-300">
            <h1>Call Us</h1>
            <p>2 600 7777 9999</p>
          </section>
          <section className=" text-gray-300">
            <h1>support@superio.com</h1>
          </section>
        </div>
        <div className="">
          <h1 className="text-white mb-2">For Candidates</h1>
          <section className="flex flex-col gap-2 text-gray-300">
            <p>Browse Jobs</p>
            <p>Browse Categories</p>
            <p>Candidate Dashboard</p>
            <p>Job Alerts</p>
          </section>
        </div>
        <div className="">
          <h1 className="text-white mb-2">For Employers</h1>
          <section className="flex flex-col gap-2 text-gray-300">
            <p>Browse Candidates</p>
            <p>Employer Dashboard</p>
            <p>Add Job</p>
          </section>
        </div>
        <div className="">
          <h1 className="text-white mb-2">About Us</h1>
          <section className="flex flex-col gap-2 text-gray-300">
            <p>Job Page</p>
            <p>Job Page Alternative</p>
            <p>Blog</p>
            <p>Contact</p>
          </section>
        </div>
      </div>
      <div className="">
        <p className="w-full h-[0.5px] bg-gray-400"></p>
        <div className="py-3 text-gray-400 flex flex-col lg:flex-row gap-3 items-center justify-between">
          <p>© {currentYear} TalentPlus . All Right Reserved.</p>
          <div className="flex items-center gap-6 cursor-pointer">
            <FaFacebookF />
            <FaLinkedinIn />
            <CiTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
