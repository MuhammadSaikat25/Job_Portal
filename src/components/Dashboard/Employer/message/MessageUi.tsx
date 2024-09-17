import { useState } from "react";
import MessageNav from "./MessageNav";
import Conversations from "./Conversations";

const MessageUi = () => {
  const [chatUser, setChatUser] = useState();
  const [messageModal, setMessageModal] = useState(false);
  return (
    <div className="flex items-start gap-x-20">
      <MessageNav
        setMessageModal={setMessageModal}
        messageModal={messageModal}
        setChatUser={setChatUser}
        chatUser={chatUser}
      />
      <Conversations
        setMessageModal={setMessageModal}
        messageModal={messageModal}
        user={chatUser}
      />
    </div>
  );
};

export default MessageUi;
