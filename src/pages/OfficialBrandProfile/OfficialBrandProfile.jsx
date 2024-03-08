import { Button } from "@material-tailwind/react";
import SimpleHeader from "../../components/shared/headers/SimpleHeader";
import { useState } from "react";
import { iSearch } from "../../utils/icons/icons";
import { useNavigate } from "react-router-dom";
import OfficialBrandBanner from "../../components/officialBrandProfile/OfficialBrandBanner";
import {
  official_brands_profiles,
  official_brands_profiles_collections,
} from "../../utils/data/profile";

const OfficialBrandProfile = () => {
  const [tab1, setTab1] = useState("Uploads");

  const navigate = useNavigate();
  return (
    <>
      <SimpleHeader />
      <div>
        <OfficialBrandBanner />
        <div className="border-t-[1px] border-[#373737] w-full mt-[15px] md:mt-[104px] mb-[16px] md:mb-[20px]"></div>

        <div className="flex justify-center md:justify-between items-center gap-5">
          <div className="bg-[#00000033] rounded-[100px] w-[186px] h-[45px] flex justify-between items-center px-[8px]">
            {["Uploads", "Collections"].map((t, i) => (
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
          {tab1 === "Uploads" && (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[14px] gap-y-[14px] md:gap-x-[16px] md:gap-y-[32px] lg:gap-x-[40px] lg:gap-y-[59px] mt-[18px] md:mt-[53px]">
              {official_brands_profiles.map((item, index) => (
                <div
                  onClick={() => navigate("/wallpaper")}
                  key={index}
                  className={`w-full h-[152px] md:h-[138px] rounded-[5px] md:rounded-[7px] lg:rounded-[10px] overflow-hidden`}
                >
                  <img
                    src={item.img}
                    alt="wallpaper"
                    className="w-full h-full rounded-[5px] md:rounded-[7px] lg:rounded-[10px] object-cover hover:scale-110 duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}

          {tab1 === "Collections" && (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[14px] gap-y-[19px] md:gap-x-[32px] md:gap-y-[24px] lg:gap-x-[41px] lg:gap-y-[34px] mt-[18px] md:mt-[53px]">
              {official_brands_profiles_collections.map((item, index) => (
                <div key={index} className="">
                  <div
                    onClick={() => navigate("/wallpaper")}
                    className={`grid grid-cols-2 w-full h-[152px] md:h-[138px] rounded-[5px] md:rounded-[7px] lg:rounded-[10px] overflow-hidden`}
                  >
                    {item.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="wallpaper"
                        className="w-full h-full object-cover cursor-pointer"
                      />
                    ))}
                  </div>
                  <h1 className="text-[10px] md:text-[12px] font-lato text-[#FFF] font-semibold text-center mt-[9px] md:mt-[11px] oneLine">
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>
          )}
          <div className="bg-[#000000] w-[128px] h-[42px] rounded-[100px] mx-auto mt-[27px] md:mt-[40px] flex justify-center items-center font-bakbak-one text-[12px] text-[#CCC] cursor-pointer">
            View more
          </div>
        </>
      </div>
    </>
  );
};

export default OfficialBrandProfile;
