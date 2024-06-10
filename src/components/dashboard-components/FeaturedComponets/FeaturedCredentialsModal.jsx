/* eslint-disable react/prop-types */
import { Button, Dialog } from "@material-tailwind/react";
import {
  iDashCopySponsorInfo,
  idashClose,
} from "../../../utils/icons/dashboard-icons/dashicons";
import { useState } from "react";
import FeaturedViewWallpaper from "./FeaturedViewWallpaper";
import { handleItemSelection } from "../../../lib/services/service";

const FeaturedCredentialsModal = ({ open, name, onClose, items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClose = () => {
    onClose(null);
  };

  return (
    <Dialog
      open={open}
      className="bg-transparent flex justify-center items-center outline-none border-none shadow-none"
    >
      <div className="bg-[#D5D5D5] min-w-[1001px] max-w-[1001px] max-h-fit min-h-[553px] rounded-[10px] pt-[32px] px-[80px] pb-[30px] relative">
        <h1 className="text-black text-center font-lato text-[25px] leading-normal font-semibold">
          {name}
        </h1>
        <div className="mt-[38px]">
          <div className="grid grid-cols-3 gap-x-[94px] gap-y-[24px]">
            {items?.map((item, index) => (
              <div key={index} className="">
                <FeaturedViewWallpaper
                  key={index}
                  data={item}
                  selectedItems={selectedItems}
                  handleSelect={(selectItem) =>
                    handleItemSelection(
                      selectedItems,
                      setSelectedItems,
                      selectItem
                    )
                  }
                />
                <div className="bg-[#C0C0C0] w-[217px] h-[44px] rounded-[5px] flex items-center gap-[7px] px-[8px] mt-[12px]">
                  <div>{iDashCopySponsorInfo}</div>
                  <h1 className="font-lato text-[12px] font-medium text-[#323232] leading-normal">
                    Wallpaper URL
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

export default FeaturedCredentialsModal;
