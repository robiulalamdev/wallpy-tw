/* eslint-disable react/prop-types */
import { useState } from "react";

const SingleChat = ({ key, chat, open, setOpen }) => {
  const [selectedChat, setSelectedChat] = useState(0);
  return (
    <div
      onClick={() => {
        setOpen(!open);
        setSelectedChat(key);
      }}
      className={`single-chat-container flex gap-2 mt-2 ${
        key === selectedChat && "selected-chat"
      }`}
    >
      <img src={chat?.img} alt="" />
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="chat-username">{chat?.name}</h1>
          <p className="chat-time">{chat?.time}</p>
        </div>
        <p className="chat-last-message" style={{ marginTop: "6px" }}>
          {chat?.lastMessage}
        </p>
      </div>
    </div>
  );
};

export default SingleChat;
