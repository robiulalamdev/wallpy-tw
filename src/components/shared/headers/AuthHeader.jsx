import React from "react";
import logo from "../../../assets/brand/logo.png";

const AuthHeader = () => {
  return (
    <>
      <div className="md:flex items-center justify-between w-full mt-[23px] hidden md:inline-block">
        <img
          src={logo}
          alt="logo"
          className="w-[85px] h-[56px] object-contain"
        />
      </div>
    </>
  );
};

export default AuthHeader;
