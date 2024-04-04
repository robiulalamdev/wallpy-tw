import React from "react";

import img1 from "../../../assets/images/home/feature-wellpaper/img1.png";
import img2 from "../../../assets/images/home/feature-wellpaper/img2.png";
import img3 from "../../../assets/images/home/feature-wellpaper/img3.png";

import img4 from "../../../assets/images/home/feature-wellpaper/img4.png";
import img5 from "../../../assets/images/home/feature-wellpaper/img5.png";
import img6 from "../../../assets/images/home/feature-wellpaper/img6.png";
import { useNavigate } from "react-router-dom";
import { useGetFeaturedWallpapersQuery } from "../../../redux/features/wallpapers/wallpapersApi";
import useViewImage from "../../../lib/hooks/useViewImage";

const FeaturedWallpapers = () => {
  const { data } = useGetFeaturedWallpapersQuery("?limit=3");
  const navigate = useNavigate();

  const { viewImg } = useViewImage();
  return (
    <>
      {data?.data?.length > 0 && (
        <div className="">
          <h1 className="text-white text-center font-bakbak-one text-[15px] md:text-[35px] leading-[21px] font-normal mt-[20px] mb-[28px] md:mt-[106px] md:mb-[52px]">
            Featured Wallpapers
          </h1>

          <div className="md:grid grid-cols-3 gap-x-[55px] hidden md:inline-block">
            {data?.data?.map((item, index) => (
              <div
                key={index}
                className="min-h-[279px] max-h-[279px] max-w-[494px] w-full rounded-[15px] overflow-hidden"
              >
                <img
                  onClick={() => navigate(`/wallpapers/${item?.slug}`)}
                  src={viewImg(item?.wallpaper)}
                  alt="img"
                  className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                />
              </div>
            ))}
            {/* <div className="min-h-[279px] max-h-[279px] max-w-[494px] w-full rounded-[15px] overflow-hidden">
              <img
                onClick={() => navigate("/wallpapers/search")}
                src={img1}
                alt="img"
                className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
            <div className="min-h-[279px] max-h-[279px] max-w-[494px] w-full rounded-[15px] overflow-hidden">
              <img
                onClick={() => navigate("/wallpapers/search")}
                src={img2}
                alt="img"
                className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
            <div className="min-h-[279px] max-h-[279px] max-w-[494px] w-full rounded-[15px] overflow-hidden">
              <img
                onClick={() => navigate("/wallpapers/search")}
                src={img3}
                alt="img"
                className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div> */}
          </div>

          {/* small */}
          <div className="grid grid-cols-2 gap-x-[6px] gap-y-[10px] md:hidden">
            {data?.data?.map((item, index) => (
              <div
                key={index}
                className="min-h-[131px] max-h-[131px] w-full rounded-[10px] overflow-hidden col-span-2"
              >
                <img
                  onClick={() => navigate(`/wallpapers/${item?.slug}`)}
                  src={viewImg(item?.wallpaper)}
                  alt="img"
                  className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                />
              </div>
            ))}

            {/* <div className="min-h-[86px] max-h-[86px] w-full rounded-[10px] overflow-hidden">
              <img
                onClick={() => navigate("/wallpapers/search")}
                src={img5}
                alt="img"
                className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
            <div className="min-h-[86px] max-h-[86px] w-full rounded-[10px] overflow-hidden">
              <img
                onClick={() => navigate("/wallpapers/search")}
                src={img6}
                alt="img"
                className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedWallpapers;
