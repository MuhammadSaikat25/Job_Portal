const CompanyDetails = ({ job }: { job: any }) => {
  return (
    <div className="bg-[#F5F7FC] p-10 mt-5">
      <div className="flex  gap-x-3">
        <img
          className="w-[70px] h-[70px] rounded"
          src={job.company.image}
          alt=""
        />
        <div className="">
          <p>{job.company.companyName}</p>
          <p className="text-blue-400">View company profile</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        {/* ------------ */}
        <div className="flex justify-between">
          <p className="text-gray-950">Primary industry:</p>
          <p className="text-gray-500">{job.company.aboutCompany[0]}</p>
        </div>
        {/* ----------------- company --------------- */}
        <div className="flex justify-between">
          <p className="text-gray-950">Company size:</p>
          <p className="text-gray-500">{job.company.teamSize}</p>
        </div>
        {/* ----------------- Founded --------------- */}
        <div className="flex justify-between">
          <p className="text-gray-950">Founded in:</p>
          <p className="text-gray-500">{job.company.updatedAt.slice(0, 4)}</p>
        </div>
        {/* ----------------- Founded --------------- */}
        <div className="flex justify-between">
          <p className="text-gray-950">Phone:</p>
          <p className="text-gray-500">{job.company.phone}</p>
        </div>
        {/* ----------------- Email --------------- */}
        <div className="flex justify-between">
          <p className="text-gray-950">Email:</p>
          <p className="text-gray-500">{job.company.email}</p>
        </div>
        {/* ----------------- Location --------------- */}
        <div className="flex justify-between">
          <p className="text-gray-950">Location</p>
          <p className="text-gray-500">{job.company.country}</p>
        </div>
      </div>
      <p className="bg-blue-300 text-blue-700 p-1 mt-2 rounded text-center cursor-pointer">
        {job.company.website}
      </p>
    </div>
  );
};

export default CompanyDetails;
