/* eslint-disable react/no-unescaped-entities */
import bg from "../../../assets/images/auth/forgot-password/bg.png";
import { iInfo } from "../../../utils/icons/icons";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
            backgroundPosition: "center center",
          }}
        >
          <div className="flex justify-end">{iInfo}</div>
          <h1 className="text-[25px] text-[#F4F4F4] font-bakbak-one mt-[28px] text-center">
            Forgot your password?
          </h1>
        </div>

        {/* small */}
        <div
          className="w-full max-w-[494px] min-h-[171px] max-h-[171px] h-fit px-[50pxpx] py-[16px] rounded-[10px] md:hidden"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(${bg}), lightgray`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h1 className="text-[20px] text-[#F4F4F4] font-bakbak-one text-center">
            Forgot your password?
          </h1>
        </div>

        <div className="w-full h-full md:py-[23px] md:pl-[16px] flex flex-col justify-between items-center md:pb-[53px]">
          <div>
            <h1 className="text-[30px] text-[#373737] font-bakbak-one mt-[28px] text-center hidden md:block">
              THE WALLPAPER SOCIETY
            </h1>

            <div className="bg-[#C9C9C9] rounded-[12px] min-w-[217px] max-w-[217px] h-[37px] flex justify-center items-center mx-auto mt-[36px] md:mt-[32px]">
              <Button
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-bakbak-one rounded-[10px] text-[12px] min-w-[105px] h-[31px] bg-white text-[#373737]`}
              >
                Password
              </Button>
              <Link to="/forgot-email">
                <Button
                  className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-bakbak-one rounded-[10px] text-[12px] w-[105px] h-[31px] bg-transparent text-[#373737]`}
                >
                  E-mail
                </Button>
              </Link>
            </div>
          </div>

          <div className="max-w-[400px] md:max-w-[326px] w-full mx-auto">
            <div className="flex flex-col items-center md:items-start gap-y-[17px]">
              <p className="font-bakbak-one text-[12px] text-[#373737]">
                Email
              </p>
              <input
                type="email"
                placeholder="wallpapers@thewallpapersociety.com"
                className="outline-none w-full h-[45px] rounded-[10px] bg-white placeholder:text-[#3737374D] text-[#3737374D] text-[12px] placeholder:text-[12px] px-[15px] font-bakbak-one"
              />
            </div>
            <Link to="/reset-password">
              <Button className="shadow-none hover:shadow-none normal-case bg-black p-0 w-[132px] h-[35px] mt-[102px] md:mt-[28px] mx-auto block rounded-[10px] text-white text-[12px] font-bakbak-one">
                Reset
              </Button>
            </Link>
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
    </div>
  );
};

export default ForgotPassword;
