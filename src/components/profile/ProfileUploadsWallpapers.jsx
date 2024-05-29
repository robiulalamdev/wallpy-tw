/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useViewImage from "../../lib/hooks/useViewImage";
import NoData from "../common/notFound/NoData";

const ProfileUploadsWallpapers = ({ wallpapers = [] }) => {
  const { viewImg } = useViewImage();
  const navigate = useNavigate();
  return (
    <>
      {wallpapers.length > 0 && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[14px] gap-y-[14px] md:gap-x-[16px] md:gap-y-[32px] lg:gap-x-[40px] lg:gap-y-[59px] mt-[18px] md:mt-[53px]">
          {wallpapers?.map((item, index) => (
            <div
              onClick={() => navigate(`/wallpapers/${item?.slug}`)}
              key={index}
              className={`w-full h-[152px] md:h-[138px] rounded-[5px] md:rounded-[7px] lg:rounded-[10px] overflow-hidden`}
            >
              <img
                src={viewImg(item?.wallpaper)}
                alt="wallpaper"
                loading="lazy"
                className="w-full h-full rounded-[5px] md:rounded-[7px] lg:rounded-[10px] object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
      {wallpapers?.length < 1 && <NoData />}
    </>
  );
};

export default ProfileUploadsWallpapers;
