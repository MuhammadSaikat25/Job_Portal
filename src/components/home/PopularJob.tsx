import { useGetPopularJobQuery } from "../../redux/feature/job/jobApi";
import JobCard from "../Jobs/JobCard";
const PopularJob = () => {
  const { data } = useGetPopularJobQuery(undefined);
  return (
    <div className=" lg:pl-20 md:p-10 lg:p-0">
      <div className="lg:p-20 p-2 popularJob">
        <h1 className="lg:text-2xl font-semibold text-gray-950 text-left">
          Most Popular Jobs
        </h1>
        <p className="text-gray-700 py-3 text-left">
          Know your worth and find the job that qualify your life
        </p>
        <div className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data?.data?.map((job: any) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularJob;
