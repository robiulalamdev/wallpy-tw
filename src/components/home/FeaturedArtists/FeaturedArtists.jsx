import React from "react";
import { artists } from "../../../utils/data/data";
import { iVerified } from "../../../utils/icons/icons";
import { Button } from "@material-tailwind/react";

const FeaturedArtists = () => {
  return (
    <div>
      <h1 className="text-white text-center font-bakbak-one text-[15px] md:text-[35px] leading-[21px] font-normal md:!font-bold mt-[39px] mb-[21px] md:mt-[63px] md:mb-[54px]">
        Featured Artists
      </h1>

      <div
        className="w-full h-fit bg-black/40 rounded-[10px] md:rounded-[40px] py-[13px] px-[14px] md:pt-[29px] md:px-[40px] lg:px-[59px] md:pb-[30px]
      grid grid-cols-4 lg:grid-cols-5 gap-x-[9px] lg:gap-x-[43px] xl:gap-x-[63px]
      "
      >
        {artists.map((artist, index) => (
          <div
            key={index}
            className={`bg-[#00000080] w-[87px] h-[118px] md:max-w-[245px] md:w-full md:h-[302px] rounded-[5px] md:rounded-[20px] pt-[9px] pb-[12px] md:py-[31px] ${
              index === 4 && "hidden lg:block"
            }`}
          >
            <img
              src={artist.img}
              alt="profile image"
              className="w-[44px] h-[44px] md:w-[129.351px] md:h-[130px] rounded-full object-cover mx-auto"
            />

            <div className="flex items-center justify-center gap-x-[3px] mt-[7px] md:mt-[22px]">
              <div className="w-[10px] h-[10.109px] md:w-[18.242px] md:h-[17.094px]">
                {iVerified}
              </div>
              <p className="text-white text-[10px] md:text-[15px] font-bakbak-one font-bold">
                {artist.name}
              </p>
            </div>
            <div className="flex justify-center items-center mt-[8px] md:mt-[36px]">
              <Button className="w-[77px] h-[25px] md:w-[92px] md:h-[31px] shadow-none hover:shadow-none font-bakbak-one font-bold !text-white text-[8px]  md:text-[10px] normal-case p-0 rounded-[15px] bg-[#131313]">
                View Profile
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtists;
