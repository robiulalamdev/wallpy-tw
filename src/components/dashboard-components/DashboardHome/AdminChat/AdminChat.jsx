import { Button } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import img1 from "../../../../assets/images/dashboard-images/dashboard-home/chat/user1.png";
import img2 from "../../../../assets/images/dashboard-images/dashboard-home/chat/user2.png";
import { useForm } from "react-hook-form";

const conversations = [
  {
    username: "SpaceAlien",
    user: {
      username: "SpaceAlien",
      name: "SpaceAlien",
      profile: { profile_image: img1 },
    },
    role: "Moderator",
    message:
      "A report for removal was submitted by an instagram artist named “honeyflowerart” for this wallpaper https://wpshort.com/wpswall0237532",
  },
  {
    username: "Fyween",
    user: {
      username: "Fyween",
      name: "Fyween",
      profile: { profile_image: img2 },
    },
    role: "Moderator",
    message:
      "My pick for this week’s staff pick: https://wpshort.com/wpswall0238461",
  },
  {
    username: "KRS",
    user: { username: "KRS", name: "KRS", profile: { profile_image: img1 } },
    role: "Administrator",
    message: "User: anon294 has been banned for violating TOS",
  },
];

const AdminChat = () => {
  const [messages, setMessages] = useState(conversations);
  const { handleSubmit, register, setValue, reset } = useForm();

  const handleSend = async (data) => {
    setMessages([
      ...messages,
      {
        username: "KRS",
        user: {
          username: "KRS",
          name: "KRS",
          profile: { profile_image: img1 },
        },
        role: "Administrator",
        message: data?.message,
      },
    ]);
    reset();
  };

  const handleClear = () => {
    if (messages.length > 0) {
      setMessages([]);
    }
  };

  const scrollBottomRef = useRef();
  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: "smooth" });
      scrollBottomRef.current.scrollTop = scrollBottomRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="min-w-[442px] max-w-[442px] bg-dash-cm-bg rounded-[10px] max-h-screen flex flex-col justify-between h-full !p-[11px_12px_19px_11px]">
      <div className="flex flex-col justify-center items-center gap-[7px]">
        <h1 className="text-white font-bakbak-one text-[15px] text-center">
          Admin / Moderators Chat
        </h1>
        <Button
          onClick={() => handleClear()}
          className={`shadow-none hover:shadow-none outline-none normal-case w-[99px] h-[29px] font-lato text-[12px] font-medium rounded-[5px] flex justify-center items-center p-0 ${
            messages?.length > 0
              ? "bg-[#8FFF00] text-[#000000]"
              : "bg-[#000000] text-white"
          }`}
        >
          <span>Clear chat</span>
        </Button>
      </div>
      <div className="flex-grow h-fit overflow-y-auto grid grid-cols-1 gap-[26px] flex flex-col justify-between">
        <div></div>
        <div className="flex-grow py-2 gap-6 flex flex-col justify-end w-full">
          {messages.map((item, index) => (
            <div
              key={index}
              className="bg-[#000000] rounded-[20px] p-[9px_9px_9px_12px] h-fit"
            >
              <div className="flex justify-between items-center w-fit">
                <div className="flex items-center gap-[7px]">
                  <img
                    src={item?.user?.profile?.profile_image}
                    alt=""
                    className="min-w-[37px] min-h-[37px] max-w-[37px] max-h-[37px] object-cover rounded-full"
                  />
                  <div className="min-w-[85px] max-w-[85px]">
                    <h1 className="text-white font-lato text-[13px] font-bold all_break oneLine">
                      {item?.user?.username}
                    </h1>
                    <p className="text-[#6A6A6A] font-lato text-[13px]">
                      {item?.role}
                    </p>
                  </div>
                </div>
                <div className="w-fit pl-[7px]">
                  <svg
                    width="1"
                    height="44"
                    viewBox="0 0 1 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.5"
                      y1="2.18558e-08"
                      x2="0.499998"
                      y2="44"
                      stroke="#373737"
                    />
                  </svg>
                </div>
                <p className="text-white font-lato text-[13px] pl-[13px] all_break">
                  {item?.message}
                </p>
              </div>
            </div>
          ))}
          <div ref={scrollBottomRef}></div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleSend)}
        className="flex justify-between items-center gap-[8px] mt-[26px]"
      >
        <input
          {...register("message", { required: true })}
          type="text"
          required
          placeholder="Write a message..."
          className="flex-grow w-full h-[45px] text-white placeholder:text-[#939393] font-bakbak-one text-[12px] bg-[#000000CC] px-[22px] rounded-[10px]"
        />
        <Button
          type="submit"
          className="font-bakbak-one normal-case shadow-none  hover:shadow-none outline-none text-[12px] text-[#939393] bg-[#000000CC] w-[69px] h-[45px] rounded-[10px] p-0 flex justify-center items-center"
        >
          SEND
        </Button>
      </form>
    </div>
  );
};

export default AdminChat;
