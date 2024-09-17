import { useState } from "react";
import { useGetAllAppliedJobQuery } from "../../../../redux/feature/job/jobApi";
type Props = {
  chatUser: any;
  setChatUser: (chatUser: any) => void;
};
const CMessageNav = ({ setChatUser }: Props) => {
  const { data } = useGetAllAppliedJobQuery(undefined);
  const [selectedApplicant, setSelectedApplicant] = useState<number | null>(
    null
  );

  const company = data?.data?.reduce((acc: any[], current: any) => {
    const isDuplicate = acc.some(
      (applicant) => applicant.job.company._id === current.job.company._id
    );
    if (!isDuplicate) {
      acc.push(current);
    }
    return acc;
  }, []);

  const handleSelectApplicant = (index: number) => {
    setSelectedApplicant(index);
  };
  return (
    <div className="w-[20%] bg-white shadow-md rounded-md shadow-gray-300 h-[600px] overflow-y-auto p-4 ">
      {company?.map((company: any, i: number) => (
        <div
          key={i}
          className={`flex flex-col gap-y-5 ${
            selectedApplicant === i ? "bg-blue-100" : ""
          }`}
        >
          <div
            className="flex items-start gap-x-2"
            onClick={() => {
              handleSelectApplicant(i);
              setChatUser(company);
            }}
          >
            <img
              className="w-[60px] h-[60px] rounded-full cursor-pointer"
              src={company.job.company.image}
              alt=""
            />
            <div>
              <p>{company.job.company.companyName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CMessageNav;
