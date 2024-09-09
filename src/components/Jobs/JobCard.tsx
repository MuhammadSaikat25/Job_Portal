import bag from "../../assets/bag.png";
import exp from "../../assets/exp.jpg";
import { FaLocationPin } from "react-icons/fa6";
import { format } from "timeago.js";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobCard = ({ job }: { job: any }) => {
  return (
    <Link
      to={`/job-details/${job._id}`}
      className="w-full border rounded border-gray-400 p-4"
    >
      <div className="my-3 flex items-start gap-x-4 w-full">
        <div className="flex mt-1 items-center gap-x-3">
          <img className="w-[70px] h-[50px] " src={job.company.image} alt="" />
        </div>
        <div className="">
          <p>{job.title}</p>
          <div className="flex items-center gap-x-2">
            <section className="flex items-center gap-x-2">
              <img className="w-[20px]" src={bag} alt="" />
              <h1>{job.company.companyName}</h1>
            </section>
            <section className="flex items-center gap-x-2">
              <FaLocationPin />
              <h1>{job.company.country}</h1>
            </section>
            <section className=" flex items-center">
              <img className="w-[40px]" src={exp} alt="" />
              <p>{job.experience}years</p>
            </section>
            <section className="flex items-center gap-x-2">
              <FaMoneyCheckDollar />
              <h1>{job.salary}</h1>
            </section>
          </div>
          <div className="flex items-center gap-x-2 my-2">
            <section className="bg-[#DDE8F8] px-3 rounded-2xl">
              <p className="text-[#4E7EDA]  w-fit">{job.position}</p>
            </section>
            <section className="bg-[#E1F2E5] px-3 rounded-2xl">
              <p className="text-[#87B153]">{job.jobType}</p>
            </section>
          </div>
        </div>
      </div>
      <section className="flex items-center gap-x-2">
        <h1>{format(job.company.updatedAt)}</h1>
      </section>
    </Link>
  );
};

export default JobCard;
