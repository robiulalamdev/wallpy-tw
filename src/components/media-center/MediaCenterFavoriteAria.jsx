/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const MediaCenterFavoriteAria = ({
  favoriteWallpapers,
  selectedWallpaper,
  setSelectedWallpaper,
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-[12px] gap-y-[14px] md:gap-x-[30px] md:gap-y-[19px] xl:gap-x-[40px] xl:gap-y-[47px] ">
        {favoriteWallpapers.map((wall, index) => (
          <div
            onClick={() =>
              setSelectedWallpaper(
                selectedWallpaper?.id === wall.id ? null : wall
              )
            }
            key={index}
            className={`w-full h-[152px] md:h-[138px] overflow-hidden rounded-[10px] ${
              selectedWallpaper?.id === wall.id
                ? "border-[2px] border-[#B3FD16]"
                : ""
            }`}
          >
            <img
              src={wall.thumbnail}
              alt=""
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCenterFavoriteAria;
