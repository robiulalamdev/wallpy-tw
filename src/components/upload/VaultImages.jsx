/* eslint-disable react/prop-types */
import useViewImage from "../../lib/hooks/useViewImage";

const VaultImages = ({ images, selectedImages, handleSelectImages }) => {
  const { viewImg } = useViewImage();
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-[12px] md:gap-y-[23px] gap-x-[14px] md:gap-x-[40px] w-full h-full">
        {images?.map((item, index) => (
          <div
            onClick={() => handleSelectImages(item)}
            key={index}
            className={`w-full h-[138px] rounded-[10px] overflow-hidden ${
              selectedImages.find((sItem) => sItem?._id === item?._id)
                ? "border-[2px] border-[#B3FD16]"
                : ""
            }`}
          >
            <img
              src={viewImg(item?.wallpaper)}
              alt="image"
              loading="lazy"
              className="w-full h-full object-cover rounded-[10px] hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default VaultImages;
