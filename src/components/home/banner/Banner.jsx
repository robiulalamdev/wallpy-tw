import BannerTab from "./BannerTab";
import { Button } from "@material-tailwind/react";
import { banners } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#00000033] rounded-[10px] md:rounded-[40px] px-[12px] md:px-[35px]">
      <BannerTab />

      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-[14px] gap-y-[14px] md:gap-x-[19px] xl:gap-x-[29px] md:gap-y-[30px] xl:gap-y-[40px]">
        {banners.map((bn, index) => (
          <div
            onClick={() => navigate("/wallpaper")}
            key={index}
            className="w-full h-[152px] 2xl:h-[190px] overflow-hidden rounded-[5px] md:rounded-[10px] 2xl:rounded-[15px]"
          >
            <img
              src={bn.img}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 rounded-[5px] md:rounded-[10px] 2xl:rounded-[15px] duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-[14px]">
        <Button className="w-[127px] h-[37px] md:w-[174px] md:h-[49px] shadow-none hover:shadow-none font-lato font-bold !text-white md:!text-[#949494] text-[12px]  md:text-[15px] leading-[14.4px] normal-case p-0 rounded-[100px] bg-[#00000080]">
          More Wallpapers
        </Button>
      </div>
    </div>
  );
};

export default Banner;
