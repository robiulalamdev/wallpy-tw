import TitleHeader from "../../components/shared/headers/TitleHeader";
import SearchWallpapersSearchInput from "../../components/SearchWallpapers/SearchWallpapersSearchInput";
// import { wallpapers } from "../../utils/data/wallpapers";
import { useLocation, useNavigate } from "react-router-dom";
import SearchWallpapersTabs from "../../components/SearchWallpapers/SearchWallpapersTabs";
import { useContext, useMemo, useState } from "react";
import SearchWallpaperNsfwAria from "../../components/SearchWallpapers/SearchWallpaperNsfwAria";
import { useGetSearchWallpapersQuery } from "../../redux/features/wallpapers/wallpapersApi";
import useViewImage from "../../lib/hooks/useViewImage";
import PageLoading from "../../components/common/loadings/PageLoading";
import { AuthContext } from "../../contextApi/AuthContext";

const SearchWallpapers = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search") || "";

  const { data, isLoading } = useGetSearchWallpapersQuery(
    `?${search && `search=${search}`}`
  );
  const { viewImg } = useViewImage();
  const [wallpapers, setWallpapers] = useState([]);
  const [tab3, setTab3] = useState("SFW");
  const navigate = useNavigate();

  useMemo(() => {
    if (data?.data) {
      if (data?.data?.data?.length > 0) {
        setWallpapers(data?.data?.data);
      }
    }
  }, [data]);

  const isTrue = (tab3 === "NSFW" && user?.settings?.nsfw) || tab3 !== "NSFW";

  return (
    <>
      <TitleHeader />

      <div className="w-full h-full">
        <SearchWallpapersSearchInput />

        <SearchWallpapersTabs tab3={tab3} setTab3={setTab3} />

        <div className="border-t-[1px] border-[#5A5A5A] mt-[39px] mb-[27px] hidden md:block"></div>

        {tab3 === "NSFW" && (
          <>{!user?.settings?.nsfw && <SearchWallpaperNsfwAria />}</>
        )}
        {isTrue && (
          <>
            {isLoading && wallpapers?.length < 1 && <PageLoading />}
            {!isLoading && wallpapers?.length > 0 && (
              <>
                <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-[14px] gap-y-[14px] md:gap-x-[16px] md:gap-y-[32px] lg:gap-x-[26px] lg:gap-y-[42px]">
                  {wallpapers?.map((item, index) => (
                    <div
                      onClick={() => navigate(`/wallpapers/${item?.slug}`)}
                      key={index}
                      className={`w-full h-[152px] md:h-[170px] rounded-[5px] md:rounded-[10px] lg:rounded-[15px] overflow-hidden`}
                    >
                      <img
                        src={viewImg(item.wallpaper)}
                        alt="wallpaper"
                        className="w-full h-full rounded-[5px] md:rounded-[10px] lg:rounded-[15px] object-cover hover:scale-110 duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                <div className="bg-[#000000] w-[128px] h-[42px] rounded-[100px] mx-auto mt-[27px] flex justify-center items-center font-bakbak-one text-[12px] text-[#CCC] cursor-pointer md:hidden">
                  Load More
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default SearchWallpapers;
