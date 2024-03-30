import {
  IconButton,
  SpeedDial,
  SpeedDialContent,
  SpeedDialHandler,
} from "@material-tailwind/react";

import profile from "../../../assets/images/global/header/profile.gif";
import { iHLove, iLock, iLogout, iUser } from "../../../utils/icons/icons";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi/AuthContext";
import useViewImage from "../../../lib/hooks/useViewImage";
const HeaderProfile = () => {
  const { viewImg } = useViewImage();
  const { logout, user } = useContext(AuthContext);
  return (
    <>
      <SpeedDial placement="left">
        <SpeedDialHandler>
          <div className="rounded-full size-[62px] flex justify-center items-center bg-[#00000033]">
            <img
              src={viewImg(user?.profile?.profile_image) || profile}
              alt="profile"
              className="size-[50px] rounded-full object-cover"
            />
          </div>
        </SpeedDialHandler>
        <SpeedDialContent className="w-[317px] h-[62px] bg-[#00000033] rounded-[100px] ml-16 flex flex-row justify-start items-center gap-x-[16px] pl-[31px]">
          <IconButton
            onClick={() => logout()}
            className="p-0 rounded-full bg-transparent hover:bg-black"
          >
            {iLogout}
          </IconButton>
          <IconButton className="p-0 rounded-full bg-transparent hover:bg-black">
            {iLock}
          </IconButton>
          <IconButton className="p-0 rounded-full bg-transparent hover:bg-black">
            {iHLove}
          </IconButton>
          <IconButton className="p-0 rounded-full bg-transparent hover:bg-black">
            {iUser}
          </IconButton>
        </SpeedDialContent>
      </SpeedDial>
    </>
  );
};

export default HeaderProfile;
