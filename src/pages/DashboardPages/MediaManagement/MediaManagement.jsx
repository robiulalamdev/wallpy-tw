/* eslint-disable react/no-unknown-property */
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { iDashBulkSelection } from "../../../utils/icons/dashboard-icons/dashicons";
import LazyWallpaper from "../../../components/common/wallpaper/LazyWallpaper";
import { useSponsorsWallpapersQuery } from "../../../redux/features/wallpapers/wallpapersApi";
import MediaManagementWallpaper from "../../../components/dashboard-components/mediaManagement/MediaManagementWallpaper";
import { makeQuery } from "../../../lib/services/service";

const tabs = [
  "Today",
  "Yesterday",
  "This Week",
  "This Month",
  "This Year",
  "All Data",
];
const lowerTabs = tabs.map((tab) => tab.toLowerCase());

const MediaManagement = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const date = searchParams.get("date");
  const { data } = useSponsorsWallpapersQuery(
    `?${search ? `search=${search}` : ""}${date ? `&date=${date}` : ""}${
      currentPage ? `&page=${currentPage}` : ""
    }${limit ? `&limit=${limit}` : ""} `
  );
  const [wallpapers, setWallpapers] = useState([]);
  const [selectedWallpapers, setSelectedWallpapers] = useState([]);
  const navigate = useNavigate();

  const queryObject = {
    date: date || "",
    search: search || "",
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = await makeQuery(
      "search",
      e.target.search?.value,
      queryObject
    );
    window.location.replace(`?${query}`);
  };
  const handleFilter = async (value) => {
    if (value) {
      const query = await makeQuery("date", value, queryObject);
      window.location.replace(`?${query}`);
    } else {
      navigate("/dashboard/media-management");
    }
  };

  const handleSelectWallpapers = (item) => {
    const itemIndex = selectedWallpapers.findIndex(
      (sItem) => sItem._id === item._id
    );
    if (itemIndex !== -1) {
      setSelectedWallpapers(
        selectedWallpapers.filter((sItem) => sItem._id !== item._id)
      );
    } else {
      setSelectedWallpapers([...selectedWallpapers, item]);
    }
  };

  const handleNext = async () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (data?.data?.data?.length > 0) {
      if (currentPage === 1) {
        setWallpapers(data?.data?.data);
      } else {
        setWallpapers([...wallpapers, ...data.data.data]);
      }
    }
    if (data?.data?.meta?.total) {
      setTotal(data?.data?.meta?.total);
    }
  }, [data?.data]);

  useEffect(() => {
    if (date && lowerTabs.includes(date.toLowerCase())) {
      setSelectedTab(date);
    } else {
      setSelectedTab(tabs[0]);
    }
  }, [date]);

  return (
    <>
      <div className="bg-[#121212] !pt-[22px] pr-[17px] !pl-[16px] rounded-[10px] w-full max-h-full flex flex-col justify-between h-full overflow-y-auto">
        <div>
          <div className="flex justify-between items-start py-[15px] gap-[15px] w-full">
            <div className="flex items-start gap-x-[40px] lg:gap-x-[80px] xl:gap-x-[120px] 2xl:gap-x-[159px] flex-grow">
              <h1 className="text-white font-bakbak-one text-[25px] text-nowrap">
                Media Management
              </h1>
              <form
                onSubmit={handleSearch}
                className="bg-[#D9D9D9] max-w-[490px] w-full h-[35px] rounded-[5px] px-[11px] flex justify-between items-center"
              >
                <div className="pr-[11px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <circle
                      cx="6.875"
                      cy="6.875"
                      r="4.375"
                      stroke="#5A5A5A"
                      stroke-width="2"
                    />
                    <path
                      d="M12.5 12.5L10.625 10.625"
                      stroke="#5A5A5A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <input
                  name="search"
                  type="text"
                  placeholder="Search by user, keyword, or tag"
                  className="flex-grow w-full h-full bg-transparent font-lato text-[12px] text-[#5A5A5A] placeholder:text-[#5A5A5A] outline-none border-none"
                />
              </form>
            </div>
            <Button className="p-0 max-w-[93px] min-w-[93px] h-[35px] rounded-[5px] text-[#000000] bg-[#8FFF00] font-lato text-[12px] font-medium normal-case leading-normal">
              Add Media
            </Button>
          </div>

          <div className="flex flex-col-reverse 2xl:flex-row 2xl:items-center gap-x-[29px] gap-y-[29px] w-full mt-[30px]">
            <div className="flex justify-between 2xl:justify-start items-center">
              <div className="flex items-center gap-x-[21px] w-full min-w-[253px] max-w-[253px]">
                <div className="flex items-center gap-x-[7px]">
                  {iDashBulkSelection}
                  <h1 className="font-lato text-[15px] font-medium text-white leading-normal">
                    Bulk Selection
                  </h1>
                </div>
                {selectedWallpapers?.length > 0 ? (
                  <h1 className="font-lato text-[15px] font-medium text-white">
                    {selectedWallpapers?.length} items selected
                  </h1>
                ) : (
                  <h1 className="font-lato text-[15px] font-medium text-white opacity-0">
                    items selected
                  </h1>
                )}
              </div>
              <Button className="bg-[#FF0000] w-[129px] h-[38px] rounded-[5px] shadow-none  hover:shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] p-0 font-normal leading-normal normal-case 2xl:hidden">
                Delete
              </Button>
            </div>

            <div className="flex items-center gap-x-[47px]">
              <div className="flex items-center flex-wrap gap-[30px] w-full p-[10px] bg-[#222222] rounded-[10px] min-w-[693px] max-w-[693px] h-[52px]">
                {tabs.map((tab, index) => (
                  <Button
                    key={index}
                    className={`min-w-[72px] h-[32px] rounded-[8px] shadow-none hover:shadow-none outline-none py-0 px-[8px] text-center normal-case text-white font-lato text-[15px] font-semibold ${
                      selectedTab === tab ? "bg-[#FF001F]" : "bg-transparent"
                    }`}
                    onClick={() => handleFilter(tab)}
                  >
                    {tab}
                  </Button>
                ))}
              </div>
              <Button className="bg-[#FF0000] w-[129px] h-[38px] rounded-[5px] shadow-none  hover:shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] p-0 font-normal leading-normal normal-case hidden 2xl:block">
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-between">
          <div className="h-full">
            {wallpapers?.length > 0 && (
              <div className="grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-x-[27px] gap-y-[20px] mt-[33px] w-full">
                {wallpapers.map((item, index) => (
                  <MediaManagementWallpaper
                    key={index}
                    data={item}
                    handleSelectWallpapers={handleSelectWallpapers}
                    selectedItems={selectedWallpapers || []}
                  />
                ))}
              </div>
            )}
          </div>

          {currentPage * limit < total && (
            <Button
              onClick={() => handleNext()}
              className="ml-[606px] w-[128px] min-h-[42px] max-h-[42px] mt-[29px] bg-[#222222] rounded-[100px] p-0 block normal-case shadow-none hover:shadow-none"
            >
              <h1 className="font-bakbak-one text-[15px] font-normal leading-normal text-[#CCCCCC]">
                Load More
              </h1>
            </Button>
          )}

          <br />
        </div>
      </div>
    </>
  );
};

export default MediaManagement;
