import { Star } from "lucide-react";

export default function Testimonials() {
const testimonials = [
{
name: "Rahul Sharma",
role: "Corporate Event Organizer",
message:
"SIDDHI ENTERPRISES provided an excellent LED video wall setup for our corporate conference in Thane. The display quality and technical support were outstanding.",
},
{
name: "Priya Mehta",
role: "Wedding Planner",
message:
"The LED screen setup completely transformed our wedding stage. Installation was on time and the visuals looked amazing throughout the event.",
},
{
name: "Amit Verma",
role: "Exhibition Organizer",
message:
"Professional team, high-quality LED panels and smooth execution. Highly recommended for exhibitions and trade shows.",
},
{
name: "Neha Patel",
role: "Event Coordinator",
message:
"Very responsive team and excellent service. The LED wall worked perfectly during our live event without any issues.",
},
{
name: "Karan Shah",
role: "Corporate Client",
message:
"Affordable pricing and premium quality displays. One of the best LED wall rental companies in Thane.",
},
{
name: "Sneha Gupta",
role: "Wedding Event Client",
message:
"Crystal-clear visuals, professional technicians and smooth setup. Our guests loved the LED display experience.",
},
];

return ( <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-5 lg:px-8">


    {/* Header */}

    <div className="text-center max-w-3xl mx-auto">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
        <Star size={16} fill="currentColor" />
        Customer Reviews
      </div>

      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
        Trusted by Event Organizers
        <span className="block bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
          Across Thane & Mumbai
        </span>
      </h2>

      <p className="mt-5 text-slate-600">
        We take pride in delivering premium LED video wall solutions
        for weddings, exhibitions, corporate events and live shows.
      </p>
    </div>

    {/* Rating Cards */}

    {/* <div className="grid md:grid-cols-3 gap-5 mt-12">

      <div className="rounded-2xl border p-6 text-center bg-white shadow-sm">
        <div className="text-4xl font-bold text-[#7C3AED]">
          4.5★
        </div>
        <p className="text-slate-500 mt-2">
          Google Rating
        </p>
      </div>

      <div className="rounded-2xl border p-6 text-center bg-white shadow-sm">
        <div className="text-4xl font-bold text-[#7C3AED]">
          100+
        </div>
        <p className="text-slate-500 mt-2">
          Events Completed
        </p>
      </div>

      <div className="rounded-2xl border p-6 text-center bg-white shadow-sm">
        <div className="text-4xl font-bold text-[#7C3AED]">
          24/7
        </div>
        <p className="text-slate-500 mt-2">
          Technical Support
        </p>
      </div>

    </div> */}

    {/* Reviews */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill="currentColor"
                className="text-yellow-500"
              />
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed">
            "{item.message}"
          </p>

          <div className="mt-5">
            <h3 className="font-semibold text-slate-900">
              {item.name}
            </h3>

            <p className="text-sm text-slate-500">
              {item.role}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}

    {/* <div className="mt-14 text-center">
      <a
        href="tel:+919892638074"
        className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#7C3AED] text-white font-semibold hover:opacity-90"
      >
        Get Your Event Quote Today
      </a>
    </div> */}
  </div>
</section>


);
}
