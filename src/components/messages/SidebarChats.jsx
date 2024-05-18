/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
// import img1 from "../../assets/images/messages/profile1.png";
// import img2 from "../../assets/images/messages/profile2.jpg";
// import img3 from "../../assets/images/messages/profile3.png";
import SingleChat from "./SingleChat";

const SidebarChats = ({ open, setOpen }) => {
  const { chats } = useSelector((state) => state.conversation);
  return (
    <div className="message-chats-container px-2 py-2">
      <div className="overflow-y-auto max-h-full">
        {chats?.map((chat, index) => (
          <SingleChat
            key={index}
            chatData={chat}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarChats;
