import { useState } from "react";
import "../../styles/messages.css";
import SidebarChats from "../../components/messages/SidebarChats";
import MessageConversationArea from "../../components/messages/MessageConversationArea";
import MainHeader from "../../components/shared/headers/MainHeader";
import { iLeftArrow } from "../../utils/icons/icons";

const Messages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <>
      <MainHeader />
      <div className="message-container">
        <h1 className="text-[15px] font-bakbak-one text-white text-center mb-[15px] md:mb-[40px]">
          Messages
        </h1>
        <div className="border-t-[1px] border-[#5A5A5A] mb-[24px] md:mb-[62px]"></div>
        <div className="mb-4 mx-auto md:mx-0" style={{ width: "295px" }}>
          <div className="message-tab-container flex justify-around items-center mx-auto">
            {["Inbox", "Sent"]?.map((t, i) => (
              <button
                onClick={() => setSelectedTab(i)}
                className={`${
                  selectedTab === i
                    ? "message-active-btn"
                    : "message-dactive-btn"
                }`}
                key={i}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="msg-left-arrow lg:hidden">{iLeftArrow}</div>
        <section
          className="flex justify-between h-full"
          style={{ maxHeight: "620px", columnGap: "54px" }}
        >
          <div
            className={`${
              open ? "hidden lg:block" : "block"
            } message-sidebar flex flex-col items-center gap-4 w-full md:max-w-[295px]`}
          >
            <SidebarChats open={open} setOpen={setOpen} />
          </div>
          <MessageConversationArea open={open} setOpen={setOpen} />
        </section>
      </div>
    </>
  );
};

export default Messages;
