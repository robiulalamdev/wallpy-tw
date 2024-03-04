import WallpaperSidebar from "../../components/wallpaper/WallpaperSidebar";
import bg from "../../assets/images/wallpaper/bg.png";
import sm from "../../assets/images/wallpaper/sm.png";
import MainHeader from "../../components/shared/headers/MainHeader";
import {
  iAdd,
  iAddPlus,
  iGallery,
  iLove,
  iMenu,
  iShare,
  iShare1,
  iShare2,
  iShare3,
  iShare4,
  iShare5,
  iShare6,
  iShareClose,
} from "../../utils/icons/icons";

import download from "../../assets/icons/wallpaper/download.gif";
import { useRef, useState } from "react";

import img1 from "../../assets/images/wallpaper/img1.png";
import img2 from "../../assets/images/wallpaper/img2.png";
import img3 from "../../assets/images/wallpaper/img3.png";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import SimpleHeader from "../../components/shared/headers/SimpleHeader";
import { Link, useNavigate } from "react-router-dom";

const Wallpaper = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const shareRef = useRef();
  return (
    <>
      <SimpleHeader />
      <div className="flex justify-between items-start gap-x-[13px] h-full w-full">
        <WallpaperSidebar open={open} setOpen={setOpen} />
        <div className="w-full h-full flex-grow min-h-[755px] max-h-[755px] lg:min-h-[802px] lg:max-h-[802px] max-w-[1442px] rounded-[10px] relative">
          <img
            src={bg}
            alt="single wallpaper"
            className="w-full h-full min-h-[755px] lg:min-h-[802px] object-cover rounded-[10px] hidden lg:block"
          />
          <img
            src={sm}
            alt="single wallpaper"
            className="w-full h-full min-h-[755px] lg:min-h-[802px] object-cover rounded-[10px] lg:hidden"
          />
          <div
            className="absolute top-[21px] lg:top-[21px] right-[22px] lg:right-[27px] grid grid-cols-2 w-[97px] h-[37px] rounded-[5px]"
            style={{ background: "rgba(0, 0, 0, 0.60)" }}
          >
            <Popover placement="bottom-end">
              <PopoverHandler>
                <div className="h-full w-full flex justify-center items-center">
                  {iAdd}
                </div>
              </PopoverHandler>
              <PopoverContent className="min-w-[223px] min-h-[257px] bg-[#000000E5] rounded-[5px] pt-[14px] pr-[19px] pl-[13px] pb-[15px] border-none">
                <div className="flex items-center gap-x-[19px]">
                  <input
                    type="text"
                    placeholder="Search Collections"
                    className="h-[45px] bg-[#FFF] rounded-[5px] outline-none flex-grow w-full px-[8px] min-w-[145px]"
                  />
                  <div>{iAddPlus}</div>
                </div>

                <div className="grid grid-cols-1 gap-y-[10px] max-h-[250px] h-full overflow-y-scroll mt-[20px]">
                  <div className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]">
                    <div>{iGallery}</div>
                    <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                      Call of Duty
                    </h1>
                  </div>
                  <div className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]">
                    <div>{iGallery}</div>
                    <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                      World of Warcraft
                    </h1>
                  </div>
                  <div className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]">
                    <div>{iGallery}</div>
                    <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                      League of Legends
                    </h1>
                  </div>
                  <div className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]">
                    <div>{iGallery}</div>
                    <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                      Anime
                    </h1>
                  </div>
                  <div className="h-11 flex items-center gap-[6px]">
                    <div>{iGallery}</div>
                    <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                      Landscapes
                    </h1>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <div className="h-full w-full flex justify-center items-center">
              {iLove}
            </div>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-white cursor-pointer absolute top-[21px] lg:top-[21px] left-[22px] lg:left-[27px] lg:hidden"
          >
            {iMenu}
          </div>

          <div
            className="absolute bottom-[17px] left-[19px] flex justify-center items-center w-[53px] h-[50px] rounded-[5px] lg:hidden"
            style={{ background: "rgba(0, 0, 0, 0.60)" }}
          >
            <img src={download} alt="" className="size-[40px]" />
          </div>

          <Popover placement="top-end">
            <PopoverHandler ref={shareRef}>
              <div
                className="absolute bottom-[27px] lg:bottom-[24px] right-[22px] lg:right-[17px] flex justify-center items-center w-[30px] h-[30px] rounded-[5px]"
                style={{ background: "rgba(0, 0, 0, 0.60)" }}
              >
                {iShare}
              </div>
            </PopoverHandler>
            <PopoverContent className="max-w-[377px] w-full min-h-[102px] pb-[20px] px-[9px] pt-[5px] bg-[#090A0C] rounded-[10px] outline-none border-none">
              <div className="flex items-center justify-between">
                <span></span>
                <h1 className="text-[#FFF] font-bakbak-one text-[15px]">
                  Share this wallpaper with friends
                </h1>
                <div onClick={() => shareRef.current.click()}>
                  {iShareClose}
                </div>
              </div>

              <div className="flex justify-center items-end flex-wrap gap-x-[22px] gap-y-[20px] mt-[11px] px-[11px]">
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare1}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">X</h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare2}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">
                    Facebook
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare3}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">
                    WhatsApp
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare4}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">Discord</h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare5}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">Email</h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare6}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">
                    Copy Link
                  </h1>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="mt-[17px] md:mt-[62px]">
        <h1 className="text-[#939393] font-bakbak-one text-center text-[20px] md:text-[30px]">
          You may also like
        </h1>

        <div className="grid grid-cols-3 gap-x-[16px] md:gap-x-[42px] lg:gap-x-[83px] mt-[17px] md:mt-[32px] lg:mt-[59px]">
          <div className="w-full h-[160px] md:h-[277px] overflow-hidden rounded-[5px] md:rounded-[10px]">
            <img
              onClick={() => navigate("/wallpaper")}
              src={img1}
              alt="image"
              className="w-full h-full object-cover rounded-[5px] md:rounded-[10px] hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="w-full h-[160px] md:h-[277px] overflow-hidden rounded-[5px] md:rounded-[10px]">
            <img
              onClick={() => navigate("/wallpaper")}
              src={img2}
              alt="image"
              className="w-full h-full object-cover rounded-[5px] md:rounded-[10px] hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="w-full h-[160px] md:h-[277px] overflow-hidden rounded-[5px] md:rounded-[10px]">
            <img
              onClick={() => navigate("/wallpaper")}
              src={img3}
              alt="image"
              className="w-full h-full object-cover rounded-[5px] md:rounded-[10px] hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>

        <Link to="/wallpapers/search">
          <Button className="bg-[#000000] !text-[#ccc] font-bakbak-one text-[12px] w-[97px] h-[32px] rounded-[15px] shadow-none hover:shadow-none normal-case font-normal mt-[22px] text-nowrap !p-0 mx-auto hidden md:block">
            View more
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Wallpaper;
