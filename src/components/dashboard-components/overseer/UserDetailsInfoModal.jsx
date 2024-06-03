/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
const UserDetailsInfoModal = ({ open }) => {
  return (
    <Dialog
      open={!!open?._id}
      size="sm"
      className="bg-transparent border-none outline-none flex justify-center items-center"
    >
      <div className="w-[715px] h-[700px] rounded-[10px] bg-[#D5D5D5]"></div>
    </Dialog>
  );
};

export default UserDetailsInfoModal;
