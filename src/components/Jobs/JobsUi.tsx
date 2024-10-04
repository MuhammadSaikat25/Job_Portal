import { useEffect, useState } from "react";
import { useGetALlJObQuery } from "../../redux/feature/job/jobApi";
import JobCard from "./JobCard";
import { IoFilterSharp } from "react-icons/io5";
import JobsNav from "./JobsNav";
import CircularProgress from "@mui/material/CircularProgress";
import { debounce } from "lodash";

const JobsUi = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [jobDetails, setJobDetails] = useState<any>({
    jobType: "",
    jobPosition: "",
    experience: "",
    salary: [0, 10000],
  });

  const { data, isLoading, isFetching } = useGetALlJObQuery({
    ...jobDetails,
    page,
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setJobs([]);
    setPage(1);
  }, [jobDetails]);

  useEffect(() => {
    if (data?.data) {
      setJobs((prevJobs) =>
        page === 1 ? data.data.result : [...prevJobs, ...data.data.result]
      );
    }
  }, [data, page]);

  // Infinite scroll handler
  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!isLoading && !isFetching) {
        if (jobs?.length === data?.data?.totalJob) {
          return;
        }
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    const debouncedHandleInfiniteScroll = debounce(handleInfiniteScroll, 200);
    window.addEventListener("scroll", debouncedHandleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleInfiniteScroll);
    };
  }, [isLoading, isFetching, jobs]);

  const handleOverlayClick = () => {
    setModal(false);
  };

  return (
    <div className="mt-[80px] p-4 relative lg:w-[95%] mx-auto">
      {!isLoading || jobs.length > 0 ? (
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
            {jobs?.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          {/* Loading Indicator for Pagination */}
          {isFetching && (
            <p className="text-center">
              <CircularProgress color="secondary" />
            </p>
          )}

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
        <p className="text-center">
          <CircularProgress color="secondary" />
        </p>
      )}
    </div>
  );
};

export default JobsUi;
