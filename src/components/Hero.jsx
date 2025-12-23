import React from "react";

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-[1280px] px-4 md:px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(567px,680px)_1fr] items-start gap-6">
        {/* Left stickers column */}
        <div className="relative hidden md:block pointer-events-none select-none">
          <img
            src="/src/assets/images/headline-left-images/work-with-pics.svg"
            alt="Work with pics"
            className="absolute left-[8px] top-[0px] h-[120px]"
          />
          <img
            src="/src/assets/images/headline-left-images/macpaw-c.svg"
            alt="MacPaw circle"
            className="absolute left-[5px] top-[95px] h-[50px] w-[50px]"
          />
          <img
            src="/src/assets/images/headline-left-images/ad-blocker.svg"
            alt="Ad blocker"
            className="absolute left-[80px] top-[96px] h-[92px]"
          />
          <img
            src="/src/assets/images/headline-left-images/boost-teamwork.svg"
            alt="Boost teamwork"
            className="absolute left-[10px] top-[220px] w-[170px] h-[110px]"
          />
          <img
            src="/src/assets/images/headline-left-images/stay-secure.svg"
            alt="Stay secure"
            className="absolute left-[32px] top-[284px] h-[110px] rotate-[-20deg]"
          />
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center">
          {/* Top logo with background */}
          <div className="relative inline-flex items-center justify-center mb-4 md:mb-6">
            <img
              src="/src/assets/images/headline-logo-background.svg"
              alt="Headline Logo Background"
              className="h-16 w-16 md:h-28 md:w-28"
            />
            <img
              src="/src/assets/images/headline-logo.svg"
              alt="Headline Logo"
              className="absolute h-9 w-9 md:h-16 md:w-20"
            />
          </div>

          {/* Headline */}
          <div className="mx-auto max-w-[567px]">
            <h1 className="font-bold text-[40px] md:text-[48px] leading-[40px] md:leading-[52.84px] tracking-[1px]">
              <span className="block">Dozens of apps.</span>
              <span className="block">One subscription.</span>
              <span className="block">$9.99</span>
            </h1>
          </div>

          {/* CTAs */}
          <div className="mt-4 md:mt-6 flex items-center justify-center gap-3 md:gap-4">
            <button className="px-5 md:px-6 py-2 md:py-2.5 rounded-md bg-white text-dark text-sm font-normal tracking-wide shadow-sm hover:bg-gray-400 transition-colors">
              Try free for 7 days
            </button>

            <div className="inline-flex items-center gap-2 md:gap-3">
              <div className="h-10 w-10 md:h-11 md:w-11 rounded-md border border-white/40 inline-flex items-center justify-center bg-white hover:bg-gray-300 transition-colors cursor-pointer">
                <img
                  src="/src/assets/images/apple.svg"
                  alt="Apple"
                  className="h-5 w-5"
                />
              </div>
              <div className="h-10 w-10 md:h-11 md:w-11 rounded-md border border-white/40 inline-flex items-center justify-center bg-white hover:bg-gray-300 transition-colors cursor-pointer">
                <img
                  src="/src/assets/images/google.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
              </div>
            </div>
          </div>

          {/* Subcopy */}
          <p className="mt-3 md:mt-5 mx-auto max-w-[560px] text-[16px] leading-[24px] md:leading-[28px] text-white">
            Power up your workflow with Setapp, a
            <br className="hidden md:block" /> smart way to get apps.
          </p>
        </div>

        {/* Right stickers column */}
        <div className="relative hidden md:block pointer-events-none select-none">
          <img
            src="/src/assets/images/headline-right-images/fix-wifi.svg"
            alt="Fix WiFi"
            className="absolute right-[10px] top-[0px] w-[180px] h-[120px]"
          />
          <img
            src="/src/assets/images/headline-right-images/plan-your-day.svg"
            alt="Plan your day"
            className="absolute right-[130px] top-[65px] h-[130px] w-[130px]"
          />
          <img
            src="/src/assets/images/headline-right-images/converter.svg"
            alt="Converter"
            className="absolute right-[40px] top-[160px] h-[100px] w-[100px] z-20"
          />
          <img
            src="/src/assets/images/headline-right-images/manage-your-mac.svg"
            alt="Manage your mac"
            className="absolute right-[80px] top-[200px] w-[180px] h-[120px]"
          />
          <img
            src="/src/assets/images/headline-right-images/code-easier.svg"
            alt="Code easier"
            className="absolute right-[90px] top-[290px] h-[120px] w-[120px]"
          />
        </div>
      </div>

      {/* Mobile creative treatment: two compact badges at bottom */}
      <div className="md:hidden mt-8 flex items-center justify-center gap-3">
        <img
          src="/src/assets/images/headline-left-images/boost-teamwork.svg"
          alt="Boost teamwork"
          className="h-14"
        />
        <img
          src="/src/assets/images/headline-right-images/plan-your-day.svg"
          alt="Plan your day"
          className="h-14"
        />
      </div>

      {/* Horizontal separator */}
      <div className="mt-10 mx-auto h-px w-[90%] bg-[#E5E5E5]" />
    </section>
  );
};

export default Hero;
