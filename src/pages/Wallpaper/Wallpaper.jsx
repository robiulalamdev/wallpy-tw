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
import { useContext, useEffect, useRef, useState } from "react";

// import img1 from "../../assets/images/wallpaper/img1.png";
// import img2 from "../../assets/images/wallpaper/img2.png";
// import img3 from "../../assets/images/wallpaper/img3.png";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import SimpleHeader from "../../components/shared/headers/SimpleHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetPopularWallpapersQuery,
  useGetWallpaperBySlugQuery,
  useIncrementWallViewMutation,
} from "../../redux/features/wallpapers/wallpapersApi";
import useViewImage from "../../lib/hooks/useViewImage";
import PageLoading from "../../components/common/loadings/PageLoading";
import ErrorPageMain from "../../components/common/errorPages/ErrorPageMain";
import WallpaperFavoriteAndCollection from "../../components/wallpaper/WallpaperFavoriteAndCollection";
import { AuthContext } from "../../contextApi/AuthContext";
import { CLIENT_URL } from "../../lib/config";
import {
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";
import { toast } from "react-toastify";
import { downloadImageWithWH } from "../../lib/services/service";
import { SpinnerCircularFixed } from "spinners-react";
import LazyWallpaper from "../../components/common/wallpaper/LazyWallpaper";

const Wallpaper = () => {
  const { user } = useContext(AuthContext);
  const { slug } = useParams();
  const { data, isLoading } = useGetWallpaperBySlugQuery(slug);
  const { data: popularWallpapers } = useGetPopularWallpapersQuery("?limit=3");
  const [incrementWallView] = useIncrementWallViewMutation();
  const [url, setUrl] = useState("");
  const [downloading, setDownloading] = useState(false);

  const wallpaperRef = useRef();

  const [open, setOpen] = useState(false);
  const [permit, setPermit] = useState(true);
  const navigate = useNavigate();

  const { viewImg, viewResizeImg } = useViewImage();
  const shareRef = useRef();
  // console.log(data?.data);

  useEffect(() => {
    setUrl(`${CLIENT_URL}/w/${slug}`);
  }, [slug]);

  const openWallpaper = (slug) => {
    window.scrollTo(0, 0);
    navigate(`/w/${slug}`);
  };

  const handleView = async () => {
    const options = {
      data: {},
      wallpaperId: data?.data?._id,
    };
    await incrementWallView(options);
  };

  useEffect(() => {
    if (data?.data) {
      if (permit) {
        setTimeout(() => {
          setPermit(false);
          handleView();
        }, 5000);
      }
    }
  }, [data]);

  const handleDownload = async () => {
    const url = viewResizeImg(
      data?.data?.wallpaper,
      data?.data?.dimensions.width,
      data?.data?.dimensions.height,
      "fill"
    );
    if (
      url &&
      data?.data?.dimensions.width > 0 &&
      data?.data?.dimensions.height > 0
    ) {
      setDownloading(true);
      await downloadImageWithWH(url);
      setTimeout(() => {
        setDownloading(false);
      }, 600);
    }
  };

  console.log(data?.data);

  return (
    <>
      <SimpleHeader />

      {isLoading && <PageLoading />}
      {!isLoading && !data?.data && <ErrorPageMain showHeader={false} />}
      {!isLoading && data?.data && (
        <div
          ref={wallpaperRef}
          className="flex justify-between items-start gap-x-[13px] h-full w-full"
        >
          <WallpaperSidebar open={open} setOpen={setOpen} data={data?.data} />
          <div className="w-full h-full flex-grow min-h-[755px] max-h-[755px] lg:min-h-[802px] lg:max-h-[802px] max-w-[1442px] rounded-[10px] overflow-hidden relative">
            {data?.data?.screen_type !== "Phones" && (
              <img
                src={viewResizeImg(data?.data?.wallpaper, 1420, 820)}
                alt="single wallpaper"
                className="w-full h-full min-h-[755px] lg:min-h-[802px] object-cover rounded-[10px]"
              />
            )}

            {data?.data?.screen_type === "Phones" && (
              <img
                src={viewResizeImg(data?.data?.wallpaper, 450, 810)}
                alt="single wallpaper"
                className="2xl:ml-[310px] mx-auto w-full max-w-[448px] h-full min-h-[755px] lg:min-h-[802px] lg:max-h-[802px] object-cover rounded-[10px]"
              />
            )}

            {user && <WallpaperFavoriteAndCollection data={data?.data} />}

            <div
              onClick={() => setOpen(!open)}
              className="text-white cursor-pointer absolute top-[21px] lg:top-[21px] left-[22px] lg:left-[27px] lg:hidden"
            >
              {iMenu}
            </div>

            <div
              onClick={() => handleDownload()}
              className="absolute bottom-[17px] left-[19px] flex justify-center items-center w-[53px] h-[50px] rounded-[5px] lg:hidden"
              style={{ background: "rgba(0, 0, 0, 0.60)" }}
            >
              {downloading ? (
                <SpinnerCircularFixed
                  size={24}
                  speed={320}
                  thickness={140}
                  color="white"
                  secondaryColor="gray"
                />
              ) : (
                <img src={download} alt="" className="size-[40px]" />
              )}
            </div>

            <Popover placement="top-end">
              <PopoverHandler ref={shareRef}>
                <div
                  className="cursor-pointer absolute bottom-[27px] lg:bottom-[24px] right-[22px] lg:right-[17px] flex justify-center items-center w-[30px] h-[30px] rounded-[5px]"
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

                <div className="flex justify-center items-end flex-wrap gap-x-[22px] gap-y-[20px] mt-[11px] px-[11px] cursor-pointer">
                  <div className="flex flex-col items-center gap-[8px]">
                    <TwitterShareButton url={url}>
                      <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                        {iShare1}
                      </div>
                    </TwitterShareButton>
                    <TwitterShareButton url={url}>
                      <h1 className="text-[#FFF] font-lato text-[10px]">X</h1>
                    </TwitterShareButton>
                  </div>
                  <div className="flex flex-col items-center gap-[8px]">
                    <FacebookShareButton url={url}>
                      <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                        {iShare2}
                      </div>
                    </FacebookShareButton>
                    <FacebookShareButton url={url}>
                      <h1 className="text-[#FFF] font-lato text-[10px]">
                        Facebook
                      </h1>
                    </FacebookShareButton>
                  </div>
                  <div className="flex flex-col items-center gap-[8px]">
                    <WhatsappShareButton url={url}>
                      <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                        {iShare3}
                      </div>
                    </WhatsappShareButton>
                    <WhatsappShareButton url={url}>
                      <h1 className="text-[#FFF] font-lato text-[10px]">
                        WhatsApp
                      </h1>
                    </WhatsappShareButton>
                  </div>
                  <div className="flex flex-col items-center gap-[8px]">
                    <div
                      onClick={() =>
                        window.open(
                          `https://discord.com/oauth2/authorize?client_id=1247258059596632134&permissions=0&scope=bot&redirect_uri=${encodeURIComponent(
                            url
                          )}`,
                          "_blank"
                        )
                      }
                      className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center"
                    >
                      {iShare4}
                    </div>
                    <h1
                      onClick={() =>
                        window.open(
                          `https://discord.com/oauth2/authorize?client_id=1247258059596632134&permissions=0&scope=bot&redirect_uri=${encodeURIComponent(
                            url
                          )}`,
                          "_blank"
                        )
                      }
                      className="text-[#FFF] font-lato text-[10px]"
                    >
                      Discord
                    </h1>
                  </div>
                  <div className="flex flex-col items-center gap-[8px]">
                    <a
                      href={`mailto:?subject=Check%20out%20my%20profile&body=${encodeURIComponent(
                        url
                      )}`}
                    >
                      <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                        {iShare5}
                      </div>
                    </a>

                    <a
                      href={`mailto:?subject=Check%20out%20my%20profile&body=${encodeURIComponent(
                        url
                      )}`}
                    >
                      <h1 className="text-[#FFF] font-lato text-[10px]">
                        Email
                      </h1>
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-[8px]">
                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(url);
                        toast.success("Link Copied");
                      }}
                      className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center"
                    >
                      {iShare6}
                    </div>
                    <h1
                      onClick={() => {
                        navigator.clipboard.writeText(url);
                        toast.success("Link Copied");
                      }}
                      className="text-[#FFF] font-lato text-[10px]"
                    >
                      Copy Link
                    </h1>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}

      {!isLoading && data?.data && popularWallpapers?.data?.length > 0 && (
        <div className="mt-[17px] md:mt-[62px]">
          <h1 className="text-[#939393] font-bakbak-one text-center text-[20px] md:text-[30px]">
            You may also like
          </h1>

          <div className="grid grid-cols-3 gap-x-[16px] md:gap-x-[42px] lg:gap-x-[83px] mt-[17px] md:mt-[32px] lg:mt-[59px]">
            {popularWallpapers?.data?.map((item, index) => (
              <div
                onClick={() => openWallpaper(item.slug)}
                key={index}
                className="w-full h-[160px] md:h-[277px] overflow-hidden rounded-[5px] md:rounded-[10px] relative"
              >
                <LazyWallpaper
                  src={item?.wallpaper}
                  alt={item?.wallpaper}
                  maxWidth={600}
                  maxHeight={400}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-[5px] md:rounded-[10px] hover:scale-110 duration-300 cursor-pointer"
                />
              </div>
            ))}
            {/* <div className="w-full h-[160px] md:h-[277px] overflow-hidden rounded-[5px] md:rounded-[10px]">
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
            </div> */}
          </div>

          <Link to="/wallpapers">
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
