import { useContext, useState } from "react";
import { iMenu } from "../../../utils/icons/icons";
import logo from "../../../assets/brand/logo.png";
import HeaderDrawer from "./HeaderDrawer";
import { useNavigate } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";
import { AuthContext } from "../../../contextApi/AuthContext";

const TitleHeader = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="lg:flex items-center justify-between gap-x-[4px] md:gap-x-[20px] w-full mt-[23px] mb-[18px] hidden lg:inline-block">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className="!w-[85px] !h-[56px] object-contain"
        />

        <h1 className="text-white font-bakbak-one text-[40px]">
          THE WALLPAPER SOCIETY
        </h1>

        {user && <HeaderProfile />}
      </div>

      <div className="lg:hidden my-[23px]">
        <div className="flex items-center justify-between gap-[10px] w-full">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            className="w-[60px] h-[32px] object-contain"
          />
          <div
            onClick={() => setOpen(!open)}
            className="text-white cursor-pointer"
          >
            {iMenu}
          </div>
        </div>
      </div>

      <HeaderDrawer open={open} close={setOpen} />
    </>
  );
};

export default TitleHeader;
