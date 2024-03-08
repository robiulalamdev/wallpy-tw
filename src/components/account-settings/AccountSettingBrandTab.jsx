import { useRef, useState } from "react";
import bannerImg from "../../assets/images/profile-settings/banner.png";
import { Button } from "@material-tailwind/react";

const AccountSettingBrandTab = () => {
  const [banner, setBanner] = useState(bannerImg || null);

  const bannerRef = useRef();
  return (
    <div>
      <h1 className="text-center text-[#fff] font-bold text-[15px] md:text-[20px] pt-[38px] leading-normal font-lato">
        Brand Branner
      </h1>

      <h1 className="text-center font-lato text-[10px] md:text-[12px] text-[#FFFFFF80] pt-[23px]">
        This banner could be prominently displayed on the main page. We
        recommend featuring your logo for improved brand identification.
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
        Change Brand Banner
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
        <h1 className="text-center text-[#fff] font-bold text-[15px] md:text-[20px] pt-[38px] leading-normal font-lato">
          Brand Name
        </h1>
        <input
          type="text"
          className="w-full h-[34px] mt-[23px] max-w-[218px] bg-[#00000080] outline-none mx-auto rounded-[30px] px-[18px] font-bakbak-one placeholder:text-[12px] placeholder:font-bakbak-one text-[#FFFFFF80] placeholder:text-[#FFFFFF80] block"
        />
      </div>

      <p className="text-center font-lato text-[10px] md:text-[12px] text-[#FFFFFF80] pt-[17px]">
        The brand name will always appear beneath the brand banner. If no brand
        name is selected, it will default to the original username. For
        instance:
      </p>
      <p className="text-center font-lato text-[10px] md:text-[12px] text-[#FFFFFF80]">
        Username: Wallpaper Society
      </p>
      <p className="text-center font-lato text-[10px] md:text-[12px] text-[#FFFFFF80]">
        Brand Name: WPS
      </p>

      <div className="mt-[38px] md:mt-[33px] max-w-[264px] mx-auto pb-[35px]">
        <Button className="font-normal normal-case bg-[#2924FF] w-[129px] h-[38px] rounded-[5px] mx-auto hover:shadow-none shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] block p-0">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AccountSettingBrandTab;
