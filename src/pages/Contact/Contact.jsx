import { useState } from "react";
import "../../styles/contact.css";
import img1 from "../../assets/images/contact/img1.png";
import img2 from "../../assets/images/contact/img2.png";
import { Link, useNavigate } from "react-router-dom";

import icon1 from "../../assets/icons/contact/icon1.png";
import icon2 from "../../assets/icons/contact/icon2.png";
import icon3 from "../../assets/icons/contact/icon3.png";
import icon4 from "../../assets/icons/contact/icon4.png";
import icon5 from "../../assets/icons/contact/icon5.png";
import icon6 from "../../assets/icons/contact/icon6.png";
import RulesHeader from "../../components/shared/headers/RulesHeader";
import { iInfo } from "../../utils/icons/icons";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";

const Contact = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  return (
    <>
      <RulesHeader />
      <div className="contact-container">
        <h1 className="text-[15px] font-bakbak-one text-white text-center mb-[15px] md:mb-[40px]">
          Contact Us
        </h1>
        <div className="border-t-[1px] border-[#5A5A5A] w-full mb-[29px] md:mb-[40px]"></div>
        <section className="contact-main mx-auto h-full !max-w-[1482px]">
          <div className="relative">
            <img
              className="contact_image_large w-full h-full"
              src={img1}
              alt=""
            />
            <img
              className="contact_image_small w-full h-full"
              src={img2}
              alt=""
            />
            <div className="contact_social_container">
              <div className="flex items-center" style={{ gap: "10px" }}>
                <img width="17" height="17" src={icon1} alt="" />
                <img width="17" height="17" src={icon2} alt="" />
                <img width="17" height="17" src={icon3} alt="" />
                <img width="17" height="17" src={icon4} alt="" />
                <img width="17" height="17" src={icon5} alt="" />
                <img width="17" height="17" src={icon6} alt="" />
              </div>
              <Popover placement="bottom-end">
                <PopoverHandler>
                  <div className="cursor-pointer">{iInfo}</div>
                </PopoverHandler>
                <PopoverContent className="p-0 border-none shadow-none">
                  <div
                    onClick={() => navigate("/wallpapers")}
                    className="w-[127px] h-[37px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer"
                  >
                    <p className="text-[#151618] font-bold font-lato">
                      Go to wallpaper
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="md:m-0 contact-content-section h-full text-center py-4">
            {step === 1 && (
              <>
                <h6 className="hello_there">Hello, somebody there?</h6>
                <p className="note_72_h sm_none">
                  Note that we strive to respond to all inquiries within a
                  timeframe of 24 to 72 hours.
                </p>
                <p className="note_72_h">
                  Please always check your spam folder.
                </p>

                <div className="mt-[24px] md:mt-[49px]">
                  <input
                    className="contact-input placeholder:text-[#474747] font-lato placeholder:font-lato !rounded-[10px] !mb-[25px]"
                    type="text"
                    placeholder="Subject"
                  />
                  <input
                    className="contact-input placeholder:text-[#474747] font-lato placeholder:font-lato !rounded-[10px] !mb-[25px]"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="contact-input placeholder:text-[#474747] font-lato placeholder:font-lato !rounded-[10px] !mb-[25px]"
                    type="email"
                    placeholder="E-mail"
                  />
                  <textarea
                    className="contact-input placeholder:text-[#474747] font-lato placeholder:font-lato !rounded-[10px] !mb-[25px] !py-[15px] !px-[11px] border-0"
                    style={{ height: "159px" }}
                    name="message"
                    placeholder="Your message"
                  ></textarea>

                  <button
                    onClick={() => setStep(2)}
                    type="submit"
                    className="w-[95px] h-[34px] rounded-[10px] font-lato text-[12px] text-white bg-[#505050] mt-[21px]"
                  >
                    SEND
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <div className="contact-second-step">
                <h6 className="text-[12px] font-lato font-bold text-[#373737]">
                  Your message has been sent successfully.{" "}
                </h6>
                <p className="text-[12px] font-lato !font-bold !text-[#373737] mt-[27px] md:mt-[28px]">
                  Please allow our team 24 to 72 hours to respond to your
                  inquiry. Additionally, remember to check your spam folder for
                  our response.
                </p>
                <Link to="/">
                  <button className="contact-return-btn mt-[42px] md:mt-[43px] !rounded-[10px]">
                    Return Home
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
