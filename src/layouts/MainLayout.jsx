import { Outlet } from "react-router-dom";
import bg from "../assets/images/global/bg.png";

const MainLayout = () => {
  return (
    <div
      className="h-screen w-full overflow-y-auto"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        // backgroundSize: "100% 3923px",
      }}
    >
      <div className="w-full h-full flex flex-col justify-between max-w-[430px] md:max-w-theme mx-auto px-[12px] md:px-[42px] 2xl:px-[165px]">
        <div className="flex-grow w-full h-full bg-transparent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
