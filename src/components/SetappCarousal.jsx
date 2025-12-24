import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const slides = [
  {
    quote:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    platform: "twitter",
    bg: "#63689A",
  },
  {
    quote:
      "My favorites from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    platform: "instagram",
    bg: "#CDA57E",
  },
  {
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    platform: "facebook",
    bg: "#704769",
  },
  {
    quote:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    platform: "twitter",
    bg: "#63689A",
  },
  {
    quote:
      "My favorites from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    platform: "instagram",
    bg: "#CDA57E",
  },
  {
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    platform: "facebook",
    bg: "#704769",
  },
];

const platformIconMap = {
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

const socialIcons = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaYoutube, label: "YouTube" },
];

// Brand background colors for platform badges (card footer)
const brandBg = {
  twitter: "#1DA1F2",
  instagram: "#E1306C",
  facebook: "#1877F2",
  youtube: "#FF0000",
};

// Brand colors for header icon glyphs
const headerIconColors = {
  Facebook: "#1877F2",
  Twitter: "#1DA1F2",
  Instagram: "#E1306C",
  YouTube: "#FF0000",
};

const SetappCarousal = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="bg-white text-[#1D1D22] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-0">
            <h2 className="text-3xl font-semibold tracking-tight">
              Setapp in your words.
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-end gap-3">
              <p className="text-base leading-relaxed text-[#26262B]">
                What you say about how Setapp powers you up.
              </p>
              <div className="flex items-center gap-2">
                {socialIcons.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ECECEC]"
                  >
                    <Icon
                      className="h-4 w-4"
                      style={{ color: headerIconColors[label] }}
                    />
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={scrollPrev}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-[#D9D9D9] bg-[#ECECEC] hover:bg-[#E5E5E5] transition-colors"
              >
                <ChevronLeft className="h-4 w-4 text-[#4A4A4A]" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={scrollNext}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-[#D9D9D9] bg-[#ECECEC] hover:bg-[#E5E5E5] transition-colors"
              >
                <ChevronRight className="h-4 w-4 text-[#4A4A4A]" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="embla" aria-roledescription="carousel">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                {slides.map((slide, index) => {
                  const PlatformIcon = platformIconMap[slide.platform];

                  return (
                    <div
                      className="embla__slide flex-[0_0_88%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_32%]"
                      key={`${slide.author}-${index}`}
                    >
                      <article className="h-full rounded-xl overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
                        {/* Colored quote area */}
                        <div
                          className="p-6 md:p-7 text-white min-h-[220px] md:min-h-[240px]"
                          style={{ backgroundColor: slide.bg }}
                        >
                          <p className="text-base md:text-lg leading-relaxed">
                            {slide.quote}
                          </p>
                        </div>

                        {/* White footer area with author + icon */}
                        <div className="bg-white text-[#1D1D22] px-6 md:px-7 py-4 flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm md:text-base font-semibold">
                              {slide.author}
                            </div>
                            <div className="text-xs md:text-sm text-[#6B6B6B]">
                              {slide.handle}
                            </div>
                          </div>

                          {PlatformIcon ? (
                            <span
                              className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                              style={{
                                backgroundColor:
                                  brandBg[slide.platform] || "#EFEFEF",
                              }}
                            >
                              <PlatformIcon className="h-4 w-4" />
                            </span>
                          ) : null}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex items-center justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={`dot-${index}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? "bg-[#1D1D22]"
                    : "bg-[#D9D9D9] hover:bg-[#B9B9B9]"
                }`}
              />
            ))}
          </div>

          {/* Chevron buttons moved to header row */}
        </div>
      </div>

      {/* Horizontal separator */}
      <div className="h-[2px] w-full bg-[#E5E5E5] mt-10" />
    </section>
  );
};

export default SetappCarousal;
