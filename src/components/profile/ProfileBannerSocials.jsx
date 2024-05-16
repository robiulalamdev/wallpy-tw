/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { socialLinkItems } from "../../lib/data/globalData";
// import {
//   iPSocial1,
//   iPSocial2,
//   iPSocial3,
//   iPSocial4,
// } from "../../utils/icons/icons";
import BannerActionButtons from "./BannerActionButtons";

const ProfileBannerSocials = ({ author }) => {
  return (
    <>
      <div className="min-w-[200px] max-w-[200px] w-fit flex flex-col items-end">
        <BannerActionButtons author={author} />
        <div className="flex items-center justify-end gap-y-[10px] gap-x-[15px] mt-[12px] max-w-[127px] flex-wrap">
          {Object.entries(socialLinkItems)?.map((item, index) => (
            <>
              {author?.profile?.socials[item[0]] && (
                <Link
                  key={index}
                  target="_blank"
                  to={author?.profile?.socials[item[0]]}
                  className="cursor-pointer"
                >
                  <img
                    src={item[1].icon}
                    alt="icon"
                    className="max-w-[15px] md:max-w-[25px] object-contain"
                  />
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileBannerSocials;
