/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { socialLinkItems } from "../../../../lib/data/globalData";
import { useForm } from "react-hook-form";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { iDashDownArrowYellow } from "../../../../utils/icons/dashboard-icons/dashicons";
import {
  banReasons,
  suspendHowLong,
  suspendReasons,
} from "../../../../lib/data/dashboardData";

const UserPrivilegesTab = ({ user }) => {
  const { handleSubmit, register, setValue, setError } = useForm();
  const [status, setStatus] = useState("Ban");
  const [banReason, setBanReason] = useState("");
  const [suspendReason, setSuspendReason] = useState("");
  const [suspendTime, setSuspendTime] = useState("");

  const [statusResult, setStatusResult] = useState(null);

  const handleSave = async () => {
    if (status === "Ban") {
      setStatusResult({ status: status, reason: banReason });
    }
    if (status === "Suspend") {
      setStatusResult({
        status: status,
        reason: suspendReason,
        time: suspendTime,
      });
    }
  };

  const handleClear = async () => {
    setStatus("");
    setBanReason("");
    setSuspendReason("");
    setSuspendTime("");
    setStatusResult(null);
  };

  return (
    <>
      <h1 className="font-lato font-bold text-[20px] text-[#313131] pl-[14px] pt-[29px]">
        Privileges
      </h1>

      <div className="flex flex-col justify-between w-full h-full min-h-[600px]">
        <div>
          {!statusResult && (
            <div className="mt-[110px] pl-[47px] h-fit">
              <div className="flex items-start gap-[26px]">
                <Button
                  onClick={() => setStatus("Ban")}
                  className={`w-[105px] h-[45px] rounded-[5px] shadow-none hover:shadow-none text-[15px] font-lato text-white font-bold p-0 normal-case ${
                    status === "Ban" ? "bg-[#FF0000]" : "bg-[#202020]"
                  }`}
                >
                  Ban
                </Button>
                <Button
                  onClick={() => setStatus("Suspend")}
                  className={`w-[105px] h-[45px] rounded-[5px] shadow-none hover:shadow-none text-[15px] font-lato text-white font-bold p-0 normal-case ${
                    status === "Suspend" ? "bg-[#FF0000]" : "bg-[#202020]"
                  }`}
                >
                  Suspend
                </Button>
              </div>

              <div className="mt-[35px]">
                {status === "Ban" && (
                  <div>
                    <h1 className="font-lato text-[15px] text-[#313131] font-bold">
                      What is the reason for the ban?
                    </h1>

                    <Popover placement="bottom-start">
                      <PopoverHandler>
                        <button className="flex justify-between items-center w-[271px] h-[26px] rounded-[5px] bg-[#313131] pl-[13px] pr-[11px] mt-[20px]">
                          <h1 className="font-lato font-medium leading-normal text-[12px] text-white oneLine">
                            {banReason ? banReason : "Select Reason"}
                          </h1>
                          {iDashDownArrowYellow}
                        </button>
                      </PopoverHandler>
                      <PopoverContent className="min-w-[386px] max-w-[386px] min-h-[167px] max-h-[167px] bg-[#313131] rounded-[5px] outline-none border-none z-[99999999] grid grid-cols-1 gap-y-[12px] overflow-y-auto p-[13px]">
                        {banReasons.map((item, index) => (
                          <h1
                            onClick={() => setBanReason(item)}
                            key={index}
                            className="font-lato text-[12px] font-bold leading-normal text-white cursor-pointer"
                          >
                            {item}
                          </h1>
                        ))}
                      </PopoverContent>
                    </Popover>

                    <p className="mt-[14px] text-[#000000] text-[12px] font-lato font-normal leading-normal">
                      All bans constitute permanent suspensions. <br /> For
                      temporary suspensions, please opt to suspend the user
                      instead.
                    </p>
                  </div>
                )}
                {status === "Suspend" && (
                  <>
                    <div>
                      <h1 className="font-lato text-[15px] text-[#313131] font-bold">
                        What is the reason for the suspension?
                      </h1>

                      <Popover placement="bottom-start">
                        <PopoverHandler>
                          <button className="flex justify-between items-center w-[271px] h-[26px] rounded-[5px] bg-[#313131] pl-[13px] pr-[11px] mt-[20px]">
                            <h1 className="font-lato font-medium leading-normal text-[12px] text-white oneLine">
                              {suspendReason ? suspendReason : "Select Reason"}
                            </h1>
                            {iDashDownArrowYellow}
                          </button>
                        </PopoverHandler>
                        <PopoverContent className="min-w-[386px] max-w-[386px] min-h-[167px] max-h-[167px] bg-[#313131] rounded-[5px] outline-none border-none z-[99999999] grid grid-cols-1 gap-y-[12px] overflow-y-auto p-[13px]">
                          {suspendReasons.map((item, index) => (
                            <h1
                              onClick={() => setSuspendReason(item)}
                              key={index}
                              className="font-lato text-[12px] font-bold leading-normal text-white cursor-pointer"
                            >
                              {item}
                            </h1>
                          ))}
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="mt-[26px]">
                      <h1 className="font-lato text-[15px] text-[#313131] font-bold">
                        How long is the suspension?
                      </h1>

                      <Popover placement="bottom-start">
                        <PopoverHandler>
                          <button className="flex justify-between items-center w-[271px] h-[26px] rounded-[5px] bg-[#313131] pl-[13px] pr-[11px] mt-[20px]">
                            <h1 className="font-lato font-medium leading-normal text-[12px] text-white oneLine">
                              {suspendHowLong ? suspendTime : "Select Reason"}
                            </h1>
                            {iDashDownArrowYellow}
                          </button>
                        </PopoverHandler>
                        <PopoverContent className="min-w-[386px] max-w-[386px] min-h-[167px] max-h-[167px] bg-[#313131] rounded-[5px] outline-none border-none z-[99999999] grid grid-cols-1 gap-y-[12px] overflow-y-auto p-[13px]">
                          {suspendHowLong.map((item, index) => (
                            <h1
                              onClick={() => setSuspendTime(item)}
                              key={index}
                              className="font-lato text-[12px] font-bold leading-normal text-white cursor-pointer"
                            >
                              {item}
                            </h1>
                          ))}
                        </PopoverContent>
                      </Popover>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {statusResult?.status === "Ban" && (
            <div className="pl-[12px] mt-[114px]">
              <Button
                onClick={() => handleClear()}
                className="normal-case w-[105px] h-[45px] rounded-[5px] shadow-none hover:shadow-none text-[15px] font-lato text-white font-bold p-0"
              >
                Unban
              </Button>

              <h1 className="text-[#313131] text-[15px] font-lato font-bold leading-normal mt-[35px]">
                This user is currently banned for:{" "}
              </h1>

              <h1 className="text-[#FF0000] text-[12px] font-lato font-bold leading-normal mt-[12px]">
                {statusResult?.reason}
              </h1>
            </div>
          )}
          {statusResult?.status === "Suspend" && (
            <div className="pl-[12px] mt-[42px]">
              <h1 className="font-lato text-[20px] font-medium leading-normal text-[#313131]">
                Suspension Type
              </h1>
              <Button
                onClick={() => handleClear()}
                className="normal-case w-[105px] h-[45px] rounded-[5px] shadow-none hover:shadow-none text-[15px] font-lato text-white font-bold p-0 mt-[27px]"
              >
                Unsuspend
              </Button>

              <h1 className="text-[#313131] text-[15px] font-lato font-bold leading-normal mt-[35px]">
                This user is currently suspended for:
              </h1>

              <h1 className="text-[#FF0000] text-[12px] font-lato font-bold leading-normal mt-[22px]">
                {statusResult?.reason}
              </h1>
              <h1 className="text-[#FF0000] text-[12px] font-lato font-bold leading-normal mt-[27px]">
                {statusResult?.time}
              </h1>
            </div>
          )}
        </div>

        <Button
          onClick={() => handleSave()}
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

export default UserPrivilegesTab;
