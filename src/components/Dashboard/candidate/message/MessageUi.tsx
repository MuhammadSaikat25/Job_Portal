import { useState } from "react";
import CMessageNav from "./CMessageNav";
import CConversations from "./CConversations";

const MessageUi = () => {
  const [chatUser, setChatUser] = useState();
  const [messageModal, setMessageModal] = useState(false);
  return (
    <div>
      <h1 className="text-2xl text-gray-700 font-semibold mb-4">Messages!</h1>
      <div className="lg:flex items-start gap-x-20">
        <CMessageNav
          setMessageModal={setMessageModal}
          messageModal={messageModal}
          chatUser={chatUser}
          setChatUser={setChatUser}
        />
        <CConversations
          setMessageModal={setMessageModal}
          messageModal={messageModal}
          user={chatUser}
        />
      </div>
    </div>
  );
};

export default MessageUi;
