import { useState } from "react";
import {
  useGetMessageQuery,
  useSendMessageMutation,
} from "../../../../redux/feature/message/messageApi";
import Messages from "./Messages";
import { IoIosSend } from "react-icons/io";
type Props = {
  messageModal: boolean;
  setMessageModal: (messageModal: boolean) => void;
  user: any;
};
const Conversations = ({ user, setMessageModal }: Props) => {
  const { data, refetch } = useGetMessageQuery(user?.user._id, {
    skip: !user?.user._id,
    refetchOnMountOrArgChange: true,
  });

  const [sendMessage] = useSendMessageMutation();
  const [message, setMessage] = useState("");

  const handleMessage = async (id: string) => {
    await sendMessage({ id, text: message });
    refetch();
  };

  return (
    <div className="w-[50%]">
      {user && (
        <div className="bg-gray-100 h-[600px] overflow-y-auto p-4 scrollbar-hide w-full shadow-md rounded-md shadow-gray-300">
          <div className="flex justify-between items-center bg-slate-600">
            <h1 className=" text-white p-2 rounded-sm my-2">
              {user?.user?.name}
            </h1>
            <p onClick={() => setMessageModal(true)}>X</p>
          </div>

          {data?.map((message: any, i: number) => (
            <Messages key={i} message={message} />
          ))}
          <div className="relative">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="border w-full p-2 border-gray-950 rounded-md"
            />
            <button
              className="absolute right-2 top-[10px]"
              onClick={() => handleMessage(user.user._id)}
            >
              <IoIosSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversations;
