/* eslint-disable react/prop-types */
import { Button, Dialog } from "@material-tailwind/react";
import {
  iDashCopySponsorInfo,
  idashClose,
} from "../../../utils/icons/dashboard-icons/dashicons";
import LazyWallpaper from "../../common/wallpaper/LazyWallpaper";

const SponsorUpdateModal = ({
  selectedItems = [],
  setSelectedItems,
  open,
  onClose,
}) => {
  const handleClose = () => {
    onClose(null);
    // setSelectedItems([]);
  };

  console.log(selectedItems);
  return (
    <Dialog
      open={selectedItems?.length > 0 && open}
      className="bg-transparent flex justify-center items-center outline-none border-none shadow-none"
    >
      <div className="bg-[#D5D5D5] min-w-[1001px] max-w-[1001px] max-h-fit min-h-[553px] rounded-[10px] pt-[32px] pr-[35px] pb-[30px] pl-[44px] relative">
        <h1 className="text-black text-center font-lato text-[25px] leading-normal font-semibold">
          {open}
        </h1>
        <div className="mt-[38px]">
          <div className="grid grid-cols-2 gap-x-[56px]">
            {selectedItems?.slice(0, 2)?.map((item, index) => (
              <div key={index} className="flex justify-between gap-x-[16px]">
                <div
                  key={index}
                  className={`max-w-[200px] w-full h-[140px] rounded-[5px] overflow-hidden relative`}
                >
                  <LazyWallpaper
                    src={item?.wallpaper}
                    alt={item?.wallpaper}
                    maxWidth={200}
                    maxHeight={140}
                    width={200}
                    height={140}
                    className="w-full h-full rounded-[5px] object-cover cursor-pointer"
                  />
                </div>
                <div className="pt-[7px] pb-[12px]">
                  <div className="bg-[#C0C0C0] w-[217px] h-[44px] rounded-[5px] flex items-center gap-[7px] px-[8px]">
                    <div>{iDashCopySponsorInfo}</div>
                    <h1 className="font-lato text-[12px] font-medium text-[#323232] leading-normal">
                      Brand Banner
                    </h1>
                  </div>
                  <div className="bg-[#C0C0C0] w-[217px] h-[44px] rounded-[5px] flex items-center gap-[7px] px-[8px] mt-[33px]">
                    <div>{iDashCopySponsorInfo}</div>
                    <h1 className="font-lato text-[12px] font-medium text-[#323232] leading-normal">
                      Profile URL
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedItems?.length > 2 && (
            <div className="grid grid-cols-2 gap-x-[56px] border-t-[1px] border-[#9C9C9C] pt-[26px] mt-[21px]">
              {selectedItems?.slice(2, 4)?.map((item, index) => (
                <div key={index} className="flex justify-between gap-x-[16px]">
                  <div
                    key={index}
                    className={`max-w-[200px] w-full h-[140px] rounded-[5px] overflow-hidden relative`}
                  >
                    <LazyWallpaper
                      src={item?.wallpaper}
                      alt={item?.wallpaper}
                      maxWidth={200}
                      maxHeight={140}
                      width={200}
                      height={140}
                      className="w-full h-full rounded-[5px] object-cover cursor-pointer"
                    />
                  </div>
                  <div className="pt-[7px] pb-[12px]">
                    <div className="bg-[#C0C0C0] w-[217px] h-[44px] rounded-[5px] flex items-center gap-[7px] px-[8px]">
                      <div>{iDashCopySponsorInfo}</div>
                      <h1 className="font-lato text-[12px] font-medium text-[#323232] leading-normal">
                        Brand Banner
                      </h1>
                    </div>
                    <div className="bg-[#C0C0C0] w-[217px] h-[44px] rounded-[5px] flex items-center gap-[7px] px-[8px] mt-[33px]">
                      <div>{iDashCopySponsorInfo}</div>
                      <h1 className="font-lato text-[12px] font-medium text-[#323232] leading-normal">
                        Profile URL
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Button
          onClick={() => handleClose()}
          className="w-[129px] h-[38px] rounded-[5px] bg-[#2924FF33] shadow-none hover:shadow-none block mx-auto mt-[57px] p-0 text-[15px] text-[#C4C4C4] font-bakbak-one leading-normal normal-case font-normal"
        >
          Save Changes
        </Button>
        <div
          onClick={() => handleClose()}
          className="absolute top-[14px] right-[14px] cursor-pointer"
        >
          {idashClose}
        </div>
      </div>
    </Dialog>
  );
};

export default SponsorUpdateModal;
