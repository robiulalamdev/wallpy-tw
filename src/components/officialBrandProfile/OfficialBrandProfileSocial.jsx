import {
  iShare1,
  iShare2,
  iShare3,
  iShare4,
  iShare5,
  iShare6,
} from "../../utils/icons/icons";
import BannerActionButtons from "../profile/BannerActionButtons";

const OfficialBrandProfileSocial = () => {
  return (
    <>
      <div>
        <BannerActionButtons />
        <div className="flex items-center justify-end gap-x-[10px] mt-[12px]">
          <div className="">{iShare1}</div>
          <div className="">{iShare2}</div>
          <div className="">{iShare3}</div>
          <div className="">{iShare4}</div>
          <div className="">{iShare5}</div>
          <div className="">{iShare6}</div>
        </div>
      </div>
    </>
  );
};

export default OfficialBrandProfileSocial;
