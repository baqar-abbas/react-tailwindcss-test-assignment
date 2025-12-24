import React from "react";
import coderunner from "../assets/images/features/coderunner.svg";
import execute from "../assets/images/features/execute-icon.svg";
import wave from "../assets/images/features/wave-icon.svg";
import meeter from "../assets/images/features/meeter.svg";

const CodeAndJoin = () => {
  return (
    <section className="max-w-6xl mx-auto rounded-xl mb-5">
      <div className="flex flex-col md:flex-row items-stretch gap-3 w-full">
        {/* Content for the Code and Join sections */}
        <div className="flex flex-col bg-[#F4F0E4] rounded-xl flex-1 h-full">
          <img src={coderunner} alt="Code Runner" className="w-full h-auto" />
          <div className="px-14">
            <img src={execute} alt="Execute Icon" className="w-20 h-20" />
          </div>
          <div className="px-14 pb-8">
            <h3 className="text-[#26262B] font-semibold text-xl mb-2">
              Write code
            </h3>
            <p className="text-[#26262B] text-base">
              Create applications in more than 25 languages
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#384C75] rounded-xl px-6 pt-6 flex-1 h-full">
          <div className="mb-4 px-4 md:px-10">
            <img src={wave} alt="Wave Icon" className="w-16 h-16 mt-6" />
          </div>
          <div className="flex flex-col mb-6 px-4 md:px-10">
            <h3 className="text-white font-semibold text-xl mb-2">
              Join meetings in a click
            </h3>
            <p className="text-white text-base">
              Quickly access links to your meetings from menu bar
            </p>
          </div>
          <div className="flex-1">
            <img
              src={meeter}
              alt="Meeter Icon"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeAndJoin;
