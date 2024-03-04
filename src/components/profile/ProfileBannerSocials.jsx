import {
  iPSocial1,
  iPSocial2,
  iPSocial3,
  iPSocial4,
} from "../../utils/icons/icons";
import BannerActionButtons from "./BannerActionButtons";

const ProfileBannerSocials = () => {
  return (
    <>
      <div>
        <BannerActionButtons />
        <div className="flex items-center justify-between gap-x-[15px] mt-[12px] max-w-[127px]">
          <div className="">{iPSocial1}</div>
          <div className="">{iPSocial2}</div>
          <div className="">{iPSocial3}</div>
          <div className="">{iPSocial4}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileBannerSocials;
