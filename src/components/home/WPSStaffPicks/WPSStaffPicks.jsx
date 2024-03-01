import React from "react";

import img1 from "../../../assets/images/home/staff-pickes/img1.png";
import img2 from "../../../assets/images/home/staff-pickes/img2.png";
import img3 from "../../../assets/images/home/staff-pickes/img3.png";

import img4 from "../../../assets/images/home/staff-pickes/img4.png";
import img5 from "../../../assets/images/home/staff-pickes/img5.png";
import img6 from "../../../assets/images/home/staff-pickes/img6.png";

const Sponsor = () => {
  return (
    <div>
      <h1 className="font-bakbak-one text-[15px] md:text-[35px] text-center text-white mt-[38px] mb-[23px] md:mt-[78px] md:mb-[59px]">
        The <span className="text-[#FDF516]">WPS</span> Staff Picks
      </h1>

      <div className="md:grid grid-cols-2 gap-x-[36px] hidden md:inline-block">
        <div className="min-h-[535px] max-h-[535px] max-w-[796px] rounded-[30px] overflow-hidden">
          <img
            src={img1}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-[29px]">
          <div className="h-[253px] max-w-[796px] rounded-[30px] overflow-hidden">
            <img
              src={img2}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="h-[253px] max-w-[796px] rounded-[30px] overflow-hidden">
            <img
              src={img3}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-[9px] md:hidden">
        <div className="min-h-[194px] max-h-[194px] max-w-[198px] rounded-[12px] overflow-hidden">
          <img
            src={img4}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-[10px]">
          <div className="h-[92px] max-w-[196px] rounded-[12px] overflow-hidden">
            <img
              src={img5}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="h-[92px] max-w-[196px] rounded-[12px] overflow-hidden">
            <img
              src={img6}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
