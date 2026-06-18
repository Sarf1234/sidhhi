import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+919892638074";

export default function Hero() {
return ( <section className="relative overflow-hidden bg-white">
{/* Background Effects */} <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-pink-50" />


  <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-24 pb-14">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div>

        {/* <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
          ⭐ 4.5 Rated LED Display Company
        </span> */}

        <h1 className="mt-5 text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          LED Video Wall Rental
          <span className="block bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
            Services in Thane
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          SIDDHI ENTERPRISES provides premium indoor and outdoor LED video
          wall rental solutions for weddings, exhibitions, corporate
          events, concerts, trade shows and live events across Thane,
          Mumbai and Navi Mumbai.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#7C3AED] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href={`https://wa.me/919892638074`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[#7C3AED] text-[#7C3AED] font-semibold hover:bg-purple-50 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

        </div> */}

        {/* Trust Points */}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">

          <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
            <p className="font-bold text-xl text-[#7C3AED]">4.5★</p>
            <p className="text-sm text-gray-500">Google Rating</p>
          </div>

          <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
            <p className="font-bold text-xl text-[#7C3AED]">100+</p>
            <p className="text-sm text-gray-500">Events</p>
          </div>

          <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
            <p className="font-bold text-xl text-[#7C3AED]">24/7</p>
            <p className="text-sm text-gray-500">Support</p>
          </div>

          <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
            <p className="font-bold text-xl text-[#7C3AED]">HD</p>
            <p className="text-sm text-gray-500">LED Panels</p>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}

      <div className="relative">

        <div className="absolute -top-5 -left-5 h-32 w-32 rounded-full bg-purple-200 blur-3xl opacity-50" />

        <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-pink-200 blur-3xl opacity-50" />

        <div className="relative overflow-hidden rounded-3xl shadow-2xl border bg-white">

          <Image
            src="https://res.cloudinary.com/dnq42wt3a/image/upload/v1781585471/posts/c1xojwdl7jktmv8prohk.jpg"
            alt="LED Video Wall Rental Thane"
            width={800}
            height={700}
            priority
            className="w-full h-auto object-contain"
          />

        </div>

      </div>
    </div>

    {/* Services Strip */}

    <div className="grid md:grid-cols-4 gap-4 mt-14">

      {[
        "Indoor LED Walls",
        "Outdoor LED Walls",
        "Wedding LED Screens",
        "Corporate Event Displays",
      ].map((item) => (
        <div
          key={item}
          className="bg-white border rounded-xl p-5 text-center shadow-sm hover:shadow-md transition"
        >
          <p className="font-semibold text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
