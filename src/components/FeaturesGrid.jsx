import React from "react";
import { ArrowRight } from "lucide-react";
import KeepMacClean from "./KeepMacClean";
import CodeAndJoin from "./CodeAndJoin";

const FeaturesGrid = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center max-w-6xl justify-between mx-auto px-4 mb-8 md:mb-12 gap-6">
        {/* Features grid content */}
        <h2 className="font-semibold text-2xl md:text-3xl text-white">
          What you get on Setapp.
        </h2>
        <p className="max-w-full lg:max-w-[50%] text-white text-sm md:text-base leading-relaxed">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>

      {/* Features grid components */}
      <KeepMacClean />

      {/* Code and Join section */}
      <CodeAndJoin />

      {/* View all superpowers */}
      <div className="flex justify-center max-w-6xl mx-auto px-4 mb-16 md:mb-20">
        <a
          href="#superpowers"
          className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors text-sm md:text-base font-normal group mt-12"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          <span>View all superpowers</span>
        </a>
      </div>

      {/* Setapp journey section */}
      <div className="max-w-6xl mx-auto px-4 mb-8 md:mb-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-10 md:mb-14">
          <div className="flex-1">
            <h2 className="font-bold text-xl text-white leading-tight">
              Your Setapp journey.
            </h2>
          </div>
          <div className="flex-1 pt-2 md:pt-4">
            <p className="text-white text-base leading-relaxed opacity-90">
              Type in your task into Setapp search and get instant app
              recommendations.
            </p>
          </div>
        </div>

        {/* Horizontal separator */}
        <div className="mt-10 mx-auto h-px w-[95%] bg-[#E5E5E5]" />
      </div>
    </>
  );
};

export default FeaturesGrid;
