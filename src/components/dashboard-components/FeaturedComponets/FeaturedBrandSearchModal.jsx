/* eslint-disable react/prop-types */
import { Button, Dialog } from "@material-tailwind/react";
import {
  iDashCopySponsorInfo,
  idashClose,
} from "../../../utils/icons/dashboard-icons/dashicons";
import { useState } from "react";
import FeaturedViewWallpaper from "./FeaturedViewWallpaper";
import { handleItemSelection } from "../../../lib/services/service";
import LazyWallpaper from "../../common/wallpaper/LazyWallpaper";

const FeaturedBrandSearchModal = ({ open, name, onClose, items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClose = () => {
    onClose(null);
  };

  return (
    <Dialog
      open={open}
      className="bg-transparent flex justify-center items-center outline-none border-none shadow-none"
    >
      <div className="bg-[#D5D5D5] min-w-[1001px] max-w-[1001px] max-h-fit min-h-[553px] rounded-[10px] pt-[32px] px-[21px] pb-[30px] relative">
        <h1 className="text-black text-center font-lato text-[25px] leading-normal font-semibold">
          {name}
        </h1>
        <div className="mt-[38px]">
          <div className="grid grid-cols-5 gap-x-[15px] gap-y-[18px]">
            {items?.map((item, index) => (
              <div key={index} className="max-w-[180px] w-full">
                <div
                  className={`w-full h-[80px] rounded-[5px] overflow-hidden relative`}
                >
                  <LazyWallpaper
                    src={item?.wallpaper}
                    alt={item?.wallpaper}
                    maxWidth={180}
                    maxHeight={80}
                    width={180}
                    height={80}
                    className="w-full h-full rounded-[5px] object-cover cursor-pointer"
                  />
                </div>
                <div className="bg-[#C0C0C0] w-full h-[35px] rounded-[5px] flex items-center gap-[7px] px-[8px] mt-[9px]">
                  <div>{iDashCopySponsorInfo}</div>
                  <h1 className="font-lato text-[12px] font-medium text-[#323232] leading-normal">
                    Wallpaper URL
                  </h1>
                </div>
                <div className="bg-[#C0C0C0] w-full h-[35px] rounded-[5px] flex items-center gap-[7px] px-[8px] mt-[8px]">
                  <div>{iDashCopySponsorInfo}</div>
                  <h1 className="font-lato text-[12px] font-medium text-[#323232] leading-normal">
                    Profile url
                  </h1>
                </div>
              </div>
            ))}
          </div>
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

export default FeaturedBrandSearchModal;
