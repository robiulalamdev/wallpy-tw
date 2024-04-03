/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import ProfileBanner from "../../components/profile/ProfileBanner";
import SimpleHeader from "../../components/shared/headers/SimpleHeader";
import { iSearch } from "../../utils/icons/icons";
// import { wallpapers } from "../../utils/data/wallpapers";
// import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import ProfileFavoriteWallpapers from "./ProfileFavoriteWallpapers";
import { useGetMyProfileFavoritesQuery } from "../../redux/features/favorites/favoritesApi";
import { useGetWallpapersByUserIdQuery } from "../../redux/features/wallpapers/wallpapersApi";
import ProfileUploadsWallpapers from "./ProfileUploadsWallpapers";
import { useGetMyCollectionsByUserIdQuery } from "../../redux/features/collections/collectionsApi";
import ProfileCollectionsWallpapers from "./ProfileCollectionsWallpapers";

const ProfileMain = ({ user }) => {
  const { data } = useGetMyProfileFavoritesQuery(user?._id);
  const { data: uploadsData } = useGetWallpapersByUserIdQuery(user?._id);
  const { data: collectionData } = useGetMyCollectionsByUserIdQuery(user?._id);
  const [tab1, setTab1] = useState("Uploads");

  const [wallpapers, setWallpapers] = useState([]);
  const [collections, setCollections] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (value) => {
    const search = value?.toLowerCase();
    if (tab1 === "Uploads") {
      const result = await uploadsData?.data?.filter((item) => {
        const isExist =
          item?.slug?.includes(search) || item?.author?.includes(search);
        const tags = item?.tags.some((tag) =>
          tag.toLowerCase().includes(search)
        );
        if (isExist || tags) {
          return item;
        }
      });
      if (value) {
        setWallpapers(result);
      } else {
        setWallpapers(uploadsData?.data);
      }
    }
    if (tab1 === "Favorites") {
      const result = await data?.data?.filter((element) => {
        const item = element?.wallpaper;
        const isExist =
          item?.slug?.includes(search) || item?.author?.includes(search);
        const tags = item?.tags.some((tag) =>
          tag.toLowerCase().includes(search)
        );
        if (isExist || tags) {
          return element;
        }
      });
      if (value) {
        setFavorites(result);
      } else {
        setFavorites(data?.data);
      }
    }
    if (tab1 === "Collections") {
      const result = await collectionData?.data?.filter((item) =>
        item?.name.toLowerCase()?.includes(search)
      );
      if (value) {
        setCollections(result);
      } else {
        setCollections(collectionData?.data);
      }
    }
  };

  useMemo(() => {
    if (uploadsData?.data?.length > 0) {
      setWallpapers(uploadsData?.data);
    }
  }, [uploadsData]);

  useMemo(() => {
    if (collectionData?.data?.length > 0) {
      setCollections(collectionData?.data);
    }
  }, [collectionData]);

  useMemo(() => {
    if (data?.data?.length > 0) {
      setFavorites(data?.data);
    }
  }, [data]);

  return (
    <>
      <SimpleHeader />
      <div>
        <ProfileBanner user={user} />
        <div className="border-t-[1px] border-[#373737] w-full mt-[15px] md:mt-[104px] mb-[16px] md:mb-[20px]"></div>

        <div className="flex justify-center md:justify-between items-center gap-5">
          <div className="bg-[#00000033] rounded-[100px] w-[296px] h-[45px] flex justify-between items-center px-[8px]">
            {["Uploads", "Favorites", "Collections"].map((t, i) => (
              <Button
                onClick={() => setTab1(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[86px] h-[32px] md:min-w-[86px] md:h-[32px]  ${
                  tab1 === t
                    ? "bg-[#000000B2] !text-white rounded-[100px]"
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <div className="bg-[#00000033] rounded-[10px] h-[45px] max-w-[771px] w-full md:flex justify-center items-center pr-[10px] flex-grow hidden md:inline-block">
            <div className="text-[#5A5A5A] w-[40px] px-[10px] h-full flex justify-center items-center">
              {iSearch}
            </div>
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e.target.value);
                }
              }}
              type="text"
              placeholder="Search this profile"
              className="text-[#5A5A5A] placeholder:text-[#5A5A5A] text-[15px] bg-transparent w-full h-full flex-grow font-lato outline-none border-none"
            />
          </div>

          <span className="hidden lg:inline-block"></span>
        </div>

        <>
          {tab1 === "Uploads" && (
            <ProfileUploadsWallpapers wallpapers={wallpapers} />
          )}
          {tab1 === "Favorites" && (
            <ProfileFavoriteWallpapers wallpapers={favorites} />
          )}
          {tab1 === "Collections" && (
            <ProfileCollectionsWallpapers collections={collections} />
          )}

          <div className="bg-[#000000] w-[128px] h-[42px] rounded-[100px] mx-auto mt-[27px] md:mt-[40px] flex justify-center items-center font-bakbak-one text-[12px] text-[#CCC] cursor-pointer">
            View more
          </div>
        </>
      </div>
    </>
  );
};

export default ProfileMain;
