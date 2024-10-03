import icon1 from "../../assets/icon1.webp";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon-3.webp";
const HowItWorks = () => {
  return (
    <div className="w-[60%] mx-auto">
      <div className="text-center py-20">
        <h1 className="lg:text-2xl text-gray-950 font-semibold">
          How It Works?
        </h1>
        <p className="text-gray-500">Job for anyone, anywhere</p>
      </div>
      <div className="flex items-center gap-5 justify-between text-gray-600 font-semibold">
        <div className="flex flex-col items-center justify-center gap-3  " >
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
