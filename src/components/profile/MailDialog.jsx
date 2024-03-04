/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Dialog } from "@material-tailwind/react";
import React, { useState } from "react";
import { iMenuClose, iSearchClose } from "../../utils/icons/icons";

const MailDialog = ({ mailOpen, setMailOpen }) => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Dialog
        open={mailOpen}
        handler={() => {
          setMailOpen(false);
          setStep(1);
        }}
        size="xs"
        className="px-4 sm:p-0 bg-[#2D2D2D] max-w-[384px] w-full min-h-[332px] relative"
      >
        <div
          onClick={() => {
            setMailOpen(false);
            setStep(1);
          }}
          className="absolute top-[10px] right-[12px]"
        >
          {iSearchClose}
        </div>

        {step === 1 && (
          <div className="max-w-[324px] mx-auto w-full pb-[15px]">
            <h1 className="text-[#FFF] text-[20px] font-bakbak-one mt-[29px]">
              Send a message
            </h1>
            <p className="text-[#939393] text-[12px] font-bakbak-one mt-[14px]">
              Please be sure to familiarize yourself with the site rules before
              composing your message
            </p>

            <div className="mt-[17px]">
              <span className="mb-[13px] text-[#FFF] text-[15px] font-bakbak-one">
                Message
              </span>
              <textarea
                placeholder="Write the details here..."
                className="min-h-[129px] outline-none max-h-[150px] w-full bg-[#202020] rounded-[10px] placeholder:text-[#5B5B5B] text-[#fff] text-[12px] placeholder:text-[12px] font-bakbak-one placeholder:font-bakbak-one py-[8px] px-[13px]"
              ></textarea>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-[158px] h-[37px] bg-[#FFF] rounded-[10px] text-[#202020] text-[12px] font-bakbak-one mx-auto mt-[13px] block"
            >
              Send Message
            </button>
            <button
              onClick={() => {
                setMailOpen(false);
                setStep(1);
              }}
              className="w-[158px] h-[37px] bg-[#202020] rounded-[10px] text-[#FFF] text-[12px] font-bakbak-one mx-auto mt-[9px] block"
            >
              Cancel
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-[324px] mx-auto w-full flex flex-col justify-center items-center h-full pb-[15px]">
            <span></span>
            <p className="text-[#FFF] text-[12px] font-bakbak-one mt-[120px]">
              Your message has been sent successfully
            </p>

            <button
              onClick={() => {
                setMailOpen(false);
                setStep(1);
              }}
              className="w-[158px] h-[37px] bg-[#FFF] rounded-[10px] text-[#202020] text-[12px] font-bakbak-one mx-auto mt-[81px] block"
            >
              Close
            </button>
          </div>
        )}
      </Dialog>
    </>
  );
};

export default MailDialog;