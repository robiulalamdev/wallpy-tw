/* eslint-disable react/prop-types */
import { Button, Drawer } from "@material-tailwind/react";
import { useContext } from "react";

import {
  iLogin,
  iLogout,
  iMenuClose,
  iRegister,
} from "../../../utils/icons/icons";
import { Link } from "react-router-dom";

import profile from "../../../assets/images/global/header/profile.gif";

import icon1 from "../../../assets/icons/global/header/icon1.png";
import icon2 from "../../../assets/icons/global/header/icon2.png";
import icon3 from "../../../assets/icons/global/header/icon3.png";
import icon4 from "../../../assets/icons/global/header/icon4.png";
import icon5 from "../../../assets/icons/global/header/icon5.png";
import icon6 from "../../../assets/icons/global/header/icon6.png";
import { AuthContext } from "../../../contextApi/AuthContext";
import useViewImage from "../../../lib/hooks/useViewImage";

const HeaderDrawer = ({ open, close }) => {
  const { viewImg } = useViewImage();
  const { logout, user } = useContext(AuthContext);
  const closeDrawer = () => close(false);

  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      size={719}
      className="bg-black p-0 m-0 w-full"
    >
      <div className="flex flex-col justify-between w-full h-full pt-[29px] px-[23px]">
        <div className=" h-fit">
          <div className="flex justify-between items-start h-fit">
            {!user?._id ? (
              <img
                src={viewImg(user?.profile?.profile_image) || profile}
                alt="profile"
                className="!size-[50px] rounded-full ml-[28px]"
              />
            ) : (
              <span></span>
            )}

            <div onClick={() => close(!open)} className="cursor-pointer">
              {iMenuClose}
            </div>
          </div>

          {!user?._id ? (
            <>
              <div className="max-w-[359px] mx-auto grid grid-cols-2 mt-[46px] h-fit">
                <div className="border-r-[1px] border-[#292D31] min-h-[164px] pl-[28px]">
                  <Link to="/profile">
                    <p className="text-white text-[20px] font-bakbak-one">
                      Profile
                    </p>
                  </Link>
                  <Link to="/favorites">
                    <p className="text-white text-[20px] font-bakbak-one mt-[27px]">
                      Favorites
                    </p>
                  </Link>
                  <Link to="/collections">
                    <p className="text-white text-[20px] font-bakbak-one mt-[27px]">
                      Collections
                    </p>
                  </Link>
                </div>

                <div className="pl-[58px] min-h-[164px]">
                  <Link to="/messages">
                    <p className="text-white text-[20px] font-bakbak-one">
                      Messages
                    </p>
                  </Link>
                  <Link to="/vault">
                    <p className="text-white text-[20px] font-bakbak-one mt-[27px]">
                      The Vault
                    </p>
                  </Link>
                  <Link to="/account-settings">
                    <p className="text-white text-[20px] font-bakbak-one mt-[27px]">
                      Settings
                    </p>
                  </Link>
                </div>

                <svg
                  width="100%"
                  height="1"
                  viewBox="0 0 359 1"
                  fill="none"
                  className="col-span-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4.37114e-08"
                    y1="0.5"
                    x2="359"
                    y2="0.500031"
                    stroke="#292D31"
                  />
                </svg>
              </div>

              <div className="flex justify-center mt-[51px]">
                <Button className="font-normal shadow-none hover:shadow-none normal-case p-0 rounded-[5px] bg-[#2924FF] text-[#C4C4C4] text-[15px] w-[129px] h-[38px]">
                  Upload
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <div className="flex  items-center gap-x-[11px] text-white text-[25px] font-bakbak-one">
                  {iLogin}
                  <p>Login</p>
                </div>
              </Link>
              <Link to="/signup">
                <div className="flex  items-center gap-x-[11px] text-white text-[25px] font-bakbak-one mt-[30px]">
                  {iRegister}
                  <p>Register</p>
                </div>
              </Link>
            </>
          )}
        </div>

        <div className="">
          <div
            onClick={() => logout()}
            className="flex items-center justify-center gap-1 font-bakbak-one text-[20px] text-[#939393] mb-[31px]"
          >
            {iLogout}
            <p>Log Out</p>
          </div>
          <div className="border-t-[1px] border-[#5A5A5A] p-0 m-0"></div>
          <div className="flex justify-between items-center mt-[26px] pb-[29px] px-[29px]">
            <img src={icon1} alt="icon" className="size-[17px]" />
            <img src={icon2} alt="icon" className="size-[17px]" />
            <img src={icon3} alt="icon" className="size-[17px]" />
            <img src={icon4} alt="icon" className="size-[17px]" />
            <img src={icon5} alt="icon" className="size-[17px]" />
            <img src={icon6} alt="icon" className="size-[17px]" />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default HeaderDrawer;
