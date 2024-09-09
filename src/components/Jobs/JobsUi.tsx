import { useEffect, useState } from "react";
import { useGetALlJObQuery } from "../../redux/feature/job/jobApi";
import JobCard from "./JobCard";
import { IoFilterSharp } from "react-icons/io5";
import JobsNav from "./JobsNav";

const JobsUi = () => {
  const [jobs, setJobs] = useState<any>([]);
  const [jobDetails, setJobDetails] = useState<any>({
    jobType: "",
    jobPosition: "",
    experience: "",
    salary: [0, 10000],
  });
  const { data, isLoading } = useGetALlJObQuery(jobDetails!);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setJobs(data?.data);
  }, [data]);

  const handleOverlayClick = () => {
    setModal(false);
  };

  return (
    <div className="mt-[80px] p-4 relative lg:w-[95%] mx-auto">
      {!isLoading ? (
        <div>
          {/* Filter Button */}
          <div
            onClick={() => setModal(!modal)}
            className="flex items-center gap-x-3 bg-[#EFF4FC] px-5 py-2 w-fit rounded-md cursor-pointer"
          >
            <IoFilterSharp className="text-blue-700" />
            <span className="text-blue-700">Filter</span>
          </div>

          {/* Job Listings */}
          <div className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobs?.map((job: any) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          {/* Modal Overlay */}
          {modal && (
            <div
              className="bg-gray-950 fixed top-0 left-0 w-full bg-opacity-40 h-full"
              onClick={handleOverlayClick}
            >
              {/* Modal Content */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-[#F5F7FC] w-fit px-10 py-12 lg:py-24 h-full border-r border-gray-600"
              >
                <JobsNav
                  jobDetails={jobDetails}
                  setJobDetails={setJobDetails}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="my-36">loading</p>
      )}
    </div>
  );
};

export default JobsUi;
