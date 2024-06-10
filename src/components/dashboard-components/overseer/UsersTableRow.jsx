/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import {
  iDashHrThreeDots,
  iDashSelected,
  iDashUnselected,
} from "../../../utils/icons/dashboard-icons/dashicons";
import flag1 from "../../../assets/images/dashboard-images/overseer/flag1.png";
import { useRef, useState } from "react";
import UserDetailsInfoModal from "./user-details-info/UserDetailsInfoModal";
import UserChangePasswordModal from "./UserChangePasswordModal";
import UserAccountDeletionModal from "./UserAccountDeletionModal";

const UsersTableRow = ({
  data,
  selectedItems,
  handleSelect,
  handleRemoveUsers,
}) => {
  const [openInfoModal, setOpenInfoModal] = useState(null);
  const [openPassModal, setOpenPassModal] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(null);
  const [open, setOpen] = useState(false);
  const isExist = selectedItems.some((item) => item?._id === data?._id);
  return (
    <>
      <div className="w-full h-fit flex items-center mt-[23px]">
        <div className="text-white font-lato text-[15px] max-w-[50px]">
          <div
            onClick={() => handleSelect(data)}
            className="min-w-[50px] max-w-[50px] flex justify-center items-center cursor-pointer"
          >
            {isExist ? iDashSelected : iDashUnselected}
          </div>
        </div>

        <div className="text-white font-lato text-[15px] oneLine min-w-[170px] max-w-[170px] ml-[37px]">
          {data?.username}
        </div>
        <div className="text-[#8F8F8F] font-lato text-[15px] oneLine text-nowrap min-w-[190px] max-w-[190px] ml-[55px]">
          {data?.email}
        </div>
        <div className="text-[#8F8F8F] font-lato text-[15px] text-nowrap min-w-[75px] max-w-[75px] ml-[55px]">
          <h1
            className={`font-bold  font-lato text-[15px] ${
              (data?.role === "Admin" && "text-[#80FF00]") ||
              (data?.role === "Mod" && "text-[#7000FF]") ||
              (data?.role === "Brand" && "text-[#FF5C00]") ||
              (data?.role === "User" && "text-[#FFFFFF]")
            }`}
          >
            {data?.role}
          </h1>
        </div>
        <div className="text-[#8F8F8F] font-lato text-[15px] text-nowrap min-w-[80px] max-w-[80px] ml-[55px]">
          Active
        </div>
        <div className="text-[#8F8F8F] font-lato text-[15px] text-nowrap min-w-[90px] max-w-[90px] ml-[55px]">
          Non-Verified
        </div>
        <div className="text-[#8F8F8F] font-lato text-[15px] text-nowrap min-w-[85px] max-w-[85px] ml-[55px]">
          0 Reports
        </div>
        <div className="text-[#8F8F8F] font-lato text-[15px] text-nowrap min-w-[120px] max-w-[120px] ml-[55px]">
          <div className="flex items-center gap-[5px]">
            <img src={flag1} alt="" className="w-[16px] h-[12px]" />
            <h1 className="oneLine">10.00.00.0</h1>
          </div>
        </div>
        <div className="text-[#8F8F8F] font-lato text-[15px] text-nowrap min-w-[260px] max-w-[260px] ml-[55px]">
          <div className="flex justify-between items-center">
            <h1>Today</h1>
            <div className="pr-[3px]">
              <Popover
                handler={() => setOpen(false)}
                open={open}
                placement="left-start"
              >
                <PopoverHandler
                  onClick={() => setOpen(true)}
                  className="cursor-pointer"
                >
                  {iDashHrThreeDots}
                </PopoverHandler>
                <PopoverContent className="w-[176px] h-[120px] rounded-[5px] bg-[#D9D9D9] border-none shadow-none pt-[10px] px-[12px] pb-[10px] flex flex-col justify-between items-start">
                  <h1
                    onClick={() => {
                      setOpenInfoModal(data);
                      setOpen(false);
                    }}
                    className="text-[15px] font-lato font-medium text-[#373737] text-nowrap leading-normal cursor-pointer"
                  >
                    Detailed Information
                  </h1>
                  <h1
                    onClick={() => {
                      setOpenPassModal(data);
                      setOpen(false);
                    }}
                    className="text-[15px] font-lato font-medium text-[#373737] text-nowrap leading-normal cursor-pointer"
                  >
                    Change Password
                  </h1>
                  <h1
                    onClick={() => {
                      setOpenDeleteModal(data);
                      setOpen(false);
                    }}
                    className="text-[15px] font-lato font-medium text-[#373737] text-nowrap leading-normal cursor-pointer"
                  >
                    Delete User
                  </h1>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <UserDetailsInfoModal
        open={openInfoModal}
        onClose={() => setOpenInfoModal(null)}
      />
      <UserChangePasswordModal
        open={openPassModal}
        onClose={() => setOpenPassModal(null)}
      />
      <UserAccountDeletionModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(null)}
      />
    </>
  );
};

export default UsersTableRow;
