/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LazyWallpaper from "../../common/wallpaper/LazyWallpaper";
import SeenOverlay from "../../common/SeenOverlay";

const BannerWallpapers = ({ item = null }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(item.isFeatured ? true : false);
  return (
    <>
      <div
        onClick={() => (open ? setOpen(false) : navigate(`/w/${item?.slug}`))}
        className="w-full h-[152px] 2xl:h-[190px] overflow-hidden relative rounded-[5px] md:rounded-[10px] 2xl:rounded-[15px]"
      >
        <LazyWallpaper
          src={item?.wallpaper}
          alt={item?.wallpaper}
          maxWidth={400}
          maxHeight={300}
          width={400}
          height={300}
          className="w-full h-full object-cover hover:scale-110 rounded-[5px] md:rounded-[10px] 2xl:rounded-[15px] duration-300 cursor-pointer"
        />
        {open && <SeenOverlay />}
      </div>
    </>
  );
};

export default BannerWallpapers;
