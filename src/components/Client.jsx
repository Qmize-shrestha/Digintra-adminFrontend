import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Globe2, MessageSquareText, ShieldCheck, Server, Code2 } from "lucide-react";

import "swiper/css";

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.jpg";
import c7 from "../assets/c7.jpg";

export default function Client() {
  const logos = [
    { id: 1, img: c1, name: "Client 1" },
    { id: 2, img: c2, name: "Client 2" },
    { id: 3, img: c3, name: "Client 3" },
    { id: 4, img: c4, name: "Client 4" },
    { id: 5, img: c5, name: "Client 5" },
    { id: 6, img: c6, name: "Client 6" },
    { id: 7, img: c7, name: "Client 7" },
  ];

  return (
// Add this import at the top of the file with your other icon imports:
// import { Globe2, MessageSquareText, ShieldCheck, Server, Code2 } from "lucide-react";

<section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-50 pb-32">
  {/* Background Decorative Blur Orbs */}
  <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/15 rounded-full blur-3xl pointer-events-none" />

  <div className="relative max-w-9xl mx-auto px-6">
    {/* Header Section */}
    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
        50+ Businesses & Counting
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight pt-2">
        Trusted by <span className="text-emerald-600">Leading Businesses</span>
      </h2>

      <p className="text-slate-500 text-base md:text-lg pt-1">
        From startups to enterprises, brands rely on DIGINTRA to reach their customers.
      </p>

      {/* Horizontal Green Line */}
      <div className="w-[200px] h-[4px] bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mt-4 rounded-full" />
    </div>

    {/* Glassmorphic Carousel Card */}
    <div
      className="w-max-[1440px] w-full overflow-hidden relative z-10"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={2}
        spaceBetween={24}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 24 },
          768: { slidesPerView: 4, spaceBetween: 32 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="w-full flex items-center ease-linear"
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id} className="flex items-center justify-center py-4">
            <div className="group relative w-full h-32 md:h-36 flex items-center justify-center p-6 rounded-2xl bg-white/80 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white cursor-pointer">
              <img
                src={logo.img}
                alt={logo.name}
                className="h-12 md:h-20 w-auto max-w-[85%] flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Trust / Reach Stats Strip */}
  
  </div>
</section>
  );
}