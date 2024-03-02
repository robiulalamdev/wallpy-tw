import { official_brands } from "../../utils/data/officialBrands";
import { Button } from "@material-tailwind/react";
import { iSearch } from "../../utils/icons/icons";
import TitleHeader from "../../components/shared/headers/TitleHeader";
import OfficialBrandSearch from "../../components/officialBrands/OfficialBrandSearch";

const OfficialBrands = () => {
  const characters = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  return (
    <>
      <TitleHeader />
      <div className="w-full h-full">
        <OfficialBrandSearch />

        <div className="w-full h-full max-w-full overflow-x-auto mt-[21px] md:mt-[41px]">
          <div className="flex items-center gap-x-[26px] w-fit lg:mx-auto mb-[21px] lg:mb-0">
            <Button className="bg-[#00000033] font-normal hover:shadow-none shadow-none normal-case text-white p-0 w-[100px] h-[42px] rounded-[23.5px] text-[12px] font-lato">
              Featured
            </Button>
            <div className="lg:flex justify-center items-center gap-x-[34px] flex-grow w-fit rounded-[23.5px] bg-[#00000033] h-[42px] px-[40px] hidden lg:inline-block">
              {characters.map((chrt, index) => (
                <h1
                  key={index}
                  className="cursor-pointer text-white text-[15px] font-lato font-semibold"
                >
                  {chrt}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#5A5A5A] mt-[39px] mb-[50px] hidden md:block"></div>
        <div className="grid grid-cols-6 md:grid-cols-4 gap-x-[9px] gap-y-[6px] md:gap-x-[14px] md:gap-y-[29px]">
          {official_brands.map((item, index) => (
            <div
              key={index}
              className={`col-span-2 md:col-span-1 ${
                index < 3 && "md:!col-span-2"
              } ${index === 0 && "row-span-2 md:row-span-1 col-span-3"} ${
                index === 1 && "col-span-3"
              } ${index === 2 && "col-span-3"}`}
            >
              <div
                className={`w-full ${
                  index === 0 ? "h-[210px]" : "h-[92px]"
                } md:h-[257px] !rounded-[10px] md:rounded-[30px] overflow-hidden`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full !rounded-[10px] md:rounded-[30px] object-cover"
                />
              </div>
              <h1 className="font-bold font-lato text-[10px] md:text-[20px] text-white mt-[3px] md:mt-[11px] text-center">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OfficialBrands;
