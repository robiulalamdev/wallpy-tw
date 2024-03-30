/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import ProfileBanner from "../../components/profile/ProfileBanner";
import SimpleHeader from "../../components/shared/headers/SimpleHeader";
import { iSearch } from "../../utils/icons/icons";
import { wallpapers } from "../../utils/data/wallpapers";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfileMain = ({ user }) => {
  const [tab1, setTab1] = useState("Uploads");

  const navigate = useNavigate();
  return (
    <>
      <SimpleHeader />
      <div>
        <ProfileBanner user={user} />
        <div className="border-t-[1px] border-[#373737] w-full mt-[15px] md:mt-[104px] mb-[16px] md:mb-[20px]"></div>

        <div className="flex justify-center md:justify-between items-center gap-5">
          <div className="bg-[#00000033] rounded-[100px] w-[296px] h-[45px] flex justify-between items-center px-[8px]">
            {["Uploads", "Favorites", "Collections"].map((t, i) => (
              <Button
                onClick={() => setTab1(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[86px] h-[32px] md:min-w-[86px] md:h-[32px]  ${
                  tab1 === t
                    ? "bg-[#000000B2] !text-white rounded-[100px]"
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <div className="bg-[#00000033] rounded-[10px] h-[45px] max-w-[771px] w-full md:flex justify-center items-center pr-[10px] flex-grow hidden md:inline-block">
            <div className="text-[#5A5A5A] w-[40px] px-[10px] h-full flex justify-center items-center">
              {iSearch}
            </div>
            <input
              type="text"
              placeholder="Search this profile"
              className="text-[#5A5A5A] placeholder:text-[#5A5A5A] text-[15px] bg-transparent w-full h-full flex-grow font-lato outline-none border-none"
            />
          </div>

          <span className="hidden lg:inline-block"></span>
        </div>

        <>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[14px] gap-y-[14px] md:gap-x-[16px] md:gap-y-[32px] lg:gap-x-[40px] lg:gap-y-[59px] mt-[18px] md:mt-[53px]">
            {wallpapers.slice(0, 18).map((item, index) => (
              <div
                onClick={() => navigate("/wallpaper")}
                key={index}
                className={`w-full h-[152px] md:h-[138px] rounded-[5px] md:rounded-[7px] lg:rounded-[10px] overflow-hidden`}
              >
                <img
                  src={item.thumbnail}
                  alt="wallpaper"
                  className="w-full h-full rounded-[5px] md:rounded-[7px] lg:rounded-[10px] object-cover hover:scale-110 duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="bg-[#000000] w-[128px] h-[42px] rounded-[100px] mx-auto mt-[27px] md:mt-[40px] flex justify-center items-center font-bakbak-one text-[12px] text-[#CCC] cursor-pointer">
            View more
          </div>
        </>
      </div>
    </>
  );
};

export default ProfileMain;
