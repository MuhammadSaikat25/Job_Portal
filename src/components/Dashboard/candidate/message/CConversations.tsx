import { useState } from "react";
import {
  useGetMessageQuery,
  useSendMessageMutation,
} from "../../../../redux/feature/message/messageApi";
import CMessage from "./CMessage";
import { IoIosSend } from "react-icons/io";

import { useGetAllUserQuery } from "../../../../redux/feature/user/userApi";

const CConversations = ({ user }: { user: any }) => {
  const { data: AllUser } = useGetAllUserQuery(undefined);
  const allUser = AllUser?.data;

  const sendMessageUser =
    allUser &&
    allUser?.find((su: any) => su.email === user?.job.company?.email);

  const { data, refetch } = useGetMessageQuery(sendMessageUser?._id, {
    skip: !sendMessageUser?._id,
    refetchOnMountOrArgChange: true,
  });

  const [sendMessage] = useSendMessageMutation();
  const [message, setMessage] = useState("");
  const handelMessage = async () => {
    await sendMessage({ id: sendMessageUser._id, text: message });
    refetch();
  };
  return (
    <div className="w-[50%]">
      {user && (
        <div className="bg-gray-100 h-[600px] overflow-y-auto p-4 scrollbar-hide w-full shadow-md rounded-md shadow-gray-300">
          <h1 className="bg-slate-600 text-white p-2 rounded-sm my-2">
            {user?.job.company?.companyName}
          </h1>

          {data?.map((message: any, i: number) => (
            <CMessage key={i} message={message} />
          ))}
          <div className="relative">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="border w-full p-2 border-gray-950 rounded-md"
            />
            <button
              className="absolute right-2 top-[10px]"
              onClick={handelMessage}
            >
              <IoIosSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CConversations;
