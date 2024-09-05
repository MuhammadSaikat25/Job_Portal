import JobPostForm from "./JobPostForm";
import { GiHandBag } from "react-icons/gi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

const PostJobUi = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1>Post a New Job!</h1>

      <JobPostForm />
    </div>
  );
};

export default PostJobUi;
