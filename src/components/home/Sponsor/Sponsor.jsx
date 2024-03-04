import React from "react";

import img1 from "../../../assets/images/home/sponsors/img1.png";
import img2 from "../../../assets/images/home/sponsors/img2.png";
import img3 from "../../../assets/images/home/sponsors/img3.png";

import img4 from "../../../assets/images/home/sponsors/img4.png";
import img5 from "../../../assets/images/home/sponsors/img5.png";
import { useNavigate } from "react-router-dom";

const Sponsor = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-bakbak-one text-[15px] md:text-[35px] text-center text-white mt-[38px] mb-[23px] md:mt-[78px] md:mb-[59px]">
        Sponsors
      </h1>

      <div className="md:grid grid-cols-2 gap-x-[36px] lg:gap-x-[50px] hidden md:inline-block">
        <div className="min-h-[421px] max-h-[421px] w-full rounded-[30px] overflow-hidden">
          <img
            onClick={() => navigate("/official-brand-profile")}
            src={img1}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 gap-[31px]">
          <div className="h-[195px] w-full rounded-[30px] overflow-hidden col-span-2">
            <img
              onClick={() => navigate("/official-brand-profile")}
              src={img2}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="h-[195px] w-full rounded-[30px] overflow-hidden">
            <img
              onClick={() => navigate("/official-brand-profile")}
              src={img3}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="h-[195px] w-full rounded-[30px] overflow-hidden">
            <img
              onClick={() => navigate("/official-brand-profile")}
              src={img4}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-[8.96px] gap-y-[10px] md:hidden">
        <div className="min-h-[131px] max-h-[131px] w-full rounded-[12px] overflow-hidden col-span-2">
          <img
            onClick={() => navigate("/official-brand-profile")}
            src={img1}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="h-[92px] max-w-[196px] rounded-[12px] overflow-hidden">
          <img
            onClick={() => navigate("/official-brand-profile")}
            src={img3}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="h-[92px] max-w-[196px] rounded-[12px] overflow-hidden">
          <img
            onClick={() => navigate("/official-brand-profile")}
            src={img2}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="min-h-[131px] max-h-[131px] w-full rounded-[12px] overflow-hidden col-span-2">
          <img
            onClick={() => navigate("/official-brand-profile")}
            src={img5}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
