import {
  iPMail,
  iPReport,
  iPSocial1,
  iPSocial2,
  iPSocial3,
  iPSocial4,
  iPUpload,
  iShare1,
  iShare2,
  iShare3,
  iShare4,
  iShare5,
  iShare6,
} from "../../utils/icons/icons";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import ReportDialog from "./ReportDialog";
import { useState } from "react";
import MailDialog from "./MailDialog";

const ProfileBannerSocials = () => {
  const [reportOpen, setReportOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-end items-center gap-x-[8px]">
          <div
            onClick={() => setMailOpen(true)}
            className="w-[25px] md:w-[36px] h-[25px] md:h-[35px]"
          >
            {iPMail}
          </div>

          <Popover placement="bottom-end">
            <PopoverHandler>
              <div className="w-[25px] md:w-[36px] h-[25px] md:h-[35px]">
                {iPUpload}
              </div>
            </PopoverHandler>
            <PopoverContent className="max-w-[377px] w-full min-h-[102px] pb-[20px] px-[9px] pt-[5px] bg-[#090A0C] rounded-[10px] outline-none border-none">
              <h1 className="text-[#FFF] font-bakbak-one text-center text-[15px]">
                Share this wallpaper with friends
              </h1>

              <div className="flex justify-center items-end flex-wrap gap-x-[22px] gap-y-[20px] mt-[11px] px-[11px]">
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare1}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">X</h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare2}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">
                    Facebook
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare3}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">
                    WhatsApp
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare4}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">Discord</h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare5}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">Email</h1>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[30px] h-[30px] bg-[#00000066] rounded flex justify-center items-center">
                    {iShare6}
                  </div>
                  <h1 className="text-[#FFF] font-lato text-[10px]">
                    Copy Link
                  </h1>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div
            onClick={() => setReportOpen(true)}
            className="w-[25px] md:w-[36px] h-[25px] md:h-[35px]"
          >
            {iPReport}
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-[15px] mt-[12px] max-w-[127px]">
          <div className="">{iPSocial1}</div>
          <div className="">{iPSocial2}</div>
          <div className="">{iPSocial3}</div>
          <div className="">{iPSocial4}</div>
        </div>
      </div>

      <ReportDialog reportOpen={reportOpen} setReportOpen={setReportOpen} />
      <MailDialog mailOpen={mailOpen} setMailOpen={setMailOpen} />
    </>
  );
};

export default ProfileBannerSocials;
