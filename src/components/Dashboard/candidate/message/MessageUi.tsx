import { useState } from "react";
import CMessageNav from "./CMessage Nav";
import CConversations from "./CConversations";

const MessageUi = () => {
  const [chatUser, setChatUser] = useState();
  return (
    <div>
      <h1 className="">Messages!</h1>
      <div className="flex items-start gap-x-20">
        <CMessageNav chatUser={chatUser} setChatUser={setChatUser} />
        <CConversations user={chatUser} />
      </div>
    </div>
  );
};

export default MessageUi;
