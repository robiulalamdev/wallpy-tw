/* eslint-disable react/prop-types */
import { Button, Dialog } from "@material-tailwind/react";
import {
  iDashCopySponsorInfo,
  idashClose,
} from "../../../utils/icons/dashboard-icons/dashicons";
import { useState } from "react";
import LazyWallpaper from "../../common/wallpaper/LazyWallpaper";
import useViewImage from "../../../lib/hooks/useViewImage";

const FeaturedArtistsModal = ({ open, name, onClose, items }) => {
  const { viewResizeImg } = useViewImage();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClose = () => {
    onClose(null);
  };

  return (
    <Dialog
      open={open}
      className="bg-transparent flex justify-center items-center outline-none border-none shadow-none"
    >
      <div className="bg-[#D5D5D5] min-w-[1001px] max-w-[1001px] max-h-fit min-h-[553px] rounded-[10px] pt-[32px] px-[107px] pb-[30px] relative">
        <h1 className="text-black text-center font-lato text-[25px] leading-normal font-semibold">
          {name}
        </h1>
        <div className="mt-[38px]">
          <div className="grid grid-cols-2 gap-x-[61px] gap-y-[29px]">
            {items?.map((item, index) => (
              <div key={index} className="flex items-center gap-x-[30px]">
                <div
                  className={`min-w-[90px] max-w-[90px] max-h-[90px] min-h-[90px] bg-[#00000080] rounded-full flex justify-center items-center`}
                >
                  <img
                    src={viewResizeImg(item?.wallpaper, 80, 80)}
                    alt=""
                    className="w-[80px] h-[80px] object-cover rounded-full"
                  />
                </div>
                <div className="bg-[#C0C0C0] w-[239px] h-[44px] rounded-[5px] flex items-center gap-[7px] px-[8px]">
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

export default FeaturedArtistsModal;
