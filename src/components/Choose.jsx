import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import icon1 from "../assets/icons8-arrow-100.png";
import why from "../assets/new166.jpg";
import worldwide from "../assets/worldwide.png";
import pricing from "../assets/pricing.png";
import support from "../assets/support.png";

export default function Choose() {
  return (
    <section className="relative w-full mx-auto h-auto bg-gradient-to-b from-gray-50 to-white py-20">

  {/* Soft glow accents (no SVG) */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/40 blur-2xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/40 blur-2xl rounded-full"></div>

  {/* MAIN CONTENT */}
  <div className="relative max-w-[1140px] w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

    {/* LEFT CONTENT */}
    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">

      <h3 className="text-3xl lg:text-5xl font-extrabold text-gray-800 leading-snug"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Why Choose <span className="text-blue-600">DIGINTRA</span> For Your Venture?
      </h3>

      <p className="text-lg lg:text-xl text-gray-600 max-w-md mx-auto lg:mx-0"
         style={{ fontFamily: "'Poppins', sans-serif" }}>
        DIGINTRA’s platform and APIs provide the smartest way to reach users across
        1000+ telecom networks, globally and reliably.
      </p>

      <a href="https://sms-login.digintra.com/User/SignUp" className="inline-block">
        <button
          className="mt-4 bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold py-3 px-8 rounded-full 
                     shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex items-center gap-3 mx-auto lg:mx-0">
          Register Now
          <img src={icon1} alt="Arrow icon" className="h-5 w-5" />
        </button>
      </a>
    </div>

    {/* RIGHT SLIDER */}
    <div className="lg:w-[45%] w-full">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={false}
        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all">
            <img src={why} alt="Global Reach" className="mx-auto mb-4 rounded-lg shadow-md" />
            <h2 className="text-center text-xl lg:text-2xl font-semibold text-blue-600">
              Global Reach & Presence
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all">
            <img src={worldwide} alt="Worldwide Delivery" className="mx-auto mb-4 rounded-lg shadow-md" />
            <h2 className="text-center text-xl lg:text-2xl font-semibold text-blue-600">
              Worldwide Delivery
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all">
            <img src={pricing} alt="Pricing" className="mx-auto mb-4 rounded-lg shadow-md" />
            <h2 className="text-center text-xl lg:text-2xl font-semibold text-blue-600">
              Fair Pricing Practices
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all">
            <img src={support} alt="Support" className="mx-auto mb-4 rounded-lg shadow-md" />
            <h2 className="text-center text-xl lg:text-2xl font-semibold text-blue-600">
              24/7 World-Class Support
            </h2>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>

  </div>
</section>

  );
}
