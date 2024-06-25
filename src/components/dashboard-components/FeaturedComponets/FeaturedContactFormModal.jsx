/* eslint-disable react/prop-types */
import { Button, Dialog } from "@material-tailwind/react";
import {
  iDashCopySponsorInfo,
  idashClose,
} from "../../../utils/icons/dashboard-icons/dashicons";
import { useMemo, useState } from "react";
import FeaturedViewWallpaper from "./FeaturedViewWallpaper";
import { handleItemSelection } from "../../../lib/services/service";
import { CLIENT_URL } from "../../../lib/config";
import useInputPattern from "../../../lib/hooks/useInputPattern";
import { useGetInfoBySlugMutation } from "../../../redux/features/wallpapers/wallpapersApi";

const FeaturedContactFormModal = ({
  open,
  name,
  onClose,
  items,
  handleAdd,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [storedItems, setStoredItems] = useState([]);

  const [getInfoBySlug] = useGetInfoBySlugMutation();
  const { handleUrl } = useInputPattern();

  const handleClose = () => {
    onClose(null);
  };

  const handleAddFeatured = async () => {
    const ids = await selectedItems.map((crnI) => crnI?._id);
    handleAdd(ids, []);
  };

  useMemo(() => {
    const newItems = [];

    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      newItems.push({
        slug: element.slug || "",
        wallpaper: element.wallpaper || "",
        _id: element?._id || null,
        load: false,
        no: i + 1,
      });
      setSelectedItems(newItems);
    }

    for (let i = 0; i < 6 - items?.length; i++) {
      newItems.push({
        slug: "",
        wallpaper: "",
        _id: null,
        load: false,
        no: items.length + i + 1,
      });
    }

    setStoredItems(newItems);
  }, [items, open]);

  const handleSelect = async (selectItem = null) => {
    if (selectItem?._id) {
      handleItemSelection(selectedItems, setSelectedItems, selectItem);
    }
  };

  const handleKeyPress = async (e, item = null) => {
    const stored = [...storedItems];
    stored[item.no - 1]["load"] = true;
    if (e.key === "Enter" && e.target.value) {
      if (e.target.value.replaceAll(`${CLIENT_URL}/w/`, "")) {
        const options = {
          data: {},
          slug: e.target.value.replaceAll(`${CLIENT_URL}/w/`, ""),
        };
        const result = await getInfoBySlug(options);
        if (result?.data?.data?._id) {
          stored[item.no - 1] = {
            ...result.data.data,
            load: false,
            no: item.no,
          };
        } else {
          stored[item.no - 1] = {
            slug: "",
            wallpaper: "",
            _id: null,
            load: false,
            no: item.no,
          };
        }
      }
    } else {
      stored[item.no - 1] = {
        slug: "",
        wallpaper: "",
        _id: null,
        load: false,
        no: item.no,
      };
    }
    stored[item.no - 1]["load"] = false;
    setStoredItems(stored);
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
                  handleSelect={handleSelect}
                />
                <div className="bg-[#C0C0C0] w-[217px] h-[44px] rounded-[5px] flex items-center gap-[7px] px-[8px] mt-[12px]">
                  <div>{iDashCopySponsorInfo}</div>
                  <input
                    onKeyPress={(e) => handleKeyPress(e, item)}
                    type="url"
                    defaultValue={
                      item?._id ? `${CLIENT_URL}/${item?.slug}` : ""
                    }
                    onInput={(e) => handleUrl(e, `${CLIENT_URL}/w/`)}
                    placeholder="Wallpaper URL"
                    required
                    className="w-full h-full bg-transparent border-none outline-none placeholder:font-lato font-lato text-[12px] font-medium placeholder:text-[#323232] text-[#323232] leading-normal"
                  />
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

export default FeaturedContactFormModal;
