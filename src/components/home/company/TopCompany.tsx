import ms from "../../../assets/ms.jpg";
import fb from "../../../assets/fb.png";
import az from "../../../assets/az.png";
import gl from "../../../assets/gl.png";
import tw from "../../../assets/tw.jpg";
import "../company/company.css";

const TopCompany = () => {
  return (
    <div className="bg-[#F3F7FB] p-10">
      <div className="">
        <h1 className="text-gray-950 py-3 lg:text-2xl font-semibold">
          Top Company Registered
        </h1>
        <p className="text-gray-500">
          Some of the companies we have helped recruit excellent applicants over
          the years.
        </p>
      </div>
      <div className="w-full mx-auto lg:pt-20 p-3">
        <div
          className="slider"
          style={
            {
              "--width": "100%",
              "--height": "200px",
              "--quantity": 10,
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div className="item">
              <img className="w-[200px] h-[100px] rounded-md" src={az} alt="" />
            </div>
            <div className="item">
              <img src={tw} className="w-[200px] h-[100px] rounded-md" alt="" />
            </div>
            <div className="item">
              <img className="w-[200px] h-[100px] rounded-md" src={ms} alt="" />
            </div>
            <div className="item">
              <img className="w-[200px] h-[100px] rounded-md" src={fb} alt="" />
            </div>
            <div className="item">
              <img className="w-[200px] h-[100px] rounded-md" src={gl} alt="" />
            </div>
            <div className="item">
              <img src={tw} className="w-[200px] h-[100px] rounded-md" alt="" />
            </div>
            <div className="item">
              <img src={fb} className="w-[200px] h-[100px] rounded-md" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
