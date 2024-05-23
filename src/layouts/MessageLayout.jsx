import { Outlet } from "react-router-dom";
import bg from "../assets/images/global/bg.png";

const MessageLayout = () => {
  return (
    <div
      className="h-screen w-full overflow-y-auto"
      style={{
        backgroundImage: `url(${bg}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="bg-transparent w-full h-full max-w-[430px] md:max-w-theme mx-auto px-[12px] md:px-[25px] lg:px-[40px] xl:px-[55px] 2xl:px-[75px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MessageLayout;
