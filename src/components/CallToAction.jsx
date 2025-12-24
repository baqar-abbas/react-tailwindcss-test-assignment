import React from "react";
import ctaLogo from "../assets/images/cta-logo/cta-logo.svg";

const CallToAction = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FEFEFE] from-50% to-[#26262B] to-50% ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* White rounded card container */}
          <div className="bg-[#F5F5F5] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-start text-left">
            {/* CTA Logo */}
            <img
              src={ctaLogo}
              alt="Setapp superpowers"
              className="h-12 md:h-16 lg:h-20 mb-6 md:mb-8"
            />

            {/* Heading */}
            <h2 className="text-3xl font-semibold tracking-tight text-[#1D1D22] max-w-3xl mb-8 md:mb-10 leading-snug">
              Superpowers starting $9.99/month.
              <br />
              Free for 7 days.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
              <button className="px-7 md:px-8 py-2.5 md:py-3 bg-[#1D1D22] text-white font-medium rounded-lg hover:bg-[#2D2D32] transition-colors text-sm md:text-base whitespace-nowrap">
                Get started now
              </button>
              <button className="px-7 md:px-8 py-2.5 md:py-3 border border-[#1D1D22] text-[#1D1D22] font-medium rounded-lg hover:bg-[#FAFAFA] transition-colors text-sm md:text-base whitespace-nowrap">
                More about Setapp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Separator */}
      <div className="h-px w-full bg-[#4e4949] my-10" />
    </>
  );
};

export default CallToAction;
