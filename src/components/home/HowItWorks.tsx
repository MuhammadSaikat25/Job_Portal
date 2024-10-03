import icon1 from "../../assets/icon1.webp";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon-3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" className="w-[60%] mx-auto flex flex-col justify-center pb-20">
      <div className="text-center py-10">
        <h1 className="text-2xl text-gray-950 font-semibold">
          How It Works?
        </h1>
        <p className="text-gray-500">Job for anyone, anywhere</p>
      </div>
      <div className="flex items-start flex-wrap gap-10 justify-center text-gray-600 font-semibold">
        <div className="flex flex-col items-center justify-center gap-3  ">
          <img src={icon1} alt="" />
          <p className="text-center py-3">
            Register an account <br />
            to start
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={icon2} alt="" />
          <p className="text-center py-3">
            Explore over thousands <br />
            of resumes
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={icon3} alt="" />
          <p className="text-center py-3">
            Find the most suitable <br />
            candidate
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
