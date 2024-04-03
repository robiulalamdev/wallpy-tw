/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useViewImage from "../../lib/hooks/useViewImage";

const ProfileCollectionsWallpapers = ({ collections = [] }) => {
  const { viewImg } = useViewImage();
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[14px] gap-y-[19px] md:gap-x-[32px] md:gap-y-[24px] lg:gap-x-[41px] lg:gap-y-[34px] mt-[18px] md:mt-[53px]">
        {collections?.map((item, index) => (
          <div key={index} className="">
            <div
              onClick={() => navigate("/wallpapers")}
              className={`grid grid-cols-2 w-full h-[152px] md:h-[138px] rounded-[5px] md:rounded-[7px] lg:rounded-[10px] overflow-hidden`}
            >
              {item?.wallpapers?.slice(0, 4)?.map((img, i) => (
                <img
                  key={i}
                  src={viewImg(img?.wallpaper)}
                  alt="wallpaper"
                  className={`w-full h-full object-cover cursor-pointer ${
                    item?.wallpapers?.length === 1 && "col-span-2"
                  }`}
                />
              ))}
            </div>
            <h1 className="text-[10px] md:text-[12px] font-lato text-[#FFF] font-semibold text-center mt-[9px] md:mt-[11px] oneLine">
              {item?.name}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileCollectionsWallpapers;
