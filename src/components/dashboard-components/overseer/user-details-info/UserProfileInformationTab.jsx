/* eslint-disable react/prop-types */
import React, { useMemo, useState } from "react";
import { socialLinkItems } from "../../../../lib/data/globalData";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";

const UserProfileInformationTab = ({ user }) => {
  const { handleSubmit, register, setValue, setError } = useForm();
  const [selectedSocial, setSelectedSocial] = useState(null);
  const [linkValue, setLinkValue] = useState("");

  useMemo(() => {
    if (user) {
      setValue("username", user?.username);
      setValue("bio", user?.profile?.bio);

      if (user?.profile?.socials) {
        setSelectedSocial({ name: "twitter" });
        setLinkValue(user?.profile?.socials?.twitter);
      }
    }
  }, [user]);

  const handleSelectSocial = async (social) => {
    if (social?.length > 0) {
      if (social[0] !== selectedSocial?.name) {
        const value = user?.profile?.socials[social[0]];
        setLinkValue(value);
        setSelectedSocial({ name: social[0] });
      }
    }
  };
  return (
    <>
      <h1 className="font-lato font-bold text-[20px] text-[#313131] pl-[14px] pt-[29px]">
        Profile Information
      </h1>

      <div className="mt-[51px] pl-[12px]">
        <div>
          <h1 className="font-lato text-[20px] font-bold text-[#313131]">
            Bio
          </h1>
          <textarea
            placeholder="Write a small bio about you..."
            className="bg-[#00000080] mt-[9px] w-full h-[76px] rounded-[10px] font-bakbak-one text-[12px] text-[#FFFFFF80] px-[18px] py-[9px] resize-none"
          ></textarea>
        </div>
        <div className="mt-[35px]">
          <h1 className="font-lato text-[20px] font-bold text-[#313131]">
            Socials
          </h1>

          <div className="flex items-center flex-wrap mt-[18px] gap-[20px]">
            {Object.entries(socialLinkItems)?.map((item, index) => (
              <div
                onClick={() => handleSelectSocial(item)}
                key={index}
                className={`w-[30px] min-h-[40px] h-[40px] flex justify-center items-center border-b-[4px] cursor-pointer 
              ${
                selectedSocial?.name === item[0]
                  ? "border-green-600"
                  : "border-transparent hover:border-green-600 duration-100"
              }`}
              >
                <img
                  src={item[1].iconDark}
                  alt="icon"
                  className="max-w-[25px] object-contain"
                />
              </div>
            ))}
            <input
              onChange={(e) => setLinkValue(e.target.value)}
              type="url"
              value={linkValue}
              required={false}
              className="w-full h-[35px] bg-[#00000080] outline-none rounded-[10px] px-[18px] font-bakbak-one text-[12px] placeholder:text-[12px] placeholder:font-bakbak-one text-[#FFFFFF80] placeholder:text-[#FFFFFF80] mt-[21px]"
              placeholder="Type link here..."
            />
          </div>
        </div>
        <div className="mt-[52px]">
          <h1 className="font-lato text-[20px] font-bold text-[#313131]">
            Account Verification
          </h1>
        </div>
        <Button
          type="submit"
          className="w-[154px] h-[39px] bg-[#313131] normal-case rounded-[5px] text-white font-lato text-[15px] font-medium flex justify-center items-center gap-2 shadow-none hover:shadow-none mt-[100px] mx-auto"
        >
          {/* {isLoading && (
            <SpinnerCircularFixed
              size={20}
              thickness={180}
              speed={300}
              color="rgba(255, 255, 255, 1)"
              secondaryColor="rgba(255, 255, 255, 0.42)"
            />
          )}{" "} */}
          <h1>Save Changes</h1>
        </Button>
      </div>
    </>
  );
};

export default UserProfileInformationTab;
