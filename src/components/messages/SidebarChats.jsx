/* eslint-disable react/prop-types */

import img1 from "../../assets/images/messages/profile1.png";
import img2 from "../../assets/images/messages/profile2.jpg";
import img3 from "../../assets/images/messages/profile3.png";
import SingleChat from "./SingleChat";

const chats = [
  {
    id: 1,
    name: "XanderPR",
    lastMessage: "Can you upload more Apex....",
    time: "2:01 AM",
    img: img1,
  },
  {
    id: 2,
    name: "Ostia",
    lastMessage: "Yeah, but Final Fantasy is bett...",
    time: "8:41 PM",
    img: img2,
  },
  {
    id: 3,
    name: "Ostia",
    lastMessage: "Yoooo...",
    time: "8:41 PM",
    img: img3,
  },
];

const SidebarChats = ({ open, setOpen }) => {
  return (
    <div className="message-chats-container p-2">
      {chats?.map((chat, index) => (
        <SingleChat key={index} chat={chat} open={open} setOpen={setOpen} />
      ))}
    </div>
  );
};

export default SidebarChats;
