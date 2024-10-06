import { useState, useEffect } from "react";
import { useGetAllAppliedJobQuery } from "../../../../redux/feature/job/jobApi";

type Props = {
  messageModal: boolean;
  setMessageModal: (messageModal: boolean) => void;
  chatUser: any;
  setChatUser: (chatUser: any) => void;
};

const CMessageNav = ({ setChatUser, messageModal }: Props) => {
  const { data } = useGetAllAppliedJobQuery(undefined);
  const [selectedApplicant, setSelectedApplicant] = useState<number>(0);
  const [companyList, setCompanyList] = useState<any[]>([]);

  useEffect(() => {
    if (data?.data) {
      const uniqueCompanies = data.data.reduce((acc: any[], current: any) => {
        const isDuplicate = acc.some(
          (applicant) => applicant.job.company._id === current.job.company._id
        );
        if (!isDuplicate) {
          acc.push(current);
        }
        return acc;
      }, []);

      setCompanyList(uniqueCompanies);
    }
  }, [data]);

  useEffect(() => {
    if (companyList.length > 0) {
      setChatUser(companyList[0]);
    }
  }, [companyList, setChatUser]);

  const handleSelectApplicant = (index: number) => {
    setSelectedApplicant(index);
    setChatUser(companyList[index]);
  };

  return (
    <div className="lg:w-[20%] relative">
      <div className="lg:block hidden w-[100%] bg-white shadow-md rounded-md shadow-gray-300 p-4 lg:h-[500px] overflow-hidden overflow-y-auto scrollbar-hide">
        {companyList.map((company: any, i: number) => (
          <div
            key={i}
            className={`flex flex-col gap-y-5 ${
              selectedApplicant === i ? "bg-blue-100 p-1 my-3" : ""
            }`}
          >
            <div
              className="flex items-start gap-x-2 cursor-pointer"
              onClick={() => handleSelectApplicant(i)}
            >
              <img
                className="w-[40px] h-[40px] rounded-full"
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
      {messageModal && (
      <div className="absolute z-50 h-[800px] lg:hidden bg-white shadow-md rounded-md shadow-gray-300 lg:h-[450px] overflow-y-auto">
          {companyList.map((company: any, i: number) => (
            <div
              key={i}
              className={`flex flex-col gap-y-5 ${
                selectedApplicant === i ? "bg-blue-100" : ""
              }`}
            >
              <div
                className="flex items-start gap-x-2 cursor-pointer"
                onClick={() => handleSelectApplicant(i)}
              >
                <img
                  className="w-[60px] h-[60px] rounded-full"
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
      )}
    </div>
  );
};

export default CMessageNav;
