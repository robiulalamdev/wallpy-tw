/* eslint-disable react/prop-types */
import { useState } from "react";
import LazyWallpaper from "../common/wallpaper/LazyWallpaper";
import { useNavigate } from "react-router-dom";
import SeenOverlay from "../common/SeenOverlay";

const SingleSearchWallpaper = ({ item = null }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(item.isFeatured ? true : false);
  return (
    <>
      <div
        onClick={() => (open ? setOpen(false) : navigate(`/w/${item?.slug}`))}
        className={`w-full h-[152px] md:h-[170px] rounded-[5px] md:rounded-[10px] lg:rounded-[15px] overflow-hidden relative`}
      >
        <LazyWallpaper
          src={item?.wallpaper}
          alt={item?.wallpaper}
          maxWidth={400}
          maxHeight={300}
          width={400}
          height={300}
          className="w-full h-full rounded-[5px] md:rounded-[10px] lg:rounded-[15px] object-cover hover:scale-110 duration-300 cursor-pointer"
        />
        {open && <SeenOverlay />}
      </div>
    </>
  );
};

export default SingleSearchWallpaper;