import { iDashEdit } from "../../../utils/icons/dashboard-icons/dashicons";
import { useSponsorsWallpapersQuery } from "../../../redux/features/wallpapers/wallpapersApi";
import SponsorWallpaper from "../../../components/dashboard-components/sponsors/SponsorWallpaper";
import { useState } from "react";
import { handleItemSelection } from "../../../lib/services/service";
import SponsorUpdateModal from "../../../components/dashboard-components/sponsors/SponsorUpdateModal";

const Sponsors = () => {
  const { data } = useSponsorsWallpapersQuery("?limit=15");

  // states
  const [selectedMain, setSelectedMain] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState([]);
  const [selectedTrending, setSelectedTrending] = useState([]);

  const [open, setOpen] = useState(null);

  const handleOpen = (items, name) => {
    if (items?.length > 0 && name) {
      setOpen(name);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full h-full gap-y-[36px]">
        <div className="mt-[19px]">
          <h1 className="text-center font-bakbak-one text-[30px] leading-normal font-normal text-white">
            Sponsors
          </h1>
          <div className="flex justify-center items-center gap-x-[9px] mt-[39px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z"
                fill="#FF0000"
              />
            </svg>
            <p className="text-[15px] font-normal leading-normal text-white font-lato">
              Any modifications implemented here will have immediate effects on
              the content displayed on the main page and other pages modified.
              Please proceed with caution.
            </p>
          </div>
        </div>

        {/* section */}
        <div className="grid grid-cols-1 bg-[#121212] rounded-[10px] flex-grow w-full h-full px-[14px] pb-[27px] overflow-y-auto">
          <div>
            <dir className="w-full max- min-h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div
                onClick={() => handleOpen(selectedMain, "Main Sponsors")}
                className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]"
              >
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Main Page Sponsors
                </h1>
                {iDashEdit}
              </div>
            </dir>
            <div className="grid grid-cols-5 gap-x-[60px] px-[62px] mt-[31px]">
              {data?.data?.data?.slice(0, 5)?.map((item, index) => (
                <SponsorWallpaper
                  key={index}
                  data={item}
                  selectedItems={selectedMain}
                  handleSelect={(selectItem) =>
                    handleItemSelection(
                      selectedMain,
                      setSelectedMain,
                      selectItem
                    )
                  }
                />
              ))}
            </div>
          </div>
          <div className="mt-[24px]removed">
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div
                onClick={() => handleOpen(selectedSearch, "Search Sponsors")}
                className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]"
              >
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Search Sponsors
                </h1>
                {iDashEdit}
              </div>
            </dir>
            <div className="grid grid-cols-5 gap-x-[60px] px-[62px] mt-[37px]">
              {data?.data?.data?.slice(5, 10)?.map((item, index) => (
                <SponsorWallpaper
                  key={index}
                  data={item}
                  selectedItems={selectedSearch}
                  handleSelect={(selectItem) =>
                    handleItemSelection(
                      selectedSearch,
                      setSelectedSearch,
                      selectItem
                    )
                  }
                />
              ))}
            </div>
          </div>
          <div className="mt-[24px]removed">
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div
                onClick={() => handleOpen(selectedTrending, "New & Trending")}
                className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]"
              >
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  New & Trending
                </h1>
                {iDashEdit}
              </div>
            </dir>
            <div className="grid grid-cols-5 gap-x-[60px] px-[62px] mt-[37px]">
              {data?.data?.data?.slice(10, 15)?.map((item, index) => (
                <SponsorWallpaper
                  key={index}
                  data={item}
                  selectedItems={selectedTrending}
                  handleSelect={(selectItem) =>
                    handleItemSelection(
                      selectedTrending,
                      setSelectedTrending,
                      selectItem
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {open === "Main Sponsors" && (
        <SponsorUpdateModal
          selectedItems={selectedMain}
          setSelectedItems={setSelectedMain}
          open="Main Sponsors"
          onClose={setOpen}
        />
      )}
      {open === "Search Sponsors" && (
        <SponsorUpdateModal
          selectedItems={selectedSearch}
          setSelectedItems={setSelectedSearch}
          open="Search Sponsors"
          onClose={setOpen}
        />
      )}
      {open === "New & Trending" && (
        <SponsorUpdateModal
          selectedItems={selectedTrending}
          setSelectedItems={setSelectedTrending}
          open="New & Trending"
          onClose={setOpen}
        />
      )}
    </>
  );
};

export default Sponsors;
