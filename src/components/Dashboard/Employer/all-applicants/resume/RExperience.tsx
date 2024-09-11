const RExperience = ({ work }: { work: any }) => {
  return (
    <div className="py-3">
      <h1 className="text-gray-800 text-[16px] font-semibold py-3">
        Experience
      </h1>
      <div className="education-section flex">
        {work?.map((work: any, i: any) => (
          <div className="education-item" key={i}>
            <div className="badge-column">
              <div className="badge">{work.company?.slice(0)[0]}</div>
            </div>
            <div className="education-details">
              <div className="flex items-center gap-x-5">
                <h3 className="font-semibold text-[#254336]">
                  {work.positionName}
                </h3>
                <p className="bg-[#FEF2D9] px-6 rounded-full text-[#FAB800] hidden md:block">
                  {work.year}
                </p>
              </div>
              <p className="text-red-500 text-[18px]">{work.company}</p>
              <p className="text-[#1A3636]">{work.description}</p>
              <p className="bg-[#FEF2D9] w-fit px-6 rounded-full text-[#FAB800] md:hidden">
                {work.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RExperience;
