import React from "react";
import icon from "../assets/images/features/keep-mac-clean-icon.svg";
import image from "../assets/images/features/keep-mac-clean-image.svg";

const KeepMacClean = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-10 pt-8 md:pt-16 bg-[#DF96AE] rounded-xl mb-5">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <img src={icon} alt="keep mac clean icon" className="w-12 h-12" />
          <div className="flex flex-col">
            <h3 className="text-[#26262B] font-semibold text-xl">
              Keep your Mac clean
            </h3>
            <p className="text-[#26262B] text-base">
              Remove junk, scan for malware, wipe email attachments
            </p>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="keep mac clean illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default KeepMacClean;
