/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import LazyWallpaper from "../../common/wallpaper/LazyWallpaper";
import overlay from "../../../assets/images/dashboard-images/sponsor/overlay.png";

const FeaturedViewWallpaper = ({ data, selectedItems = [], handleSelect }) => {
  const isExist = selectedItems.some((item) => item?._id === data?._id);
  return (
    <div
      onClick={() => handleSelect(data)}
      className={`max-w-[217px] w-full h-[109px] rounded-[5px] overflow-hidden relative`}
    >
      <LazyWallpaper
        src={data?.wallpaper}
        alt={data?.wallpaper}
        maxWidth={217}
        maxHeight={109}
        width={217}
        height={109}
        className="w-full h-full rounded-[5px] object-cover cursor-pointer"
      />
      {!isExist && (
        <div className="w-full h-full !bg-black !bg-opacity-80 rounded-[10px] !absolute top-0 left-0 cursor-pointer">
          <img src={overlay} alt="" className="w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default FeaturedViewWallpaper;
