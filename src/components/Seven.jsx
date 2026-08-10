import React, { useState, useEffect, useRef } from 'react';
import icons1 from "../assets/001.png";
import icons2 from "../assets/002.png";
import icons3 from "../assets/003.png";
import icons4 from "../assets/004.png";

const Seven = ({ endnumber, endnumber1, endnumber2, endnumber3 }) => {
    const [currentNumber1, setCurrentNumber1] = useState(0);
    const [currentNumber2, setCurrentNumber2] = useState(0);
    const [currentNumber3, setCurrentNumber3] = useState(0);
    const [currentNumber4, setCurrentNumber4] = useState(0);

    const [inView, setInView] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!inView) return;

        // All four counters animate over the same duration, regardless of
        // how big their target number is — so a small target (e.g. 5) and
        // a large target (e.g. 1000) both visibly count up instead of the
        // small one finishing almost instantly.
        const duration = 1600; // ms
        const startTime = performance.now();

        const targets = {
            1: endnumber1 || 0,
            2: endnumber2 || 0,
            3: endnumber3 || 0,
            4: endnumber || 0,
        };
        const setters = {
            1: setCurrentNumber1,
            2: setCurrentNumber2,
            3: setCurrentNumber3,
            4: setCurrentNumber4,
        };

        let rafId;
        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            Object.keys(targets).forEach((key) => {
                setters[key](Math.round(progress * targets[key]));
            });
            if (progress < 1) {
                rafId = requestAnimationFrame(tick);
            }
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [inView, endnumber, endnumber1, endnumber2, endnumber3]);

    const stats = [
        { icon: icons1, value: currentNumber1, label: "Years of Experience" },
        { icon: icons2, value: currentNumber2, label: "Network Operators" },
        { icon: icons3, value: currentNumber3, label: "Direct Connections" },
        { icon: icons4, value: currentNumber4, label: "Customer Satisfaction" },
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/40 py-20 lg:py-24"
        >
            {/* Soft decorative glows to add depth without darkening the section */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-lime-200/30 blur-[110px]" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: "radial-gradient(circle, #16a34a 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative container mx-auto px-4 md:px-10 lg:px-20">

                {/* Header row: heading + subtext on the left, CTA on the right */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
                            Our Impact
                        </span>
                       <h2 className="font-poppins text-3xl md:text-[3rem] font-bold text-slate-900 leading-tight">
  Numbers That Speak for Us
</h2>
                        <p className="mt-3 text-slate-500 text-base md:text-lg max-w-xl">
                            Real results that reflect our commitment, growth, and impact over time.
                        </p>
                    </div>
                   
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-emerald-50/80 p-6 
shadow-[0_8px_30px_-12px_rgba(15,23,42,0.10)] ring-1 ring-emerald-100/70 transition-all duration-300 hover:-translate-y-1.5 hover:
 from-white hover:to-emerald-100/70 hover:shadow-[0_20px_40px_-16px_rgba(16,185,129,0.35)] hover:ring-emerald-200  flex flex-col
  items-center text-center">


                            {/* Accent top bar */}
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400" />

                            {/* Soft glow behind icon on hover */}
                            <div className="pointer-events-none absolute -top-6 -left-6 h-28 w-28 rounded-full bg-emerald-200/0 blur-2xl transition-all duration-500 group-hover:bg-emerald-200/50" />

                            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center mb-8 shadow-sm ring-1 ring-emerald-100 transition-transform duration-300 group-hover:scale-110">
                                <img src={stat.icon} alt={stat.label} className="w-7 h-7 object-contain" />
                            </div>

                            <h1 className="relative text-4xl md:text-5xl font-extrabold text-slate-900">
                                {stat.value}
                                <span className="text-emerald-500">+</span>
                            </h1>
                            <div className="mt-3 mb-2 h-[3px] w-8 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-14" />
                            <h2 className="text-slate-500 font-medium">{stat.label}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Seven;