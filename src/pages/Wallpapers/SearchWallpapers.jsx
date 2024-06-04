/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
import TitleHeader from "../../components/shared/headers/TitleHeader";
import SearchWallpapersSearchInput from "../../components/SearchWallpapers/SearchWallpapersSearchInput";
// import { wallpapers } from "../../utils/data/wallpapers";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SearchWallpapersTabs from "../../components/SearchWallpapers/SearchWallpapersTabs";
import { useContext, useEffect, useMemo, useState } from "react";
import SearchWallpaperNsfwAria from "../../components/SearchWallpapers/SearchWallpaperNsfwAria";
import { useGetSearchAndFilterWallpapersQuery } from "../../redux/features/wallpapers/wallpapersApi";
import useViewImage from "../../lib/hooks/useViewImage";
import PageLoading from "../../components/common/loadings/PageLoading";
import { AuthContext } from "../../contextApi/AuthContext";
import { makeQuery } from "../../lib/services/service";
import NoData from "../../components/common/notFound/NoData";
import LazyWallpaper from "../../components/common/wallpaper/LazyWallpaper";

const SearchWallpapers = () => {
  const { user } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");
  const tn = searchParams.get("tn") || "Trending";
  const type = searchParams.get("type");
  const classification = searchParams.get("classification");
  const height = searchParams.get("height");
  const width = searchParams.get("width");
  const screen_type = searchParams.get("screen_type");
  const sort_by = searchParams.get("sort_by");
  const date = searchParams.get("date");
  const tag = searchParams.get("tag");

  const queries = `${search ? `search=${search}&` : ""}${
    tn ? `tn=${tn}&` : ""
  }${type ? `type=${type}&` : ""}${
    classification ? `classification=${classification}&` : ""
  }${width && height ? `width=${width}&height=${height}&` : ""}${
    screen_type ? `screen_type=${screen_type}&` : ""
  }${sort_by ? `sort_by=${sort_by}&` : ""}${date ? `date=${date}&` : ""}${
    tag ? `tag=${tag}&` : ""
  }`;

  const { data, isLoading } = useGetSearchAndFilterWallpapersQuery(
    `?${queries?.slice(0, -1)}`
  );
  const [wallpapers, setWallpapers] = useState([]);
  const [tab1, setTab1] = useState("Trending");
  const [tab2, setTab2] = useState("All");
  const [tab3, setTab3] = useState("SFW");

  const navigate = useNavigate();

  const queryObject = {
    search: search || "",
    tn: tn || "Trending",
    type: type || "",
    classification: classification || "",
    width: width || "",
    height: height || "",
    screen_type: screen_type || "",
    sort_by: sort_by || "",
    date: date || "",
    tag: tag || "",
  };

  useMemo(() => {
    if (data?.data) {
      if (data?.data?.data?.length > 0) {
        setWallpapers(data?.data?.data);
      }
    }
  }, [data]);

  const handleQuery = async (name, value, isDelete = false) => {
    if (name === "dimensions") {
      const query = await makeQuery(
        "",
        "",
        {
          ...queryObject,
          width: value.width,
          height: value.height,
        },
        true, // isDimensions
        isDelete
      );
      window.location.replace(`?${query}`);
    } else {
      const query = await makeQuery(name, value, queryObject, isDelete);
      window.location.replace(`?${query}`);
    }
  };

  const isTrue = (tab3 === "NSFW" && user?.settings?.nsfw) || tab3 !== "NSFW";

  const types = ["all", "illustration", "photography", "ai"];
  useEffect(() => {
    if (type && types.includes(type.toLowerCase())) {
      setTab2(type);
    }
    if (tn && ["trending", "new"].includes(tn.toLowerCase())) {
      setTab1(tn);
    }
    if (
      classification &&
      ["sfw", "nsfw"].includes(classification.toLowerCase())
    ) {
      setTab3(classification);
    }
  }, [queries]);

  return (
    <>
      <TitleHeader />

      <div className="w-full h-full">
        <SearchWallpapersSearchInput handleQuery={handleQuery} />

        <SearchWallpapersTabs
          tab1={tab1}
          setTab1={setTab1}
          tab2={tab2}
          setTab2={setTab2}
          tab3={tab3}
          setTab3={setTab3}
          handleQuery={handleQuery}
        />

        <div className="border-t-[1px] border-[#5A5A5A] mt-[39px] mb-[27px] hidden md:block"></div>

        {tab3 === "NSFW" && !isLoading && (
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
                      onClick={() => navigate(`/w/${item?.slug}`)}
                      key={index}
                      className={`w-full h-[152px] md:h-[170px] rounded-[5px] md:rounded-[10px] lg:rounded-[15px] overflow-hidden relative`}
                    >
                      <LazyWallpaper
                        src={item.wallpaper}
                        alt={item?.wallpaper}
                        maxWidth={400}
                        maxHeight={300}
                        width={400}
                        height={300}
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

            {!isLoading && wallpapers?.length < 1 && <NoData />}
          </>
        )}
      </div>
    </>
  );
};
export default SearchWallpapers;
