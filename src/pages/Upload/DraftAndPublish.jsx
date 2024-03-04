import { Button } from "@material-tailwind/react";
import RulesHeader from "../../components/shared/headers/RulesHeader";
import { useRef, useState } from "react";
import DraftPublishSidebar from "../../components/upload/DraftPublishSidebar";
import { wallpapers } from "../../utils/data/wallpapers";
import filter from "../../assets/icons/search-wallpapers/filter.gif";
import { iUploadUp } from "../../utils/icons/icons";

const DraftAndPublish = () => {
  const [tab1, setTab1] = useState("Drafts");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const imageRef = useRef();

  return (
    <>
      <RulesHeader />
      <div>
        <h1 className="text-[#FFF] text-center font-bakbak-one text-[15px] md:text-[25px]">
          The Vault
        </h1>
        <div className="border-t-[1px] border-[#5A5A5A] mt-[15px] mb-[24px] md:mt-[39.51px] md:mb-[26.49px] w-full"></div>

        <div className="max-w-[295px] flex justify-start lg:justify-center mb-[21px]">
          <div className="bg-[#00000033] rounded-[100px] w-[186px] h-[45px] flex justify-between items-center px-[8px]">
            {["Drafts", "Published"].map((t, i) => (
              <Button
                onClick={() => setTab1(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[86px] h-[32px] md:min-w-[86px] md:h-[32px]  ${
                  tab1 === t
                    ? `${
                        t === "Drafts" ? "bg-[#DD2E44]" : "bg-[#63B126]"
                      } !text-white rounded-[100px]`
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <img
            onClick={() => setOpen(!open)}
            src={filter}
            alt=""
            className="w-[57px] h-[39px] lg:hidden"
          />
        </div>

        <div className="flex justify-between items-start gap-x-[28px] min-h-[986px] max-h-[986px] h-full">
          <DraftPublishSidebar
            open={open}
            setOpen={setOpen}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <div className="w-full h-full flex-grow">
            {images?.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-[12px] md:gap-y-[23px] gap-x-[14px] md:gap-x-[40px] w-full h-full">
                {wallpapers.slice(0, 5).map((item, index) => (
                  <div
                    onClick={() =>
                      setSelectedImage(
                        index + 1 === selectedImage ? null : index + 1
                      )
                    }
                    key={index}
                    className={`w-full h-[138px] rounded-[10px] overflow-hidden ${
                      selectedImage === index + 1
                        ? "border-[2px] border-[#B3FD16]"
                        : ""
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt="image"
                      className="w-full h-full object-cover rounded-[10px] hover:scale-110 duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}
            {images.length < 1 && (
              <div className="w-full h-full flex flex-col justify-center items-center gap-y-[32px] md:gap-y-[61px] mt-[80px] md:mt-[183px]">
                <h1 className="text-center font-bakbak-one text-[#FFF] text-[12px] md:text-[20px]">
                  Your vault is currently empty
                </h1>
                <div
                  onClick={() => imageRef.current.click()}
                  className={`bg-[#2924FF] w-[129px] h-[38px] rounded-[5px] text-[#C4C4C4] text-[15px] font-bakbak-one flex justify-center items-center cursor-pointer gap-[5px]`}
                >
                  Upload {iUploadUp}
                </div>

                <input
                  ref={imageRef}
                  onChange={(e) => setImages([...e.target.files])}
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  multiple={true}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftAndPublish;
