const ClaimsReports = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <h1 className="text-white font-bakbak-one text-[30px] font-normal leading-normal mt-[37px] ml-[549px] text-nowrap">
        Claims & Reports
      </h1>
      <div className="bg-[#121212] rounded-[10px] mt-[46px] w-full h-full flex-grow">
        <div className="border-r-[1px] border-[#222222] min-w-[403px] max-w-[403px] w-full h-full">
          <div className="h-[104px] border-b-[1px] border-[#222222] flex items-center pl-[24px]">
            <h1 className="text-white font-lato text-[30px] font-bold leading-normal">
              Inbox
            </h1>
          </div>
          <div className="h-[80px] border-b-[1px] border-[#222222] flex items-center pl-[24px]">
            <h1 className="text-white font-lato text-[12px] font-semibold leading-normal">
              Removal Request
            </h1>
          </div>

          <div className="h-[80px] border-b-[1px] border-[#222222] flex items-center pl-[24px]">
            <h1 className="text-white font-lato text-[12px] font-semibold leading-normal">
              Claim Listing
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsReports;
