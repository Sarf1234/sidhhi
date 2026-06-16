"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  FileText,
} from "lucide-react";

const PHONE = "+912279614596";
const WA_LINK = "https://wa.me/912279614596";

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => pathname === path;

  const menuItems = [
    { name: "Home", slug: "/" },
    // { name: "About Us", slug: "/about-us" },
    // { name: "Services", slug: "/services" },
    // { name: "Gallery", slug: "/gallery" },
    { name: "Blog", slug: "/blog" },
    // { name: "Contact", slug: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0F172A] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <p>
            Premium LED Video Wall Rental Services in Thane & Mumbai
          </p>

          <a
            href={`tel:${PHONE}`}
            className="font-semibold hover:text-yellow-400 transition"
          >
            Call Now: +91 2279614596
          </a>
        </div>
      </div>

      <header
        className={`fixed top-0 lg:top-[36px] w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-white font-bold text-lg shadow-lg">
              SE
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                SIDDHI ENTERPRISES
              </h2>

              <p className="text-xs text-slate-500">
                LED Video Wall & Event Display Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.slug}>
                <span
                  className={`font-medium transition ${
                    isActive(item.slug)
                      ? "text-[#7C3AED] border-b-2 border-[#EC4899] pb-1"
                      : "text-slate-700 hover:text-[#7C3AED]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-semibold shadow hover:scale-105 transition"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#EC4899] to-[#DB2777] text-white font-semibold shadow hover:scale-105 transition"
            >
              <FileText className="w-4 h-4" />
              Get Quote
            </Link>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="p-2 rounded-lg bg-[#7C3AED] text-white"
            >
              <Phone className="w-5 h-5" />
            </a>

            <Menu
              className="w-7 h-7 text-slate-900 cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[999] animate-slide-in-right">
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-white font-bold">
                    SE
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-900">
                      SIDDHI ENTERPRISES
                    </h2>

                    <p className="text-xs text-slate-500">
                      LED Display Solutions
                    </p>
                  </div>
                </div>

                <X
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              <hr className="my-6" />

              <div className="flex flex-col gap-3 flex-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.slug}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg ${
                      isActive(item.slug)
                        ? "bg-purple-100 text-[#7C3AED] font-semibold"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="border-t pt-5 flex flex-col gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 bg-[#7C3AED] text-white py-3 rounded-lg font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>

                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 bg-[#EC4899] text-white py-3 rounded-lg font-semibold"
                >
                  <FileText className="w-4 h-4" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0%);
            }
          }

          .animate-slide-in-right {
            animation: slide-in-right 0.25s ease-out;
          }
        `}</style>
      </header>
    </>
  );
};

export default Navbar;