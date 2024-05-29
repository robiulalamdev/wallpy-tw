import {
  IconButton,
  SpeedDial,
  SpeedDialContent,
  SpeedDialHandler,
} from "@material-tailwind/react";

import profile from "../../../assets/images/global/header/profile.png";
import { iHLove, iLock, iLogout, iUser } from "../../../utils/icons/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contextApi/AuthContext";
import useViewImage from "../../../lib/hooks/useViewImage";
import { useNavigate } from "react-router-dom";
const HeaderProfile = () => {
  const { viewImg } = useViewImage();
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <SpeedDial placement="left" open={open}>
        <SpeedDialHandler onMouseEnter={() => setOpen(true)}>
          <div
            className={`rounded-full cursor-pointer size-[62px] flex justify-center items-center  backdrop-blur-lg ${
              open ? "bg-[#00000050] rounded-l-none" : "bg-[#00000033]"
            }`}
          >
            <img
              src={viewImg(user?.profile?.profile_image) || profile}
              alt="profile"
              className="size-[50px] rounded-full object-cover"
            />
          </div>
        </SpeedDialHandler>
        {open && (
          <SpeedDialContent
            onMouseEnter={() => setOpen(true)}
            className={`w-[255px] h-[62px] backdrop-blur-lg rounded-[100px] rounded-r-none ml-[5px] flex flex-row justify-start items-center gap-x-[16px] pl-[25px] ${
              open ? "bg-[#00000050]" : "bg-[#00000033]"
            }`}
          >
            <IconButton
              onClick={() => logout()}
              className="p-0 rounded-full bg-transparent hover:bg-black"
            >
              {iLogout}
            </IconButton>
            <IconButton
              onClick={() => navigate("/vault")}
              className="p-0 rounded-full bg-transparent hover:bg-black"
            >
              {iLock}
            </IconButton>
            <IconButton
              onClick={() => navigate("/media-center/favorites")}
              className="p-0 rounded-full bg-transparent hover:bg-black"
            >
              {iHLove}
            </IconButton>
            <IconButton
              onClick={() => navigate("/my-profile")}
              className="p-0 rounded-full bg-transparent hover:bg-black"
            >
              {iUser}
            </IconButton>
          </SpeedDialContent>
        )}
      </SpeedDial>
    </div>
  );
};

export default HeaderProfile;
