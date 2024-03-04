/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { iBack, iGrayClose, iGrayPlush } from "../../utils/icons/icons";

const DraftPublishSidebarUi = ({
  setOpen,
  selectedImage,
  setSelectedImage,
}) => {
  const [selectTab, setSelectTab] = useState("Select All");
  const [typeTab, setTypeTab] = useState("Illustration");
  const [classification, setClassification] = useState("Illustration");
  const [screenType, setScreenType] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, e.target.tag.value]);
    e.target.reset();
  };

  const handleRemoveTag = (index) => {
    const data = [...tags];
    data.splice(index, 1);
    setTags([...data]);
  };

  return (
    <div className="min-w-[295px] max-w-[295px] w-full h-full bg-[#121212] lg:bg-black/20 rounded-[10px] min-h-[986px] max-h-[986px] px-[62px] md:px-[30px] relative">
      <div
        onClick={() => setOpen(false)}
        className="absolute top-[18px] right-[25px] lg:hidden"
      >
        {iBack}
      </div>

      <h1 className="text-center font-bakbak-one text-[#FFF] text-[12px] pt-[25px] md:pt-[11px]">
        Select Wallpapers
      </h1>

      {!!selectedImage && (
        <>
          <div className="bg-[#00000033] rounded-[8px] w-[235px] h-[36px] flex justify-between items-center px-[8px] mt-[21px]">
            {["Select All", "Clear Selection"].map((t, i) => (
              <Button
                onClick={() => setSelectTab(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold min-w-[79px] h-[29px] px-2 ${
                  selectTab === t
                    ? `bg-[#0AB745] !text-[#fff] rounded-[8px]`
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <div className="mt-[24px]">
            <h1 className="text-center font-bakbak-one text-[#FFF] text-[12px] pt-[25px] md:pt-[11px]">
              Choose Type
            </h1>

            <div className="bg-[#00000033] rounded-[8px] w-[235px] h-[36px] flex justify-between items-center px-[8px] mt-[21px]">
              {["Illustration", "AI", "Photography"].map((t, i) => (
                <Button
                  onClick={() => setTypeTab(t)}
                  key={i}
                  className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold min-w-[79px] h-[29px] px-2 ${
                    typeTab === t
                      ? `bg-[#0AB745] !text-[#fff] rounded-[8px]`
                      : "bg-transparent !text-[#C6C6C6]"
                  }`}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-[32px]">
            <h1 className="text-center font-bakbak-one text-[#FFF] text-[12px] pt-[25px] md:pt-[11px]">
              Classification
            </h1>

            <div className="bg-[#00000033] rounded-[8px] w-[235px] h-[36px] flex justify-between items-center px-[8px] mt-[21px]">
              {["SFW", "Risky", "NSFW"].map((t, i) => (
                <Button
                  onClick={() => setClassification(t)}
                  key={i}
                  className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold min-w-[79px] h-[29px] px-2 ${
                    classification === t
                      ? `bg-[#0AB745] !text-[#fff] rounded-[8px]`
                      : "bg-transparent !text-[#C6C6C6]"
                  }`}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-[24px]">
            <h1 className="text-center font-bakbak-one text-[#FFF] text-[12px] pt-[25px] md:pt-[11px]">
              Screen Type
            </h1>

            <div className="bg-[#00000033] rounded-[8px] w-[235px] h-fit min-h-[82px] flex flex-wrap items-start gap-2 px-[7px] py-[6px] mt-[21px]">
              {["Desktop", "Phones ", "Tablets", "Handhelds", "Other"].map(
                (t, i) => (
                  <Button
                    onClick={() => setScreenType(t)}
                    key={i}
                    className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-fit h-[29px] px-2 ${
                      screenType === t
                        ? `bg-[#0AB745] !text-[#fff] rounded-[8px]`
                        : "bg-transparent !text-[#C6C6C6]"
                    }`}
                  >
                    {t}
                  </Button>
                )
              )}
            </div>
          </div>

          <div className="border-t-[1px] border-[#9393931A] mt-[40px]"></div>
          <h1 className="mt-[12px] text-center font-lato text-[15px] text-[#FFF]">
            TAGS
          </h1>
          <p
            className="text-center font-lato text-[12px] mt-[11px]"
            style={{ color: "rgba(255, 255, 255, 0.50)" }}
          >
            A minimum of 3 tags is required
          </p>

          <div className="mt-[10px] bg-[#00000033] rounded-[8px] ">
            <form
              onSubmit={handleSubmit}
              className="w-full h-[40px] flex justify-between items-center"
            >
              <input
                type="text"
                name="tag"
                placeholder="Add tags here..."
                className="placeholder:text-[#5C5C5C] text-[12px] font-lato placeholder:text-[12px] placeholder:font-lato text-[#fff] px-2 w-full h-full outline-none bg-transparent flex-grow"
              />
              <button type="submit" className="size-[17px] mr-2">
                {iGrayPlush}
              </button>
            </form>
            <div className="px-[12px] pb-[18px] mt-[5px]">
              <div className="flex items-start flex-wrap gap-x-[7px] gap-y-[11px] max-h-[90px] overflow-y-auto">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-[#00000066] rounded-[5px] relative w-fit h-[28px] px-[16px] flex justify-center items-center cursor-pointer"
                  >
                    <h1 className="text-[#FFF] text-[12px] font-bakbak-one">
                      {tag}
                    </h1>
                    <div
                      onClick={() => handleRemoveTag(index)}
                      className="absolute top-1 right-1"
                    >
                      {iGrayClose}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-center font-lato text-[15px] text-[#FFF] mt-[9px]">
            Source & Author
          </h1>

          <input
            type="text"
            placeholder="Source (Optional)"
            className="placeholder:text-[#5C5C5C] text-[12px] font-lato placeholder:text-[12px] placeholder:font-lato text-[#fff] px-2 w-full outline-none bg-[#00000033] h-[35px] rounded-[8px] mt-[20px]"
          />
          <input
            type="text"
            placeholder="Author (Optional)"
            className="placeholder:text-[#5C5C5C] text-[12px] font-lato placeholder:text-[12px] placeholder:font-lato text-[#fff] px-2 w-full outline-none bg-[#00000033] h-[35px] rounded-[8px] mt-[21px]"
          />

          <button className="w-[129px] h-[38px] bg-[#2924FF] rounded-[5px] mt-[29px] text-[15px] font-bakbak-one block mx-auto text-[#5C5C5C]">
            Publish
          </button>
          <button className="w-[129px] h-[38px] bg-[#DD2E4433] rounded-[5px] mt-[16px] text-[15px] font-bakbak-one block mx-auto text-[#C4C4C4]">
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default DraftPublishSidebarUi;
