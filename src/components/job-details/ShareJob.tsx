import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ShareJob = () => {
  return (
    <div className="flex items-center gap-x-3 py-4">
      <h1 className="text-gray-950 font-semibold">Share this job</h1>
      <p className="flex items-center gap-x-2 bg-[#3B5998] text-white p-2 rounded-md w-fit">
        <FaFacebookF />
        <span>FaceBook</span>
      </p>
      <p className="flex items-center gap-x-2 bg-[#55ACEE] text-white p-2 rounded-md w-fit">
        <FaTwitter />
        <span>Twitter</span>
      </p>
      <p className="flex items-center gap-x-2 bg-[#007BB5] text-white p-2 rounded-md w-fit">
        <FaLinkedinIn />
        <span>Linkedin</span>
      </p>
    </div>
  );
};

export default ShareJob;
