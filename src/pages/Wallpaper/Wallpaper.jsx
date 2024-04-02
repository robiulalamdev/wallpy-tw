import WallpaperSidebar from "../../components/wallpaper/WallpaperSidebar";
// import bg from "../../assets/images/wallpaper/bg.png";
// import sm from "../../assets/images/wallpaper/sm.png";
// import MainHeader from "../../components/shared/headers/MainHeader";
import {
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
import { useContext, useRef, useState } from "react";

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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetWallpaperBySlugQuery } from "../../redux/features/wallpapers/wallpapersApi";
import useViewImage from "../../lib/hooks/useViewImage";
import PageLoading from "../../components/common/loadings/PageLoading";
import ErrorPageMain from "../../components/common/errorPages/ErrorPageMain";
import WallpaperFavoriteAndCollection from "../../components/wallpaper/WallpaperFavoriteAndCollection";
import { AuthContext } from "../../contextApi/AuthContext";

const Wallpaper = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetWallpaperBySlugQuery(slug);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { viewImg } = useViewImage();
  const shareRef = useRef();

  return (
    <>
      <SimpleHeader />

      {isLoading && <PageLoading />}
      {!isLoading && !data?.data && <ErrorPageMain />}
      {!isLoading && data?.data && (
        <div className="flex justify-between items-start gap-x-[13px] h-full w-full">
          <WallpaperSidebar open={open} setOpen={setOpen} data={data?.data} />
          <div className="w-full h-full flex-grow min-h-[755px] max-h-[755px] lg:min-h-[802px] lg:max-h-[802px] max-w-[1442px] rounded-[10px] overflow-hidden relative">
            <img
              src={viewImg(data?.data?.wallpaper)}
              alt="single wallpaper"
              className="w-full h-full min-h-[755px] lg:min-h-[802px] object-cover rounded-[10px] hidden lg:block"
            />
            <img
              src={viewImg(data?.data?.wallpaper)}
              alt="single wallpaper"
              className="w-full h-full min-h-[755px] lg:min-h-[802px] object-cover rounded-[10px] lg:hidden"
            />
            {user && <WallpaperFavoriteAndCollection data={data?.data} />}

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
                    <h1 className="text-[#FFF] font-lato text-[10px]">
                      Discord
                    </h1>
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
      )}

      {!isLoading && data?.data && (
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
      )}
    </>
  );
};

export default Wallpaper;
