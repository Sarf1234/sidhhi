"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const PHONE = "+919892638074";
const WHATSAPP = "https://wa.me/919892638074";

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

return ( <section className="relative mt-[72px]">


  {/* Slider */}

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
          <div className="relative h-[80vh] min-h-[600px] md:h-[75vh]">

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

  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

  {/* Content */}

  <div className="absolute inset-0 z-10 flex items-center">
    <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">

      <div className="max-w-[700px]">

        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-white border border-white/20">
          ⭐ Trusted LED Video Wall Rental Company
        </span>

        <h1
          className="
            mt-5
            text-white
            font-extrabold
            leading-tight
            text-[30px]
            sm:text-[42px]
            lg:text-[60px]
          "
        >
          LED Video Wall Rental
          <span className="block text-[#EC4899]">
            Services in Thane
          </span>
        </h1>

        <p
          className="
            mt-4
            text-white/90
            text-[15px]
            sm:text-lg
            leading-relaxed
            max-w-[95%]
            sm:max-w-[650px]
          "
        >
          SIDDHI ENTERPRISES provides premium indoor and outdoor
          LED video walls for weddings, exhibitions, corporate
          events, concerts and live shows across Thane,
          Mumbai and Navi Mumbai.
        </p>

        {/* CTA Buttons */}

        <div className="flex flex-col sm:flex-row gap-3 mt-7">

          <a
            href={`tel:${PHONE}`}
            className="
              w-full sm:w-auto
              px-6 py-3
              rounded-xl
              bg-[#7C3AED]
              text-white
              font-semibold
              text-center
              shadow-lg
              hover:opacity-90
              transition
            "
          >
            Call Now
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto
              px-6 py-3
              rounded-xl
              bg-[#25D366]
              text-white
              font-semibold
              text-center
              shadow-lg
              hover:opacity-90
              transition
            "
          >
            Get Quote on WhatsApp
          </a>

        </div>

        {/* Service Tags */}

        <div className="flex flex-wrap gap-2 mt-6 max-w-[700px]">

          {[
            "Indoor LED Walls",
            "Outdoor LED Walls",
            "Wedding Events",
            "Corporate Events",
          ].map((item) => (
            <span
              key={item}
              className="
                text-xs
                sm:text-sm
                bg-white/10
                backdrop-blur
                text-white
                px-3 py-2
                rounded-full
                border border-white/10
              "
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
