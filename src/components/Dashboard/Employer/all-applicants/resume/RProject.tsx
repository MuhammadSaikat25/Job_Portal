const RProject = ({ projects }: { projects: any }) => {

  return (
    <div className="py-5">
      <h1 className="text-gray-800 text-[16px] font-semibold">Projects</h1>
      <div className="flex flex-col md:flex-row items-start justify-between mt-4">
        {projects?.length ? (
          <div className="education-section flex">
            {projects?.map((pro: any, i: number) => (
              <div className="education-item" key={i}>
                <div className="badge-column">
                  <div className="badge ">{pro.projectName?.slice(0)[0]}</div>
                </div>
                <div className="education-details">
                  <div className="flex items-center gap-x-5">
                    <h3 className="font-semibold text-[#254336]">
                      {pro.projectName}
                    </h3>
                    <p className="bg-[#EFF4FC] hidden md:block px-6 rounded-full text-[#197DDE]">
                      {pro.year}
                    </p>
                  </div>
                  <p className="text-red-500 text-[18px]">{pro.liveLink}</p>
                  <p className="text-[#1A3636]">{pro.description}</p>
                  <p className="bg-[#EFF4FC] w-fit my-2 md:hidden px-6 rounded-full text-[#197DDE]">
                    {pro.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="">
            No work experience added yet. Click on "Add Projects" to start.
          </p>
        )}
      </div>
    </div>
  );
};

export default RProject;
