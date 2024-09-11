import bag from "../../assets/bag.png";
import exp from "../../assets/exp.jpg";
import { FaLocationPin, FaMoneyCheckDollar } from "react-icons/fa6";
import { useGetMyResumeQuery } from "../../redux/feature/candidate/resumeApi";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  useAmIAppliedQuery,
  useAppliedJobMutation,
} from "../../redux/feature/job/jobApi";

const DetailsHeader = ({ job }: { job: any }) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  console.log(user)
  const { data } = useGetMyResumeQuery(undefined);
  const navigate = useNavigate();
  const [appliedJob] = useAppliedJobMutation();

  const { data: isApplied, refetch } = useAmIAppliedQuery(job._id);
  const handelApply = async () => {
    if (!user) {
      return toast.error("Please login first");
    }
    if (data?.data === null) {
      toast.error("Please Add your Resume");
      setTimeout(() => {
        navigate("/candidate/dashboard/candidate-resume");
      }, 1000);
      return;
    }
    const appliedData = {
      job: job._id,
      user: user._id,
      resume: data?.data._id,
    };
    const res = await appliedJob(appliedData);

    if (res.data) {
      refetch();
      toast.success("Successfully Applied");
    }
  };
  
  return (
    <div>
      <Toaster />
      <div className="flex justify-around items-center bg-[#F4F7FC] p-6">
        <div className=" flex items-start gap-x-4 lg:p-10">
          <div className="">
            <img
              className="w-[70px] h-[70px] mt-2 rounded-md "
              src={job.company.image}
              alt="Company Logo"
            />
          </div>
          <div>
            <p className="text-gray-700 text-2xl">{job.title}</p>
            <div className="flex items-center gap-x-5">
              <section className="flex items-center gap-x-2">
                <img className="w-[20px]" src={bag} alt="Bag Icon" />
                <h1>{job.company.companyName}</h1>
              </section>
              <section className="flex items-center gap-x-2">
                <FaLocationPin />
                <h1>{job.company.country}</h1>
              </section>
              <section className="flex items-center">
                <img
                  className="w-[40px] rounded-full"
                  src={exp}
                  alt="Experience Icon"
                />
                <p>{job.experience} years</p>
              </section>
              <section className="flex items-center gap-x-2">
                <FaMoneyCheckDollar />
                <h1>{job.salary}K</h1>
              </section>
            </div>
            <div className="flex items-center gap-x-2 my-2">
              <section className="bg-[#DDE8F8] px-3 rounded-2xl">
                <p className="text-[#4E7EDA] w-fit">{job.position}</p>
              </section>
              <section className="bg-[#E1F2E5] px-3 rounded-2xl">
                <p className="text-[#87B153]">{job.jobType}</p>
              </section>
            </div>
          </div>
        </div>
        <div className="text-gray-200 bg-blue-800 p-2 rounded-md hover:bg-red-700 duration-500">
          {isApplied?.data.length ? (
            "Already Applied"
          ) : (
            <button onClick={handelApply}>Apply For Job</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
