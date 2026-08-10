import React, { useState, useEffect, useRef } from 'react';

import icons1 from "../assets/te4.png";
import icons2 from "../assets/TE3.png";
import icons3 from "../assets/TE1.png";
import icons4 from "../assets/testi.png";

export default function Testimonials() {
  const testimonials = [
    {
      img: icons1,
      name: "DigiEarn-YT",
      role: "Youtuber",
      text: "I've been using DIGINTRA for 6 months for bulk messages via API. Exceptional service, fast support and a responsive team. Thank you DIGINTRA!"
    },
    {
      img: icons2,
      name: "DigiEarn-YT",
      role: "Youtuber",
      text: "Amazing experience with DIGINTRA. Their support team replies instantly and understands technical requirements deeply. Highly recommended!"
    },
    {
      img: icons3,
      name: "Mr. Firdaus Alamshah",
      role: "Marketing Head",
      text: "DIGINTRA® boosted our business with WhatsApp marketing & SEO. Our rankings improved and inquiries increased. Thank you DIGINTRA!"
    },
   
  ];

  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const ROW_HEIGHT = 130;
  const CURVE_AMPLITUDE = 70; // how far the curve bulges to the right at its peak
  const total = testimonials.length;
  const middleSlot = Math.floor((total - 1) / 2); // the fixed "center" slot on the curve

  // x-offset for a given slot position (0..total-1) along a single smooth arc
  const xOffset = (slot) => {
    if (total <= 1) return 0;
    const t = slot / (total - 1); // 0 -> 1
    return CURVE_AMPLITUDE * Math.sin(t * Math.PI);
  };

  // rotate so the active item's slot is always the middleSlot,
  // and everyone else shifts around it circularly
  const getSlot = (i) => {
    return (i - active + middleSlot + total) % total;
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleSelect = (i) => {
    setActive(i);
    startTimer();
  };

  const current = testimonials[active];
  const pathHeight = total * ROW_HEIGHT;

  // static curve path (drawn once, based on slot positions, not per-item)
  const points = Array.from({ length: total }, (_, slot) => ({
    x: xOffset(slot) + 32,
    y: slot * ROW_HEIGHT + 32
  }));
  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    pathD += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  return (
    <section className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: rotating curved avatar carousel */}
          <div>
            <h3
              className="text-3xl md:text-[2.75rem] font-semibold text-slate-900 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Customer <span className="text-emerald-600">Reviews</span>
            </h3>
            <div className="w-16 h-1 bg-emerald-600 mt-4 mb-14 rounded-full" />

            <div className="relative" style={{ height: `${pathHeight}px` }}>
              {/* single smooth curved connecting path (fixed, doesn't rotate) */}
              <svg
                className="absolute left-0 top-0 w-40"
                height={pathHeight}
                viewBox={`0 0 160 ${pathHeight}`}
                fill="none"
              >
                <path
                  d={pathD}
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
              </svg>

              {testimonials.map((t, i) => {
                const isActive = i === active;
                const slot = getSlot(i);
                const x = xOffset(slot);
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`absolute left-0 flex items-center gap-4 text-left transition-all duration-700 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-60 hover:opacity-90 z-0"
                    }`}
                    style={{
                      top: `${slot * ROW_HEIGHT}px`,
                      transform: `translateX(${x}px)`
                    }}
                  >
                    <div
                      className={`relative w-16 h-16 rounded-full overflow-hidden ring-4 transition-all duration-700 flex-shrink-0 ${
                        isActive
                          ? "ring-emerald-500 scale-110 shadow-[0_10px_25px_-8px_rgba(16,185,129,0.5)]"
                          : "ring-transparent scale-100"
                      }`}
                    >
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover bg-slate-100 grayscale"
                      />
                    </div>
                    <div>
                      <h4
                        className={`text-base font-semibold whitespace-nowrap transition-colors duration-700 ${
                          isActive ? "text-slate-900" : "text-slate-500"
                        }`}
                        style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
                      >
                        {t.name}
                      </h4>
                      <span className="text-xs font-medium text-emerald-500 block mt-0.5 whitespace-nowrap">
                        {t.role}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: animated quote */}
          <div className="relative min-h-[280px]">
            <span
              className="absolute -top-6 -left-2 text-8xl text-emerald-100 select-none pointer-events-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              “
            </span>

            <div key={active} className="relative animate-fadeSlide">
              <p
                className="text-2xl md:text-[1.75rem] italic text-slate-800 leading-relaxed"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {current.text}
              </p>

              <div className="mt-8">
                <h4
                  className="text-lg font-bold text-slate-900"
                  style={{ fontFamily: "'Familjen Grotesk', sans-serif" }}
                >
                  {current.name}
                </h4>
                <span className="text-emerald-600 text-sm font-medium">
                  {current.role}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}