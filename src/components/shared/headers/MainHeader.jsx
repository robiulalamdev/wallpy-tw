import React, { useState } from "react";
import { iMenu, iSearch, iSearchClose } from "../../../utils/icons/icons";
import logo from "../../../assets/brand/logo.png";
import { Button } from "@material-tailwind/react";
import HeaderDrawer from "./HeaderDrawer";

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <div className="md:flex items-center gap-[20px] w-full my-[23px] hidden md:inline-block">
        <img
          src={logo}
          alt="logo"
          className="w-[85px] h-[56px] object-contain"
        />
        <div className="bg-[#00000033] rounded-[10px] h-[45px] max-w-[771px] w-full flex justify-center items-center pr-[10px]">
          <div className="text-[#5A5A5A] w-[40px] px-[10px] h-full flex justify-center items-center">
            {iSearch}
          </div>
          <input
            type="text"
            placeholder="Find your next wallpaper..."
            className="text-[#5A5A5A] placeholder:text-[#5A5A5A] text-[15px] bg-transparent w-full h-full flex-grow font-lato outline-none border-none"
          />
        </div>
        <div className="min-w-[183px] max-w-[183px] h-[45px] grid grid-cols-2 bg-[#00000033] rounded-[10px] py-1">
          <Button className="shadow-none hover:shadow-none w-full h-full text-white bg-transparent normal-case font-extrabold text-[15px] font-bakbak-one p-0 m-0 flex justify-center items-center border-r border-[#373737] rounded-none">
            Account
          </Button>
          <Button className="shadow-none hover:shadow-none w-full h-full text-white bg-transparent normal-case font-extrabold text-[15px] font-bakbak-one p-0 m-0 flex justify-center items-center rounded-none">
            Upload
          </Button>
        </div>
      </div>

      <div className="md:hidden my-[23px]">
        {openSearch ? (
          <>
            <div className=" flex justify-center items-center gap-3">
              <input
                type="text"
                placeholder="Find your next wallpaper..."
                className="text-[#5A5A5A] placeholder:text-[#5A5A5A] text-[12px] leading-[14px] bg-[#00000033] rounded-[8px] h-[34px] max-w-[771px] w-full flex-grow font-lato outline-none border-none px-2 "
              />
              <div
                onClick={() => setOpenSearch(!openSearch)}
                className="text-[#FF4D00] flex justify-center items-center h-full"
              >
                {iSearchClose}
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between gap-[10px] w-full">
            <div className="flex items-center gap-[10px] w-full">
              <img
                src={logo}
                alt="logo"
                className="w-[60px] h-[32px] object-contain"
              />
              <div
                onClick={() => setOpenSearch(!openSearch)}
                className="text-white w-[40px] px-[10px] h-full flex justify-center items-center"
              >
                {iSearch}
              </div>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-white cursor-pointer"
            >
              {iMenu}
            </div>
          </div>
        )}
      </div>

      <HeaderDrawer open={open} close={setOpen} />
    </>
  );
};

export default MainHeader;
