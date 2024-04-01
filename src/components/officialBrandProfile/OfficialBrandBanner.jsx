/* eslint-disable react/prop-types */
import banner from "../../assets/images/official-brands-profile/banner.png";
import profile from "../../assets/images/official-brands-profile/profile.png";
import useViewImage from "../../lib/hooks/useViewImage";
import { iOfficialVerified } from "../../utils/icons/icons";
import OfficialBrandProfileSocial from "./OfficialBrandProfileSocial";

const OfficialBrandBanner = ({ user }) => {
  const { viewImg } = useViewImage();
  return (
    <div>
      <div className="pl-[4px] md:pl-[29px] relative">
        <div
          className="h-[106px] md:h-[300px] w-full rounded-[10px]"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${
              viewImg(user?.profile?.official_banner)?.replaceAll(/\\/g, "/") ||
              banner
            }), lightgray 0.172px -275.808px / 100% 204.607% no-repeat`,
            backgroundSize: "100% cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex justify-between mt-[8px] md:mt-[25px]">
          <div className="">
            <div className="flex items-end md:items-start w-full mb-[11px] md:mb-0">
              <img
                src={viewImg(user?.profile?.profile_image) || profile}
                alt="profile"
                className="size-[49px] md:size-[125px] rounded-full object-cover absolute left-0 bottom-[60px] md:bottom-[100px]"
              />
              <div className="w-[70px] md:w-[150px]"></div>
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center gap-x-[6px]">
                  {user?.profile?.name && (
                    <h1 className="text-[#FFF] text-[20px] md:text-[30px] font-bakbak-one">
                      {user?.profile?.name}
                    </h1>
                  )}

                  {iOfficialVerified}
                </div>
                {user?.username && (
                  <h1 className="text-[#5A5A5A] text-[15px] font-bakbak-one text-nowrap hidden md:block mb-[7px]">
                    @{user?.username}
                  </h1>
                )}

                <div className="hidden md:block min-h-[70px] max-w-[300px]">
                  {user?.profile?.bio && (
                    <p className="text-[#FFF] font-lato text-[15px] font-semibold leading-[22.575px]">
                      {user?.profile?.bio}
                    </p>
                  )}

                  {/* <p className="text-[#FFF] font-lato text-[15px] font-semibold leading-[22.575px]">
                    The Republic of Gamers.
                  </p>
                  <p className="text-[#FFF] font-lato text-[15px] font-semibold leading-[22.575px]">
                    Join our Discord http://rog.gg/JoinDiscord
                  </p>
                  <p className="text-[#FFF] font-lato text-[15px] font-semibold leading-[22.575px]">
                    Partner with #ROGALLY: ROGAllybiz@asus.com
                  </p> */}
                </div>
              </div>
            </div>
            <div className="md:hidden min-h-[40px] max-w-[300px]">
              {user?.profile?.bio && (
                <p className="text-[#FFF] font-lato text-[12px] md:text-[15px] font-semibold leading-[22.575px]">
                  {user?.profile?.bio}
                </p>
              )}
              {/* <p className="text-[#FFF] font-lato text-[12px] md:text-[15px] font-semibold leading-[22.575px]">
                The Republic of Gamers.
              </p>
              <p className="text-[#FFF] font-lato text-[12px] md:text-[15px] font-semibold leading-[22.575px]">
                Join our Discord http://rog.gg/JoinDiscord
              </p> */}
            </div>
          </div>

          <OfficialBrandProfileSocial />
        </div>
      </div>
    </div>
  );
};

export default OfficialBrandBanner;
