/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import MediaCenterFavoriteSingleImage from "./MediaCenterFavoriteSingleImage";

const MediaCenterFavoriteAria = ({
  items,
  selectedItems,
  handleSelectFavoriteWallpapers,
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-[12px] gap-y-[14px] md:gap-x-[30px] md:gap-y-[19px] xl:gap-x-[40px] xl:gap-y-[47px] ">
        {items?.map((wall, index) => (
          <MediaCenterFavoriteSingleImage
            key={index}
            wallpaper={wall}
            selectedItems={selectedItems}
            handleSelectFavoriteWallpapers={handleSelectFavoriteWallpapers}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaCenterFavoriteAria;
