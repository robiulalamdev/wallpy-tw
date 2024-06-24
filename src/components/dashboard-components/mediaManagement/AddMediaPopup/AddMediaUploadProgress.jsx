/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { iDashUpload } from "../../../../utils/icons/dashboard-icons/dashicons";
import { iCloseSm, iDashFiledGallery } from "../../../../utils/icons/icons";
import { useAddMediaWallpaperMutation } from "../../../../redux/features/wallpapers/wallpapersApi";
import { toast } from "react-toastify";
import { SpinnerCircularFixed } from "spinners-react";

// eslint-disable-next-line no-unused-vars
const AddMediaUploadProgress = ({ upload, setUpload, files, setFiles }) => {
  const [addMediaWallpaper, { isLoading }] = useAddMediaWallpaperMutation();
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

    const result = await addMediaWallpaper(options);
    if (result?.data?.success) {
      setFiles(result?.data?.data);
      setUpload(true);
    }
    if (result?.error?.data?.type === "email") {
      toast.error(result?.error?.data?.message);
      setUpload(false);
    }
  };

  return (
    <div className="w-full h-full py-[37px]">
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex-grow">
          <h1 className="text-[15px] text-center text-[#313131] font-lato leading-normal font-normal mt-[12px] md:mt-0">
            Files
          </h1>

          <div className="mt-[10px] max-w-[390px] mx-auto max-h-[500px] overflow-y-auto h-fit">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-x-[7px] mt-[15px]"
              >
                <div className="min-w-[24px] min-h-[24px]">
                  {iDashFiledGallery}
                </div>
                <p className="oneLine !text-left inline text-[#313131] text-[12px] font-bakbak-one">
                  {file?.name}
                </p>
                <div
                  disabled={isLoading}
                  onClick={() => handleClose(index)}
                  className="cursor-pointer"
                >
                  {iCloseSm}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-center text-[#313131] font-bakbak-one text-[12px] leading-normal">
            There are {files?.length} files pending for upload
          </h1>
          <div className="h-[1px] !bg-[#5A5A5A] mt-[32px] max-w-[390px] mx-auto w-full"></div>
          <Button
            disabled={isLoading}
            onClick={() => handleUpload()}
            className="w-[129px] h-[38px] bg-[#5A5A5A] rounded-[5px] shadow-none hover:shadow-none text-[#C4C4C4] font-bakbak-one text-[15px] font-normal leading-normal p-0 normal-case mt-[32px] mx-auto block flex items-center justify-center"
          >
            {isLoading && (
              <SpinnerCircularFixed
                size={16}
                thickness={180}
                speed={300}
                color="rgba(255, 255, 255, 1)"
                secondaryColor="rgba(255, 255, 255, 0.42)"
                style={{ marginRight: "5px" }}
              />
            )}{" "}
            Upload {iDashUpload}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddMediaUploadProgress;
