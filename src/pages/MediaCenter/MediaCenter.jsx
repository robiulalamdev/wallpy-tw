import { Button } from "@material-tailwind/react";
import RulesHeader from "../../components/shared/headers/RulesHeader";
import { useState } from "react";
import MediaCenterSidebar from "../../components/media-center/MediaCenterSidebar";
import filter from "../../assets/icons/search-wallpapers/filter.gif";
import MediaCenterFavoriteAria from "../../components/media-center/MediaCenterFavoriteAria";
import { wallpapers } from "../../utils/data/wallpapers";
import { official_brands_profiles_collections } from "../../utils/data/profile";
import MediaCenterCollectionAria from "../../components/media-center/MediaCenterCollectionAria";

const MediaCenter = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("Favorites");
  const [hideProfile, setHideProfile] = useState("Visible");

  const [favoriteWallpapers, setFavoriteWallpapers] = useState(
    [...wallpapers.slice(0, 10)] || []
  );
  const [collectionWallpapers, setCollectionWallpapers] = useState(
    [...official_brands_profiles_collections.slice(0, 2)] || []
  );
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [selectedCollectionWallpaper, setSelectedCollectionWallpaper] =
    useState(null);

  return (
    <>
      <RulesHeader />
      <div className="">
        <h1 className="text-[15px] md:text-[25px] text-center font-bakbak-one text-[#FFF] mb-[15px] md:mb-[40px]">
          The Command Center
        </h1>
        <div className="border-t-[1px] border-[#5A5A5A] w-full mb-[11px] md:mb-[62px]"></div>

        <p className="text-center font-lato text-[12px] text-[#939393]">
          All favorite wallpapers and collections will be displayed on your
          public profile unless you make privacy adjustments within the command
          center.
        </p>

        <div className="max-w-[295px] w-full flex justify-start items-center lg:justify-center mb-[24px] md:mb-[30px]">
          <div className="bg-[#00000033] rounded-[100px] w-[172px] h-[45px] flex justify-between items-center px-[8px] mt-[9px] xl:mt-0">
            {["Favorites", "Collections"].map((t, i) => (
              <Button
                onClick={() => setTab(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[72px] h-[32px] ${
                  tab === t
                    ? `bg-[#DD2E44] !text-white rounded-[100px]`
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>
          <img
            onClick={() => setOpen(!open)}
            src={filter}
            alt=""
            className="w-[57px] h-[39px] lg:hidden"
          />
        </div>

        <div className="flex justify-between items-start gap-x-[42px]">
          <MediaCenterSidebar
            open={open}
            setOpen={setOpen}
            hideProfile={hideProfile}
            setHideProfile={setHideProfile}
            tab={tab}
            setTab={setTab}
          />

          {tab === "Favorites" && (
            <MediaCenterFavoriteAria
              favoriteWallpapers={favoriteWallpapers}
              selectedWallpaper={selectedWallpaper}
              setSelectedWallpaper={setSelectedWallpaper}
            />
          )}

          {tab === "Collections" && (
            <MediaCenterCollectionAria
              collectionWallpapers={collectionWallpapers}
              selectedCollectionWallpaper={selectedCollectionWallpaper}
              setSelectedCollectionWallpaper={setSelectedCollectionWallpaper}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MediaCenter;
