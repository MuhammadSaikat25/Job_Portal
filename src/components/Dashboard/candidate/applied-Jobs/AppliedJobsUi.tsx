import { useGetAllAppliedJobQuery } from "../../../../redux/feature/job/jobApi";
import JobTable from "./JobTable";

const AppliedJobsUi = () => {
  const { data } = useGetAllAppliedJobQuery(undefined);

  return (
    <div className="p-10">
      {data?.data ? (
        <div className="">
          <h1 className="py-2 text-gray-950 font-semibold lg:text-[24px]">
            Applied jobs!
          </h1>
          <JobTable appliedJob={data?.data} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AppliedJobsUi;
