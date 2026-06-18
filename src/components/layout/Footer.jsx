import {
PhoneCall,
MapPin,
MessageCircle,
Mail,
} from "lucide-react";

export default function Footer() {
return ( <footer className="bg-slate-950 text-white"> <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">


    <div className="grid lg:grid-cols-3 items-center gap-12">

      {/* Company */}

      <div className="text-center lg:text-left">

        <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] flex items-center justify-center font-bold text-xl">
            SE
          </div>

          <div>
            <h3 className="font-bold text-2xl">
              SIDDHI ENTERPRISES
            </h3>

            <p className="text-sm text-slate-400">
              LED Video Wall Rental Services
            </p>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
          SIDDHI ENTERPRISES provides premium LED video wall rental
          solutions for weddings, exhibitions, corporate events,
          concerts, product launches and live shows across
          Thane, Mumbai and Navi Mumbai.
        </p>

      </div>

      {/* Services */}

      <div className="text-center">

        <h4 className="font-semibold text-xl mb-5">
          Our Services
        </h4>

        <div className="space-y-3 text-slate-400">

          <p>LED Video Wall Rental</p>

          <p>Indoor LED Walls</p>

          <p>Outdoor LED Walls</p>

          <p>Wedding LED Screens</p>

          <p>Corporate Event Displays</p>

          <p>Exhibition LED Displays</p>

        </div>

      </div>

      {/* Contact */}

      <div className="text-center lg:text-left">

        <h4 className="font-semibold text-xl mb-5">
          Contact Information
        </h4>

        <div className="space-y-5">

          <a
            href="tel:+919892638074"
            className="flex items-center justify-center lg:justify-start gap-3 text-slate-400 hover:text-white transition"
          >
            <PhoneCall size={18} />
            <span>+91 9892638074</span>
          </a>

          <a
            href="https://wa.me/919892638074"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center lg:justify-start gap-3 text-slate-400 hover:text-white transition"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Support</span>
          </a>

          <div className="flex items-start justify-center lg:justify-start gap-3 text-slate-400">
            <MapPin
              size={18}
              className="mt-1 shrink-0"
            />

            <span>
              Mahendra V Badekar
              <br />
              206, 2nd Floor
              <br />
              Lodha Paradise
              <br />
              Fortuna CHS
              <br />
              Majiwada, Thane
              <br />
              Maharashtra - 400601
            </span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-400">
            <Mail size={18} />
            <span>
              info@siddhienterprises.com
            </span>
          </div>

        </div>

      </div>

    </div>

    {/* Service Area */}

    <div className="mt-14 pt-10 border-t border-slate-800 text-center">

      <h4 className="font-semibold text-lg mb-4">
        Service Areas
      </h4>

      <p className="text-slate-400 max-w-4xl mx-auto leading-relaxed">
        LED Video Wall Rental Services available across
        Thane, Mumbai, Navi Mumbai, Kalyan, Dombivli,
        Bhiwandi, Mira Road, Vasai, Virar and nearby
        Maharashtra locations.
      </p>

    </div>

  </div>

  {/* Bottom */}

  <div className="border-t border-slate-800">

    <div className="max-w-7xl mx-auto px-5 py-6">

      <p className="text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SIDDHI ENTERPRISES.
        All Rights Reserved.
      </p>

    </div>

  </div>
</footer>


);
}
