import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// 1. Added Pagination back to import
import { Autoplay, Pagination } from 'swiper/modules'; 
import { Globe2, TrendingUp, Radio, Plug, BarChart3, Headset } from "lucide-react";

import icon1 from "../assets/icons8-arrow-100.png";
import why from "../assets/new166.jpg";
import worldwide from "../assets/worldwide.png";
import pricing from "../assets/pricing.png";
import support from "../assets/support.png";

export default function Choose() {
  const whyDigintra = [
    {
      id: 1,
      title: "Global Coverage in 200+ Countries",
      icon: Globe2,
    },
    {
      id: 2,
      title: "High Delivery Rate",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "Direct Carrier Connectivity",
      icon: Radio,
    },
    {
      id: 4,
      title: "REST API & SMPP Integration",
      icon: Plug,
    },
    {
      id: 5,
      title: "Real-Time Analytics",
      icon: BarChart3,
    },
    {
      id: 6,
      title: "24×7 Technical Support",
      icon: Headset,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white px-4 py-15 sm:px-6 lg:px-8 lg:py-28">

  {/* Ambient glows */}
  <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[380px] w-[90%] -translate-x-1/2 rounded-full bg-emerald-200/25 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-green-200/30 blur-[120px]" />
  <div className="pointer-events-none absolute top-1/3 left-0 -z-10 h-72 w-72 rounded-full bg-teal-100/40 blur-[110px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
        Why Choose Us
      </span>

      <h2
        className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      >
        Why <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">DIGINTRA</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
        DIGINTRA helps businesses connect with customers through Global Bulk SMS, Promotional SMS,
        Transactional SMS, OTP SMS, Voice Broadcasting, and WhatsApp Business API. With coverage in
        200+ countries, reliable delivery, enterprise APIs, and 24×7 support, we provide a secure and
        scalable messaging platform that helps businesses communicate faster and grow globally.
      </p>

      <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
    </div>

    {/* 6-Card Grid */}
    <div className="relative mt-14 md:mt-16">
      <div className="absolute left-1/2 top-10 -z-10 h-[260px] w-[85%] -translate-x-1/2 rounded-full bg-emerald-300/15 blur-[110px]" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {whyDigintra.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/15"
            >
              {/* Corner glow */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:bg-emerald-200/50" />

              {/* Ghost index number */}
              <span className="pointer-events-none absolute -bottom-3 right-3 select-none text-6xl font-black text-emerald-50 transition-colors duration-300 group-hover:text-emerald-100">
                0{index + 1}
              </span>

              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="relative text-base font-bold leading-snug text-slate-900 sm:text-lg">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>

  </div>
</section>
  );
}