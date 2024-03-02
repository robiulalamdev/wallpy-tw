/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { iSend } from "../../utils/icons/icons";
import ConversationsField from "./ConversationsField";

const MessageConversationArea = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } lg:block message-conversation-area flex-grow flex flex-col justify-between gap-3 w-full p-2 md:p-4`}
      style={{ maxHeight: "620px" }}
    >
      <ConversationsField />
      <div className="send-message-box flex justify-between items-center gap-3">
        <div className="flex-grow w-full relative">
          <input
            className="px-4 w-full"
            type="text"
            placeholder="Write a message..."
          />
          <div
            className="absolute block lg:hidden"
            style={{ right: "20px", top: "10px" }}
          >
            {iSend}
          </div>
        </div>
        <button className="hidden lg:block">SEND</button>
      </div>
    </div>
  );
};

export default MessageConversationArea;
