import { useContext, useState } from "react";

import bg from "../../../assets/images/auth/login/bg.png";
import { iApple, iFacebook, iGoogle, iInfo } from "../../../utils/icons/icons";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "../../../redux/features/users/usersApi";
import { TOKEN_NAME } from "../../../lib/config";
import { SpinnerCircularFixed } from "spinners-react";
import { AuthContext } from "../../../contextApi/AuthContext";
import VerifyModal from "../../../components/common/modals/VerifyModal";

const Login = () => {
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const [postLogin, { isLoading }] = usePostLoginMutation();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleLogin = async (data) => {
    const options = {
      data: data,
    };

    const result = await postLogin(options);
    if (result?.data?.success) {
      if (result?.data?.data?.accessToken) {
        localStorage.setItem(TOKEN_NAME, result?.data?.data?.accessToken);
        setUser(result?.data?.data?.user);
        navigate("/");
      }
    } else {
      if (result?.data?.type === "email") {
        setError("email", { type: "manual", message: result?.data?.message });
      }
      if (result?.data?.type === "password") {
        setError("password", {
          type: "manual",
          message: result?.data?.message,
        });
      }
      if (result?.data?.type === "unverified") {
        setOpenModal(true);
        reset();
      }
    }
    if (result?.error?.data?.type === "email") {
      setError("email", {
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
      <div className="max-w-[978px] w-full md:min-h-[804px] max-h-[804px] bg-[#D9D9D9] rounded-[10px] md:rounded-[30px] mx-auto grid md:grid-cols-2 px-[21px] py-[19px] lg:px-[27px] lg:py-[29px]">
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
            Welcome back; we missed you.
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

        <div className="w-full h-full md:py-[23px] md:pl-[16px]">
          <h1 className="text-[30px] text-[#373737] font-bakbak-one mt-[28px] text-center hidden md:block">
            THE WALLPAPER SOCIETY
          </h1>

          <div className="bg-[#C9C9C9] rounded-[12px] min-w-[217px] max-w-[217px] h-[37px] flex justify-center items-center mx-auto mt-[36px] md:mt-[32px]">
            <Button
              className={`font-normal hover:shadow-none shadow-none p-0 m-0 normal-case font-bakbak-one rounded-[10px] text-[12px] min-w-[105px] h-[31px] bg-white text-[#373737]`}
            >
              Sign In
            </Button>
            <Link to="/signup">
              <Button
                className={`font-normal hover:shadow-none shadow-none p-0 m-0 normal-case font-bakbak-one rounded-[10px] text-[12px] w-[105px] h-[31px] bg-transparent text-[#373737]`}
              >
                Sign Up
              </Button>
            </Link>
          </div>

          <form
            onSubmit={handleSubmit(handleLogin)}
            className="max-w-[400px] md:max-w-[326px] w-full mx-auto mt-[13px] md:mt-[10px]"
          >
            <div className="flex flex-col items-center md:items-start gap-y-[17px]">
              <p className="font-bakbak-one text-[12px] text-[#373737]">
                Email
              </p>
              <input
                {...register("email", { required: true })}
                type="email"
                required={true}
                placeholder="wallpapers@thewallpapersociety.com"
                className="outline-none w-full h-[45px] rounded-[10px] bg-white placeholder:text-[#3737374D] text-[#3737374D] text-[12px] placeholder:text-[12px] px-[15px] font-bakbak-one"
              />
            </div>

            <div className="flex flex-col items-center md:items-start gap-y-[17px] mt-[15px]">
              <p className="font-bakbak-one text-[12px] text-[#373737]">
                Password
              </p>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="*****************"
                required={true}
                className="outline-none w-full h-[45px] rounded-[10px] bg-white placeholder:text-[#3737374D] text-[#3737374D] text-[12px] placeholder:text-[12px] px-[15px] font-bakbak-one"
              />
            </div>

            {errors.password && (
              <p className="text-center text-[12px] text-[#F00] mt-[15px] font-lato">
                Sorry, the password you entered is incorrect.{" "}
              </p>
            )}
            {errors.email && (
              <p className="text-center text-[12px] text-[#F00] mt-[15px] font-lato">
                User not found!
              </p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="font-normal shadow-none hover:shadow-none normal-case bg-black p-0 w-[132px] h-[35px] mt-[44px] md:mt-[42px] mx-auto inline-block rounded-[10px] text-white text-[12px] font-bakbak-one flex items-center justify-center gap-2"
            >
              {isLoading && (
                <SpinnerCircularFixed
                  size={20}
                  thickness={180}
                  speed={300}
                  color="rgba(255, 255, 255, 1)"
                  secondaryColor="rgba(255, 255, 255, 0.42)"
                />
              )}{" "}
              Sign In
            </Button>

            <Link to="/forgot-password">
              <p className="!mt-[17px] md:mt-[12px] text-center text-[#373737] text-[10px] font-bakbak-one">
                Can’t login
              </p>
            </Link>

            <div className="mt-[34px] md:mt-[48px] flex flex-col items-center gap-[12px]">
              <Button
                type="button"
                className="flex justify-center items-center gap-x-[5px] min-w-[163px] px-1 h-[36px] !font-normal bg-[#1877F2] py-0 !normal-case hover:shadow-none shadow-none rounded-[5px]"
              >
                {iFacebook}{" "}
                <p className="text-nowrap text-[12px] font-bakbak-one text-white tracking-[0.5px]">
                  Sign In with Facebook
                </p>
              </Button>

              <Button
                type="button"
                className="flex justify-center items-center gap-x-[5px] min-w-[163px] h-[36px] font-normal bg-white p-0 normal-case hover:shadow-none shadow-none rounded-[5px]"
              >
                {iGoogle}{" "}
                <p className="text-nowrap text-[12px] font-bakbak-one text-[#9F9F9F]">
                  Sign In with Google
                </p>
              </Button>

              <Button
                type="button"
                className="flex justify-center items-center gap-x-[5px] min-w-[163px] h-[36px] font-normal bg-black p-0 normal-case hover:shadow-none shadow-none rounded-[5px]"
              >
                {iApple}{" "}
                <p className="text-nowrap text-[12px] font-bakbak-one text-white">
                  Sign In with Apple
                </p>
              </Button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-x-[15px] md:gap-x-[20px] mt-[39px] md:mt-[52px]">
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

      <VerifyModal
        title="This Email have an account and account is unverified. Please check your email, and verify your email address"
        open={openModal}
        setOpen={setOpenModal}
      />
    </div>
  );
};

export default Login;
