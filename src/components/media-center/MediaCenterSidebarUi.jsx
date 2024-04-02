/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  useRemoveFavoritesMutation,
  useUpdateFavoritesMutation,
} from "../../redux/features/favorites/favoritesApi";
import { SpinnerCircularFixed } from "spinners-react";

const MediaCenterSidebarUi = ({
  tab,
  setTab,
  items,
  selectedItems,
  resetSelect,
}) => {
  const [hideProfile, setHideProfile] = useState("");
  const [favoriteUpdateIsLoading, setFavoriteUpdateIsLoading] = useState("");
  const [removeFavorites] = useRemoveFavoritesMutation();
  const [updateFavorites] = useUpdateFavoritesMutation();

  const handleRemoveList = async () => {
    const ids = await selectedItems?.map((element) => {
      return element?._id;
    });

    const options = {
      data: { ids: ids },
    };
    const result = await removeFavorites(options);
    if (result?.data?.success) {
      toast.success(result?.data?.message);
      resetSelect([]);
    } else {
      toast.error(result?.data?.message);
    }
  };

  const handleUpdateFavorites = async () => {
    setFavoriteUpdateIsLoading(true);
    const ids = await selectedItems?.map((element) => {
      return element?._id;
    });

    const options = {
      data: {
        ids: ids,
        updateData: { status: hideProfile === "Visible" ? true : false },
      },
    };
    const result = await updateFavorites(options);
    if (result?.data?.success) {
      toast.success(result?.data?.message);
      resetSelect([]);
    } else {
      toast.error(result?.data?.message);
    }
    setFavoriteUpdateIsLoading(false);
  };

  useMemo(() => {
    if (selectedItems?.length > 0) {
      if (selectedItems?.length === 1) {
        setHideProfile(selectedItems[0]?.status ? "Visible" : "Hidden");
      } else {
        setHideProfile("");
      }
    }
  }, [selectedItems]);
  return (
    <div className="max-w-[295px] min-w-[295px] w-full rounded-[10px] lg:bg-black/20 h-[620px]">
      {tab === "Favorites" ? (
        <>
          <h1 className="text-center font-bakbak-one text-[#fff] text-[12px] pt-[13px]">
            Select Wallpapers
          </h1>

          {selectedItems?.length > 0 && (
            <>
              <h1 className="text-center font-lato text-[#fff] text-[15px] pt-[36px]">
                Remove from list
              </h1>

              <div
                onClick={() => handleRemoveList()}
                className="w-[81px] h-[36px] bg-[#00000033] hover:bg-primary flex justify-center items-center cursor-pointer mt-[18px] mx-auto rounded-full"
              >
                <p className="text-[12px] text-[#fff] text-center font-lato">
                  Remove
                </p>
              </div>

              <h1 className="text-center font-lato text-[#fff] text-[15px] pt-[41px]">
                Hide from profile
              </h1>

              <div className="bg-[#00000033] rounded-[10px] w-[153px] h-[35px] flex justify-between items-center px-[8px] mt-[24px] mx-auto">
                {["Visible", "Hidden"].map((t, i) => (
                  <Button
                    onClick={() => setHideProfile(t)}
                    key={i}
                    className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[58px] h-[27px] ${
                      hideProfile === t
                        ? `${
                            hideProfile === "Visible"
                              ? "bg-[#0AB745]"
                              : "bg-[#FF003D]"
                          } !text-white rounded-[30px]`
                        : "bg-transparent !text-[#C6C6C6]"
                    }`}
                  >
                    {t}
                  </Button>
                ))}
              </div>

              <div className="border-t-[1px] border-[#9393931A] max-w-[234px] w-full mx-auto mt-[35px]"></div>

              <Button
                onClick={() => handleUpdateFavorites()}
                className="font-normal normal-case bg-[#2924FF] w-[129px] h-[38px] rounded-[5px] mx-auto mt-[45px] lg:mt-[207px] hover:shadow-none shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] inline-block p-0 leading-normal flex justify-center items-center gap-2"
              >
                {favoriteUpdateIsLoading && (
                  <SpinnerCircularFixed
                    size={20}
                    thickness={180}
                    speed={300}
                    color="rgba(255, 255, 255, 1)"
                    secondaryColor="rgba(255, 255, 255, 0.42)"
                  />
                )}{" "}
                Submit
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="text-center text-[#fff] text-[15px] font-lato pt-[36px]">
            Create New Collection
          </h1>

          <div className="w-[81px] h-[36px] bg-[#00000033] flex justify-center items-center cursor-pointer mt-[28px] mx-auto rounded-full">
            <p className="text-[12px] text-[#fff] text-center font-lato">
              Create
            </p>
          </div>

          <h1 className="text-center text-[#fff] text-[15px] font-lato pt-[41px]">
            Rename Collection
          </h1>

          <div className="w-[153px] h-[35px] bg-[#00000033] rounded-[12px] flex justify-center items-center mt-[28px] mx-auto">
            <p className="text-[12px] text-[#939393] text-center font-lato">
              Select Collection
            </p>
          </div>

          <div className="border-t-[1px] border-[#9393931A] max-w-[234px] w-full mx-auto mt-[35px]"></div>

          <h1 className="text-center font-lato text-[#fff] text-[15px] pt-[41px]">
            Hide from profile
          </h1>

          <div className="bg-[#00000033] rounded-[10px] w-[153px] h-[35px] flex justify-between items-center px-[8px] mt-[24px] mx-auto">
            {["Visible", "Hidden"].map((t, i) => (
              <Button
                onClick={() => setHideProfile(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[58px] h-[27px] ${
                  hideProfile === t
                    ? `${
                        hideProfile === "Visible"
                          ? "bg-[#0AB745]"
                          : "bg-[#FF003D]"
                      } !text-white rounded-[30px]`
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <Button className="font-normal normal-case bg-[#484848] w-[129px] h-[38px] rounded-[5px] mx-auto mt-[49px] hover:shadow-none shadow-none font-bakbak-one text-[15px] text-[#C4C4C44D] block p-0 leading-normal">
            Submit
          </Button>
          <Button className="font-normal normal-case bg-[#2924FF] w-[129px] h-[38px] rounded-[5px] mx-auto mt-[15px] hover:shadow-none shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] block p-0 leading-normal">
            Submit
          </Button>
        </>
      )}
    </div>
  );
};

export default MediaCenterSidebarUi;
