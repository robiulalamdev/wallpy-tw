/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import {
  iAdd,
  iAddPlus,
  iGallery,
  iLove,
  iLoveSolid,
} from "../../utils/icons/icons";
import {
  useAddToFavoriteMutation,
  useGetMyFavoritesQuery,
} from "../../redux/features/favorites/favoritesApi";
import { toast } from "react-toastify";
import { useGetCollectionListByUserIdQuery } from "../../redux/features/collections/collectionsApi";
import { AuthContext } from "../../contextApi/AuthContext";
import { useContext } from "react";

const WallpaperFavoriteAndCollection = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [addToFavorite] = useAddToFavoriteMutation();
  const { data: favoriteData } = useGetMyFavoritesQuery();
  const { data: collectionListData } = useGetCollectionListByUserIdQuery(
    user?._id
  );

  const handleAddToFavorite = async () => {
    const options = {
      data: { id: data?._id },
    };
    const result = await addToFavorite(options);
    if (result?.data?.success) {
      toast.success(result?.data?.message);
    }
  };

  const isExist = favoriteData?.data?.find(
    (fav) => fav?.wallpaper?._id === data?._id
  );

  return (
    <>
      <div
        className="absolute top-[21px] lg:top-[21px] right-[22px] lg:right-[27px] grid grid-cols-2 w-[97px] h-[37px] rounded-[5px]"
        style={{ background: "rgba(0, 0, 0, 0.60)" }}
      >
        <Popover placement="bottom-end">
          <PopoverHandler>
            <div className="h-full w-full flex justify-center items-center">
              {iAdd}
            </div>
          </PopoverHandler>
          <PopoverContent className="min-w-[223px] min-h-[257px] bg-[#000000E5] rounded-[5px] pt-[14px] pr-[19px] pl-[13px] pb-[15px] border-none">
            <div className="flex items-center gap-x-[19px]">
              <input
                type="text"
                placeholder="Search Collections"
                className="h-[45px] bg-[#FFF] rounded-[5px] outline-none flex-grow w-full px-[8px] min-w-[145px]"
              />
              <div>{iAddPlus}</div>
            </div>

            <div className="grid grid-cols-1 gap-y-[10px] max-h-[250px] h-fit overflow-y-auto mt-[20px]">
              {collectionListData?.data?.map((item, index) => (
                <div
                  key={index}
                  className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]"
                >
                  <div>{iGallery}</div>
                  <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                    {item?.name}
                  </h1>
                </div>
              ))}

              {/* <div className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]">
                <div>{iGallery}</div>
                <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                  World of Warcraft
                </h1>
              </div>
              <div className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]">
                <div>{iGallery}</div>
                <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                  League of Legends
                </h1>
              </div>
              <div className="border-b-[1px] border-[#414141] h-9 flex items-center gap-[6px]">
                <div>{iGallery}</div>
                <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                  Anime
                </h1>
              </div>
              <div className="h-11 flex items-center gap-[6px]">
                <div>{iGallery}</div>
                <h1 className="font-bakbak-one text-[#FFF] text-[12px]">
                  Landscapes
                </h1>
              </div> */}
            </div>
          </PopoverContent>
        </Popover>
        <div className="h-full w-full flex justify-center items-center">
          <div onClick={() => handleAddToFavorite()} className="cursor-pointer">
            {isExist ? iLoveSolid : iLove}
          </div>
        </div>
      </div>
    </>
  );
};

export default WallpaperFavoriteAndCollection;
