"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const PHONE = "+912279614596";

export default function HeroCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 6000,
      }),
    ]
  );

  return (
    <section className="relative mt-20">
      {/* Background Slider */}
      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className="flex">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%]"
            >
              <div className="relative h-[60vh] min-h-[420px] md:h-[75vh]">
                <Image
                  src={src}
                  alt="LED Video Wall Rental Thane"
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Fixed SEO Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="max-w-3xl">
            {/* <span className="inline-flex rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
              ⭐ 4.5 Rated LED Display Company
            </span> */}

            <h1 className="mt-5 text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
              LED Video Wall Rental Services in Thane
            </h1>

            <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
              SIDDHI ENTERPRISES provides premium indoor and outdoor
              LED video walls for weddings, exhibitions, corporate
              events, concerts and live events across Thane,
              Mumbai and Navi Mumbai.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a
                href={`tel:${PHONE}`}
                className="px-6 py-3 rounded-lg bg-[#7C3AED] text-white font-semibold text-center"
              >
                Call Now
              </a>

              <a
                href="/contact-us"
                className="px-6 py-3 rounded-lg bg-[#EC4899] text-white font-semibold text-center"
              >
                Get Free Quote
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Indoor LED Walls",
                "Outdoor LED Walls",
                "Wedding Events",
                "Corporate Events",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs md:text-sm bg-white/10 text-white px-3 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}