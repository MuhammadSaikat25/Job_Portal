import { useState } from "react";
import bg from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const handelSearch = () => {
    if (title === "" && location === "") return;

    const queryParam = new URLSearchParams({
      ...(title && { title }),
      ...(location && { location }),
    }).toString();

    navigate(`/jobs?${queryParam}`);
  };

  return (
    <div className="pt-14 lg:pt-0">
      <div className="relative">
        <img src={bg} className="h-[500px] lg:h-full w-full" alt="" />
        <div className="absolute top-24 lg:top-36 md:left-[17%] lg:left-[24%]">
          <p className="lg:text-3xl text-[20px] mb-4 text-white font-semibold text-center">
            The Easiest Way to Get Your New Job
          </p>
          <div className="lg:bg-white px-6 rounded-full relative lg:mt-10 py-2 flex gap-4 lg:gap-2 flex-col lg:flex-row items-center lg:justify-between">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="px-6 rounded-full w-full  focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="Job Title"
            />
            <p className="w-[1px] h-[30px] bg-gray-500 hidden lg:block"></p>
            <input
              onChange={(e) => setLocation(e.target.value)}
              className="px-6 rounded-full w-full focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="City"
            />
            <button
              onClick={handelSearch}
              className="bg-[#1967D2] text-white px-6 rounded-full w-full lg:w-fit lg:py-1"
            >
              Find
            </button>
          </div>
          <p className="text-center lg:mt-5 text-white">
            Popular Searches : Designer, Developer, Web, IOS, PHP, Senior,
            Engineer .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
