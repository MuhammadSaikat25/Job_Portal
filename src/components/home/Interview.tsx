import img from "../../assets/interview.webp";
const Interview = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around py-10 p-4">
      <img className="w-[400px] h-[400px]" src={img} alt="" />
      <div className="">
        <h1 className="text-2xl font-semibold text-gray-950">
          {" "}
          Build a good <br />
          resume
        </h1>
        <p className="text-gray-400 py-3">
          An efficient resume should promote your abilities and include <br />{" "}
          tangible accomplishments that are relevant to the job you apply <br />{" "}
          for. You should also prepare a cover letter that is concise and <br />{" "}
          elaborates on how you can put your skills to use in the <br />{" "}
          organization.
        </p>
      </div>
    </div>
  );
};

export default Interview;
