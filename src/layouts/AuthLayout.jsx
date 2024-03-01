import { Outlet } from "react-router-dom";
import bg from "../assets/images/global/bg.png";
import Footer from "../components/shared/Footers/Footer";
import EndFooter from "../components/shared/Footers/EndFooter";
import AuthHeader from "../components/shared/headers/AuthHeader";

const AuthLayout = () => {
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
      <div className="bg-transparent w-full h-full max-w-[430px] md:max-w-theme mx-auto px-[12px] md:px-[42px] 2xl:px-[165px]">
        <AuthHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
