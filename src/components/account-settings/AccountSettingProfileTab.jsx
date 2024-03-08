import { useRef, useState } from "react";
import profile from "../../assets/images/global/header/profile.gif";
import bannerImg from "../../assets/images/profile-settings/banner.png";
import info from "../../assets/icons/profile-settings/info.png";

import icon1 from "../../assets/icons/profile-settings/icon1.png";
import icon2 from "../../assets/icons/profile-settings/icon2.png";
import icon3 from "../../assets/icons/profile-settings/icon3.png";
import icon4 from "../../assets/icons/profile-settings/icon4.png";
import icon5 from "../../assets/icons/profile-settings/icon5.png";
import icon6 from "../../assets/icons/profile-settings/icon6.png";
import icon7 from "../../assets/icons/profile-settings/icon7.png";
import icon8 from "../../assets/icons/profile-settings/icon8.png";
import { Button } from "@material-tailwind/react";

const AccountSettingProfileTab = () => {
  const [image, setImage] = useState(profile || null);
  const [banner, setBanner] = useState(bannerImg || null);

  const imageRef = useRef();
  const bannerRef = useRef();
  return (
    <div>
      <div className="pt-[39px] flex justify-between items-center flex-wrap">
        <span className="w-[188px] hidden md:block"></span>
        <h1 className="text-center font-lato text-[12px] text-[#FFFFFF80] flex-grow">
          Avatar size is 125x125 pixels, with a maximum file size not exceeding
          5MB.
        </h1>
        <div className="md:pr-[41px] hidden md:block">
          <Button className="font-normal normal-case bg-[#00000080] w-[147px] h-[38px] rounded-[100px] hover:shadow-none shadow-none font-lato text-[12px] text-[#FFFFFF80] p-0 hidden md:block">
            Request Verification
          </Button>
        </div>
      </div>

      <div className="rounded-full size-[80px] flex justify-center items-center bg-[#00000033] mx-auto mt-[12px] md:mt-[17px]">
        <img
          src={image}
          alt="profile"
          className="size-[70px] rounded-full object-cover"
        />
      </div>

      <h1
        onClick={() => imageRef.current.click()}
        className="font-lato text-[15px] text-[#2555FF] mt-[12px] text-center cursor-pointer"
      >
        Change Profile Avatar
      </h1>
      <input
        ref={imageRef}
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple={false}
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        className="hidden"
      />

      <h1 className="font-lato text-[10px] text-[#FFFFFF80] mt-[37px] text-center">
        Banner size is 1747 x 300 pixels, with a maximum file size not exceeding
        10MB.
      </h1>

      <img
        src={banner}
        alt="profile"
        className="rounded-[5px] w-[232px] h-[40px] mx-auto mt-[16px] md:mt-[17px]"
      />
      <h1
        onClick={() => bannerRef.current.click()}
        className="font-lato text-[15px] text-[#2555FF] mt-[11px] text-center cursor-pointer"
      >
        Change Profile Banner
      </h1>

      <input
        ref={bannerRef}
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple={false}
        onChange={(e) => setBanner(URL.createObjectURL(e.target.files[0]))}
        className="hidden"
      />

      <div className="mt-[38px] max-w-[264px] mx-auto">
        <div>
          <h1 className="text-[15px] font-lato text-center text-[#FFF]">
            Username{" "}
          </h1>
          <div className="h-[34px] flex items-center gap-x-[7px] mt-[16px]">
            <input
              type="text"
              className="w-full h-full flex-grow max-w-[218px] bg-[#00000080] outline-none rounded-[30px] px-[18px] font-bakbak-one placeholder:text-[12px] placeholder:font-bakbak-one text-[#FFFFFF80] placeholder:text-[#FFFFFF80]"
              placeholder="KRS"
            />
            <img src={info} alt="profile" className="size-[18px]" />
          </div>
        </div>
        <div className="mt-[16px]">
          <h1 className="text-[15px] font-lato text-center text-[#FFF]">
            Bio{" "}
          </h1>

          <textarea
            type="text"
            className="w-full h-[76px] bg-[#00000080] outline-none rounded-[10px] px-[18px] py-[9px] font-bakbak-one placeholder:text-[12px] placeholder:font-bakbak-one text-[#FFFFFF80] placeholder:text-[#FFFFFF80] mt-[13px]"
            placeholder="Write a small bio about you..."
          ></textarea>
        </div>
      </div>

      <h1 className="text-[15px] font-lato text-center text-[#FFF] mt-[17px]">
        Social Links
      </h1>

      <div className="flex justify-center items-center flex-wrap mt-[21px] md:mt-[16px] gap-[20px]">
        <img src={icon1} alt="icon" className="max-w-[25px] object-contain" />
        <img src={icon2} alt="icon" className="max-w-[25px] object-contain" />
        <img src={icon3} alt="icon" className="max-w-[25px] object-contain" />
        <img src={icon4} alt="icon" className="max-w-[25px] object-contain" />
        <img src={icon5} alt="icon" className="max-w-[25px] object-contain" />
        <img src={icon6} alt="icon" className="max-w-[25px] object-contain" />
        <img src={icon7} alt="icon" className="max-w-[25px] object-contain" />
        <img src={icon8} alt="icon" className="max-w-[25px] object-contain" />
      </div>

      <div className="mt-[22px] md:mt-[27px] max-w-[264px] mx-auto pb-[35px]">
        <input
          type="text"
          className="w-full h-[35px] bg-[#00000080] outline-none rounded-[10px] px-[18px] font-bakbak-one placeholder:text-[12px] placeholder:font-bakbak-one text-[#FFFFFF80] placeholder:text-[#FFFFFF80]"
          placeholder="Type link here..."
        />

        <Button className="font-normal normal-case bg-[#00000080] w-[147px] h-[38px] rounded-[100px] mx-auto mt-[47px] hover:shadow-none shadow-none font-lato text-[12px] text-[#FFFFFF80] block p-0 md:hidden">
          Request Verification
        </Button>

        <Button className="font-normal normal-case bg-[#2924FF] w-[129px] h-[38px] rounded-[5px] mx-auto mt-[29px] hover:shadow-none shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] block p-0">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AccountSettingProfileTab;
