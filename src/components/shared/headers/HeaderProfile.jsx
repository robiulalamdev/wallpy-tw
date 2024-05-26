import {
  IconButton,
  SpeedDial,
  SpeedDialContent,
  SpeedDialHandler,
} from "@material-tailwind/react";

import profile from "../../../assets/images/global/header/profile.png";
import { iHLove, iLock, iLogout, iUser } from "../../../utils/icons/icons";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi/AuthContext";
import useViewImage from "../../../lib/hooks/useViewImage";
import { useNavigate } from "react-router-dom";
const HeaderProfile = () => {
  const { viewImg } = useViewImage();
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <SpeedDial placement="left">
        <SpeedDialHandler open={true}>
          <div className="rounded-full hover:rounded-l-none cursor-pointer size-[62px] flex justify-center items-center bg-[#00000033] hover:bg-[#00000050] backdrop-blur-lg">
            <img
              src={viewImg(user?.profile?.profile_image) || profile}
              alt="profile"
              className="size-[50px] rounded-full object-cover"
            />
          </div>
        </SpeedDialHandler>
        <SpeedDialContent className="w-[255px] h-[62px] bg-[#00000050] backdrop-blur-lg rounded-[100px] rounded-r-none ml-[5px] flex flex-row justify-start items-center gap-x-[16px] pl-[25px]">
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
      </SpeedDial>
    </>
  );
};

export default HeaderProfile;
