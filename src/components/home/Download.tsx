import mb from "../../assets/mobile-app.webp";
import as from "../../assets/as.webp";
import gs from "../../assets/gs.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Download = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-around p-10">
      <img data-aos="fade-right" className="" src={mb} alt="" />
      <div data-aos="fade-left" className="text-center lg:text-left">
        <h1 className="text-blue-600 font-semibold">DOWNLOAD & ENJOY</h1>
        <p className="lg:text-3xl py-4 text-gray-950 font-semibold">
          Get the TalentPulse Job <br />
          Search App
        </p>
        <p className="text-gray-400">
          Search through millions of jobs and find the right fit. Simply <br />
          swipe right to apply.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 py-3">
          <img src={as} alt="" />
          <img src={gs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Download;
