import banner from "../../assets/images/profile/banner.png";
import profile from "../../assets/images/global/header/profile.gif";
import { iPVerified } from "../../utils/icons/icons";
import ProfileBannerSocials from "./ProfileBannerSocials";

const ProfileBanner = () => {
  return (
    <div>
      <div className="pl-[4px] md:pl-[29px] relative">
        <div
          className="h-[106px] md:h-[300px] w-full rounded-[10px]"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${banner}), lightgray 50% / cover no-repeat`,
          }}
        ></div>
        <div className="flex justify-between mt-[8px] md:mt-[25px]">
          <div className="">
            <div className="flex items-end md:items-start w-full mb-[11px] md:mb-0">
              <div className="rounded-full size-[59px] md:size-[143px] flex justify-center items-center bg-[#00000033] absolute left-0 bottom-[50px] md:bottom-3">
                <img
                  src={profile}
                  alt="profile"
                  className="size-[49px] md:size-[125px] rounded-full object-cover"
                />
              </div>
              <div className="w-[100px] md:w-[200px]"></div>
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center gap-x-[6px]">
                  <h1 className="text-[#FFF] text-[20px] md:text-[30px] font-bakbak-one">
                    KRS
                  </h1>
                  {iPVerified}
                </div>
                <h1 className="text-[#939393] text-[15px] font-bakbak-one text-nowrap hidden md:block">
                  WPS Admin / AI Art
                </h1>
              </div>
            </div>
            <div className="md:hidden">
              <h1 className="text-[#939393] text-[12px] font-bold font-lato text-nowrap">
                WPS Admin
              </h1>
              <h1 className="text-[#939393] text-[12px] font-bold font-lato text-nowrap">
                Founder & Developer
              </h1>
            </div>
          </div>

          <div className="max-w-[419px] mx-auto w-full min-h-[46px] max-h-[46px] bg-[#00000033] rounded-[10px] lg:flex justify-between items-center px-[14px] hidden lg:inline-block">
            <div className="flex items-center gap-x-[12px]">
              <h1 className="text-[#ccc] font-bakbak-one text-[12px] font-semibold">
                Uploads:
              </h1>{" "}
              <span className="text-[#939393] font-bakbak-one text-[12px]">
                1549
              </span>
            </div>
            <div className="flex items-center gap-x-[12px]">
              <h1 className="text-[#ccc] font-bakbak-one text-[12px] font-semibold">
                Last Active:
              </h1>{" "}
              <span className="text-[#939393] font-bakbak-one text-[12px]">
                Today
              </span>
            </div>
            <div className="flex items-center gap-x-[12px]">
              <h1 className="text-[#ccc] font-bakbak-one text-[12px] font-semibold">
                Member Since:
              </h1>{" "}
              <span className="text-[#939393] font-bakbak-one text-[12px]">
                2023
              </span>
            </div>
          </div>

          <ProfileBannerSocials />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
