import BannerTab from "./BannerTab";
import img1 from "../../../assets/images/home/banner/img1.png";
import { Button } from "@material-tailwind/react";

const Banner = () => {
  const images = [
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
  ];
  return (
    <div className="bg-[#00000033] rounded-[10px] md:rounded-[40px] px-[12px] md:px-[35px]">
      <BannerTab />

      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-[10px] gap-y-[12px] lg:gap-x-[30px] md:gap-y-[35px]">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full max-w-[115px] h-[152px] md:max-w-[360px] md:h-[190px] overflow-hidden rounded-[5px] md:rounded-[15px]"
          >
            <img
              src={img}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 rounded-[5px] md:rounded-[15px] duration-300 cursor-pointer"
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
