import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import jason from "../assets/images/jason.png";

const slides = [
  {
    quote:
      "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    image: jason,
  },
  {
    quote:
      "Setapp keeps me in flow. Everything I need is right there, so I can focus on creating instead of juggling tools.",
    author: "Taylor M.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    quote:
      "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    quote:
      "Setapp keeps me in flow. Everything I need is right there, so I can focus on creating instead of juggling tools.",
    author: "Taylor M.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
  },
];

const TestimonialCarousel = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, speed: 6 },
    [autoplayRef.current]
  );

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
    <section className="relative overflow-hidden bg-dark">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="relative bg-[#7A5B7C] text-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Navigation arrows */}
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={scrollPrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={scrollNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="embla relative"
            onMouseEnter={() => autoplayRef.current.stop()}
            onMouseLeave={() => autoplayRef.current.reset()}
          >
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {slides.map((slide, index) => (
                  <div
                    className="embla__slide min-w-full"
                    key={`${slide.author}-${index}`}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12 px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12 min-h-[360px] md:min-h-[420px]">
                      <div className="relative w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                          {slide.quote}
                        </p>
                        <span className="text-sm md:text-base text-white/80">
                          {slide.author}
                        </span>

                        <button
                          type="button"
                          aria-label="Play testimonial video"
                          className="mt-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#7A5B7C] flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                        >
                          <Play className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      </div>

                      <div className="w-full md:w-1/2 flex justify-end">
                        <img
                          src={slide.image}
                          alt={slide.author}
                          className="max-h-[320px] md:max-h-[380px] w-full object-contain drop-shadow-xl"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots on white section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 -mt-2 flex justify-center">
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
          {scrollSnaps.map((_, index) => (
            <button
              key={`dot-${index}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? "bg-[#1D1D22]"
                  : "bg-[#7A5B7C]/35 hover:bg-[#7A5B7C]/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
