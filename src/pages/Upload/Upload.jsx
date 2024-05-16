/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import RulesHeader from "../../components/shared/headers/RulesHeader";
import UploadProggressArea from "../../components/upload/UploadProggressArea";
import bg from "../../assets/images/upload/bg.png";
import { iUpload } from "../../utils/icons/icons";
import { toast } from "react-toastify";

const Upload = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [upload, setUpload] = useState(false);

  const imageRef = useRef();

  const handleAddImages = async (images) => {
    if (files?.length >= 15) {
      toast.warning("Maximum 15 wallpapers can be uploaded");
      return;
    }

    if (files?.length + images?.length > 15) {
      toast.warning("Wallpapers Upload Maximum 15");
      return;
    }

    setFiles([...files, ...images]);
  };

  return (
    <>
      <RulesHeader />
      <div>
        <h1 className="text-[#fff] text-center text-[15px] md:text-[25px] font-bakbak-one">
          Upload Files
        </h1>
        <div className="border-t-[1px] border-[#5A5A5A] mt-[18px] mb-[10px] md:mt-[38px] md:mb-[16px]"></div>

        <div className="max-w-[276px] mx-auto text-center md:max-w-full">
          <p className="text-[#939393] text-[10px] md:text-[12px] font-bakbak-one">
            We strongly urge all users to carefully review our community rules
            prior to uploading any files. It is our ongoing commitment to
            vigilantly monitor uploads in order to uphold the integrity of our
            guidelines.
          </p>
        </div>

        <div className="bg-[#00000066] grid md:grid-cols-2 max-w-[933px] w-full min-h-[585px] !max-h-[585px] rounded-[10px] mx-auto mt-[15px] md:mt-[21px] pt-[13px] md:pt-[19px] pb-[13px] md:pb-[20px] px-[17px] md:px-[22px]">
          {step === 1 && (
            <div
              className="w-full h-full max-h-[238px] md:max-h-full rounded-[5px] md:rounded-[10px]"
              style={{
                background: `url(${bg}), lightgray 50%`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
          )}
          {step === 2 && (
            <div className="w-full h-full max-h-[238px] md:max-h-full rounded-[5px] md:rounded-[10px] bg-[#00000080] flex flex-col justify-center items-center gap-[12px]">
              <div className="size-[30px]">{iUpload}</div>
              <h1 className="text-[15px] font-bakbak-one text-[#FFF]">
                Drag and drop files here
              </h1>
              <h1 className="text-[15px] font-bakbak-one text-[#FFF]">or</h1>
              <button
                disabled={upload}
                onClick={() => imageRef.current.click()}
                className="w-[103px] h-[28px] bg-[#000000] rounded-[10px] font-bakbak-one text-[12px] text-[#939393]"
              >
                Select Files
              </button>

              <input
                ref={imageRef}
                onChange={(e) => handleAddImages(e.target.files)}
                type="file"
                accept=".png, .jpg, .jpeg"
                multiple={true}
                className="hidden"
              />
            </div>
          )}
          <UploadProggressArea
            step={step}
            setStep={setStep}
            files={files}
            setFiles={setFiles}
            upload={upload}
            setUpload={setUpload}
          />
        </div>
      </div>
    </>
  );
};

export default Upload;
