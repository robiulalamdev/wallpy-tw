import React from "react";
import SingleMessage from "./SingleMessage";

const ConversationsField = () => {
  return (
    <div
      className="flex-grow py-2 flex flex-col justify-end"
      style={{ overflowY: "auto", height: "500px" }}
    >
      <SingleMessage />
      <br />
      <SingleMessage />
    </div>
  );
};

export default ConversationsField;
