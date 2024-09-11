import "./resume.css";

type Props = {
  educations: any[];
};

const REducation = ({ educations }: Props) => {
  return (
    <div className="py-2">
      <h1 className="text-gray-800 text-[16px] font-semibold py-3">Education</h1>
      <div className="">
        {educations?.map((edu, i: number) => (
          <div className="education-item" key={i}>
            <div className="badge-column">
              <div className="badge ">{edu.institution?.slice(0)[0]}</div>
            </div>
            <div className="education-details">
              <div className="flex items-center gap-x-5">
                <h3 className="font-semibold text-[#254336]">{edu.degree}</h3>
                <p className="bg-[#EF5A6F] bg-opacity-25 px-6 hidden rounded-full text-red-600 md:block">
                  {edu.year}
                </p>
              </div>
              <p className="text-red-500 text-[18px]">{edu.institution}</p>
              <p className="text-[#1A3636]">{edu.description}</p>
              <p className="bg-[#EF5A6F] bg-opacity-25 px-6 rounded-full my-2 w-fit text-red-600 md:hidden">
                {edu.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default REducation;
