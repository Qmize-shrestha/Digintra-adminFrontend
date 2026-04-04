import React, { useState, useEffect, useRef } from 'react';
import icons1 from "../assets/001.png";
import icons2 from "../assets/002.png";
import icons3 from "../assets/003.png";
import icons4 from "../assets/004.png";

const Seven = ({ endnumber, endnumber1, endnumber2, endnumber3 }) => {
    const [currentNumber1, setCurrentNumber1] = useState(0);
    const [currentNumber2, setCurrentNumber2] = useState(500);
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
        if (inView) {
            const interval1 = setInterval(() => {
                setCurrentNumber1((prevNumber) => {
                    if (prevNumber < endnumber1) {
                        return prevNumber + 1;
                    }
                    clearInterval(interval1);
                    return prevNumber;
                });
            }, 120);

            const interval2 = setInterval(() => {
                setCurrentNumber2((prevNumber) => {
                    if (prevNumber < endnumber2) {
                        return prevNumber + 1;
                    }
                    clearInterval(interval2);
                    return prevNumber;
                });
            }, 3);

            const interval3 = setInterval(() => {
                setCurrentNumber3((prevNumber) => {
                    if (prevNumber < endnumber3) {
                        return prevNumber + 1;
                    }
                    clearInterval(interval3);
                    return prevNumber;
                });
            }, 3);

            const interval4 = setInterval(() => {
                setCurrentNumber4((prevNumber) => {
                    if (prevNumber < endnumber) {
                        return prevNumber + 1;
                    }
                    clearInterval(interval4);
                    return prevNumber;
                });
            }, 3);

            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
                clearInterval(interval4);
            };
        }
    }, [inView, endnumber, endnumber1, endnumber2, endnumber3]);

    return (
      <div
  ref={containerRef}
  className="relative w-full py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden"
>

  {/* Decorative Blobs */}
  <svg className="absolute top-0 left-0 opacity-20 w-[300px]" viewBox="0 0 200 200">
    <path
      fill="#22c55e"
      d="M45.4,-79.1C59.8,-73.9,72.1,-60.2,79.6,-44.3C87.1,-28.4,89.8,-10.2,87.8,7.5C85.9,25.2,79.3,42.3,67.7,57.2C56.2,72.2,39.7,85,20.1,92.4C0.5,99.8,-22.1,101.8,-40.4,94.5C-58.8,87.3,-73,70.8,-81.9,51.9C-90.8,32.9,-94.4,11.6,-92.8,-8.7C-91.2,-29,-84.4,-48.2,-71.2,-59.2C-58,-70.2,-38.5,-73,-19.7,-78.8C-0.8,-84.6,17.4,-93.3,33.5,-90.5C49.6,-87.7,56.1,-73,45.4,-79.1Z"
      transform="translate(100 100)"
    />
  </svg>

  {/* Glow Spots */}
  <div className="absolute top-20 right-20 w-40 h-40 bg-green-300/40 rounded-full blur-2xl animate-pulse"></div>
  <div className="absolute bottom-20 left-10 w-56 h-56 bg-emerald-400/40 rounded-full blur-[70px] animate-pulse"></div>

  {/* MAIN CONTENT */}
  <div className="relative container mx-auto px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* CARD 1 */}
    <div className="relative group">
      <div className="glass-card bg-gradient-to-br from-green-600 to-green-800 shadow-2xl p-6 rounded-2xl border border-white/20 backdrop-blur-xl text-white flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-green-500/40">

        <img src={icons1} alt="Experience" className="w-16 h-16 mb-4 bg-white rounded-xl p-2" />

        <h1 className="text-4xl font-extrabold">{currentNumber1}+</h1>
        <h2 className="text-lg mt-1 font-medium">Years of Experience</h2>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="relative group">
      <div className="glass-card bg-white shadow-lg p-6 rounded-2xl border border-gray-200 backdrop-blur-sm flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-xl">

        <img src={icons2} alt="Network Operators" className="w-16 h-16 mb-4" />

        <h1 className="text-4xl font-extrabold text-gray-900">{currentNumber2}+</h1>
        <h2 className="text-lg mt-1 font-medium text-gray-700">Network Operators</h2>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="relative group">
      <div className="glass-card bg-gradient-to-br from-emerald-700 to-green-900 text-white shadow-2xl p-6 rounded-2xl border border-white/20 backdrop-blur-xl flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-green-500/40">

        <img src={icons3} alt="Direct Connection" className="w-16 h-16 mb-4 bg-white rounded-xl p-2" />

        <h1 className="text-4xl font-extrabold">{currentNumber3}+</h1>
        <h2 className="text-lg mt-1 font-medium">Direct Connections</h2>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="relative group">
      <div className="glass-card bg-white p-6 rounded-2xl border border-gray-200 backdrop-blur-sm shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-xl">

        <img src={icons4} alt="Customer Satisfaction" className="w-16 h-16 mb-4" />

        <h1 className="text-4xl font-extrabold text-gray-900">{currentNumber4}+</h1>
        <h2 className="text-lg mt-1 font-medium text-gray-700">Customer Satisfaction</h2>
      </div>
    </div>

  </div>

</div>

    );
};

export default Seven;
