import RulesHeader from "../../components/shared/headers/RulesHeader";
import AccountVerificationBrandTab from "../../components/account-verification/AccountVerificationBrandTab";
import { useState } from "react";
import AccountVerificationSuccess from "../../components/account-verification/AccountVerificationSuccess";

const AccountVerification = () => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <RulesHeader />
      <div className="acs-container">
        <h1 className="text-[15px] md:text-[25px] text-center font-bakbak-one text-[#FFF] mb-[15px] md:mb-[33px]">
          Request Verification
        </h1>

        <div className="border-t-[1px] border-[#5A5A5A] w-full mb-[13px] md:mb-[30px]"></div>

        <div className="w-full h-full min-h-[780px] max-h-fit md:bg-black/20 md:rounded-[10px] md:mt-[16px]">
          {success ? (
            <AccountVerificationSuccess />
          ) : (
            <AccountVerificationBrandTab
              success={success}
              setSuccess={setSuccess}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AccountVerification;
