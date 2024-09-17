import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import ava from "../../../../assets/av2.avif";
import av1 from "../../../../assets/ava.webp";
import { format } from "timeago.js";

const Messages = ({ message }: { message: any }) => {
  const me = useAppSelector((state: RootState) => state.auth.user);
  const fromMe = message.senderId === me?._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? av1 : ava;
  const bubbleBgColor = fromMe ? "text-blue-500" : "text-red-500";

  return (
    <div className={` ${chatClassName}`}>
      <div className="">
        <div
          className={`w-full  ${
            fromMe ? "flex items-center justify-end " : ""
          }`}
        >
          <h1 className={`${fromMe ? "block font-semibold" : "hidden"}`}>You</h1>
          <img
            alt=""
            className={`w-[50px] h-[50px] rounded-full`}
            src={profilePic}
          />
        </div>
      </div>
      <div
        className={` w-full  ${
          fromMe ? "text-end" : "text-start"
        } p-2 rounded-lg`}
      >
        <p
          className={`${bubbleBgColor} font-semibold`}
          title={format(message.createdAt)}
        >
          {message.message}
        </p>
      </div>
    </div>
  );
};

export default Messages;
