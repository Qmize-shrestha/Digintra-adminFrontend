import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.jpg";
import c7 from "../assets/c7.jpg";

import "./Client.css";

export default function Client() {
  useEffect(() => {
    // Hide pagination dots
    const pagination = document.querySelector(".swiper-pagination");
    if (pagination) pagination.style.display = "none";
  }, []);

  const logos = [c1, c2, c3, c4, c5, c6, c7];

  return (
    <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Floating blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-300/40 rounded-full blur-[80px] animate-pulse"></div>

      {/* Heading */}
      <div className="relative text-center mx-auto px-6">
        <h3 className="text-3xl md:text-3xl font-bold text-gray-900 font-[Montserrat]">
          Trusted by <span className="text-blue-600">Leading Businesses</span>
        </h3>
        <div className="w-[200px] h-[4px] bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Swiper Container */}
      <div className="relative mt-14 w-[90%] md:w-[80%] mx-auto p-6 rounded-3xl bg-white/40 backdrop-blur-xl shadow-xl border border-white/40">

        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="logo-card">
                <img src={logo} alt="client logo" className="logo-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
