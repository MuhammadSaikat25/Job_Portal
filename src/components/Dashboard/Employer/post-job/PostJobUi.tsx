import JobPostForm from "./JobPostForm";
import bg from "../../../../assets/bag.png";
import money from "../../../../assets/money.png";
import check from "../../../../assets/check.png";

const PostJobUi = () => {
  return (
    <div className="w-[90%] mx-auto py-2">
      <h1 className="text-2xl text-gray-950 font-semibold my-3">
        Post a New Job!
      </h1>
      <div className="flex items-center gap-x-4 justify-around bg-[#FFFFFF] shadow shadow-blue-300 py-6">
        <div className="flex items-center gap-x-2">
          <img
            className="w-[100px] h-[100px] bg-blue-200 p-2 rounded-full"
            src={bg}
            alt=""
          />

          <p>Job Detail</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img
            className="w-[100px] h-[100px] bg-blue-200 p-2 rounded-full"
            src={money}
            alt=""
          />
          <p>Package & Payments</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img
            className="w-[100px] h-[100px] bg-blue-200 p-2 rounded-full"
            src={check}
            alt=""
          />
          <p>Confirmation</p>
        </div>
      </div>
      <JobPostForm />
    </div>
  );
};

export default PostJobUi;
