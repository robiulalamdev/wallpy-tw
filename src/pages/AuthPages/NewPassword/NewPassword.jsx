/* eslint-disable react/no-unescaped-entities */
import { useMemo, useState } from "react";
import bg from "../../../assets/images/auth/login/passswordChangedSuccess.png";
import sbg from "../../../assets/images/auth/signup/bg.png";
import { iInfo } from "../../../utils/icons/icons";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useChangePasswordMutation,
  useVerifyResetPasswordMutation,
} from "../../../redux/features/users/usersApi";
import { useForm } from "react-hook-form";
import { SpinnerCircularFixed, SpinnerDiamond } from "spinners-react";

const NewPassword = () => {
  const { token } = useParams();
  const [fetchPermit, setFetchPermit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [verifySuccess, setVerifySuccess] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [verifyResetPassword] = useVerifyResetPasswordMutation();
  const [changePassword, { isLoading: changePassLoading }] =
    useChangePasswordMutation();

  const handleVerifyReset = async () => {
    const options = {
      token: token,
      data: {},
    };

    const result = await verifyResetPassword(options);
    if (result?.data?.success) {
      setVerifySuccess(result?.data?.message);
      setOpen(true);
      setEmail(result?.data?.data?.email);
    } else {
      if (result?.data?.type === "token") {
        setVerifySuccess(result?.data?.message);
        setOpen(false);
        setEmail("");
      }
    }
    if (result?.error?.data?.type === "email") {
      setVerifySuccess(result?.error?.data?.message);
      setOpen(false);
      setEmail("");
    }

    setIsLoading(false);
  };

  useMemo(() => {
    if (token) {
      if (fetchPermit) {
        setIsLoading(true);
        handleVerifyReset();
        setFetchPermit(false);
      } else {
        return () => {};
      }
    } else {
      return () => {};
    }
  }, [token]);

  const handleChangePassword = async (data) => {
    const options = {
      data: { email: email, password: data?.password },
    };

    const result = await changePassword(options);
    if (result?.data?.success) {
      window.location.replace("/password-changed-success");
    } else {
      if (result?.data?.type === "password") {
        setError("password", {
          type: "manual",
          message: result?.data?.message,
        });
      }
      if (result?.data?.type === "email") {
        setError("password", {
          type: "manual",
          message: result?.data?.message,
        });
      }
    }
    if (result?.error?.data?.type === "email") {
      setError("password", {
        type: "manual",
        message: result?.error?.data?.message,
      });
    }
  };

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
          <div className="flex justify-end">
            <Popover placement="bottom-end">
              <PopoverHandler className="cursor-pointer">
                {iInfo}
              </PopoverHandler>
              <PopoverContent className="p-0 border-none shadow-none">
                <div
                  onClick={() => navigate("/wallpapers")}
                  className="w-[127px] h-[37px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer"
                >
                  <p className="text-[#151618] font-bold font-lato">
                    Go to wallpaper
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* small */}
        <div
          className="w-full max-w-[494px] min-h-[171px] max-h-[171px] h-fit px-[50pxpx] py-[16px] rounded-[10px] md:hidden"
          style={{
            background: `url(${sbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>

        <div className="w-full h-full md:py-[23px] md:pl-[16px] flex flex-col justify-between items-center md:pb-[53px]">
          <h1 className="text-[30px] text-[#373737] font-bakbak-one mt-[28px] text-center hidden md:block">
            THE WALLPAPER SOCIETY
          </h1>

          <div className="max-w-[400px] md:max-w-[326px] w-full mx-auto">
            {open && email ? (
              <form onSubmit={handleSubmit(handleChangePassword)}>
                <div className="flex flex-col items-center md:items-start gap-y-[17px]">
                  <p className="font-bakbak-one text-[12px] text-[#373737]">
                    Choose a new password
                  </p>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?!\s)(?!.*\s{2})(?=.*[a-zA-Z0-9]).{6,8}$/, // Requires 6 to 8 characters with no spaces
                        message:
                          "Password must be 6 to 8 characters long with no spaces",
                      },
                    })}
                    type="password"
                    placeholder="*****************"
                    required={true}
                    className="outline-none w-full h-[45px] rounded-[10px] bg-white placeholder:text-[#3737374D] text-[#3737374D] text-[12px] placeholder:text-[12px] px-[15px] font-bakbak-one"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start gap-y-[17px] mt-[15px]">
                  <p className="font-bakbak-one text-[12px] text-[#373737]">
                    Repeat new password
                  </p>
                  <input
                    {...register("repeat_password", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    type="password"
                    placeholder="*****************"
                    required={true}
                    className="outline-none w-full h-[45px] rounded-[10px] bg-white placeholder:text-[#3737374D] text-[#3737374D] text-[12px] placeholder:text-[12px] px-[15px] font-bakbak-one"
                  />
                </div>

                {errors.password && (
                  <p className="text-center text-[12px] text-[#F00] mt-[15px] font-lato">
                    {errors?.password?.message}
                  </p>
                )}

                {errors.repeat_password && (
                  <p className="text-center text-[12px] text-[#F00] mt-[15px] font-lato">
                    {errors?.repeat_password?.message}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={changePassLoading}
                  className="font-normal shadow-none hover:shadow-none normal-case bg-black p-0 w-[132px] h-[35px] mt-[63px] md:mt-[47px] mx-auto inline-block rounded-[10px] text-white text-[12px] font-bakbak-one flex items-center justify-center gap-2"
                >
                  {changePassLoading && (
                    <SpinnerCircularFixed
                      size={20}
                      thickness={180}
                      speed={300}
                      color="rgba(255, 255, 255, 1)"
                      secondaryColor="rgba(255, 255, 255, 0.42)"
                    />
                  )}{" "}
                  Change Password
                </Button>
              </form>
            ) : (
              <>
                {!!verifySuccess && (
                  <p className="text-center text-[12px] text-[#373737]">
                    {verifySuccess}
                  </p>
                )}
              </>
            )}

            {!!isLoading && !verifySuccess && !open && (
              <div className="px-4 sm:p-0 max-w-[300px] w-full min-h-[282px] relative flex flex-col justify-center items-center gap-4">
                <SpinnerDiamond
                  size={64}
                  thickness={136}
                  speed={180}
                  color="rgba(57, 172, 60, 1)"
                  secondaryColor="rgba(57, 172, 64, 0.46)"
                />
                <h1 className="font-lato text-[#373737] font-bold">
                  Wait for few seconds
                </h1>
              </div>
            )}

            <Link to="/">
              <Button className="font-normal shadow-none hover:shadow-none normal-case bg-black p-0 w-[132px] h-[35px] mt-[34px] mx-auto block rounded-[10px] text-white text-[12px] font-bakbak-one">
                Return Home
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

export default NewPassword;
