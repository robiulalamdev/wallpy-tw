import { Outlet } from "react-router-dom";
import bg from "../assets/images/global/bg.png";
import Footer from "../components/shared/Footers/Footer";
import EndFooter from "../components/shared/Footers/EndFooter";

const MainLayout = () => {
  return (
    <div
      className="h-screen w-full overflow-y-auto"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div>
        <div className="bg-transparent w-full h-full max-w-[430px] md:max-w-theme mx-auto px-[12px] md:px-[25px] lg:px-[40px] xl:px-[55px] 2xl:px-[75px]">
          <Outlet />
          <Footer />
        </div>
        <EndFooter />
      </div>
    </div>
  );
};

export default MainLayout;
