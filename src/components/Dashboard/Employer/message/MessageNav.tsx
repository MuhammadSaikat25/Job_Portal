import { useEffect, useState } from "react";
import { useGetAllApplicantsQuery } from "../../../../redux/feature/employer/jobApi";
import img from "../../../../assets/auth3.jpg";

type Props = {
  chatUser: any;
  messageModal: boolean;
  setChatUser: (chatUser: any) => void;
  setMessageModal: (messageModal: boolean) => void;
};

const MessageNav = ({ setChatUser, chatUser, messageModal }: Props) => {
  const { data } = useGetAllApplicantsQuery(undefined);
  const [selectedApplicant, setSelectedApplicant] = useState<number | null>(
    null
  );

  const appliedUser = data?.data?.reduce((acc: any[], current: any) => {
    const isDuplicate = acc.some(
      (applicant) => applicant.user._id === current.user._id
    );
    if (!isDuplicate) {
      acc.push(current);
    }
    return acc;
  }, []);

  useEffect(() => {
    if (!chatUser && appliedUser?.length > 0) {
      setChatUser(appliedUser[0]);
      setSelectedApplicant(0);
    }
  }, [chatUser, appliedUser, setChatUser]);

  const handleSelectApplicant = (index: number, user: any) => {
    setSelectedApplicant(index);
    setChatUser(user);
  };

  return (
    <div className=" lg:w-[30%] relative">
      {appliedUser?.length > 0 ? (
        <div className="lg:w-full hidden lg:block bg-white shadow-md rounded-md shadow-gray-300 h-[450px] overflow-y-auto p-4">
          {appliedUser?.map((user: any, i: number) => (
            <div
              key={i}
              className={`flex flex-col gap-y-5 ${
                selectedApplicant === i ? "bg-blue-100" : ""
              }`}
            >
              <div
                className="flex items-start py-1 gap-x-2 cursor-pointer"
                onClick={() => handleSelectApplicant(i, user)}
              >
                <img
                  className="w-[60px] h-[60px] rounded-full cursor-pointer"
                  src={user.resume.candidateProfile.image || img}
                  alt=""
                />
                <div>
                  <p>{user.user.name}</p>
                  <p>{user.resume.candidateProfile.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no approved job application for chat .</p>
      )}
      {/* -------------------------------------- */}
      {messageModal && (
        <div className="absolute z-50 h-[800px] lg:hidden bg-white shadow-md rounded-md shadow-gray-300 lg:h-[450px] overflow-y-auto p-4">
          {appliedUser?.map((user: any, i: number) => (
            <div
              key={i}
              className={`flex flex-col gap-y-5 ${
                selectedApplicant === i ? "bg-blue-100" : ""
              }`}
            >
              <div
                className="flex items-start py-1 gap-x-2 cursor-pointer"
                onClick={() => handleSelectApplicant(i, user)}
              >
                <img
                  className="w-[60px] h-[60px] rounded-full cursor-pointer"
                  src={user.resume.candidateProfile.image || img}
                  alt=""
                />
                <div>
                  <p>{user.user.name}</p>
                  <p>{user.resume.candidateProfile.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageNav;
