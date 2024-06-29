/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Button } from "@material-tailwind/react";
import { DefaultProfile } from "../../../lib/data/globalData";

import wallpaper from "../../../assets/images/dashboard-images/claim-reports/wallapper.png";

const ClaimDetails = ({ data = null, selectedTab }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-[21px]">
          <img
            src={DefaultProfile}
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <h1 className="text-[#D9D9D9] font-lato leading-normal">
            <p className="text-[12px] font-normal inline">Reporting user:</p>{" "}
            <p className="text-white font-bold text-[14px] inline">
              {data?.user?.username}
            </p>
          </h1>
        </div>

        <h1 className="text-[#D9D9D9] font-lato leading-normal">
          <p className="text-[12px] font-normal inline">Report Type:</p>{" "}
          <p className="text-white font-bold text-[14px] inline">
            {data?.reportType}
          </p>
        </h1>
        <div className="flex items-center gap-x-[39px]">
          <Button className="bg-[#FF0000] text-white p-0 w-[103px] h-[36px] rounded-[5px] hover:shadow-none shadow-none normal-case font-lato text-[12px] font-medium leading-normal">
            Dismiss
          </Button>
          {selectedTab === "Reviewed" ? (
            <Button className="bg-[#0500FF] text-white p-0 w-[103px] h-[36px] rounded-[5px] hover:shadow-none shadow-none normal-case font-lato text-[12px] font-medium leading-normal">
              Send to Inbox
            </Button>
          ) : (
            <Button className="bg-[#8FFF00] text-black p-0 w-[103px] h-[36px] rounded-[5px] hover:shadow-none shadow-none normal-case font-lato text-[12px] font-medium leading-normal">
              Reviewed
            </Button>
          )}
        </div>
      </div>
      {data?.reportType === "User Report" ? (
        <div className="mt-[63px] flex items-start gap-x-[240px]">
          <h1 className="text-[#D9D9D9] font-lato leading-normal">
            <p className="text-[12px] font-normal inline">Reported User:</p>{" "}
            <p className="text-white font-bold text-[15px] inline">kaj</p>
          </h1>
          <div>
            <h1 className="text-[#D9D9D9] font-lato leading-normal">
              <p className="text-[12px] font-normal inline">Date Posted:</p>{" "}
              <p className="text-white font-bold text-[15px] inline">
                03/13/2024
              </p>
            </h1>
            <h1 className="text-[#D9D9D9] font-lato leading-normal mt-[29px]">
              <p className="text-[12px] font-normal inline">Times Reported:</p>{" "}
              <p className="text-white font-bold text-[15px] inline">9</p>
            </h1>
          </div>
        </div>
      ) : (
        <div className="mt-[63px]">
          <h1 className="font-lato text-[15px] font-bold text-white leading-normal">
            {data?.reportType === "Removal Request" && "Reported Wallpaper:"}
            {data?.reportType === "Claim Request" && "Claimed Wallpaper:"}
          </h1>
          <div className="mt-[16px] flex items-start gap-x-[26px]">
            <img
              src={wallpaper}
              alt=""
              className="w-[350px] h-[189px] rounded-[5px]"
            />
            <div>
              <h1 className="text-[#D9D9D9] font-lato leading-normal">
                <p className="text-[12px] font-normal inline">Posted By:</p>{" "}
                <p className="text-white font-bold text-[15px] inline">krs</p>
              </h1>
              <h1 className="text-[#D9D9D9] font-lato leading-normal mt-[29px]">
                <p className="text-[12px] font-normal inline">Date Posted:</p>{" "}
                <p className="text-white font-bold text-[15px] inline">
                  03/13/2024
                </p>
              </h1>
              <h1 className="text-[#D9D9D9] font-lato leading-normal mt-[29px]">
                <p className="text-[12px] font-normal inline">
                  Times Reported:
                </p>{" "}
                <p className="text-white font-bold text-[15px] inline">2</p>
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="mt-[57px]">
        <h1 className="font-lato text-[15px] font-bold text-white leading-normal">
          Message:
        </h1>
        <p className="mt-[27px] text-white font-lato text-[15px] font-normal leading-normal">
          Hello my name is Luis and this art belongs to me. I did not authorize
          anyone to post it and I would like to request it gets removed from the
          site. My email is luisreport@gmail.com, please reply back to me as
          soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ClaimDetails;
