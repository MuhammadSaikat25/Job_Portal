import { useState, useRef, useEffect } from "react";
import {
  useApprovedApplicationMutation,
  useEmployerAllJobQuery,
  useGetAllApplicantsQuery,
  useRejectApplicationMutation,
} from "../../../../redux/feature/employer/jobApi";
import { CiLocationOff } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { IoIosEye } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import ApplicantResume from "./resume/ApplicantResume";
import { toast, Toaster } from "react-hot-toast";

const AllApplicantsUi = () => {
  const [resumeModal, setResumeModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [approvedApplication] = useApprovedApplicationMutation();
  const [rejectApplication] = useRejectApplicationMutation();
  const { data: allJob, isLoading: isJobsLoading } =
    useEmployerAllJobQuery(undefined);
  const {
    data: allAppliedJob,
    isLoading: isApplicantsLoading,
    refetch,
  } = useGetAllApplicantsQuery(undefined);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setResumeModal(false);
    }
  };

  useEffect(() => {
    if (resumeModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resumeModal]);

  if (isJobsLoading || isApplicantsLoading) {
    return <div>Loading...</div>;
  }

  const jobsWithApplicants: Record<string, any> = {};

  allAppliedJob?.data?.forEach((appliedJob: any) => {
    const job = allJob?.data?.find(
      (job: any) => job._id === appliedJob.job._id
    );

    if (job) {
      if (!jobsWithApplicants[job._id]) {
        jobsWithApplicants[job._id] = {
          jobId: appliedJob._id,
          jobTitle: job?.title || "Job Title Not Available",
          applicants: [],
        };
      }
      jobsWithApplicants[job._id].applicants.push({
        user: appliedJob.user || "Applicant Name Not Available",
        resume: appliedJob.resume,
        applicationStatus: appliedJob.applicationStatus,
        applicationId: appliedJob._id,
      });
    }
  });

  const jobEntries = Object.values(jobsWithApplicants);

  const handleViewResume = (resume: any) => {
    setSelectedResume(resume);
    setResumeModal(true);
  };
  const handelApproved = async (id: string) => {
    const res = await approvedApplication(id);
    if (res.data) {
      toast.success("Application Approved");
    }
    refetch();
  };
  const handelRejected = async (id: string) => {
    const res = await rejectApplication(id);
    if (res.data) {
      toast.error("Application Rejected");
    }
    refetch();
  };

  return (
    <div className="bg-[#d7d9de] h-svh pb-10">
      <Toaster />
      <h2 className="text-xl text-gray-900 font-sans py-20 lg:p-4">
        All Applicants!
      </h2>
      {jobEntries.length > 0 ? (
        jobEntries.map((job: any, index: number) => (
          <div key={index} className="p-3 flex flex-col gap-4">
            <div className="bg-white p-3 rounded">
              <div className="flex items-center justify-around bg-blue-200 py-4 px-1">
                <h3 className="text-blue-500">{job.jobTitle}</h3>
                <p>Total(s): {job.applicants.length}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2">
                {job.applicants.map((applicant: any, i: number) => (
                  <div
                    key={i}
                    className="border border-gray-300 p-5 rounded-sm w-full relative lg:w-[80%]"
                  >
                    <div className="flex items-start gap-x-4">
                      <p className={`absolute top-0 right-3`}>
                        {applicant.applicationStatus.charAt(0).toUpperCase() +
                          applicant.applicationStatus.slice(1)}
                      </p>

                      <img
                        className="w-[70px] rounded-full h-[70px]"
                        src={applicant?.resume?.candidateProfile.image}
                        alt=""
                      />
                      <div>
                        <p className="text-[20px] font-semibold text-gray-950">
                          {applicant.user.name}
                        </p>
                        <div className="flex items-center my-4 gap-x-1">
                          <p className="text-blue-500">
                            {applicant.resume.candidateProfile.jobTitle}
                          </p>
                          <section className="flex items-center gap-x-1">
                            <CiLocationOff />
                            <p>{applicant.resume.candidateProfile.country}</p>
                          </section>
                          <section className="flex items-center gap-x-1">
                            <BiDollar />
                            <p>
                              {applicant.resume.candidateProfile.expectedSalary}
                              K
                            </p>
                          </section>
                        </div>
                        {/* -------------- icon ----------------- */}
                        <div className="flex items-center gap-2">
                          {job.jobId}
                          <IoIosEye
                            onClick={() => handleViewResume(applicant.resume)}
                            className="text-blue-600 cursor-pointer"
                          />
                          <IoCheckmark
                            onClick={() =>
                              handelApproved(applicant.applicationId)
                            }
                            className="text-blue-600 cursor-pointer"
                          />
                          <IoIosCloseCircleOutline
                            onClick={() =>
                              handelRejected(applicant.applicationId)
                            }
                            className="text-blue-600 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="lg:p-4">No users have applied for any jobs yet.</p>
      )}

      {resumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded h-[600px] overflow-y-auto lg:w-[45%]"
          >
            <ApplicantResume resume={selectedResume} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApplicantsUi;
