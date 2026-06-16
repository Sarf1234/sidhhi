"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
const faqs = [
{
question: "Do you provide LED video wall rental services in Thane?",
answer:
"Yes, SIDDHI ENTERPRISES provides LED video wall rental services across Thane for weddings, corporate events, exhibitions, concerts, product launches, and live events.",
},
{
question: "What types of LED screens do you offer?",
answer:
"We offer indoor LED walls, outdoor LED walls, stage backdrop LED displays, wedding LED screens, exhibition LED panels, and corporate event display solutions.",
},
{
question: "Do you provide LED walls for weddings?",
answer:
"Yes, we provide high-resolution LED video walls for weddings, receptions, engagement ceremonies, sangeet events, and destination weddings.",
},
{
question: "Can I rent an LED wall for a corporate event?",
answer:
"Absolutely. We provide LED display solutions for conferences, seminars, product launches, annual meetings, and corporate events across Thane and Mumbai.",
},
{
question: "Do you provide installation and technical support?",
answer:
"Yes, our team handles transportation, installation, operation, and complete technical support throughout your event.",
},
{
question: "What is the cost of LED wall rental in Thane?",
answer:
"The rental cost depends on screen size, event duration, indoor or outdoor usage, and technical requirements. Contact us for a customized quotation.",
},
{
question: "How early should I book an LED video wall?",
answer:
"We recommend booking at least 7 to 15 days before your event to ensure availability and smooth execution.",
},
{
question: "Which areas do you serve?",
answer:
"We serve Thane, Mumbai, Navi Mumbai, Kalyan, Dombivli, Bhiwandi, and nearby locations across Maharashtra.",
},
];

const [openIndex, setOpenIndex] = useState(0);

return ( <section className="py-20 bg-slate-50"> <div className="max-w-4xl mx-auto px-5 lg:px-8"> <div className="text-center mb-12"> <span className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
Frequently Asked Questions </span>


      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
        LED Video Wall Rental
        <span className="block bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
          FAQs
        </span>
      </h2>

      <p className="mt-4 text-slate-600">
        Find answers to common questions about LED wall rentals,
        event displays, installation, pricing, and support services.
      </p>
    </div>

    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(isOpen ? -1 : index)
              }
              className="w-full flex items-center justify-between text-left p-5 md:p-6"
            >
              <span className="font-semibold text-slate-900 text-base md:text-lg">
                {faq.question}
              </span>

              <ChevronDown
                className={`w-5 h-5 text-[#7C3AED] transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 md:px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
}
