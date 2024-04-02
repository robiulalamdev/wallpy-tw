/* eslint-disable react/prop-types */
import useViewImage from "../../lib/hooks/useViewImage";

const MediaCenterFavoriteSingleImage = ({
  wallpaper,
  selectedItems,
  handleSelectFavoriteWallpapers,
}) => {
  const { viewImg } = useViewImage();

  const isExist = selectedItems?.some((item) => item?._id === wallpaper?._id);
  return (
    <>
      <div
        onClick={() => handleSelectFavoriteWallpapers(wallpaper)}
        className={`w-full h-[152px] md:h-[138px] overflow-hidden rounded-[10px] ${
          isExist ? "border-[2px] border-[#B3FD16]" : ""
        }`}
      >
        <img
          src={viewImg(wallpaper.wallpaper?.wallpaper)}
          alt=""
          className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
    </>
  );
};

export default MediaCenterFavoriteSingleImage;
