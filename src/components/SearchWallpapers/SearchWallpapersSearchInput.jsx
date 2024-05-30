/* eslint-disable react/prop-types */
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";

import { iPopularHr1, iPopularHr2, iSearch } from "../../utils/icons/icons";
import { official_brands } from "../../utils/data/officialBrands";
import { useState } from "react";
// import { popularsTags } from "../../utils/data/data";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetPopularTagsQuery } from "../../redux/features/wallpapers/wallpapersApi";

const SearchWallpapersSearchInput = ({ handleQuery }) => {
  const { data } = useGetPopularTagsQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  // const tags = searchParams.get("tags");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    handleQuery("search", e.target.search.value);
  };

  return (
    <>
      <Popover placement="bottom">
        <PopoverHandler>
          <form
            onSubmit={handleSearch}
            className="bg-[#00000033] rounded-[10px] h-[45px] max-w-[771px] mx-auto w-full flex justify-center items-center pr-[10px]"
          >
            <div className="text-[#5A5A5A] w-[40px] px-[10px] h-full flex justify-center items-center">
              {iSearch}
            </div>
            <input
              name="search"
              type="text"
              placeholder="Find your next wallpaper..."
              className="text-[#5A5A5A] placeholder:text-[#5A5A5A] text-[15px] bg-transparent w-full h-full flex-grow font-lato outline-none border-none"
            />
          </form>
        </PopoverHandler>
        <PopoverContent className="px-[18px] py-[15px] m-0 border-[1px] border-[#2F2F2F] rounded-[10px] shadow-none max-w-[771px] w-full bg-[#00000059] backdrop-blur h-fit">
          <div>
            <div className="flex items-center gap-x-[17px] mb-[10px] cursor-pointer">
              <h1
                onClick={() => setOpen(false)}
                className={`font-bold font-lato text-[15px] ${
                  open ? "text-[#8D8D8D]" : "text-[#EBEBEB]"
                }`}
              >
                Popular
              </h1>
              <h1
                onClick={() => setOpen(true)}
                className={`font-bold font-lato text-[15px] ${
                  open ? "text-[#EBEBEB]" : "text-[#8D8D8D]"
                }`}
              >
                Featured Official Brands
              </h1>
            </div>
            {open ? iPopularHr2 : iPopularHr1}
          </div>

          {!open && (
            <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] mt-[26px]">
              {data?.data?.map((tagName, index) => (
                <Button
                  onClick={() => handleQuery("tag", tagName)}
                  type="button"
                  key={index}
                  className={`outline-none shadow-none hover:shadow-none px-[16px] h-[30px] rounded-[5px] font-normal normal-case text-[#FFF] font-lato text-[13px] flex justify-center items-center
                  ${tag === tagName ? "bg-blue-600" : "bg-[#00000066]"}
                  `}
                >
                  {tagName}
                </Button>
              ))}
            </div>
          )}

          {open && (
            <>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-x-[6px] md:gap-x-[12px] gap-y-[9px] md:gap-y-[23px] mt-[17px]">
                {official_brands.slice(0, 10).map((item, index) => (
                  <div key={index} className={``}>
                    <div
                      className={`w-full h-[50px] md:h-[60px] rounded-[3px] md:rounded-[5px] overflow-hidden`}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full rounded-[3px] md:rounded-[5px] object-cover hover:scale-110 duration-300 cursor-pointer"
                      />
                    </div>
                    <h1 className="font-bold font-lato text-[8px] md:text-[12px] text-white mt-[3px] md:mt-[6px] text-center">
                      {item.name}
                    </h1>
                  </div>
                ))}
              </div>
              <h1
                onClick={() => navigate("/official-brands")}
                className="text-center font-bold font-lato text-[15px] mt-[22px] mb-[18px] text-white cursor-pointer"
              >
                See all brands
              </h1>
            </>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchWallpapersSearchInput;
