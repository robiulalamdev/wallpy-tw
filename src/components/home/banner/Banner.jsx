import BannerTab from "./BannerTab";
import { Button } from "@material-tailwind/react";
// import { banners } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";
import { useGetSearchWallpapersQuery } from "../../../redux/features/wallpapers/wallpapersApi";
import { useMemo, useState } from "react";
import useViewImage from "../../../lib/hooks/useViewImage";
import PageLoading from "../../common/loadings/PageLoading";
import NoData from "../../common/notFound/NoData";

const Banner = () => {
  const [tab1, setTab1] = useState("Trending");
  const [tab2, setTab2] = useState("All");
  const [limit, setLimit] = useState(12);
  const [searchString, setSearchString] = useState(`?limit=${limit}`);

  const { data, isLoading } = useGetSearchWallpapersQuery(searchString);
  const navigate = useNavigate();
  const { viewImg } = useViewImage();
  const [wallpapers, setWallpapers] = useState([]);

  useMemo(() => {
    if (data?.data) {
      setWallpapers(data?.data?.data);
    }
  }, [data?.data]);

  useMemo(() => {
    if (tab2) {
      setSearchString(`?limit=12${tab2 !== "All" ? `&type=${tab2}` : ""} `);
    }
  }, [tab2]);
  return (
    <div className="bg-[#00000033] rounded-[10px] md:rounded-[40px] px-[12px] md:px-[35px]">
      <BannerTab tab1={tab1} setTab1={setTab1} tab2={tab2} setTab2={setTab2} />

      {isLoading && <PageLoading />}
      {!isLoading && wallpapers?.length > 0 && (
        <>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-[14px] gap-y-[14px] md:gap-x-[19px] xl:gap-x-[29px] md:gap-y-[30px] xl:gap-y-[40px]">
            {wallpapers?.map((item, index) => (
              <div
                onClick={() => navigate(`/wallpapers/${item?.slug}`)}
                key={index}
                className="w-full h-[152px] 2xl:h-[190px] overflow-hidden rounded-[5px] md:rounded-[10px] 2xl:rounded-[15px]"
              >
                <img
                  src={viewImg(item?.wallpaper)}
                  alt="img"
                  className="w-full h-full object-cover hover:scale-110 rounded-[5px] md:rounded-[10px] 2xl:rounded-[15px] duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center py-[14px]">
            <Button
              onClick={() => navigate("/wallpapers")}
              className="w-[127px] h-[37px] md:w-[174px] md:h-[49px] shadow-none hover:shadow-none font-lato font-bold !text-white md:!text-[#949494] text-[12px]  md:text-[15px] leading-[14.4px] normal-case p-0 rounded-[100px] bg-[#00000080]"
            >
              More Wallpapers
            </Button>
          </div>
        </>
      )}

      {!isLoading && wallpapers?.length < 1 && <NoData />}
    </div>
  );
};

export default Banner;
