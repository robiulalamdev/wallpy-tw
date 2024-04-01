/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import {
  iCheck,
  iChecked,
  iCloseSm,
  iFiledGalary,
  iUploadUp,
} from "../../utils/icons/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthContext";
import { useCreateWallpapersMutation } from "../../redux/features/wallpapers/wallpapersApi";
import { toast } from "react-toastify";
import { SpinnerCircularFixed } from "spinners-react";

const UploadProggressArea = ({
  step,
  setStep,
  files,
  setFiles,
  upload,
  setUpload,
}) => {
  const { user } = useContext(AuthContext);
  const [createWallpapers, { isLoading }] = useCreateWallpapersMutation();
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleClose = (index) => {
    let data = [...files];
    data.splice(index, 1);
    setFiles([...data]);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    if (files?.length > 0) {
      files.forEach((element) => {
        formData.append("wallpaper", element);
      });
    }
    const options = {
      data: formData,
    };

    const result = await createWallpapers(options);
    if (result?.data?.success) {
      // setSuccessUpload(true);
      setUpload(true);
      toast.success(result?.data?.message);
    } else {
      if (result?.data?.type === "verification") {
        toast.error(result?.data?.message);
        setUpload(false);
      }
    }
    if (result?.error?.data?.type === "email") {
      toast.error(result?.error?.data?.message);
      setUpload(false);
    }
  };
  return (
    <div className="md:pl-[26px] h-full w-full">
      {step === 1 && (
        <div className="w-full h-full">
          <h1 className="text-[#FFF] text-[12px] md:text-[15px] text-center mt-[26px] md:mt-0">
            Accept to Continue
          </h1>

          <p className="text-[#FFF] text-[10px] md:text-[12px] font-bakbak-one text-left mt-[15px] md:mt-[117px]">
            We are delighted that you've chosen to join our community. To ensure
            the highest quality of our wallpapers and maintain the integrity of
            our site, we request that you review our community rules before
            proceeding. Your cooperation is greatly appreciated.
          </p>

          <h1 className="text-center font-bakbak-one text-[12px] md:text-[15px] text-[#FF2E00] mt-[13px] md:mt-[53px]">
            Click to Read the Community Rules
          </h1>

          <div className="mt-[46px] md:mt-[137px]">
            <div className="flex items-center gap-x-[7px] cursor-pointer">
              <div
                onClick={() => setChecked(!checked)}
                className="bg-[#D9D9D9] rounded-[2px] size-[15px]"
              >
                {checked ? iChecked : iCheck}
              </div>

              <h1 className="text-[12px] text-[#FFF] font-bakbak-one">
                I confirm I've read the community rules and want to continue.
              </h1>
            </div>
            <div className="border-t-[1px] border-[#5A5A5A] mt-[12px] mb-[32px] hidden md:block"></div>

            <div
              onClick={() => setStep(checked ? 2 : 1)}
              className={`${
                checked ? "bg-[#2924FF]" : "bg-[#5A5A5A]"
              } w-[129px] h-[38px] rounded-[5px] text-[#C4C4C4] text-[15px] font-bakbak-one mt-[45px] md:mt-[32px] flex justify-center items-center mx-auto cursor-pointer`}
            >
              Continue
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            <h1 className="text-[15px] text-center text-[#FFF] mt-[12px] md:mt-0">
              Files
            </h1>

            <div className="mt-[32px] max-w-[250px] mx-auto max-h-[200px] overflow-y-auto h-fit">
              {upload ? (
                <>
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-x-[7px] mt-[22px]"
                    >
                      {iFiledGalary}
                      <div
                        className="w-full h-[10px] rounded-[100px]"
                        style={{
                          background: `linear-gradient(268deg, #FDF516 17.83%, #97FD16 51.91%)`,
                          boxShadow:
                            "0px 3px 12px 0px rgba(253, 245, 22, 0.15)",
                        }}
                      ></div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-x-[7px] mt-[22px]"
                    >
                      {iFiledGalary}
                      <p className="oneLine text-[#FFF] text-[12px] font-bakbak-one">
                        {file?.name}
                      </p>
                      <div
                        disabled={isLoading}
                        onClick={() => handleClose(index)}
                      >
                        {iCloseSm}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="">
            <h1 className="text-[12px] text-[#FFF] font-bakbak-one text-center">
              {upload
                ? "Upload complete"
                : `There are ${files?.length} files pending for upload`}
            </h1>
            <div className="border-t-[1px] border-[#5A5A5A] mt-[32px] mb-[32px] hidden md:block"></div>

            <div className="flex justify-center items-center gap-x-[23px] mt-[45px] md:mt-[32px] mb-2">
              {!upload && (
                <div
                  onClick={() => files?.length > 0 && handleUpload()}
                  disabled={files.length < 1}
                  className={`${
                    files.length > 0 ? "bg-[#2924FF]" : "bg-[#5A5A5A]"
                  } w-[129px] h-[38px] rounded-[5px] text-[#C4C4C4] text-[15px] font-bakbak-one  md:flex justify-center items-center cursor-pointer hidden md:inline-block gap-[5px]`}
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
                  Upload {iUploadUp}
                </div>
              )}

              {upload && (
                <div
                  onClick={() => navigate("/vault")}
                  className={`bg-[#DD2E44] w-[129px] h-[38px] rounded-[5px] text-[#C4C4C4] text-[15px] font-bakbak-one flex justify-center items-center cursor-pointer`}
                >
                  Continue
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadProggressArea;
