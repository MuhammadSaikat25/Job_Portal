import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useCompanyOverviewQuery } from "../../../redux/feature/employer/companyApi";
import { SiOnlyoffice } from "react-icons/si";
import { IoIosPaper } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";

const EmployerDUi = () => {
  const { data } = useCompanyOverviewQuery(undefined);

  const chartData = data?.data?.myAllJob.map((job: any) => ({
    title: job.title,
    applied: job.applied,
  }));

  return (
    <div className="w-full h-full bg-[#F5F7FC] p-6 pt-24 lg:pt-0">
      <h1 className="text-2xl text-gray-950 font-semibold">Dashboard Home!</h1>
      <div className="flex flex-col lg:flex-row gap-4 my-10 ">
        <div className="bg-[#FFFFFF] p-5 rounded-md flex items-center gap-3 lg:w-[20%] justify-between">
          <div className="bg-blue-200 p-2 rounded">
            <SiOnlyoffice className="text-blue-500" />
          </div>
          <div className=" text-right">
            <p className="text-blue-600">{data?.data?.myAllJob.length}</p>
            <p>Posted Jobs</p>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-md flex items-center gap-3 lg:w-[20%] justify-between">
          <div className="bg-red-200 p-2 rounded">
            <IoIosPaper className="text-red-500" />
          </div>
          <div className=" text-right">
            <p className="text-red-600">{data?.data?.myApplicants.length}</p>
            <p>Application</p>
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
      {/* -------------------- Chart --------------------- */}
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

export default EmployerDUi;
