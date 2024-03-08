/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const MediaCenterCollectionAria = ({
  collectionWallpapers,
  selectedCollectionWallpaper,
  setSelectedCollectionWallpaper,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-[14px] gap-y-[19px] md:gap-x-[32px] md:gap-y-[24px] lg:gap-x-[41px] lg:gap-y-[34px]">
        {collectionWallpapers.map((item, index) => (
          <div key={index} className={``}>
            <div
              onClick={() =>
                setSelectedCollectionWallpaper(
                  selectedCollectionWallpaper?.id === item.id ? null : item
                )
              }
              className={`grid grid-cols-2 w-full h-[152px] md:h-[138px] rounded-[10px] overflow-hidden ${
                selectedCollectionWallpaper?.id === item.id
                  ? "border-[2px] border-[#B3FD16]"
                  : ""
              }`}
            >
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="wallpaper"
                  className="w-full h-full object-cover cursor-pointer"
                />
              ))}
            </div>
            <div className="max-w-[119px] md:max-w-[188px] h-[26px] bg-[#00000033] mt-[13px] md:mt-[9px] flex justify-center items-center mx-auto rounded-[5px]">
              <h1 className="text-[#fff] text-center font-lato text-[12px]">
                Call of Duty
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCenterCollectionAria;
