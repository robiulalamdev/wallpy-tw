import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useState } from "react";
import { iDropdown, iRefresh } from "../../utils/icons/icons";

import filter from "../../assets/icons/search-wallpapers/filter.gif";

const tabs1 = ["Trending", "New"];
const tabs2 = ["All", "Illustration", "Photography", "AI"];
const tabs3 = ["SFW", "NSFW"];

const SearchWallpapersTabs = () => {
  const [tab1, setTab1] = useState("Trending");
  const [tab2, setTab2] = useState("All");
  const [tab3, setTab3] = useState("SFW");
  return (
    <div className="mt-[21px] md:mt-[39px] mb-[26px] md:mb-0 max-w-full overflow-x-auto">
      <div className="flex items-center justify-start lg:justify-center gap-x-[20px]">
        <div className="bg-[#00000033] rounded-[100px] md:rounded-[23.5px] w-[177px] h-[40px] md:w-[192px] md:h-[42px] flex justify-center items-center">
          {tabs1.map((t, i) => (
            <Button
              onClick={() => setTab1(t)}
              key={i}
              className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[82px] h-[30px] md:min-w-[88px] md:h-[33px]  ${
                tab1 === t
                  ? "bg-[#000000B2] !text-white rounded-[100px] md:rounded-[23.5px]"
                  : "bg-transparent !text-[#C6C6C6]"
              }`}
            >
              {t}
            </Button>
          ))}
        </div>

        <img src={filter} alt="" className="w-[57px] h-[39px] lg:hidden" />

        <div className="lg:flex items-center justify-center gap-x-[20px] hidden lg:inline-block">
          <div className="bg-[#00000033] rounded-[100px] md:rounded-[23.5px] h-[40px] w-full md:max-w-[450px] md:h-[42px] md:flex justify-between items-center px-2 hidden md:inline-block">
            {tabs2.map((t, i) => (
              <Button
                onClick={() => setTab2(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[82px] h-[30px] md:min-w-[88px] md:h-[33px]  ${
                  tab2 === t
                    ? "bg-[#000000B2] !text-white rounded-[100px] md:rounded-[23.5px]"
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <div className="bg-[#00000033] rounded-[100px] md:rounded-[23.5px] min-w-[177px] h-[40px] md:w-[166px] md:h-[42px] flex justify-center items-center px-[4px]">
            {tabs3.map((t, i) => (
              <Button
                onClick={() => setTab3(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[82px] h-[30px] md:min-w-[65px] md:h-[32px] ${
                  tab3 === t
                    ? `${
                        tab3 === "SFW" ? "bg-[#0AB745]" : "bg-[#FF0F00]"
                      } !text-white rounded-[100px] md:rounded-[23.5px]`
                    : "bg-transparent !text-[#FFF]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <Popover placement="bottom-start">
            <PopoverHandler>
              <Button className="shadow-none hover:shadow-none normal-case min-w-[109px] max-w-[109px] h-[42px] bg-[#00000033] rounded-[100px] md:rounded-[23.5px] text-[12px] font-lato font-semibold text-[#FFF] flex justify-center items-center p-0">
                Resolution{" "}
                <div className="min-w-[24px] min-h-[24px]">{iDropdown}</div>
              </Button>
            </PopoverHandler>
            <PopoverContent className="bg-transparent border-none shadow-none">
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  backdropFilter: "blur(25px)",
                }}
              >
                sdfsdfds
              </div>
            </PopoverContent>
          </Popover>

          <Popover placement="bottom-start">
            <PopoverHandler>
              <Button className="shadow-none hover:shadow-none normal-case min-w-[109px] max-w-[109px] h-[42px] bg-[#00000033] rounded-[100px] md:rounded-[23.5px] text-[12px] font-lato font-semibold text-[#FFF] flex justify-center items-center p-0">
                Screen Type{" "}
                <div className="min-w-[24px] min-h-[24px]">{iDropdown}</div>
              </Button>
            </PopoverHandler>
            <PopoverContent className="bg-transparent border-none shadow-none">
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  backdropFilter: "blur(25px)",
                }}
              >
                sdfsdfds
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom-start">
            <PopoverHandler>
              <Button className="shadow-none hover:shadow-none normal-case min-w-[109px] max-w-[109px] h-[42px] bg-[#00000033] rounded-[100px] md:rounded-[23.5px] text-[12px] font-lato font-semibold text-[#FFF] flex justify-center items-center p-0">
                Sort By{" "}
                <div className="min-w-[24px] min-h-[24px]">{iDropdown}</div>
              </Button>
            </PopoverHandler>
            <PopoverContent className="bg-transparent border-none shadow-none">
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  backdropFilter: "blur(25px)",
                }}
              >
                sdfsdfds
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom-start">
            <PopoverHandler>
              <Button className="shadow-none hover:shadow-none normal-case min-w-[109px] max-w-[109px] h-[42px] bg-[#00000033] rounded-[100px] md:rounded-[23.5px] text-[12px] font-lato font-semibold text-[#FFF] flex justify-center items-center p-0">
                Upload Date{" "}
                <div className="min-w-[24px] min-h-[24px]">{iDropdown}</div>
              </Button>
            </PopoverHandler>
            <PopoverContent className="bg-transparent border-none shadow-none">
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  backdropFilter: "blur(25px)",
                }}
              >
                sdfsdfds
              </div>
            </PopoverContent>
          </Popover>
          <Button className="shadow-none hover:shadow-none normal-case min-w-[57px] max-w-[57px] h-[42px] bg-[#00000033] rounded-[9px] text-[12px] font-lato font-semibold text-[#FFF] flex justify-center items-center p-0">
            <div className="min-w-[24px] min-h-[24px]">{iRefresh}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchWallpapersTabs;
