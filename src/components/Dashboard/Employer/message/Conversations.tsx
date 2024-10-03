import { useState } from "react";
import {
  useGetMessageQuery,
  useSendMessageMutation,
} from "../../../../redux/feature/message/messageApi";
import Messages from "./Messages";
import { IoIosSend } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

type Props = {
  messageModal: boolean;
  setMessageModal: (messageModal: boolean) => void;
  user: any;
};
const Conversations = ({ user, setMessageModal, messageModal }: Props) => {
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
    <div className="w-full lg:w-[50%] relative">
      {user && (
        <div className="bg-gray-100 h-[700px] md:h-[800px] lg:h-[450px] overflow-y-auto scrollbar-hide w-full shadow-md rounded-md shadow-gray-300">
          <div className="flex justify-between items-center bg-slate-600 sticky top-0">
            <h1 className=" text-white p-2 rounded-sm my-2">
              {user?.user?.name}
            </h1>
            <p
              className="lg:hidden pr-2 text-white cursor-pointer"
              onClick={() => setMessageModal(!messageModal)}
            >
              {messageModal ? (
                <IoClose size={20} />
              ) : (
                <GiHamburgerMenu size={20} />
              )}
            </p>
          </div>
          {/* ------------------- message --------------- */}
          <div className="p-4">
            {data?.map((message: any, i: number) => (
              <Messages key={i} message={message} />
            ))}
          </div>
          {/*---------------- input section------------------ */}
          <div className="sticky bottom-0 p-2 w-full mt-2 rounded-md bg-gray-300 ">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="w-full p-2 rounded-md"
            />
            <button
              className="absolute right-3 top-[24px]"
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
