import { FaLocationPin, FaMoneyCheckDollar } from "react-icons/fa6";
import bag from "../../assets/bag.png";
import exp from "../../assets/exp.jpg";

const RelatedJobs = ({ jobs }: { jobs: any }) => {
  return (
    <div className="py-3">
      <p className="py-4 text-gray-800 text-2xl">Related Jobs</p>
      {jobs?.map((job: any) => (
        <div
          key={job._id}
          className="my-3 flex items-start gap-x-4 border-gray-600 bg-slate-100 p-3 rounded border w-fit"
        >
          <div className="flex mt-1 items-center gap-x-3">
            <img
              className="w-[70px] h-[50px] "
              src={job.company.image}
              alt=""
            />
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
      ))}
    </div>
  );
};

export default RelatedJobs;
