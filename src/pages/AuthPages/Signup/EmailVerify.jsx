/* eslint-disable react/no-unescaped-entities */
import { useMemo, useState } from "react";
import bg from "../../../assets/images/auth/signup/bg.png";
import { iInfo } from "../../../utils/icons/icons";
import { Button, Dialog } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useEmailVerifyMutation } from "../../../redux/features/users/usersApi";
import { SpinnerDiamond } from "spinners-react";

const EmailVerify = () => {
  const { token } = useParams();
  const [fetchPermit, setFetchPermit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [verifySuccess, setVerifySuccess] = useState("");

  const [EmailVerify] = useEmailVerifyMutation();

  const handleVerifyEmail = async () => {
    const options = {
      token: token,
      data: {},
    };

    const result = await EmailVerify(options);
    if (result?.data?.success) {
      setVerifySuccess(result?.data?.message);
    }
    if (result?.error?.data?.type === "email") {
      setVerifySuccess(result?.error?.data?.message);
    }

    setIsLoading(false);
  };

  useMemo(() => {
    if (token) {
      if (fetchPermit) {
        setIsLoading(true);
        handleVerifyEmail();
        setFetchPermit(false);
      } else {
        return () => {};
      }
    } else {
      return () => {};
    }
  }, [token]);

  return (
    <div>
      <h1 className="text-[30px] text-white font-bakbak-one mb-[17px] mt-[27px] text-center md:hidden">
        THE WALLPAPER SOCIETY
      </h1>
      <div className="max-w-[978px] w-full h-[754px] md:min-h-[804px] max-h-[804px] bg-[#D9D9D9] rounded-[10px] md:rounded-[30px] mx-auto grid md:grid-cols-2 px-[21px] py-[19px] lg:px-[27px] lg:py-[29px]">
        <div
          className="w-full h-full max-h-[746px] max-w-[494px] rounded-[30px] px-[22px] py-[23px] hidden md:block"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${bg}), lightgray 50%`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-end">{iInfo}</div>
          <h1 className="text-[25px] text-[#F4F4F4] font-bakbak-one mt-[28px] text-center">
            Welcome to the Society
          </h1>
        </div>

        {/* small */}
        <div
          className="w-full max-w-[494px] min-h-[171px] max-h-[171px] h-fit rounded-[10px] md:hidden"
          style={{
            background: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        ></div>

        <div className="w-full h-full md:py-[23px] md:pl-[16px] flex flex-col justify-between items-center md:pb-[53px]">
          <h1 className="text-[30px] text-[#373737] font-bakbak-one mt-[28px] text-center hidden md:block">
            THE WALLPAPER SOCIETY
          </h1>

          <div className="max-w-[400px] md:max-w-[326px] w-full mx-auto mt-[35px] md:mt-[37px]">
            {!!verifySuccess && (
              <p className="text-center text-[12px] text-[#373737]">
                {verifySuccess}
              </p>
            )}

            <Button
              onClick={() => window.location.replace("/")}
              className="font-normal shadow-none hover:shadow-none normal-case bg-black p-0 w-[132px] h-[35px] mt-[102px] md:mt-[69px] mx-auto block rounded-[10px] text-white text-[12px] font-bakbak-one"
            >
              Return Home
            </Button>
          </div>

          <div className="flex justify-center items-center gap-x-[15px] md:gap-x-[20px]">
            <p className="text-[12px] font-roboto font-medium text-[#373737]">
              Community Rules
            </p>
            <p className="text-[12px] font-roboto font-medium text-[#373737]">
              Privacy Policy
            </p>
            <p className="text-[12px] font-roboto font-medium text-[#373737]">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>

      <Dialog
        open={!!isLoading && !verifySuccess}
        handler={() => {
          setIsLoading(false);
        }}
        size="xs"
        className="px-4 sm:p-0 bg-[#2D2D2D] max-w-[300px] w-full min-h-[282px] relative flex flex-col justify-center items-center gap-4"
      >
        <SpinnerDiamond
          size={64}
          thickness={136}
          speed={180}
          color="rgba(255, 255, 255, 1)"
          secondaryColor="rgba(255, 255, 255, 0.17)"
        />
        <h1 className="font-lato text-white font-bold">Wait for few seconds</h1>
      </Dialog>
    </div>
  );
};

export default EmailVerify;
