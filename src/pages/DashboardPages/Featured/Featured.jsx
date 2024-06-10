import { iDashEdit } from "../../../utils/icons/dashboard-icons/dashicons";

const Featured = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full gap-y-[36px]">
      <div className="mt-[21px]">
        <h1 className="text-center font-bakbak-one text-[30px] leading-normal font-normal text-white">
          Featured
        </h1>
        <div className="flex justify-center items-center gap-x-[9px] mt-[47px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z"
              fill="#FF0000"
            />
          </svg>
          <p className="text-[15px] font-normal leading-normal text-white font-lato">
            Any modifications implemented here will have immediate effects on
            the content displayed on the main page and other pages modified.
            Please proceed with caution.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[#121212] rounded-[10px] flex-grow w-full h-full pl-[24px] pr-[18px]">
        <div className="grid grid-cols-1 border-r-[1px] border-[#1C1C1C] flex-1 pt-[14px] pb-[32px] pr-[12px]">
          <div>
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]">
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Featured Wallpapers
                </h1>
                {iDashEdit}
              </div>
            </dir>
          </div>
          <div>
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]">
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Staff Picks
                </h1>
                {iDashEdit}
              </div>
            </dir>
          </div>
          <div>
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]">
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Credentials
                </h1>
                {iDashEdit}
              </div>
            </dir>
          </div>
        </div>
        <div className="grid grid-cols-1 flex-1 pt-[14px] pb-[32px] pl-[12px]">
          <div>
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]">
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Featured Artists
                </h1>
                {iDashEdit}
              </div>
            </dir>
          </div>
          <div>
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]">
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Contact Form
                </h1>
                {iDashEdit}
              </div>
            </dir>
          </div>
          <div>
            <dir className="w-full h-[52px] rounded-[10px] bg-[#222222] mx-auto flex justify-center items-center cursor-pointer">
              <div className="max-w-[276px] w-full h-[40px] rounded-[10px] bg-[#1515154D] flex justify-center items-center gap-x-[8px]">
                <h1 className="text-white font-lato font-medium text-[15px] leading-normal">
                  Featured Brand Search
                </h1>
                {iDashEdit}
              </div>
            </dir>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
