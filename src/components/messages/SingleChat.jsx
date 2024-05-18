/* eslint-disable react/prop-types */
import useViewImage from "../../lib/hooks/useViewImage";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  setChat,
  setMessages,
} from "../../redux/features/conversations/conversationSlice";

const SingleChat = ({ chatData, open, setOpen }) => {
  const { viewImg } = useViewImage();
  const { chat } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();

  const handleSetChat = () => {
    if (chat?._id !== chatData?._id) {
      dispatch(setChat(chatData));
      dispatch(setMessages([]));
    }
    setOpen(!open);
  };

  return (
    <div
      onClick={() => handleSetChat()}
      className={`single-chat-container flex gap-2 mt-2 ${
        chatData?._id === chat?._id && "selected-chat !bg-[#0000004D]"
      }`}
    >
      {chatData?.receiverInfo?.profile_image ? (
        <img src={viewImg(chatData?.receiverInfo?.profile_image)} alt="" />
      ) : (
        <div className="min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] rounded-full object-cover flex justify-center items-center bg-[#0000004D] border border-[#78757553]">
          <h1 className="text-white font-bakbak-one text-sm uppercase">
            {chatData?.receiverInfo?.username?.slice(0, 2)}
          </h1>
        </div>
      )}
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="chat-username oneLine">
            {chatData?.receiverInfo?.username}
          </h1>
          <p className="chat-time">
            {moment(chatData?.lastMessage?.createdAt).format("hh:mm A")}
          </p>
        </div>
        <p
          className="chat-last-message all_break oneLine"
          style={{ marginTop: "6px" }}
        >
          {chatData?.lastMessage?.message}
        </p>
      </div>
    </div>
  );
};

export default SingleChat;
