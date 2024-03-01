import { iHrFooter } from "../../../utils/icons/icons";

const EndFooter = () => {
  return (
    <div className="mt-[18px] md:mt-[96px]">
      <div className="max-w-[430px] md:max-w-[1840px] mx-auto">{iHrFooter}</div>
      <div className="mt-[8px] mb-[29px] md:my-[44px] flex justify-center items-center gap-x-[8px] sm:gap-x-[15.45px] md:gap-x-[24px]">
        <p className="text-[#D9D9D9] text-[8px] sm:text-[10px] md:text-[15px] font-roboto font-medium">
          © The Wallpapers Society
        </p>
        <p className="text-[#D9D9D9] text-[8px] sm:text-[10px] md:text-[15px] font-roboto font-medium">
          Community Rules
        </p>
        <p className="text-[#D9D9D9] text-[8px] sm:text-[10px] md:text-[15px] font-roboto font-medium">
          Privacy Policy
        </p>
        <p className="text-[#D9D9D9] text-[8px] sm:text-[10px] md:text-[15px] font-roboto font-medium">
          Terms and Conditions
        </p>
      </div>
    </div>
  );
};

export default EndFooter;
