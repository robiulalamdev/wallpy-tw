/* eslint-disable react/no-unescaped-entities */
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { iAddPlus, iAdd_circle } from "../../utils/icons/icons";

const AccountSettingWallpaperTab = () => {
  const [nsfw, setNsfw] = useState("Enabled");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length < 12) {
      setTags([e.target.tag.value, ...tags]);
      e.target.reset();
    }
  };
  return (
    <div>
      <h1 className="text-center text-[#fff] text-[15px] font-lato pt-[39px]">
        NSFW
      </h1>

      <div className="bg-[#00000033] rounded-[100px] w-[172px] h-[45px] flex justify-between items-center px-[8px] mt-[29px] mx-auto">
        {["Enabled", "Disabled"].map((t, i) => (
          <Button
            onClick={() => setNsfw(t)}
            key={i}
            className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[72px] h-[32px] ${
              nsfw === t
                ? `${
                    nsfw === "Enabled" ? "bg-[#0AB745]" : "bg-[#B70A0A]"
                  } !text-white rounded-[100px]`
                : "bg-transparent !text-[#C6C6C6]"
            }`}
          >
            {t}
          </Button>
        ))}
      </div>
      <h1 className="text-center text-[#fff] text-[15px] font-lato pt-[43px]">
        Blacklist Tags
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-[145px] h-[28px] bg-[#00000080] rounded-[10px] mx-auto mt-[16px] pr-[5px]"
      >
        <input
          type="text"
          name="tag"
          className="w-full h-full flex-grow px-[4px] bg-transparent outline-none font-lato text-[10px] placeholder:text-[10px] placeholder:font-lato text-[#FFFFFF80] placeholder:text-[#FFFFFF80]"
        />
        <button type="submit" className="hover:text-white">
          {iAdd_circle}
        </button>
      </form>

      {tags.length > 11 ? (
        <p className="text-center text-[#FE112F] text-[12px] font-lato mt-[12px]">
          The maximum number of blacklisted tags has been reached. Please change
          or remove one or more in order to add another.
        </p>
      ) : (
        <p className="text-center text-[#939393] text-[12px] font-lato mt-[12px]">
          By blacklisting tags, you can exclude them from your search results.
          To add a tag, simply enter a single word and press 'Enter' or click
          the 'Add' button.
        </p>
      )}

      <div className="bg-[#00000080] max-w-[413px] w-full min-h-[106px] rounded-[10px] mx-auto mt-[11px] px-[12px] py-[17px]">
        {tags?.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 px-[22px] overflow-y-auto w-full h-full">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-[#939393] text-[12px] font-lato text-wrap"
              >
                {tag}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-[#939393] text-[12px] font-lato">
            At the moment, no tags have been blacklisted.
          </p>
        )}
      </div>

      <Button className="font-normal normal-case bg-[#2924FF] w-[129px] h-[38px] rounded-[5px] mx-auto mt-[39px] hover:shadow-none shadow-none font-bakbak-one text-[15px] text-[#C4C4C4] block p-0">
        Save
      </Button>
    </div>
  );
};

export default AccountSettingWallpaperTab;
