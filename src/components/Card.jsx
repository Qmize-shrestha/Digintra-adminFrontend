import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, buttonLink, Icon }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonLink) {
      navigate(buttonLink);
    }
  };

  return (
    <div className="group relative h-full w-full max-w-sm">

      {/* Glowing gradient backdrop that appears on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-70" />

      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-b from-white via-emerald-50/80 to-emerald-100/70 p-6 text-center shadow-lg transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-emerald-500/25">

        {/* Shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] transition-all duration-[1200ms] ease-out group-hover:translate-x-[150%]" />

        {/* Decorative corner accent */}
        <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl transition-all duration-500 group-hover:bg-emerald-400/30" />

        <div className="relative z-10 flex h-full flex-col items-center text-center">
          {Icon && (
            <div className="relative mb-5">
              {/* Pulsing ring behind icon */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/40 blur-md scale-100 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/50 group-hover:rotate-6">
                <Icon className="text-3xl" />
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-wide text-gray-900 drop-shadow-sm">
            {title}
          </h2>

          <div className="mt-3 flex-1 px-3">
            <p className="text-[15px] leading-relaxed text-gray-700">
              {description}
            </p>
          </div>

          <button
            onClick={handleButtonClick}
            className="group/btn relative mt-6 inline-flex w-full max-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-[1.04]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative">Learn More</span>
            <ArrowRightIcon className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;