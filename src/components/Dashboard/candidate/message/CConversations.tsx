import { useState } from "react";
import {
  useGetMessageQuery,
  useSendMessageMutation,
} from "../../../../redux/feature/message/messageApi";
import CMessage from "./CMessage";
import { IoIosSend } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import { useGetAllUserQuery } from "../../../../redux/feature/user/userApi";
type Props = {
  messageModal: boolean;
  setMessageModal: (messageModal: boolean) => void;
  user: any;
};
const CConversations = ({ user, messageModal, setMessageModal }: Props) => {
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
    <div className="lg:w-[50%] w-[90%] mx-auto">
      {user && (
        <div className="bg-gray-100 h-[800px] lg:h-[500px] overflow-hidden overflow-y-auto w-full shadow-md rounded-md shadow-gray-300">
          <div className="bg-slate-600 text-white p-2 rounded-sm my-2 flex items-center justify-between">
            <p> {user?.job.company?.companyName}</p>
            <button
              className="lg:hidden"
              onClick={() => setMessageModal(!messageModal)}
            >
              {messageModal ? <IoMdClose /> : <IoMenu />}
            </button>
          </div>

          <div className="">
            {data?.map((message: any, i: number) => (
              <CMessage key={i} message={message} />
            ))}
          </div>
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
