/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import LazyWallpaper from "../../common/wallpaper/LazyWallpaper";
import overlay from "../../../assets/images/dashboard-images/sponsor/overlay.png";

const SponsorWallpaper = ({ data, selectedItems = [], handleSelect }) => {
  const isExist = selectedItems.some((item) => item?._id === data?._id);
  return (
    <>
      <div
        onClick={() => handleSelect(data)}
        className={`w-full h-[115px] rounded-[10px] relative`}
      >
        <LazyWallpaper
          src={data?.wallpaper}
          alt={data?.wallpaper}
          maxWidth={240}
          maxHeight={115}
          width={240}
          height={115}
          className="w-full h-full rounded-[10px] object-cover cursor-pointer"
        />
        {!isExist && (
          <div className="w-full h-full !bg-black !bg-opacity-80 rounded-[10px] !absolute top-0 left-0 cursor-pointer">
            <img src={overlay} alt="" className="w-full h-full" />
          </div>
        )}
      </div>
    </>
  );
};

export default SponsorWallpaper;
