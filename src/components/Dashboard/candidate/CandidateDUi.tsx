import { useCandidateOverviewQuery } from "../../../redux/feature/job/jobApi";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SiOnlyoffice } from "react-icons/si";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import { CgSearchLoading } from "react-icons/cg";

const CandidateDUi = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { data } = useCandidateOverviewQuery(undefined);

  const analytics = data?.data?.analytics || {};

  const chartData = Object.keys(analytics).map((month) => ({
    title: month,
    applied: analytics[month],
  }));

  return (
    <div className="p-10 bg-[#F5F7FC] h-full pt-20 lg:pt-3 pb-3">
      <h1 className="text-xl font-semibold text-gray-950">{user?.name}</h1>
      <div className="flex flex-col lg:flex-row gap-4 my-10 ">
        <div className="bg-[#FFFFFF] p-5 rounded-md flex items-center gap-3 lg:w-[20%] justify-between">
          <div className="bg-blue-200 p-2 rounded">
            <SiOnlyoffice className="text-blue-500" />
          </div>
          <div className=" text-right">
            <p className="text-blue-600">{data?.data?.myAppliedJob.length}</p>
            <p>Applied Jobs</p>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-md flex items-center gap-3 lg:w-[20%] justify-between">
          <div className="bg-red-200 p-2 rounded">
            <CgSearchLoading className="text-red-500" />
          </div>
          <div className=" text-right">
            <p className="text-red-600">{data?.data?.pending.length}</p>
            <p>Pending</p>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-md flex items-center gap-3 lg:w-[20%] justify-between">
          <div className="bg-green-200 p-2 rounded">
            <FcApproval className="" />
          </div>
          <div className=" text-right">
            <p className="text-green-600">{data?.data?.approved.length}</p>
            <p>Approved</p>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-md flex items-center gap-3 lg:w-[20%] justify-between">
          <div className="bg-red-200 p-2 rounded">
            <FcDisapprove className="" />
          </div>
          <div className=" text-right">
            <p className="text-red-600">{data?.data?.rejected.length}</p>
            <p>Rejected</p>
          </div>
        </div>
      </div>
      <div className="">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="applied"
              stroke="#000"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CandidateDUi;
