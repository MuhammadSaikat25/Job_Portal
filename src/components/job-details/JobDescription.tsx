import { CiCalendar } from "react-icons/ci";
import { format } from "timeago.js";
import { GiTimeTrap } from "react-icons/gi";
import { IoLocateOutline } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const JobDescription = ({ job }: { job: any }) => {
  return (
    <div className="bg-[#F5F7FC] p-10">
      <h1 className="text-gray-900 text-xl mb-5">Job Overview</h1>
      <div className="">
        {/* ------------------- post date------------- */}
        <div className="flex items-start gap-x-3">
          <CiCalendar className="text-blue-400" size={30} />
          <div className="">
            <p>Date Posted:</p>
            <p>{format(job.createdAt)}</p>
          </div>
        </div>
        {/* ------------------ Expiration date ------------ */}
        <div className="flex items-start gap-x-3 py-5">
          <GiTimeTrap className="text-blue-400" size={30} />
          <div className="">
            <p>Expiration date:</p>
            <p>{format(job.deadline)}</p>
          </div>
        </div>
        {/* -------------------- Location -------------- */}
        <div className="flex items-start gap-x-3 py-5">
          <IoLocateOutline className="text-blue-400" size={30} />
          <div className="">
            <p>Location:</p>
            <p>{job.country}</p>
          </div>
        </div>
        {/* -------------------- Job Title: -------------- */}
        <div className="flex items-start gap-x-3 py-5">
          <FaRegUser className="text-blue-400" size={30} />
          <div className="">
            <p>Job Title:</p>
            <p>{job.title}</p>
          </div>
        </div>
        {/* -------------------- Salary: -------------- */}
        <div className="flex items-start gap-x-3 py-5">
          <FaMoneyCheckAlt className="text-blue-400" size={30} />
          <div className="">
            <p>Job Title:</p>
            <p>{job.salary}K</p>
          </div>
        </div>
        {/* ---------------- skill ------------- */}
        <div className="">
          <h1 className="text-gray-800 text-xl py-2">Job Skills</h1>
          <div className="grid md:grid-cols-2 gap-4">
            {job?.skills.map((skill: any, i: number) => (
              <div key={i} className="">
                <p className="bg-white p-2 rounded">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
