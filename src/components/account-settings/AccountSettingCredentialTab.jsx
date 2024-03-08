import info from "../../assets/icons/profile-settings/info.png";
import { Button } from "@material-tailwind/react";

const AccountSettingCredentialTab = () => {
  return (
    <div>
      <div className="pt-[43px] max-w-[218px] mx-auto">
        <h1 className="text-[15px] font-lato text-center text-[#FFF]">
          E-mail
        </h1>
        <input
          type="text"
          placeholder="krs@wps.com"
          className="w-full h-[34px] mt-[10px] max-w-[218px] bg-[#00000080] outline-none mx-auto rounded-[30px] px-[18px] font-lato placeholder:text-[12px] placeholder:font-lato text-[#FFFFFF80] placeholder:text-[#FFFFFF80] block"
        />
      </div>
      <div className="pt-[32px] max-w-[218px] mx-auto">
        <h1 className="text-[15px] font-lato text-center text-[#FFF]">
          New Password
        </h1>
        <input
          type="password"
          placeholder="New Password"
          className="w-full h-[34px] mt-[10px] max-w-[218px] bg-[#00000080] outline-none mx-auto rounded-[30px] px-[18px] font-lato placeholder:text-[12px] placeholder:font-lato text-[#FFFFFF80] placeholder:text-[#FFFFFF80] block"
        />
      </div>
      <div className="pt-[32px] max-w-[218px] mx-auto">
        <h1 className="text-[15px] font-lato text-center text-[#FFF]">
          Current Password
        </h1>
        <input
          type="password"
          placeholder="Current Password"
          className="w-full h-[34px] mt-[10px] max-w-[218px] bg-[#00000080] outline-none mx-auto rounded-[30px] px-[18px] font-lato placeholder:text-[12px] placeholder:font-lato text-[#FFFFFF80] placeholder:text-[#FFFFFF80] block"
        />
      </div>

      <p className="text-[12px] text-center font-lato text-[#939393] mt-[22px]">
        Update your existing password. Changing your password will result in an
        automatic logout from all other active sessions.
      </p>

      <div className="pt-[75px] max-w-[413px] mx-auto">
        <h1 className="text-[15px] font-lato text-center text-[#FFF]">
          Warnings / Ban Activity
        </h1>
        <textarea
          placeholder="No records"
          className="w-full h-[106px] mt-[20px] md:mt-[22px] bg-[#00000080] outline-none mx-auto rounded-[10px] py-[18px] px-[26px] font-bakbak-one placeholder:text-[12px] placeholder:font-bakbak-one text-[#FFFFFF80] placeholder:text-[#FFFFFF80] block"
        ></textarea>
      </div>

      <div className="mt-[42px] max-w-[264px] mx-auto pb-[35px]">
        <Button className="font-normal normal-case bg-[#2924FF] w-[129px] h-[38px] rounded-[5px] mx-auto mt-[29px] hover:shadow-none shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] block p-0">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AccountSettingCredentialTab;
