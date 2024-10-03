import img from "../../assets/recruiting.png";

const Recruiting = () => {
  return (
    <div className="lg:w-[85%] mx-auto py-4 p-3">
      <div className="flex items-center bg-[#EFF4FC] rounded-lg justify-between ">
        <div className="p-10 w-[70%]">
          <h1 className="lg:text-2xl font-semibold text-gray-950">
            Recruiting?
          </h1>
          <p className="text-gray-600 py-5">
            Advertise your jobs to millions of monthly users and search 15.8
            million <br />
            CVs in our database.
          </p>
          <button className="bg-blue-700 p-2 rounded text-white">
            Start Recruiting Now
          </button>
        </div>
        <img className="h-[200px] w-[30%]" src={img} alt="" />
      </div>
    </div>
  );
};

export default Recruiting;
