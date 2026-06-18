import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
metadataBase: new URL("https://siddhienterprises.in"),

title: {
default:
"SIDDHI ENTERPRISES | LED Video Wall Rental Services in Thane",
template: "%s | SIDDHI ENTERPRISES",
},

description:
"SIDDHI ENTERPRISES provides premium LED Video Wall Rental services in Thane, Mumbai and Navi Mumbai. Indoor & Outdoor LED Walls, Wedding LED Screens, Corporate Event Displays, Exhibition LED Displays and Event Solutions.",

keywords: [
"LED Video Wall Rental Thane",
"LED Wall on Rent Thane",
"LED Screen Rental Thane",
"LED Display Services Thane",
"Indoor LED Wall Rental",
"Outdoor LED Wall Rental",
"Wedding LED Screen Rental",
"Corporate Event LED Display",
"Exhibition LED Display",
"Event LED Screen Rental",
"LED Video Wall Mumbai",
"LED Wall Rental Navi Mumbai",
"LED Screen for Events",
"Stage LED Wall",
"Concert LED Screen Rental",
],

alternates: {
canonical: "https://siddhienterprises.in",
},

openGraph: {
title:
"LED Video Wall Rental Services in Thane | SIDDHI ENTERPRISES",

description:
  "Premium LED Video Wall Rental services for weddings, exhibitions, corporate events, concerts and live shows across Thane, Mumbai and Navi Mumbai.",

url: "https://siddhienterprises.in",

siteName: "SIDDHI ENTERPRISES",

type: "website",

locale: "en_IN",

images: [
  {
    url: "https://res.cloudinary.com/dnq42wt3a/image/upload/v1781585364/posts/zsoaueillwjmwxrmvoer.jpg",
    width: 1200,
    height: 630,
    alt: "SIDDHI ENTERPRISES LED Video Wall Rental Services",
  },
],


},

twitter: {
card: "summary_large_image",


title:
  "LED Video Wall Rental Services in Thane | SIDDHI ENTERPRISES",

description:
  "Indoor & Outdoor LED Walls for Weddings, Corporate Events, Exhibitions and Live Shows.",

images: [
  "https://res.cloudinary.com/YOUR_CLOUD/image/upload/og-image.jpg",
],


},

icons: {
icon: "/favicon.ico",
shortcut: "/favicon.ico",
apple: "/apple-touch-icon.png",
},

manifest: "/manifest.json",

robots: {
index: true,
follow: true,
googleBot: {
index: true,
follow: true,
"max-image-preview": "large",
"max-snippet": -1,
"max-video-preview": -1,
},
},
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "SIDDHI ENTERPRISES",
      image: "https://yourdomain.com/logo.png",
      telephone: "+91 9892638074",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "206, 2nd Floor, Lodha Paradise, Fortuna CHS, Majiwada",
        addressLocality: "Thane",
        addressRegion: "Maharashtra",
        postalCode: "400601",
        addressCountry: "IN",
      },
      areaServed: [
        "Thane",
        "Mumbai",
        "Navi Mumbai",
        "Kalyan",
        "Dombivli",
      ],
      priceRange: "₹₹",
    }),
  }}
/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
