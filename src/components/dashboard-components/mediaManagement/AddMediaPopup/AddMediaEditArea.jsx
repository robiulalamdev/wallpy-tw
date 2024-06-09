/* eslint-disable react/prop-types */
import { useState } from "react";
import { iGrayClose, iGrayPlush } from "../../../../utils/icons/icons";
import { Button } from "@material-tailwind/react";

const AddMediaEditArea = ({ setStep }) => {
  const [typeTab, setTypeTab] = useState("");
  const [classification, setClassification] = useState("");
  const [screenType, setScreenType] = useState("");
  const [tags, setTags] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setTags([...tags, e.target.tag.value]);
    e.target.reset();
  };

  const handleRemoveTag = (index) => {
    const data = [...tags];
    data.splice(index, 1);
    setTags([...data]);
  };

  const handleSave = async () => {
    setStep(2);
  };

  return (
    <div className="w-full h-full">
      <div className="max-w-[235px] w-full mx-auto">
        <div className="mt-[24px]">
          <h1 className="text-center font-lato font-normal text-[#313131] leading-normal text-[15px] pt-[11px]">
            Choose Type
          </h1>

          <div className="bg-[#313131] rounded-[8px] w-[240px] h-[36px] flex justify-between items-center gap-x-[2px] !px-[8px] mt-[21px]">
            {["Illustration", "AI", "Photography"].map((t, i) => (
              <Button
                onClick={() => setTypeTab(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold min-w-[70px] h-[29px] px-2 ${
                  typeTab === t
                    ? `bg-[#0AB745] !text-[#fff] rounded-[8px]`
                    : "bg-transparent !text-white"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-[32px]">
          <h1 className="text-center font-lato font-normal text-[#313131] leading-normal text-[15px] pt-[11px]">
            Classification
          </h1>

          <div className="bg-[#313131] rounded-[8px] w-[240px] h-[36px] flex justify-between items-center !px-[8px] mt-[21px]">
            {["SFW", "Risky", "NSFW"].map((t, i) => (
              <Button
                onClick={() => setClassification(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold 
                    min-w-[70px] h-[29px] px-[6px] ${
                      classification === t
                        ? `bg-[#0AB745] !text-[#fff] rounded-[8px]`
                        : "bg-transparent !text-white"
                    }`}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-[24px]">
          <h1 className="text-center font-lato font-normal text-[#313131] text-[15px] pt-[11px]">
            Screen Type
          </h1>

          <div className="bg-[#313131] rounded-[8px] w-[240px] h-fit min-h-[82px] flex flex-wrap items-start gap-2 px-[7px] py-[6px] mt-[21px]">
            {["Desktop", "Phones ", "Tablets", "Handhelds", "Other"].map(
              (t, i) => (
                <Button
                  onClick={() => setScreenType(t)}
                  key={i}
                  className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-fit h-[29px] px-2 ${
                    screenType === t
                      ? `bg-[#0AB745] !text-[#fff] rounded-[8px]`
                      : "bg-transparent !text-white"
                  }`}
                >
                  {t}
                </Button>
              )
            )}
          </div>
        </div>

        <h1 className="text-center font-lato font-normal text-[15px] text-[#313131] mt-[17px]">
          TAGS
        </h1>
        <p className="text-center text-[#313131] leading-normal font-normal font-lato text-[12px] mt-[11px]">
          A minimum of 3 tags is required
        </p>

        <div className="mt-[10px] bg-[#313131] rounded-[8px] max-h-[99px] min-h-[99px]">
          <form
            onSubmit={handleAdd}
            className="w-full h-[30px] flex justify-between items-center relative"
          >
            <input
              type="text"
              name="tag"
              placeholder="Add tags here..."
              className="placeholder:text-white text-[12px] font-lato placeholder:text-[12px] placeholder:font-lato text-white px-2 w-full h-full outline-none bg-transparent flex-grow"
            />
            <button type="submit" className="size-[17px] mr-2">
              {iGrayPlush}
            </button>
          </form>
          <div className="px-[10px] !pb-[8px] mt-[2px]">
            <div className="flex items-start flex-wrap gap-x-[7px] gap-y-[11px] max-h-[58px] overflow-y-auto scrollWhite">
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

        <div className="mt-[15px]">
          <h1 className="text-center font-lato font-normal text-[#313131] text-[15px] pt-[11px]">
            Source & Author (Optional)
          </h1>

          <div className="grid grid-cols-2 gap-x-[18px] mt-[10px]">
            <input
              type="text"
              placeholder="Source"
              className="w-full h-[35px] bg-[#313131] text-white font-lato text-[12px] font-normal leading-normal text-center placeholder:text-white outline-none border-none px-[6px] rounded-[8px]"
            />
            <input
              type="text"
              placeholder="Source"
              className="w-full h-[35px] bg-[#313131] text-white font-lato text-[12px] font-normal leading-normal text-center placeholder:text-white outline-none border-none px-[6px] rounded-[8px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-[18px] mt-[30px]">
        <Button
          onClick={() => handleSave()}
          className="w-[129px] h-[38px] bg-[#2924FF33] rounded-[5px] shadow-none hover:shadow-none text-[#C4C4C4] font-bakbak-one text-[15px] font-normal leading-normal p-0 normal-case"
        >
          Save Changes
        </Button>
        <Button className="w-[129px] h-[38px] bg-[#FF0000] rounded-[5px] shadow-none hover:shadow-none text-[#C4C4C4] font-bakbak-one text-[15px] font-normal leading-normal p-0 normal-case">
          Delete
        </Button>
      </div>
      <h1 className="text-black font-lato text-[12px] text-center leading-normal font-normal mt-[14px]">
        Ensure that metadata is added to all wallpapers prior to proceeding with
        the next steps.
      </h1>
    </div>
  );
};

export default AddMediaEditArea;
