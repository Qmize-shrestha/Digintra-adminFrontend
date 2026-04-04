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
    <div className="group relative w-[110%] max-w-sm">
  {/* Gradient Border */}
  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-bl from-purple-400 to-green-400  group-hover:opacity-100 transition duration-500">
    <div className="absolute inset-0 blur-xl bg-gradient-to-r from-green-400  to-purple-400 "></div>
  </div>

  {/* Card Content */}
  <div className="
      relative z-10 rounded-2xl bg-white/10 backdrop-blur-xl
      border border-white/20 p-6 text-center shadow-xl
      transition-all duration-500 ease-out
      group-hover:scale-[1.06] group-hover:shadow-2xl group-hover:shadow-purple-500/30
      overflow-hidden
    "
  >
    {/* Shine Effect */}
    <div className="
        absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
        translate-x-[-150%] group-hover:translate-x-[150%]
        transition-all duration-[1200ms] ease-out
      "
    ></div>

    {/* Icon */}
    {Icon && (
      <div className="
          w-14 h-14 flex items-center justify-center rounded-full 
          bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-lg
          mb-4 group-hover:shadow-purple-500/50 transition-all duration-500
        "
      >
        <Icon className="text-3xl" />
      </div>
    )}

    {/* Title */}
    <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow-sm">
      {title}
    </h2>

    {/* Description */}
    <p className="mt-3 text-white/90 leading-relaxed text-[15px] px-3">
      {description}
    </p>

    {/* Button */}
    <button
      onClick={handleButtonClick}
      className="
          mt-6 border border-blue-500 text-blue-700 font-semibold 
          px-6 py-2 rounded-lg
          hover:bg-blue-600 hover:text-white
          transition-all duration-300 shadow-md
        "
    >
      Learn More
    </button>
  </div>
</div>

  );
};

export default Card;
