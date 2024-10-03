import { useParams } from "react-router-dom";
import { useSingleJobQuery } from "../../redux/feature/job/jobApi";
import { useEffect, useState } from "react";
import DetailsHeader from "./DetailsHeader";
import JObResponsibilities from "./JObResponsibilities";
import ShareJob from "./ShareJob";
import RelatedJobs from "./RelatedJobs";
import JobDescription from "./JobDescription";
import CompanyDetails from "./CompanyDetails";
import JobSkill from "./JobSkill";

const JobDetailsUi = () => {
  const { id } = useParams<{ id: string }>();
  const shouldSkip = !id;
  const { data, error, isLoading } = useSingleJobQuery(id!, {
    skip: shouldSkip,
  });
  const [job, setJob] = useState<any>(undefined);
  const [relatedJobs, setRelatedJobs] = useState<any>([]);
  useEffect(() => {
    if (data) {
      setJob(data.data.singleJob);
      setRelatedJobs(data.data.matchingJobs);
    }
  }, [data]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading job details.</p>;
  if (!job) return <p>No job details available.</p>;
  console.log(job);
  return (
    <div className="mt-[58Px] lg:mt-[80px]">
      <DetailsHeader job={job} />
      <div className="lg:w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-start py-10 px-5">
        <div className="">
          <div className="pb-10">
            <h1 className="text-gray-900 text-2xl pb-4">Job Description</h1>
            <p className="">{job.description}</p>
          </div>
          <JObResponsibilities job={job} />
          <JobSkill job={job} />
          <ShareJob />
          <RelatedJobs jobs={relatedJobs} />
        </div>
        <div className="w-full lg:w-fit">
          <JobDescription job={job} />
          <CompanyDetails job={job} />
        </div>
      </div>
    </div>
  );
};

export default JobDetailsUi;
