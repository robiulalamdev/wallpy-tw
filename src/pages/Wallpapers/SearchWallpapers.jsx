import { official_brands } from "../../utils/data/officialBrands";
import { Button } from "@material-tailwind/react";
import TitleHeader from "../../components/shared/headers/TitleHeader";
import SearchWallpapersSearchInput from "../../components/SearchWallpapers/SearchWallpapersSearchInput";
import { wallpapers } from "../../utils/data/wallpapers";
import { useNavigate } from "react-router-dom";
import SearchWallpapersTabs from "../../components/SearchWallpapers/SearchWallpapersTabs";
import { useState } from "react";
import SearchWallpaperNsfwAria from "../../components/SearchWallpapers/SearchWallpaperNsfwAria";

const SearchWallpapers = () => {
  const [tab3, setTab3] = useState("SFW");
  const navigate = useNavigate();
  return (
    <>
      <TitleHeader />

      <div className="w-full h-full">
        <SearchWallpapersSearchInput />

        <SearchWallpapersTabs tab3={tab3} setTab3={setTab3} />

        <div className="border-t-[1px] border-[#5A5A5A] mt-[39px] mb-[27px] hidden md:block"></div>

        {tab3 === "NSFW" ? (
          <SearchWallpaperNsfwAria />
        ) : (
          <>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-[14px] gap-y-[14px] md:gap-x-[16px] md:gap-y-[32px] lg:gap-x-[26px] lg:gap-y-[42px]">
              {wallpapers.map((item, index) => (
                <div
                  onClick={() => navigate("/wallpaper")}
                  key={index}
                  className={`w-full h-[152px] md:h-[170px] rounded-[5px] md:rounded-[10px] lg:rounded-[15px] overflow-hidden`}
                >
                  <img
                    src={item.thumbnail}
                    alt="wallpaper"
                    className="w-full h-full rounded-[5px] md:rounded-[10px] lg:rounded-[15px] object-cover hover:scale-110 duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="bg-[#000000] w-[128px] h-[42px] rounded-[100px] mx-auto mt-[27px] flex justify-center items-center font-bakbak-one text-[12px] text-[#CCC] cursor-pointer md:hidden">
              Load More
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default SearchWallpapers;
